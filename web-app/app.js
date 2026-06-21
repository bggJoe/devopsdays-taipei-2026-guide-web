(function(){
  const data = window.SUMMIT_DATA;
  const sessions = data.sessions || [];
  const byId = Object.fromEntries(sessions.map(s => [s.id, s]));
  const fallbackGroups = {security:'DevSecOps／AI 資安／供應鏈安全','ai-coding':'AI Coding／Agentic SDLC／SDD／AI Testing',platform:'Platform／SRE／Observability／DevEx',culture:'Keynote／文化／組織／低題目相關'};
  const groupLabels = Object.fromEntries(Object.entries(data.groups || fallbackGroups).map(([k,v]) => [k, typeof v === 'string' ? v : (v.name || v.short || k)]));
  const $ = (sel) => document.querySelector(sel);
  const el = (tag, cls, text) => { const n=document.createElement(tag); if(cls)n.className=cls; if(text!==undefined)n.textContent=text; return n; };
  const escape = (v='') => String(v).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const timeKey = s => `${s.date || ''} ${s.start || ''}`;

  function initStatic(){
    $('#summit-dates').textContent = `${data.meta.summit}｜${data.meta.dates}｜${data.meta.venue}`;
    $('#summit-overview').textContent = data.meta.overview;
    $('#role-context').textContent = data.meta.roleContext;
    $('#score-legend').innerHTML = data.weights.map(w => `<article class="score-card"><h3>${escape(w.topic)}</h3><p>${escape(w.meaning || w.description || '')}</p><div><strong>${w.base ?? w.score}</strong> base <span class="badge magic">✦ ${w.magic}</span></div></article>`).join('');
    fillSelect('#day-filter', [...new Set(sessions.map(s=>s.day))]);
    fillSelect('#group-filter', Object.keys(groupLabels), groupLabels);
    fillSelect('#topic-filter', [...new Set(sessions.flatMap(s=>s.topics||[]))]);
    renderPath(); renderOutcomes();
  }
  function fillSelect(sel, values, labels={}){ values.forEach(v=>{ const o=el('option'); o.value=v; o.textContent=labels[v]||v; $(sel).appendChild(o); }); }
  function badges(s){ return `<div class="badges"><span class="badge">Score ${s.score}</span><span class="badge magic">✦ ${s.magic}</span>${s.recommended?'<span class="badge reco">Recommended</span>':''}${(s.topics||[]).map(t=>`<span class="badge topic">${escape(t)}</span>`).join('')}</div>`; }
  function renderPath(){
    const root=$('#recommended-path'); root.innerHTML='';
    const ids = data.recommendedPath.map(x => typeof x === 'string' ? x : x.id);
    const rec = ids.map(id=>byId[id]).filter(Boolean).sort((a,b)=>timeKey(a).localeCompare(timeKey(b)));
    let day=''; rec.forEach(s=>{ if(s.day!==day){day=s.day; root.appendChild(el('h3','day-title',day));}
      const card=el('article','path-card'); card.innerHTML=`<div><strong>${escape(s.start)}–${escape(s.end)}</strong><p class="meta">${escape(s.room)}</p></div><div><h3>${escape(s.title)}</h3>${badges(s)}<p>${escape(s.objective||s.summary)}</p></div><button class="button" data-open="${s.id}">查看 checklist</button>`; root.appendChild(card); });
  }
  function filtered(){
    const q=$('#search').value.trim().toLowerCase(), day=$('#day-filter').value, group=$('#group-filter').value, topic=$('#topic-filter').value, reco=$('#recommended-only').checked;
    let list=sessions.filter(s=>{ const hay=[s.title,s.speaker,s.summary,(s.keywords||[]).join(' '),(s.topics||[]).join(' ')].join(' ').toLowerCase(); return (!q||hay.includes(q))&&(day==='all'||s.day===day)&&(group==='all'||s.group===group)&&(topic==='all'||(s.topics||[]).includes(topic))&&(!reco||s.recommended); });
    const sort=$('#sort-filter').value; list.sort((a,b)=> sort==='score'? b.score-a.score || timeKey(a).localeCompare(timeKey(b)) : sort==='magic'? b.magic-a.magic || b.score-a.score : timeKey(a).localeCompare(timeKey(b)) );
    return list;
  }
  function renderSessions(){
    const list=filtered(); $('#result-count').textContent=`顯示 ${list.length} / ${sessions.length} 場 session`;
    const root=$('#session-groups'); root.innerHTML='';
    Object.entries(groupLabels).forEach(([key,label])=>{ const items=list.filter(s=>s.group===key); if(!items.length)return; const d=el('details'); d.open=true; d.innerHTML=`<summary>${escape(label)}（${items.length}）</summary><div class="cards">${items.map(cardHtml).join('')}</div>`; root.appendChild(d); });
  }
  function cardHtml(s){ return `<button class="session-card ${s.recommended?'recommended':''}" data-open="${s.id}"><div class="meta">${escape(s.day)}｜${escape(s.start)}–${escape(s.end)}｜${escape(s.room)}｜${escape(s.type)}</div><h4>${escape(s.title)}</h4>${badges(s)}<p class="meta">${escape((s.keywords||[]).slice(0,6).join('、'))}</p></button>`; }
  function openDetail(id){ const s=byId[id]; if(!s)return; location.hash=s.id; $('#session-detail').innerHTML=`<p class="eyebrow">${escape(s.day)}｜${escape(s.start)}–${escape(s.end)}｜${escape(s.room)}</p><h2>${escape(s.title)}</h2><p class="meta">${escape(s.type)}｜${escape(s.speaker||'')}</p>${badges(s)}<h3>導讀摘要</h3><p>${escape(s.summary)}</p><h3>關鍵字</h3><p>${(s.keywords||[]).map(k=>`<span class="badge">${escape(k)}</span>`).join(' ')}</p><h3>聆聽目標</h3><p>${escape(s.objective||'此場次未列入主推薦路線，可作為分組探索或備選參考。')}</p><h3>Checklist</h3><ul class="checklist">${(s.checklist&&s.checklist.length?s.checklist:['記錄可帶回團隊討論的一個觀念、工具或流程。']).map((c,i)=>`<li><label><input type="checkbox" data-check="${s.id}:${i}"> ${escape(c)}</label></li>`).join('')}</ul>${s.session_url?`<p><a href="${escape(s.session_url)}" target="_blank" rel="noreferrer">Official session URL</a></p>`:''}<p class="source-note">Group：${escape(groupLabels[s.group]||s.group)}｜Source：${escape(s.source)}</p>`; restoreChecks(); $('#session-dialog').showModal(); }
  function renderOutcomes(){ const recIds=data.recommendedPath.map(x=>typeof x==='string'?x:x.id).slice(0,4); $('#outcome-cards').innerHTML=(data.outcomes||[]).map(o=>{ const title=typeof o==='string'?o:(o.title||o.name); const desc=typeof o==='string'?'可由推薦路線中的重點場次整理成內部治理產出。':(o.description||''); const ids=typeof o==='string'?recIds:(o.sessionIds||o.sessions||recIds); return `<article class="outcome-card"><h3>${escape(title)}</h3><p>${escape(desc)}</p><div class="badges">${ids.map(id=>byId[id]).filter(Boolean).map(s=>`<button class="badge" data-open="${s.id}">${escape(s.title)}</button>`).join('')}</div></article>`; }).join(''); }
  function restoreChecks(){ document.querySelectorAll('[data-check]').forEach(i=>{ i.checked=localStorage.getItem('check:'+i.dataset.check)==='1'; i.onchange=()=>localStorage.setItem('check:'+i.dataset.check,i.checked?'1':'0'); }); }
  document.addEventListener('click', e=>{ const b=e.target.closest('[data-open]'); if(b) openDetail(b.dataset.open); if(e.target.classList.contains('close')) $('#session-dialog').close(); });
  $('#filters').addEventListener('input', renderSessions); $('#filters').addEventListener('change', renderSessions);
  initStatic(); renderSessions(); if(location.hash) setTimeout(()=>openDetail(decodeURIComponent(location.hash.slice(1))),100);
})();
