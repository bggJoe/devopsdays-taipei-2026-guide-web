# Web App 產品規格：DevOpsDays Taipei 2026 Session Explorer

## 1. 產品目標

將 `01_summit_session_guide.md` 的內容做成一個可用瀏覽器直接開啟的簡易 web app，讓使用者可以：

1. 先理解大會概要與評分規則。
2. 依分組逐步瀏覽所有 session。
3. 透過推薦路線快速知道「我該去哪幾場」。
4. 點開每一場 session 看關鍵字、題目相關度、分數、魔力、目標與 checklist。
5. 在同一頁完成探索，不需要後端，不需要打包工具。

## 2. 使用者情境

主要使用者是：公司內部資安代表，負責 DevSecOps / RAI（LLMSecOps、AgentSecOps），也參與 AI 開發小組。

他的閱讀路徑：

1. **總覽**：確認大會與個人任務目標。
2. **評分規則**：理解為什麼某些場次優先。
3. **推薦路線**：先取得不衝突的主路線。
4. **分組探索**：回頭看其他可替換場次。
5. **Session 詳情**：針對每一堂看「我要聽到什麼」與 checklist。
6. **會後輸出**：整理成公司內部 reference architecture、checklist、PoC backlog。

## 3. 資訊架構 IA

```text
Home / Overview
├─ 大會簡介
├─ 個人任務背景
├─ 題目評分模型
├─ 推薦路線摘要
│  ├─ Day 1 路線
│  └─ Day 2 路線
├─ Session Explorer
│  ├─ Filter: Day
│  ├─ Filter: Group
│  ├─ Filter: Topic
│  ├─ Filter: Recommended only
│  └─ Search: title / keyword / summary
├─ Session Detail
│  ├─ 基本資訊
│  ├─ 分數 / 魔力 / 命中題目
│  ├─ 關鍵字
│  ├─ 導讀摘要
│  ├─ 聆聽目標
│  └─ Checklist
└─ 會後輸出
   ├─ AI DevSecOps reference architecture
   ├─ AI Coding 安全治理 checklist
   ├─ Agentic DevOps / AI reviewer PoC backlog
   ├─ AI supply chain inventory checklist
   └─ SBOM remediation workflow
```

## 4. 頁面與元件

### 4.1 Header

- 顯示：DevOpsDays Taipei 2026 Session Explorer
- 顯示副標：DevSecOps / RAI / AI Coding Focus
- 提供 anchor links：總覽、推薦路線、探索、會後輸出

### 4.2 Hero Overview

內容：

- 大會時間與地點
- 使用者角色背景
- 兩天總目標
- CTA：`查看推薦路線`、`開始探索 session`

### 4.3 Score Legend

用四張卡片顯示：

| Topic | Base | Magic | Meaning |
|---|---:|---:|---|
| DevSecOps | 3 | 0 | 安全開發流程、漏洞治理、供應鏈安全 |
| AI 資安 | 3 | +1 | LLMSecOps、AgentSecOps、AI AppSec |
| AI Coding | 2 | +1 | Agentic SDLC、SDD、AI reviewer |
| DevEx | 1 | 0 | 平台工程、release、開發者體驗 |

### 4.4 Recommended Path

以 timeline 呈現，依 day 分成兩段。每一張卡片顯示：

- 時間
- 場地
- session title
- score / magic badges
- why this session
- button：查看 checklist

### 4.5 Group Explorer

把 session 分成四組：

1. DevSecOps／AI 資安／供應鏈安全
2. AI Coding／Agentic SDLC／SDD／AI Testing
3. Platform／SRE／Observability／DevEx
4. Keynote／文化／組織／低題目相關

每組可展開 / 收合。卡片內顯示：

- title
- time
- type
- room
- score / magic
- topic badges
- keywords

### 4.6 Session Detail Panel

點卡片後顯示詳情。可用同頁右側 panel 或 modal。為了簡單，建議使用同頁 `<dialog>` 或固定 detail section。

Detail 欄位：

- Title
- Time / Room / Speaker
- Group
- Summary
- Keywords
- Topic hits
- Score / Magic
- Objective
- Checklist
- Official session URL（若有）

### 4.7 會後輸出區

用 cards 顯示六個產出：

- AI DevSecOps reference architecture
- AI Coding 安全治理 checklist
- Agentic DevOps / AI reviewer PoC backlog
- AI supply chain inventory checklist
- SBOM remediation workflow
- Release traceability policy

每張卡片可以列出「對應推薦 session」。

## 5. 互動需求

最低必要互動：

- 搜尋：title、summary、keywords、speaker
- 篩選：Day、Group、Topic、Recommended only
- 排序：時間順、分數高到低、魔力高到低
- 點 session 顯示詳情
- checklist 可在瀏覽器中勾選（不必持久化）

可選增強：

- `localStorage` 記住 checklist 勾選狀態
- `location.hash` 支援直接連到某個 session
- 複製 checklist markdown

## 6. 技術限制與實作方向

- 不需要 framework。
- 不需要 build step。
- 使用純 HTML / CSS / JavaScript。
- 可以直接用 browser 開啟 `web-app/index.html`。
- 為避免 file:// fetch CORS 問題，資料直接放在 `data.js` 中，以 `window.SUMMIT_DATA` 暴露。

## 7. 驗收條件

- [ ] 雙擊 `web-app/index.html` 可直接開啟。
- [ ] 沒有外部 CDN 依賴。
- [ ] Session 數量與 `data/devopsdays_2026_sessions.json` 一致。
- [ ] 可依 Day、Group、Topic 篩選。
- [ ] 可用關鍵字搜尋。
- [ ] 推薦路線只顯示不衝突 session。
- [ ] 每個推薦 session 都有 objective 與 checklist。
- [ ] 頁面在桌機與手機寬度都能閱讀。

## 8. 非目標

- 不做登入。
- 不做後端。
- 不做即時更新議程。
- 不做複雜圖表或華麗動畫。
- 不做報名或個人行事曆同步。

## 9. 來源資料

資料主檔：`data/devopsdays_2026_sessions.json`  
Web app 直接使用：`web-app/data.js`

官方來源：

- https://devopsdays.tw/2026/
- https://devopsdays.tw/2026/agenda
- https://s.itho.me/vendor/2026/DODT2026Agenda/DevOpsDays%20Taipei_2026_Agenda.pdf
