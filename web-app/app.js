(function () {
  const data = window.SUMMIT_DATA;
  const sessions = data.sessions || [];
  const sessionById = Object.fromEntries(sessions.map((session) => [session.id, session]));
  const fallbackGroups = {
    security: 'DevSecOps／AI 資安／供應鏈安全',
    'ai-coding': 'AI Coding／Agentic SDLC／SDD／AI Testing',
    platform: 'Platform／SRE／Observability／DevEx',
    culture: 'Keynote／文化／組織／低題目相關',
  };
  const groupLabels = Object.fromEntries(
    Object.entries(data.groups || fallbackGroups).map(([key, value]) => [
      key,
      typeof value === 'string' ? value : value.name || value.short || key,
    ]),
  );

  const $ = (selector) => document.querySelector(selector);
  const createElement = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  };
  const escapeHtml = (value = '') => String(value).replace(/[&<>"]/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
  }[char]));
  const selectedPlanKey = 'dodt2026:selected-plan';
  const teamPlansKey = 'dodt2026:team-plans';
  let selectedSessionIds = new Set(JSON.parse(localStorage.getItem(selectedPlanKey) || '[]'));
  let teamPlans = JSON.parse(localStorage.getItem(teamPlansKey) || '[]');
  const timeKey = (session) => `${session.date || ''} ${session.start || ''}`;
  const parseSpeaker = (speaker = '') => {
    const [name = '', company = ''] = String(speaker).split(/[｜|]/).map((part) => part.trim());
    return { name: name || '未標示', company: company || '未標示' };
  };


  function init() {
    renderMeta();
    renderScoreLegend();
    renderFilterOptions();
    renderRecommendedPath();
    renderOutcomes();
    bindEvents();
    renderSessions();
    renderPlanner();
    renderTeamPlans();
    activatePage(location.hash === '#joe' ? 'joe-page' : location.hash === '#team' ? 'team-page' : 'explorer-page');
    openSessionFromHash();
  }

  function renderMeta() {
    $('#summit-dates').textContent = `${data.meta.summit}｜${data.meta.dates}｜${data.meta.venue}`;
    $('#summit-overview').textContent = data.meta.overview;
    $('#role-context').textContent = data.meta.roleContext;
    $('#last-reviewed').textContent = data.meta.lastReviewed;
  }

  function renderScoreLegend() {
    $('#score-legend').innerHTML = data.weights.map((weight) => `
      <article class="score-card">
        <h3>${escapeHtml(weight.topic)}</h3>
        <p>${escapeHtml(weight.meaning || weight.description || '')}</p>
        <div class="score-values">
          <strong>${weight.base ?? weight.score}</strong> base
          <span class="badge magic">✦ ${weight.magic}</span>
        </div>
      </article>
    `).join('');
  }

  function renderFilterOptions() {
    fillSelect('#day-filter', [...new Set(sessions.map((session) => session.day))]);
    fillSelect('#group-filter', Object.keys(groupLabels), groupLabels);
    fillSelect('#topic-filter', [...new Set(sessions.flatMap((session) => session.topics || []))]);
    fillSelect('#speaker-filter', [...new Set(sessions.map((session) => parseSpeaker(session.speaker).name))].sort());
    fillSelect('#company-filter', [...new Set(sessions.map((session) => parseSpeaker(session.speaker).company))].sort());
  }

  function fillSelect(selector, values, labels = {}) {
    values.forEach((value) => {
      const option = createElement('option');
      option.value = value;
      option.textContent = labels[value] || value;
      $(selector).appendChild(option);
    });
  }

  function renderRecommendedPath() {
    const root = $('#recommended-path');
    const recommendedIds = data.recommendedPath.map((item) => (typeof item === 'string' ? item : item.id));
    const recommendedSessions = recommendedIds
      .map((id) => sessionById[id])
      .filter(Boolean)
      .sort((a, b) => timeKey(a).localeCompare(timeKey(b)));
    let currentDay = '';

    root.innerHTML = '';
    recommendedSessions.forEach((session) => {
      if (session.day !== currentDay) {
        currentDay = session.day;
        root.appendChild(createElement('h3', 'day-title', currentDay));
      }

      const card = createElement('article', 'path-card');
      card.innerHTML = `
        <div class="path-time">
          <strong>${escapeHtml(session.start)}–${escapeHtml(session.end)}</strong>
          <p class="meta">${escapeHtml(session.room)}</p>
        </div>
        <div>
          <h3>${escapeHtml(session.title)}</h3>
          ${renderBadges(session)}
          <p>${escapeHtml(session.objective || session.summary)}</p>
        </div>
        <button class="button" type="button" data-open-session="${session.id}">查看 checklist</button>
      `;
      root.appendChild(card);
    });
  }

  function renderBadges(session) {
    const recommendedBadge = session.recommended ? '<span class="badge recommended">Recommended</span>' : '';
    const topicBadges = (session.topics || [])
      .map((topic) => `<span class="badge topic">${escapeHtml(topic)}</span>`)
      .join('');

    return `
      <div class="badges">
        <span class="badge score">Score ${session.score}</span>
        <span class="badge magic">✦ ${session.magic}</span>
        ${recommendedBadge}
        ${topicBadges}
      </div>
    `;
  }

  function getFilteredSessions() {
    const query = $('#search').value.trim().toLowerCase();
    const day = $('#day-filter').value;
    const group = $('#group-filter').value;
    const topic = $('#topic-filter').value;
    const speaker = $('#speaker-filter').value;
    const company = $('#company-filter').value;
    const recommendedOnly = $('#recommended-only').checked;

    const filtered = sessions.filter((session) => {
      const searchableText = [
        session.title,
        session.speaker,
        session.summary,
        (session.keywords || []).join(' '),
        (session.topics || []).join(' '),
      ].join(' ').toLowerCase();

      const speakerInfo = parseSpeaker(session.speaker);
      return (!query || searchableText.includes(query))
        && (day === 'all' || session.day === day)
        && (group === 'all' || session.group === group)
        && (topic === 'all' || (session.topics || []).includes(topic))
        && (speaker === 'all' || speakerInfo.name === speaker)
        && (company === 'all' || speakerInfo.company === company)
        && (!recommendedOnly || session.recommended);
    });

    return filtered.sort(sortSessions);
  }

  function sortSessions(a, b) {
    const sortBy = $('#sort-filter').value;
    if (sortBy === 'score') return b.score - a.score || timeKey(a).localeCompare(timeKey(b));
    if (sortBy === 'magic') return b.magic - a.magic || b.score - a.score || timeKey(a).localeCompare(timeKey(b));
    return timeKey(a).localeCompare(timeKey(b));
  }

  function renderSessions() {
    const filteredSessions = getFilteredSessions();
    const root = $('#session-groups');
    root.innerHTML = '';
    $('#result-count').textContent = `顯示 ${filteredSessions.length} / ${sessions.length} 場 session`;

    if ($('#layout-filter').value === 'time') {
      $('#layout-help').textContent = '此版面會打破原本 session group 分類，改用 Day 1 早到晚、Day 2 早到晚列出所有可挑選卡片；加入我的流程的狀態會與分組卡片同步。';
      renderSessionsByTime(root, filteredSessions);
      return;
    }

    $('#layout-help').textContent = '此版面依主題分組瀏覽；若你想照實際議程順序挑選，請切換版面為「所有可挑選卡片（依日期/時間）」。';

    Object.entries(groupLabels).forEach(([groupKey, label]) => {
      const groupSessions = filteredSessions.filter((session) => session.group === groupKey);
      if (!groupSessions.length) return;

      const details = createElement('details');
      details.open = true;
      details.innerHTML = `
        <summary>${escapeHtml(label)}（${groupSessions.length}）</summary>
        <div class="cards">${groupSessions.map(renderSessionCard).join('')}</div>
      `;
      root.appendChild(details);
    });
  }

  function renderSessionsByTime(root, filteredSessions) {
    const chronologicalSessions = [...filteredSessions].sort((a, b) => timeKey(a).localeCompare(timeKey(b)));
    const byDay = chronologicalSessions.reduce((acc, session) => {
      acc[session.day] = acc[session.day] || [];
      acc[session.day].push(session);
      return acc;
    }, {});

    Object.entries(byDay).forEach(([day, daySessions]) => {
      const daySection = createElement('section', 'time-day-section');
      const bySlot = daySessions.reduce((acc, session) => {
        const slot = `${session.start}–${session.end}`;
        acc[slot] = acc[slot] || [];
        acc[slot].push(session);
        return acc;
      }, {});
      daySection.innerHTML = `
        <h3 class="day-title">${escapeHtml(day)}</h3>
        <div class="time-layout">
          ${Object.entries(bySlot).map(([slot, slotSessions]) => `
            <section class="time-slot">
              <div class="time-slot-label"><span>${escapeHtml(slot)}</span><small>${slotSessions.length} 場可選</small></div>
              <div class="time-slot-cards">${slotSessions.map(renderSessionCard).join('')}</div>
            </section>
          `).join('')}
        </div>
      `;
      root.appendChild(daySection);
    });
  }

  function renderSessionCard(session) {
    const speakerInfo = parseSpeaker(session.speaker);
    const showSpeaker = $('#show-speaker').checked;

    return `
      <article class="session-card ${session.recommended ? 'is-recommended' : ''}">
        <div class="session-open-area" role="button" tabindex="0" data-open-session="${session.id}">
        <div class="meta">${escapeHtml(session.day)}｜${escapeHtml(session.start)}–${escapeHtml(session.end)}｜${escapeHtml(session.room)}｜${escapeHtml(session.type)}</div>
        <h4>${escapeHtml(session.title)}</h4>
        ${showSpeaker ? `<p class="speaker-line"><strong>${escapeHtml(speakerInfo.name)}</strong>｜${escapeHtml(speakerInfo.company)}</p>` : ''}
        ${renderPersonaBadges(session)}
        ${renderBadges(session)}
        ${renderOfficialMeta(session)}
        <p>${escapeHtml(session.summary)}</p>
        <p class="keywords"><span>整理關鍵字：</span>${escapeHtml((session.keywords || []).slice(0, 8).join('、'))}</p>
        </div>
        ${renderPlanToggleButton(session.id)}
      </article>
    `;
  }

  function renderPlanToggleButton(sessionId) {
    const isSelected = selectedSessionIds.has(sessionId);
    return `
      <button class="plan-toggle ${isSelected ? 'is-selected' : ''}" type="button" data-toggle-plan="${sessionId}">
        ${isSelected ? '已加入我的流程' : '加入我的流程'}
      </button>
    `;
  }

  function refreshPlanToggleButtons() {
    document.querySelectorAll('[data-toggle-plan]').forEach((button) => {
      const isSelected = selectedSessionIds.has(button.dataset.togglePlan);
      button.classList.toggle('is-selected', isSelected);
      button.textContent = isSelected ? '已加入我的流程' : '加入我的流程';
    });
  }

  function analyzePersonas(session) {
    const text = [session.title, session.summary, ...(session.keywords || []), ...(session.topics || [])].join(' ').toLowerCase();
    const personas = [];
    if (/devsecops|security|sast|sca|sbom|漏洞|資安|治理|policy|權限|remediation/.test(text)) personas.push('資安/DevSecOps');
    if (/developer|coding|sdd|review|test|測試|開發|pr|github|gitlab|jira/.test(text)) personas.push('開發者');
    if (/sre|infra|platform|observability|kubernetes|k8s|ci\/cd|release|維運|基礎設施|平台|監控|incident/.test(text)) personas.push('SRE/Infra');
    if (!personas.length) personas.push('組織/文化');
    return [...new Set(personas)];
  }

  function renderPersonaBadges(session) {
    return `<div class="badges badge-row-labelled"><span class="badge-label">整理對象</span>${analyzePersonas(session).map((persona) => `<span class="badge persona">${escapeHtml(persona)}</span>`).join('')}</div>`;
  }

  function renderOfficialMeta(session) {
    const officialTags = session.officialTags || [];
    const officialAudience = session.officialAudience || [];
    const officialFacts = [session.level && `Level：${session.level}`, session.language && `Language：${session.language}`].filter(Boolean);
    if (!officialTags.length && !officialAudience.length && !officialFacts.length) return '';

    return `
      <div class="official-meta">
        <span class="badge-label official">原網站標示</span>
        ${officialFacts.map((fact) => `<span class="badge official-fact">${escapeHtml(fact)}</span>`).join('')}
        ${officialTags.map((tag) => `<span class="badge official-tag"># ${escapeHtml(tag)}</span>`).join('')}
        ${officialAudience.map((audience) => `<span class="badge official-audience"># ${escapeHtml(audience)}</span>`).join('')}
      </div>
    `;
  }

  function openSession(sessionId) {
    const session = sessionById[sessionId];
    if (!session) return;

    history.replaceState(null, '', `#${session.id}`);
    $('#session-detail').innerHTML = `
      <p class="eyebrow">${escapeHtml(session.day)}｜${escapeHtml(session.start)}–${escapeHtml(session.end)}｜${escapeHtml(session.room)}</p>
      <h2>${escapeHtml(session.title)}</h2>
      <p class="meta">${escapeHtml(session.type)}｜${escapeHtml(session.speaker || '')}</p>
      ${renderPersonaBadges(session)}
      ${renderBadges(session)}
      ${renderOfficialMeta(session)}
      <h3>導讀摘要</h3>
      <p>${escapeHtml(session.summary)}</p>
      <h3>關鍵字</h3>
      <p>${(session.keywords || []).map((keyword) => `<span class="badge">${escapeHtml(keyword)}</span>`).join(' ')}</p>
      <h3>聆聽目標</h3>
      <p>${escapeHtml(session.objective || '此場次未列入主推薦路線，可作為分組探索或備選參考。')}</p>
      <div class="dialog-plan-action">
        ${renderPlanToggleButton(session.id)}
      </div>
      <h3>Checklist</h3>
      ${renderChecklist(session)}
      ${session.session_url ? `<p><a class="button primary" href="${escapeHtml(session.session_url)}" target="_blank" rel="noreferrer">Official session URL</a></p>` : ''}
      <p class="source-note">Group：${escapeHtml(groupLabels[session.group] || session.group)}｜Source：${escapeHtml(session.source)}${session.officialTagSource ? `｜官方 tag 來源：${escapeHtml(session.officialTagSource)}` : ''}</p>
    `;
    restoreChecklistState();
    $('#session-dialog').showModal();
  }

  function renderChecklist(session) {
    const checklist = session.checklist && session.checklist.length
      ? session.checklist
      : ['記錄可帶回團隊討論的一個觀念、工具或流程。'];

    return `
      <ul class="checklist">
        ${checklist.map((item, index) => `
          <li>
            <label>
              <input type="checkbox" data-check-key="dodt2026:${session.id}:check:${index}">
              <span>${escapeHtml(item)}</span>
            </label>
          </li>
        `).join('')}
      </ul>
    `;
  }

  function restoreChecklistState() {
    document.querySelectorAll('[data-check-key]').forEach((input) => {
      input.checked = localStorage.getItem(input.dataset.checkKey) === 'true';
      input.addEventListener('change', () => {
        localStorage.setItem(input.dataset.checkKey, input.checked ? 'true' : 'false');
      });
    });
  }

  function renderOutcomes() {
    const fallbackSessionIds = data.recommendedPath
      .map((item) => (typeof item === 'string' ? item : item.id))
      .slice(0, 4);

    $('#outcome-cards').innerHTML = (data.outcomes || []).map((outcome) => {
      const title = typeof outcome === 'string' ? outcome : outcome.title || outcome.name;
      const description = typeof outcome === 'string'
        ? '可由推薦路線中的重點場次整理成內部治理產出。'
        : outcome.description || '';
      const relatedIds = typeof outcome === 'string'
        ? fallbackSessionIds
        : outcome.sessionIds || outcome.sessions || fallbackSessionIds;

      return `
        <article class="outcome-card">
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(description)}</p>
          <div class="badges">
            ${relatedIds.map((id) => sessionById[id]).filter(Boolean).map((session) => `
              <button class="badge link-badge" type="button" data-open-session="${session.id}">${escapeHtml(session.title)}</button>
            `).join('')}
          </div>
        </article>
      `;
    }).join('');
  }

  function bindEvents() {
    $('#filters').addEventListener('input', renderSessions);
    $('#filters').addEventListener('change', renderSessions);
    $('.close').addEventListener('click', () => $('#session-dialog').close());
    $('#print-plan').addEventListener('click', () => window.print());
    $('#clear-plan').addEventListener('click', clearPlanner);
    $('#export-plan-json').addEventListener('click', () => exportMyPlan('json'));
    $('#export-plan-csv').addEventListener('click', () => exportMyPlan('csv'));
    $('#import-plan-json').addEventListener('click', importPlanFromTextarea);
    $('#clear-team-plans').addEventListener('click', clearTeamPlans);
    $('#import-plan-file').addEventListener('change', importPlanFromFile);
    $('#session-dialog').addEventListener('click', (event) => {
      if (event.target === $('#session-dialog')) $('#session-dialog').close();
    });
    document.addEventListener('click', (event) => {
      const pageButton = event.target.closest('[data-page-target]');
      if (pageButton) {
        activatePage(pageButton.dataset.pageTarget);
        return;
      }

      const plannerButton = event.target.closest('[data-toggle-plan]');
      if (plannerButton) {
        togglePlannerSession(plannerButton.dataset.togglePlan);
        return;
      }

      const button = event.target.closest('[data-open-session]');
      if (button) openSession(button.dataset.openSession);
    });
    document.addEventListener('keydown', (event) => {
      if ((event.key === 'Enter' || event.key === ' ') && event.target.matches('[data-open-session]')) {
        event.preventDefault();
        openSession(event.target.dataset.openSession);
      }
    });
    window.addEventListener('hashchange', openSessionFromHash);
  }




  function activatePage(pageName) {
    document.querySelectorAll('[data-page]').forEach((section) => {
      section.hidden = section.dataset.page !== pageName;
    });
    document.querySelectorAll('[data-page-target]').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.pageTarget === pageName);
    });
    if (pageName === 'team-page') renderTeamPlans();
    if (pageName === 'explorer-page') renderSessions();
    location.hash = pageName === 'joe-page' ? 'joe' : pageName === 'team-page' ? 'team' : 'explorer';
  }

  function buildPlanPayload() {
    const nickname = ($('#nickname-input').value || '').trim();
    if (!nickname) throw new Error('請先輸入 nickname，讓組長知道這份流程是誰的。');
    const selectedSessions = getSelectedSessions();
    if (!selectedSessions.length) throw new Error('尚未選擇任何 session，請先到 Session Explorer 加入我的流程。');
    return {
      version: 1,
      summit: data.meta.summit,
      nickname,
      exportedAt: new Date().toISOString(),
      sessionIds: selectedSessions.map((session) => session.id),
      sessions: selectedSessions.map((session) => ({
        id: session.id,
        day: session.day,
        date: session.date,
        start: session.start,
        end: session.end,
        room: session.room,
        title: session.title,
        speaker: session.speaker || '',
        group: session.group,
      })),
    };
  }

  function exportMyPlan(format) {
    try {
      const payload = buildPlanPayload();
      const safeName = payload.nickname.replace(/[^a-z0-9_-]+/gi, '-');
      if (format === 'csv') {
        const rows = [['nickname', 'day', 'date', 'start', 'end', 'room', 'title', 'speaker', 'session_id']];
        payload.sessions.forEach((session) => rows.push([payload.nickname, session.day, session.date, session.start, session.end, session.room, session.title, session.speaker, session.id]));
        downloadFile(`dodt2026-${safeName}-plan.csv`, rows.map((row) => row.map(csvCell).join(',')).join('\n'), 'text/csv;charset=utf-8');
      } else {
        downloadFile(`dodt2026-${safeName}-plan.json`, JSON.stringify(payload, null, 2), 'application/json');
      }
      setTeamStatus(`已匯出 ${payload.nickname} 的 ${payload.sessions.length} 場 session。`);
    } catch (error) {
      setTeamStatus(error.message, true);
    }
  }

  function csvCell(value) {
    return `"${String(value ?? '').replace(/"/g, '""')}"`;
  }

  function downloadFile(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function importPlanFromTextarea() {
    const text = $('#import-plan-text').value.trim();
    if (!text) {
      setTeamStatus('請選擇 JSON 檔或貼上組員 JSON。', true);
      return;
    }
    importTeamPlan(text);
  }

  function importPlanFromFile(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => importTeamPlan(String(reader.result || ''));
    reader.readAsText(file);
    event.target.value = '';
  }

  function importTeamPlan(text) {
    try {
      const payload = JSON.parse(text);
      if (!payload.nickname || !Array.isArray(payload.sessionIds)) throw new Error('JSON 格式不正確：需要 nickname 與 sessionIds。');
      const validSessionIds = payload.sessionIds.filter((id) => sessionById[id]);
      if (!validSessionIds.length) throw new Error('匯入資料沒有可對應到本議程的 session id。');
      const normalized = {
        version: 1,
        nickname: String(payload.nickname).trim(),
        importedAt: new Date().toISOString(),
        sessionIds: [...new Set(validSessionIds)],
      };
      teamPlans = teamPlans.filter((plan) => plan.nickname !== normalized.nickname);
      teamPlans.push(normalized);
      localStorage.setItem(teamPlansKey, JSON.stringify(teamPlans));
      $('#import-plan-text').value = '';
      setTeamStatus(`已匯入 ${normalized.nickname} 的 ${normalized.sessionIds.length} 場 session。`);
      renderTeamPlans();
    } catch (error) {
      setTeamStatus(error.message, true);
    }
  }

  function clearTeamPlans() {
    teamPlans = [];
    localStorage.setItem(teamPlansKey, JSON.stringify(teamPlans));
    setTeamStatus('已清空匯入的組員流程。');
    renderTeamPlans();
  }

  function setTeamStatus(message, isError = false) {
    const status = $('#team-import-status');
    status.textContent = message;
    status.classList.toggle('is-error', isError);
  }

  function renderTeamPlans() {
    const root = $('#team-plans-result');
    if (!root) return;
    if (!teamPlans.length) {
      root.innerHTML = '<div class="empty-planner"><h3>尚未匯入組員流程</h3><p>請請組員匯出 JSON 後，在此匯入；匯入結果會獨立於你的「我的流程」。</p></div>';
      return;
    }
    const coverage = new Map();
    teamPlans.forEach((plan) => {
      plan.sessionIds.forEach((id) => {
        if (!sessionById[id]) return;
        const members = coverage.get(id) || [];
        members.push(plan.nickname);
        coverage.set(id, members);
      });
    });
    const coverageRows = [...coverage.entries()]
      .map(([id, members]) => ({ session: sessionById[id], members }))
      .sort((a, b) => timeKey(a.session).localeCompare(timeKey(b.session)));
    root.innerHTML = `
      <div class="team-grid">
        <section>
          <h3>依組員查看</h3>
          ${teamPlans.map(renderMemberPlan).join('')}
        </section>
        <section>
          <h3>跨員 session 覆蓋</h3>
          <div class="team-coverage">${coverageRows.map(renderCoverageRow).join('')}</div>
        </section>
      </div>
    `;
  }

  function renderMemberPlan(plan) {
    const selected = plan.sessionIds.map((id) => sessionById[id]).filter(Boolean).sort((a, b) => timeKey(a).localeCompare(timeKey(b)));
    return `
      <article class="member-plan">
        <h4>${escapeHtml(plan.nickname)} <span>${selected.length} 場</span></h4>
        <ol>${selected.map((session) => `<li>${escapeHtml(session.day)} ${escapeHtml(session.start)}–${escapeHtml(session.end)}｜${escapeHtml(session.title)}</li>`).join('')}</ol>
      </article>
    `;
  }

  function renderCoverageRow({ session, members }) {
    return `
      <article class="coverage-row">
        <div><strong>${escapeHtml(session.day)} ${escapeHtml(session.start)}–${escapeHtml(session.end)}</strong><p>${escapeHtml(session.title)}</p></div>
        <div class="badges">${members.map((member) => `<span class="badge persona">${escapeHtml(member)}</span>`).join('')}</div>
      </article>
    `;
  }

  function togglePlannerSession(sessionId) {
    if (selectedSessionIds.has(sessionId)) {
      selectedSessionIds.delete(sessionId);
    } else {
      selectedSessionIds.add(sessionId);
    }
    persistPlanner();
    renderSessions();
    renderPlanner();
    refreshPlanToggleButtons();
  }

  function clearPlanner() {
    if (!selectedSessionIds.size) return;
    selectedSessionIds = new Set();
    persistPlanner();
    renderSessions();
    renderPlanner();
    refreshPlanToggleButtons();
  }

  function persistPlanner() {
    localStorage.setItem(selectedPlanKey, JSON.stringify([...selectedSessionIds]));
  }

  function getSelectedSessions() {
    return [...selectedSessionIds]
      .map((id) => sessionById[id])
      .filter(Boolean)
      .sort((a, b) => timeKey(a).localeCompare(timeKey(b)));
  }

  function minutesFromStart(session) {
    const [hours, minutes] = session.start.split(':').map(Number);
    return hours * 60 + minutes;
  }

  function minutesFromEnd(session) {
    const [hours, minutes] = session.end.split(':').map(Number);
    return hours * 60 + minutes;
  }

  function findConflicts(selectedSessions) {
    const conflicts = [];
    const byDay = selectedSessions.reduce((acc, session) => {
      acc[session.day] = acc[session.day] || [];
      acc[session.day].push(session);
      return acc;
    }, {});

    Object.values(byDay).forEach((daySessions) => {
      const sorted = [...daySessions].sort((a, b) => minutesFromStart(a) - minutesFromStart(b));
      for (let index = 0; index < sorted.length - 1; index += 1) {
        const current = sorted[index];
        const next = sorted[index + 1];
        if (minutesFromEnd(current) > minutesFromStart(next)) {
          conflicts.push([current, next]);
        }
      }
    });
    return conflicts;
  }

  function renderPlanner() {
    const selectedSessions = getSelectedSessions();
    const conflicts = findConflicts(selectedSessions);
    $('#planner-summary').textContent = selectedSessions.length
      ? `已選 ${selectedSessions.length} 場，總分 ${selectedSessions.reduce((sum, session) => sum + session.score, 0)}，魔力 ${selectedSessions.reduce((sum, session) => sum + session.magic, 0)}。`
      : '尚未選擇 session。請回到 Session Explorer 將想參加的場次加入我的流程。';

    $('#planner-alerts').innerHTML = conflicts.length
      ? `<div class="conflict-box"><strong>偵測到 ${conflicts.length} 組時間衝突：</strong><ul>${conflicts.map(([a, b]) => `<li>${escapeHtml(a.day)} ${escapeHtml(a.start)}–${escapeHtml(a.end)}「${escapeHtml(a.title)}」與 ${escapeHtml(b.start)}–${escapeHtml(b.end)}「${escapeHtml(b.title)}」重疊。</li>`).join('')}</ul></div>`
      : selectedSessions.length ? '<div class="success-box">目前沒有偵測到時間衝突。</div>' : '';

    $('#planner-result').innerHTML = selectedSessions.length ? renderPlannerTimeline(selectedSessions, conflicts) : renderEmptyPlanner();
  }

  function renderEmptyPlanner() {
    return `
      <div class="empty-planner">
        <h3>開始設計自己的流程</h3>
        <p>你可以從推薦路線開始，再回到 Explorer 補選備案。系統會保存在這台瀏覽器的 localStorage。</p>
        <a class="button primary" href="#explorer">前往 Session Explorer</a>
      </div>
    `;
  }

  function renderPlannerTimeline(selectedSessions, conflicts) {
    const conflictIds = new Set(conflicts.flat().map((session) => session.id));
    let currentDay = '';
    return selectedSessions.map((session) => {
      const dayTitle = session.day !== currentDay ? `<h3 class="day-title">${escapeHtml(session.day)}</h3>` : '';
      currentDay = session.day;
      const speakerInfo = parseSpeaker(session.speaker);
      return `
        ${dayTitle}
        <article class="planner-item ${conflictIds.has(session.id) ? 'has-conflict' : ''}">
          <div class="planner-time"><strong>${escapeHtml(session.start)}–${escapeHtml(session.end)}</strong><span>${escapeHtml(session.room)}</span></div>
          <div>
            <h4>${escapeHtml(session.title)}</h4>
            <p class="meta">${escapeHtml(speakerInfo.name)}｜${escapeHtml(speakerInfo.company)}｜${escapeHtml(session.type)}</p>
            ${renderPersonaBadges(session)}
            ${renderBadges(session)}
          </div>
          <button class="button" type="button" data-toggle-plan="${session.id}">移除</button>
        </article>
      `;
    }).join('');
  }

  function openSessionFromHash() {
    const sessionId = decodeURIComponent(location.hash.slice(1));
    if (sessionId && sessionById[sessionId]) openSession(sessionId);
  }

  init();
}());
