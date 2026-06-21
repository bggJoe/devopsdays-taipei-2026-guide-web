# 資料模型與內容維護說明

## 1. 資料主檔

- `data/devopsdays_2026_sessions.json`：給人與工具閱讀的 JSON 主檔。
- `web-app/data.js`：給瀏覽器直接載入的版本，內容是 `window.SUMMIT_DATA = {...}`。

更新資料時，建議先改 JSON，再重新產生 data.js。

## 2. 頂層資料結構

```json
{
  "meta": {},
  "weights": [],
  "groups": {},
  "sessions": [],
  "recommendedPath": [],
  "backupRecommendations": [],
  "outcomes": []
}
```

## 3. Session 欄位說明

| 欄位 | 型態 | 必填 | 說明 |
|---|---|---:|---|
| id | string | yes | 穩定唯一 ID，用於連結、filter、hash |
| day | string | yes | `Day 1` 或 `Day 2` |
| date | string | yes | ISO date |
| start | string | yes | HH:mm |
| end | string | yes | HH:mm |
| room | string | yes | 會議室 |
| type | string | yes | Talk / Workshop / Keynote / Bootcamp / Opening |
| title | string | yes | Session 標題 |
| speaker | string | no | 講者資訊 |
| group | string | yes | `security` / `ai-coding` / `platform` / `culture` |
| summary | string | yes | 導讀摘要 |
| keywords | string[] | yes | 關鍵字 |
| topics | string[] | yes | 命中的題目 |
| score | number | yes | 題目基礎分總和或人工估分 |
| magic | number | yes | AI 資安／AI Coding 魔力加總 |
| recommended | boolean | yes | 是否在主推薦路線 |
| objective | string | recommended only | 推薦場次的聆聽目標 |
| checklist | string[] | recommended only | 推薦場次的聆聽 checklist |
| session_url | string | no | 官方 session 頁，若有 |
| source | string | yes | 來源代碼，例如 `agenda_pdf` |

## 4. 分組設計

分組不是為了完全符合官方 track，而是為了幫使用者理解「可帶回公司的能力」。

| group | 用途 |
|---|---|
| security | DevSecOps、AI 資安、供應鏈安全、漏洞治理、SBOM、權限治理 |
| ai-coding | AI Coding、Agentic SDLC、SDD、AI testing、AI reviewer |
| platform | Platform Engineering、SRE、Observability、DevEx、release、DataOps |
| culture | Keynote、組織、管理、AI 導入責任、低題目相關 |

## 5. 分數維護規則

題目設定：

| Topic | Score | Magic |
|---|---:|---:|
| DevSecOps | 3 | 0 |
| AI 資安 | 3 | 1 |
| AI Coding | 2 | 1 |
| DevEx | 1 | 0 |

若 session 同時命中多個題目，可以加總。若標題與摘要只有間接關係，可保守給 0 或 1。

範例：

- `AI 時代的 DevSecOps 變革`：DevSecOps + AI 資安 + AI Coding = 8／M2。
- `AI driven SBOM & Remediation`：DevSecOps + AI 資安 = 6／M1。
- `當 Release 不再靠人工`：DevEx = 1／M0。

## 6. 內容撰寫規範

### summary

限制在 1–2 句，回答：

- 這堂在講什麼？
- 為什麼與使用者角色有關？

### objective

只給推薦場次。用一句話說明：這堂要帶回什麼能力或產出。

### checklist

只給推薦場次。每堂 3–5 題，格式為「我在現場要聽到什麼」。

### keywords

使用者會用它來搜尋，應同時包含中文與常見英文縮寫，例如：

- DevSecOps
- SSDF
- SBOM
- MCP
- SDD
- AI Agent
- CI/CD
- PR Review

## 7. JSON → data.js 的轉換

若需要重新產生：

```bash
python3 - <<'PY'
import json
from pathlib import Path
root = Path('.')
data = json.loads((root/'data/devopsdays_2026_sessions.json').read_text(encoding='utf-8'))
(root/'web-app/data.js').write_text('window.SUMMIT_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';
', encoding='utf-8')
PY
```

## 8. 品質檢查

- [ ] 每個 session 都有唯一 `id`。
- [ ] 每個 `recommendedPath` ID 都存在。
- [ ] 每個 recommended session 都有 objective 與 checklist。
- [ ] group 值只使用四個合法值。
- [ ] score 與 magic 是 number。
- [ ] title、summary、keywords 不為空。
