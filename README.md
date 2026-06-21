# DevOpsDays Taipei 2026 Session Explorer Prototype

這是一個純 HTML / CSS / JavaScript 的靜態 prototype。

## 如何打開

直接用瀏覽器開啟：`web-app/index.html`

不需要 npm install、build step、backend server 或 CDN。

## 檔案說明

| 檔案 | 說明 |
|---|---|
| `index.html` | 頁面結構 |
| `styles.css` | 簡易美觀樣式 |
| `data.js` | Session 資料，使用 `window.SUMMIT_DATA` |
| `app.js` | Render、filter、search、dialog、checklist |

## 已實作功能

- 大會總覽
- 評分模型
- 推薦路線 timeline
- Session explorer
- 搜尋與篩選
- 排序
- Session detail dialog
- Checklist 勾選與 localStorage 保存
- RWD 基礎版面
