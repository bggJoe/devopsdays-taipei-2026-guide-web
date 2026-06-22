# Repository Workflow Instructions

## Branch policy

- Default working branch is `work`.
- Do **not** create or switch to a new branch unless the user explicitly asks for a new branch.
- Before making code or data changes, check the current branch with `git status --short --branch`.
- If a `main` or `origin/main` reference is available, align `work` with the latest main before starting new work:
  - Prefer `git fetch origin` followed by `git rebase origin/main` when an upstream exists.
  - If only a local `main` exists, rebase `work` on `main`.
- If neither `main` nor `origin/main` exists in the environment, do not invent a base branch. Continue on `work` and clearly report that main alignment could not be performed.

## Required main alignment workflow

To avoid PR branches starting from stale main commits, perform this check before every code/data change when remote refs are available:

1. Run `git status --short --branch` and confirm the working tree is clean or only contains intended user changes.
2. Run `git fetch origin` when an `origin` remote exists.
3. Ensure the working branch is based on the latest `origin/main` before editing:
   - If continuing the existing `work` branch, run `git rebase origin/main` or otherwise fast-forward/align `work` to latest main.
   - If GitHub/Codex created a temporary PR branch, do not continue work on that stale branch unless it has first been rebased onto latest `origin/main`.
4. If rebase/merge reports conflicts before any requested code change, stop and report the conflict instead of adding more commits on top of a stale branch.
5. If no `origin/main` or `main` ref exists in the execution environment, explicitly report that main alignment could not be verified and do not claim that the branch was updated from main.

Expected graph shape: one current `work`/PR branch should diverge from the latest `main` tip. Avoid accumulating many parallel `codex/...` branches that each diverge from different historical main commits.

## PR / conflict avoidance

- Treat follow-up review fixes as updates to the same `work` branch, not as separate feature branches.
- Avoid opening parallel PR branches for follow-up fixes unless the user explicitly requests that workflow.
- If a previous Codex PR was merged, start the next task from the updated `main`/`origin/main` tip before making changes; do not branch from the old pre-merge commit.
- Keep generated files synchronized with their source files in the same commit. For this repo, if `assets/devopsdays_2026_sessions.json` changes, regenerate `web-app/data.js` in the same change.
- Do not regenerate `web-app/data.js` when only HTML/CSS/JS UI code changes and source session data is unchanged.
- Keep commits focused and mention whether source data and generated data were both changed.

## Static web app constraints

- The web app must remain runnable by opening `web-app/index.html` directly in a browser.
- Do not introduce a required build step unless the user explicitly approves it.
- Do not use CDN-only dependencies for required runtime behavior.
- Session data consumed by the browser should continue to come from `web-app/data.js` via `window.SUMMIT_DATA` to avoid `file://` fetch/CORS issues.
