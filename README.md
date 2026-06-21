# DevOpsDays Taipei 2026 Session Explorer

A zero-build static web app for exploring the DevOpsDays Taipei 2026 agenda from a DevSecOps / RAI / AI Coding perspective.

## Open locally

Open `web-app/index.html` directly in a browser. The app uses only local HTML, CSS, and JavaScript files and reads agenda data from `web-app/data.js`, so it works from `file://` without a local server.

## Files

- `web-app/index.html` — page structure and sections.
- `web-app/styles.css` — responsive visual styling.
- `web-app/app.js` — rendering, filters, sorting, dialog details, hash links, and checklist localStorage.
- `web-app/data.js` — browser-ready `window.SUMMIT_DATA` generated from `assets/devopsdays_2026_sessions.json`.
- `assets/devopsdays_2026_sessions.json` — source data.

## Data refresh

If the JSON source changes, regenerate the browser data file with:

```bash
python3 - <<'PY'
import json
from pathlib import Path
data = json.loads(Path('assets/devopsdays_2026_sessions.json').read_text(encoding='utf-8'))
Path('web-app/data.js').write_text('window.SUMMIT_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n', encoding='utf-8')
PY
```
