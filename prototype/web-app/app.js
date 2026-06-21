const data = window.SUMMIT_DATA;
const byId = id => document.getElementById(id);
const state = {search:'',day:'all',group:'all',topic:'all',recommendedOnly:false,sort:'time'};

function init(){renderMeta();renderScoreLegend();renderFilters();renderRecommendedPath();renderOutcomes();bindEvents();renderSessions();openFromHash();}
function renderMeta(){
  byId('overview-text').textContent=data.meta.overview;
  byId('meta-summit').textContent=data.meta.summit;
  byId('meta-dates').textContent=data.meta.dates;
  byId('meta-venue').textContent=data.meta.venue;
  byId('meta-role').textContent=data.meta.roleContext;
  byId('last-reviewed').textContent=data.meta.lastReviewed;
  const rec=data.recommendedPath.map(id=>data.sessions.find(s=>s.id===id)).filter(Boolean);
  byId('path-summary').textContent=`主推薦採「魔力最高中的分數最高」路線，估算總值 ${rec.reduce((n,s)=>n+s.score,0)} 分／魔力 ${rec.reduce((n,s)=>n+s.magic,0)}，並避開時間衝突。`;
}
function renderScoreLegend(){byId('score-grid').innerHTML=data.weights.map(w=>`<article class="score-card"><h3>${w.topic}</h3><div class="score-pills"><span class="badge score">${w.score} 分</span><span class="badge magic">✦ ${w.magic}</span></div><p>${w.description}</p></article>`).join('');}
function renderFilters(){
  Object.entries(data.groups).forEach(([key,g])=>{const o=document.createElement('option');o.value=key;o.textContent=g.short;byId('group-filter').appendChild(o);});
  data.weights.forEach(w=>{const o=document.createElement('option');o.value=w.topic;o.textContent=w.topic;byId('topic-filter').appendChild(o);});
}
function renderRecommendedPath(){
  const rec=data.recommendedPath.map(id=>data.sessions.find(s=>s.id===id)).filter(Boolean);
  const grouped=groupBy(rec,s=>s.day);
  byId('recommended-path').innerHTML=Object.entries(grouped).map(([day,list])=>`<div><h3 class="day-heading">${day}</h3>${list.map(s=>`<article class="timeline-card"><div class="time-block">${s.start}<br>– ${s.end}</div><div><div class="badges"><span class="badge recommended">推薦</span><span class="badge score">${s.score} 分</span><span class="badge magic">✦ M${s.magic}</span></div><h3>${s.title}</h3><p class="card-meta">${s.room} · ${s.type} · ${s.speaker||''}</p><p>${s.objective||s.summary}</p><button class="card-button" data-open-session="${s.id}">查看 checklist</button></div></article>`).join('')}</div>`).join('');
}
function renderOutcomes(){byId('outcome-grid').innerHTML=data.outcomes.map((o,i)=>`<article class="outcome-card"><p class="eyebrow">Output ${i+1}</p><h3>${o}</h3><p>建議在會後用推薦場次的 checklist 彙整成內部文件或 PoC backlog。</p></article>`).join('');}
function bindEvents(){
  byId('search').addEventListener('input',e=>{state.search=e.target.value.trim().toLowerCase();renderSessions();});
  byId('day-filter').addEventListener('change',e=>{state.day=e.target.value;renderSessions();});
  byId('group-filter').addEventListener('change',e=>{state.group=e.target.value;renderSessions();});
  byId('topic-filter').addEventListener('change',e=>{state.topic=e.target.value;renderSessions();});
  byId('sort-filter').addEventListener('change',e=>{state.sort=e.target.value;renderSessions();});
  byId('recommended-only').addEventListener('change',e=>{state.recommendedOnly=e.target.checked;renderSessions();});
  document.body.addEventListener('click',e=>{const b=e.target.closest('[data-open-session]');if(b)openSession(b.dataset.openSession);});
  byId('dialog-close').addEventListener('click',()=>byId('session-dialog').close());
  byId('session-dialog').addEventListener('click',e=>{if(e.target===byId('session-dialog'))byId('session-dialog').close();});
  window.addEventListener('hashchange',openFromHash);
}
function renderSessions(){const list=data.sessions.filter(matchFilters).sort(sortSessions);byId('result-count').textContent=`目前顯示 ${list.length} / ${data.sessions.length} 場 session`;byId('session-grid').innerHTML=list.map(card).join('');}
function matchFilters(s){
  if(state.day!=='all'&&s.day!==state.day)return false;
  if(state.group!=='all'&&s.group!==state.group)return false;
  if(state.topic!=='all'&&!s.topics.includes(state.topic))return false;
  if(state.recommendedOnly&&!s.recommended)return false;
  if(state.search){const hay=[s.title,s.speaker,s.summary,...s.keywords,...s.topics].join(' ').toLowerCase();if(!hay.includes(state.search))return false;}
  return true;
}
function sortSessions(a,b){if(state.sort==='score')return b.score-a.score||b.magic-a.magic||timeValue(a)-timeValue(b);if(state.sort==='magic')return b.magic-a.magic||b.score-a.score||timeValue(a)-timeValue(b);return timeValue(a)-timeValue(b);}
function timeValue(s){const [h,m]=s.start.split(':').map(Number);return (s.day==='Day 2'?1440:0)+h*60+m;}
function card(s){const topics=s.topics.length?s.topics:['低相關'];return `<article class="session-card ${s.recommended?'is-recommended':''}" data-open-session="${s.id}" tabindex="0" role="button"><div class="badges">${s.recommended?'<span class="badge recommended">推薦</span>':''}<span class="badge score">${s.score} 分</span><span class="badge magic">✦ M${s.magic}</span></div><h3>${s.title}</h3><p class="card-meta">${s.day} ${s.start}-${s.end} · ${s.room} · ${s.type}</p><p>${s.summary}</p><div class="badges">${topics.map(t=>`<span class="badge topic">${t}</span>`).join('')}</div><div class="keywords">${s.keywords.join('、')}</div></article>`;}
function openSession(id){
  const s=data.sessions.find(x=>x.id===id);if(!s)return;history.replaceState(null,'',`#${id}`);
  byId('dialog-meta').textContent=`${s.day} ${s.date} ${s.start}-${s.end} · ${s.room} · ${s.type}`;byId('dialog-title').textContent=s.title;
  const topics=s.topics.length?s.topics:['低／無直接命中'];
  byId('dialog-body').innerHTML=`<div class="badges">${s.recommended?'<span class="badge recommended">推薦路線</span>':''}<span class="badge score">${s.score} 分</span><span class="badge magic">✦ M${s.magic}</span>${topics.map(t=>`<span class="badge topic">${t}</span>`).join('')}</div><h3>基本資訊</h3><p><strong>講者：</strong>${s.speaker||'—'}</p><p><strong>分組：</strong>${data.groups[s.group]?.name||s.group}</p><p><strong>關鍵字：</strong>${s.keywords.join('、')}</p><h3>導讀</h3><p>${s.summary}</p><h3>這堂要聽到的目標</h3><p>${s.objective||'此場次非主推薦路線，建議以摘要與關鍵字判斷是否作為備案。'}</p><h3>Checklist</h3>${renderChecklist(s)}${s.session_url?`<p><a class="button" href="${s.session_url}" target="_blank" rel="noreferrer">開啟官方 session 頁</a></p>`:''}`;
  byId('session-dialog').showModal();bindChecklist();
}
function renderChecklist(s){const items=s.checklist||[];if(!items.length)return '<p>這場沒有特別設定 checklist，可作為備案或背景知識場次。</p>';return `<ul class="checklist">${items.map((item,i)=>{const k=`dodt2026:${s.id}:check:${i}`;return `<li><label><input type="checkbox" data-check-key="${k}" ${localStorage.getItem(k)==='true'?'checked':''}> <span>${item}</span></label></li>`;}).join('')}</ul>`;}
function bindChecklist(){document.querySelectorAll('[data-check-key]').forEach(i=>i.addEventListener('change',e=>localStorage.setItem(e.target.dataset.checkKey,e.target.checked)));}
function openFromHash(){const id=location.hash.replace('#','');if(id&&data.sessions.some(s=>s.id===id))openSession(id);}
function groupBy(list,fn){return list.reduce((a,x)=>{const k=fn(x);(a[k]=a[k]||[]).push(x);return a;},{});} 
init();
