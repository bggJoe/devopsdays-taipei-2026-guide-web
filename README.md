# DevOpsDays Taipei 2026 Session Explorer

這是一個純 HTML / CSS / JavaScript 的零打包靜態 web app，用 DevSecOps / RAI / AI Coding 視角探索 DevOpsDays Taipei 2026 議程。

## 如何展示 web

### 最快方式：直接打開檔案

1. 在檔案總管或 Finder 中進入專案資料夾。
2. 開啟 `web-app/index.html`。
3. 瀏覽器會直接讀取同資料夾的 `data.js`，不需要 npm install、不需要 build、不需要 CDN，也不需要後端。

### 以本機網址展示

如果你要投影、分享本機網址，或避免瀏覽器對 `file://` 的限制，可以在專案根目錄執行：

```bash
python3 -m http.server 8000 --directory web-app
```

然後開啟：

```text
http://localhost:8000/
```

### 推薦展示流程

1. 先看「總覽」與右側閱讀順序，說明這份導覽的角色背景。
2. 點「查看推薦路線」，展示兩天不衝突的主路線與每場 checklist。
3. 到「探索」區使用搜尋與 Day / Group / Topic / 演講者 / 公司組織篩選，並切換「顯示講者/組織」。
4. 在卡片按「加入我的流程」，建立自己的 session flow；系統會在「我的流程」區檢查時間衝突。
5. 點任一 session 卡片，展示摘要、關鍵字、命中題目、聆聽目標、checklist，以及「整理對象」與「原網站標示」的差異。
6. 到「我的流程」查看已選結果，使用「輸出 PDF / 列印」透過瀏覽器另存 PDF。
7. 最後展示「會後輸出」，說明可帶回公司整理成 reference architecture、治理 checklist 與 PoC backlog。

## 檔案說明

- `web-app/index.html`：頁面結構與各區塊 anchor。
- `web-app/styles.css`：RWD、卡片、timeline、dialog 與篩選器樣式。
- `web-app/app.js`：資料 render、搜尋、Day / Group / Topic / 演講者 / 公司組織篩選、排序、detail dialog、hash deep link、角色對象分析、checklist localStorage、自選流程、時間衝突檢查與列印/PDF 輸出。
- `web-app/data.js`：由 `assets/devopsdays_2026_sessions.json` 產生的瀏覽器資料檔，內容為 `window.SUMMIT_DATA = ...`。
- `assets/devopsdays_2026_sessions.json`：議程資料來源。

## 更新資料

若 JSON 來源更新，請重新產生 `web-app/data.js`：

```bash
python3 - <<'PY'
import json
from pathlib import Path

data = json.loads(Path('assets/devopsdays_2026_sessions.json').read_text(encoding='utf-8'))
Path('web-app/data.js').write_text(
    'window.SUMMIT_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n',
    encoding='utf-8',
)
PY
```
