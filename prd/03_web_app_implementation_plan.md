# Web App 開發規劃：Codex 任務拆解

## 0. 專案目標

建立一個可直接用瀏覽器打開的靜態 web app，將 DevOpsDays Taipei 2026 的 session 導讀、評分與推薦路線做成漸進式探索介面。

## 1. 建議檔案結構

```text
devopsdays-session-explorer/
├─ index.html
├─ styles.css
├─ data.js
├─ app.js
└─ README.md
```

本交付包已提供 prototype：`web-app/`。Codex 可以直接在此基礎上修改。

## 2. 開發順序

### Milestone 1：靜態內容可閱讀

任務：

- 建立 `index.html` 基本區塊：header、overview、score legend、recommended path、explorer、outcomes。
- 引入 `styles.css` 做簡易美觀排版。
- 引入 `data.js`。

驗收：

- 可以用瀏覽器開啟。
- 頁面有大會簡介、分數規則與推薦路線。

### Milestone 2：Session Explorer

任務：

- 在 `app.js` 讀取 `window.SUMMIT_DATA.sessions`。
- 依 group render session cards。
- 卡片顯示 time、room、type、title、score、magic、topics、keywords。

驗收：

- 所有 session 都看得到。
- 推薦 session 有高亮。

### Milestone 3：Filter / Search / Sort

任務：

- 搜尋輸入框：查 title、speaker、summary、keywords。
- Day filter：All / Day 1 / Day 2。
- Group filter：All / four groups。
- Topic filter：All / DevSecOps / AI 資安 / AI Coding / DevEx。
- Recommended only toggle。
- Sort：time / score / magic。

驗收：

- 任一篩選組合都不會報錯。
- 篩選結果數量會更新。

### Milestone 4：Session Detail

任務：

- 點卡片後開啟 `<dialog>` 或 detail panel。
- 顯示完整資訊：摘要、關鍵字、命中題目、分數、聆聽目標、checklist。
- checklist 可勾選。

驗收：

- 每個推薦 session 顯示 checklist。
- 非推薦 session 即使沒有 checklist 也能正常顯示摘要。

### Milestone 5：閱讀引導

任務：

- 加上「閱讀順序」區塊：1 總覽 → 2 評分 → 3 推薦路線 → 4 分組探索 → 5 會後輸出。
- 推薦路線 timeline 每張卡片可連到 session detail。
- Outcome cards 可列出支撐它的 session。

驗收：

- 使用者可以不用看文件，直接照頁面順序理解內容。

## 3. 資料設計重點

資料來源：`data.js` 內的 `window.SUMMIT_DATA`。

重要欄位：

```js
{
  id: "d2-ai-devsecops-transformation",
  day: "Day 2",
  date: "2026-06-26",
  start: "13:30",
  end: "14:10",
  room: "605+606 會議室",
  type: "Talk",
  title: "AI 時代的 DevSecOps 變革：安全開發流程的重塑與實踐",
  speaker: "蔡龍佑｜雲力橘子數位",
  group: "security",
  summary: "...",
  keywords: ["DevSecOps", "SSDF", "AI Agent"],
  topics: ["DevSecOps", "AI 資安", "AI Coding"],
  score: 8,
  magic: 2,
  recommended: true,
  objective: "...",
  checklist: ["...", "..."]
}
```

## 4. UI 規範

### 視覺風格

- 背景：淺色，帶一點灰藍或米色即可。
- 卡片：白底、圓角、微陰影。
- 推薦 session：用明顯但不刺眼的邊框或標籤。
- Score badge：深色文字、淡色背景。
- Magic badge：可用星號符號 `✦`，不必做動畫。

### RWD

- 桌機：左側可做 sticky navigation，右側內容。
- 手機：單欄排列，filter 垂直堆疊。

## 5. 可交付版本定義

### v0.1

- 靜態 overview + 推薦路線。

### v0.2

- Session Explorer + detail dialog。

### v0.3

- Filter / search / sort。

### v1.0

- Checklist 勾選、localStorage、hash deep link、README 完整。

## 6. Codex 實作提醒

- 不要引入 React/Vue/Svelte，除非使用者另行要求。
- 不要依賴 CDN，因為使用者要能離線雙擊開啟。
- 不要使用 `fetch('./data.json')`，file:// 可能有 CORS 問題；直接使用 `data.js`。
- 不要把所有內容硬寫在 HTML；session 資料請從 `window.SUMMIT_DATA` render。
- 先完成可用，再改善美觀。
