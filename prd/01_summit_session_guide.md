# DevOpsDays Taipei 2026：Session 導讀與參加建議

> 目標讀者：公司內部資安代表，負責 DevSecOps / RAI（LLMSecOps、AgentSecOps），同時參與處內 AI 開發小組。  
> 使用方式：先讀大會概要與分組導讀，再依「推薦路線」進場；每一堂推薦場次都有聆聽目標與 checklist，可直接作為會後整理模板。

## 大會簡介（300 字內）

DevOpsDays Taipei 2026 於 **2026/6/25–6/26** 在 **臺北文創大樓 6 樓** 舉辦，是年度 DevOps 社群大會。大會聚集開發、維運、資安、平台工程與 AI 實務者，主軸涵蓋 DevOps 協作、開發／維運／安全／AI 整合，以及 AI 時代下的軟體交付轉型。對你的角色而言，最值得關注的是：AI 進入 SDLC 後，如何重塑 DevSecOps、AI AppSec、供應鏈安全、SBOM 修補、Agent 權限治理，以及 AI Coding 團隊流程。

## 題目與評分模型

| 題目 | 基礎分 | 魔力 | 判讀方式 |
| --- | --- | --- | --- |
| DevSecOps | 3 | 0 | 安全開發流程、漏洞治理、安全掃描、供應鏈安全、權限治理。 |
| AI 資安 | 3 | +1 | LLMSecOps、AgentSecOps、AI AppSec、AI supply chain、AI governance。 |
| AI Coding | 2 | +1 | AI Agent coding、SDD、AI reviewer、AI testing、AI-native delivery。 |
| DevEx | 1 | 0 | 開發者體驗、平台工程、release automation、CI/CD 可用性。 |

- **分數**：用來衡量與你職責的直接價值。
- **魔力**：用來凸顯 AI 資安與 AI Coding 的探索價值；同分時優先選魔力高的場次。
- **多重命中**：一堂 session 可同時命中多個題目。例如「AI 時代的 DevSecOps 變革」同時命中 DevSecOps、AI 資安、AI Coding，因此估為 8 分／M2。
- **注意**：分數是基於官方議程標題、摘要與你的背景所做的實務判讀，不是主辦單位評分。

## 分組原則

我不是按議程場地分組，而是按「你回公司後能帶回什麼能力」分組：

### A. DevSecOps／AI 資安／供應鏈安全

最貼近公司內部資安代表、DevSecOps／RAI、LLMSecOps、AgentSecOps 的角色。重點是把 AI 引入 SDLC 後，如何補上安全治理、漏洞優先排序、供應鏈信任、SBOM、自動化修補與授權模型。
### B. AI Coding／Agentic SDLC／SDD／AI Testing

支撐處內 AI 開發小組，重點是把 AI Coding 從個人效率工具提升為團隊級流程：規格、上下文、測試、PR、CI/CD、code review、品質閘門與人類決策點。
### C. Platform／SRE／Observability／DevEx

補足 AI 與安全落地後，團隊如何穩定交付，包括平台工程、SRE、release、observability、DataOps、ChatOps 與開發者體驗。
### D. Keynote／文化／組織／低題目相關

不一定直接得分高，但可校準大會趨勢、組織文化、AI 導入責任與 DevOps 管理視角。

# 全議程導讀

## A. DevSecOps／AI 資安／供應鏈安全

最貼近公司內部資安代表、DevSecOps／RAI、LLMSecOps、AgentSecOps 的角色。重點是把 AI 引入 SDLC 後，如何補上安全治理、漏洞優先排序、供應鏈信任、SBOM、自動化修補與授權模型。
| 時間 | 型態 | Session | 內容導讀 | 關鍵字 | 題目相關 | 分／魔力 |
| --- | --- | --- | --- | --- | --- | --- |
| Day 1 13:30-14:10 | Talk | [DevSecOps 漏洞發現、追蹤與數據統計自動化分享！](https://devopsdays.tw/2026/session/4726) | 從 Shift Left 後的漏洞治理痛點出發，串起 SCA/SAST、DefectDojo、Jira、統計報表與追蹤流程。 | DevSecOps、SAST、SCA、DefectDojo、Jira、Metrics | DevSecOps | 3／M0 |
| Day 1 13:30-15:00 | Workshop | 90 秒就裝進你的 CI——動手攔下一次真實的 npm 供應鏈攻擊（JFrog Curation 實作） | 從 CI/CD 供應鏈攻擊切入，適合補足 package、dependency、pipeline 風險意識。 | CI/CD、npm、Supply Chain Attack、JFrog Curation | DevSecOps | 3／M0 |
| Day 1 13:30-15:00 | Workshop | [AI 時代的應用安全：邁向 Mythos Ready 的實務策略](https://devopsdays.tw/2026/session/4846) | 聚焦 AI-driven／agentic 弱點偵測擴大攻擊面，強化 AST 覆蓋、自動化、供應鏈風險可視化與 AI 輔助修補。 | AI AppSec、AST、Supply Chain、AI Remediation、Agentic Security | DevSecOps、AI 資安 | 6／M1 |
| Day 1 15:30-17:00 | Workshop | [ReBAC with OpenFGA, Powered by MCP](https://www.devopsdays.tw/2026/session/4737) | 把授權視為基礎建設，透過 ReBAC、OpenFGA 與 MCP／AI 輔助撰寫權限規則，適合延伸到 Agent 權限治理。 | ReBAC、OpenFGA、MCP、Authorization、Agent Permission | DevSecOps、AI 資安 | 6／M1 |
| Day 2 13:30-14:10 | Talk | [AI 時代的 DevSecOps 變革：安全開發流程的重塑與實踐](https://www.devopsdays.tw/2026/session/4746) | 以 SSDF、安全程式碼模板與 AI Agent 改造需求、PRD、原始碼審查、QA、滲測初判與誤報調查。全場最貼近 DevSecOps／RAI 的場次。 | DevSecOps、SSDF、AI Agent、Secure SDLC、AI Review | DevSecOps、AI 資安、AI Coding | 8／M2 |
| Day 2 14:30-15:10 | Talk | [淨化 AI 軟體供應鏈：攔截惡意開源套件，把 Repository 變成企業信任中心](https://www.devopsdays.tw/2026/session/4768) | 討論 AI 時代更快、更廣、更難稽核的風險，涵蓋惡意 NPM、LLM 模型、MCP 工具、資料外洩、RCE、SBOM、provenance 與信任證據。 | AI Supply Chain、MCP、SBOM、Provenance、Repository Trust | DevSecOps、AI 資安 | 6／M1 |
| Day 2 15:30-15:55 | Talk | [AI driven SBOM & Remediation](https://devopsdays.tw/2026/session/4755) | 用 AI Agent 自動化 SBOM 驗證、reachability analysis、修補建議與閉環 DevSecOps，目標是降低 MTTR 與安全瓶頸。 | SBOM、Remediation、Reachability Analysis、MTTR、AI Agent | DevSecOps、AI 資安 | 6／M1 |
| Day 2 17:00-17:40 | Talk | [漏洞這麼多哪裡修得完：DevOps 實務中的漏洞決策與優先排序](https://devopsdays.tw/2026/session/4747) | 解決 CVE 爆量與單靠 CVSS 的缺陷，導入 CVSS、EPSS、CISA KEV、SLA、break build 策略與開發者信任。 | CVE、CVSS、EPSS、CISA KEV、SLA、Break Build | DevSecOps | 3／M0 |
| Day 2 17:00-17:40 | Talk | [打造 Agent Production Day 2 Operations](https://www.devopsdays.tw/2026/session/4739) | 從 LLM／Agent 上線後的觀測與除錯切入，關注 tool call 失敗、輸出品質漂移、trace 與 production readiness。 | AgentSecOps、LLM Observability、Tool Call、Production Readiness | AI 資安 | 3／M1 |
## B. AI Coding／Agentic SDLC／SDD／AI Testing

支撐處內 AI 開發小組，重點是把 AI Coding 從個人效率工具提升為團隊級流程：規格、上下文、測試、PR、CI/CD、code review、品質閘門與人類決策點。
| 時間 | 型態 | Session | 內容導讀 | 關鍵字 | 題目相關 | 分／魔力 |
| --- | --- | --- | --- | --- | --- | --- |
| Day 1 11:00-12:00 | Keynote | 當 Coding Agent 能寫 Code，架構師該做什麼改變？ | 從架構師角色重新定位 AI Coding；重點在 AI 生成程式碼後的架構治理、品質守門與系統設計責任。 | Coding Agent、Architecture、AI Coding、Governance | AI Coding、DevEx | 3／M1 |
| Day 1 11:00-12:30 | Workshop | [devops 交給 skill + ai agent 一條龍弄到好吧](https://devopsdays.tw/2026/session/4700) | 透過 AI DevOps Agents、IaC、Terraform、Helm、GitOps、Kustomize、K8s 做端到端操作，並納入安全掃描與審查思維。 | AI Agent、IaC、GitOps、Kubernetes、Security Scan | DevSecOps、AI Coding、DevEx | 6／M1 |
| Day 1 12:45-13:10 | Bootcamp | 以 AI Agent 重構 SDLC：建構企業級自動軟體交付流程 | 說明 AI Agent 在需求、規格、coding、code review、測試、任務流、DoD 與 acceptance criteria 的角色。 | Agentic SDLC、DoD、Acceptance Criteria、Code Review | AI Coding、DevEx | 3／M1 |
| Day 1 14:30-15:10 | Talk | 以 kagent × A2A 構築自主協作的 Agentic K8s | 將 Agentic AI 帶入 Kubernetes 操作與自動化，偏平台與 AI Ops。 | Agentic K8s、A2A、Kubernetes、AI Ops | AI Coding、DevEx | 3／M1 |
| Day 1 15:30-15:55 | Talk | AI 輔助遺留系統現代化的經驗分享 | 用 AI 協助 legacy modernization，適合需要改造舊系統、降低理解成本的團隊。 | Legacy Modernization、AI Coding、Cloud Migration | AI Coding、DevEx | 3／M1 |
| Day 1 15:30-16:10 | Bootcamp | [工程師的新角色：掌控 AI 從需求到程式碼](https://www.devopsdays.tw/2026/session/4717) | 探討 AI 從需求到開發的風險，避免生成速度超過架構承載，強調規格、上下文與人類判斷。 | AI Coding、Spec、Context、Tech Debt、Human Judgment | AI Coding、DevEx | 3／M1 |
| Day 1 16:15-16:40 | Talk | GSI 協議：提升 AI 驅動 SDD 的效率與敏捷性 | 以規格作為 AI 開發控制面，避免只靠 prompt 的不可控開發。 | GSI、SDD、AI Coding、Spec | AI Coding、DevEx | 3／M1 |
| Day 1 16:15-16:40 | Talk | [基於 Agent Skills、MCP 與 Playwright 的全鏈路智慧測試實踐](https://devopsdays.tw/2026/session/4714) | 用 Agent Skills、Playwright Agent 與 MCP 形成測試案例生成、腳本生成、缺陷修復的閉環。 | AI Testing、MCP、Playwright、Closed Loop、Agent Skills | AI Coding、DevEx | 3／M1 |
| Day 1 16:15-16:40 | Talk | [從 Vibe Coding 到 SDD：AI 時代的小團隊開發流程實驗](https://devopsdays.tw/2026/session/4753) | 分享 Vibe Coding、RD refactor、SDD 三階段框架，建立 playbook 與 checklist。 | Vibe Coding、SDD、Team Playbook、AI Coding | AI Coding、DevEx | 3／M1 |
| Day 1 17:00-17:40 | Talk | [在 DevOps 生命週期的 AI 輔助驅動](https://devopsdays.tw/2026/speaker/628) | 強調 AI 不只是 vibe coding，而是規劃、開發、驗證、維運中的協作工程師，也提醒避免為 AI 而 AI。 | AI DevOps、Lifecycle、Governance、AI Coding | AI Coding、DevEx | 3／M1 |
| Day 1 17:00-17:40 | Talk | 真。無人值守！團隊的怪物新人：OpenClaw | 將 AI Agent 視為團隊成員，重點偏協作、任務切分與落地。 | OpenClaw、AI Agent、Team Collaboration | AI Coding、DevEx | 3／M1 |
| Day 2 09:30-11:00 | Workshop | [從開發到部署全都交給 AI：實作 AI 驅動的自動化流程](https://devopsdays.tw/2026/session/4706) | 實作 AI 產生程式、code review、修正、CI/CD 診斷與部署；涵蓋安全掃描、PR review 與 human-in-the-loop。 | AI Coding、CI/CD、Security Scan、PR Review、Human-in-the-loop | DevSecOps、AI Coding、DevEx | 6／M1 |
| Day 2 11:30-13:00 | Workshop | Google ADK 即時語音串流實現 GCP 平台與 DevOps 的整合應用 | 偏 AI Agent 與雲端整合，適合探索多模態／語音操作 DevOps。 | Google ADK、Voice Agent、GCP、DevOps Agent | AI Coding、DevEx | 3／M1 |
| Day 2 11:30-13:00 | Workshop | [AI Agent 上雲實戰：用 Google ADK + Cloud Run 打造自動化測試程式碼審查員](https://devopsdays.tw/2026/session/4736) | 用 Google ADK 與 Cloud Run 建立自動化測試／code reviewer API，適合把 AI reviewer 產品化。 | AI Agent、Code Review、Cloud Run、Google ADK、Testing | AI Coding、DevEx | 3／M1 |
| Day 2 13:30-14:10 | Talk | [AI 不只幫你寫 Code：當專案從 300 暴增到 1500，我們如何撐住 DevOps](https://www.devopsdays.tw/2026/session/4709) | 分享 AI Agent 讓專案量擴張後，如何用 AI PR 架構／安全審查與 GitOps-driven MCP 流程因應。 | AI Coding、AI Review、GitOps、MCP、Scale | DevSecOps、AI Coding、DevEx | 6／M1 |
| Day 2 13:30-15:00 | Workshop | [AI-DD Spec Driven Develop 工作坊](https://www.devopsdays.tw/2026/session/4743) | 解決 AI 任意改架構、寫出不可建置程式碼的問題，以 system boundary、context、spec、acceptance criteria 管理人機協作。 | SDD、Acceptance Criteria、AI Coding、Spec | AI Coding、DevEx | 3／M1 |
| Day 2 14:30-15:10 | Talk | 從寫到管：打造 GCP DevOps Agent 的實戰紀錄 | 偏 GCP 上的 Agentic DevOps，適合雲端平台與 AI automation 探索。 | GCP、DevOps Agent、AI Automation | AI Coding、DevEx | 3／M1 |
| Day 2 15:30-15:55 | Talk | LLM 驅動的 ML Pipeline as Code | 把 Pipeline as Code 延伸到 LLM／ML 工作流，偏 MLOps 與可重現性。 | LLMOps、MLOps、Pipeline as Code | AI Coding、DevEx | 3／M1 |
| Day 2 15:30-17:00 | Workshop | [你的 Repo 會自己上班了：用 GitHub Agentic Workflows 打造 Continuous AI](https://devopsdays.tw/2026/session/4756) | 用 GitHub Agentic Workflows 串接 Copilot、Claude、Codex，處理 CI 診斷、issue triage、文件同步與 repo 健康報告。 | Continuous AI、GitHub Actions、Copilot、Claude、Codex | AI Coding、DevEx | 3／M1 |
| Day 2 17:00-17:40 | Talk | [從 Vibe Coding 到 AI-Native DevOps](https://www.devopsdays.tw/2026/session/4738) | 從 AI 輔助 coding 擴展到需求、測試、code review、PR 與交付流程，人類仍負責問題定義與決策。 | AI-Native DevOps、Vibe Coding、PR、AI Coding | AI Coding、DevEx | 3／M1 |
| Day 2 17:00-17:40 | Talk | [規格驅動的 AI 強化 DevOps](https://www.devopsdays.tw/2026/session/4764) | 用 SDD 把重複、明確、可驗收的任務轉成 AI 自動化流程，包含 Done criteria、SOP、runbook 與治理。 | SDD、Runbook、AI Automation、DevOps、Done Criteria | AI Coding、DevEx | 3／M1 |
## C. Platform／SRE／Observability／DevEx

補足 AI 與安全落地後，團隊如何穩定交付，包括平台工程、SRE、release、observability、DataOps、ChatOps 與開發者體驗。
| 時間 | 型態 | Session | 內容導讀 | 關鍵字 | 題目相關 | 分／魔力 |
| --- | --- | --- | --- | --- | --- | --- |
| Day 1 14:30-15:10 | Talk | 部署零停機的秘密：Kamal 流量切換原理拆解 | 部署與流量切換實務，與安全／AI 關聯較低。 | Deployment、Kamal、Zero Downtime | 低／無直接命中 | 0／M0 |
| Day 1 14:30-15:10 | Talk | 從產品團隊看，十年打造的 Infra Platform | 平台工程與內部平台長期演化，對 DevEx 與治理底座有間接價值。 | Platform Engineering、Infra Platform、DevEx | DevEx | 1／M0 |
| Day 1 15:30-15:55 | Talk | Platform Engineering 遇上 GenAI | 平台工程結合 GenAI，偏內部開發平台與體驗升級。 | Platform Engineering、GenAI、DevEx | DevEx | 1／M0 |
| Day 1 15:30-15:55 | Talk | 當 AI Agent 接管你的 On-Call | AI Agent 用於 on-call／SRE 情境，偏維運自動化與 incident response。 | SRE、On-call、AI Ops、Incident | DevEx | 1／M0 |
| Day 1 15:30-17:00 | Workshop | 企業級 CI/CD 設計框架經驗分享 | 企業 CI/CD 架構設計，對 DevSecOps 流程治理有基礎價值。 | CI/CD、Enterprise Pipeline、Delivery Governance | DevEx | 1／M0 |
| Day 1 17:00-17:40 | Talk | 一個人的 DevOps：從程式碼到 Production | 小團隊如何用 DevOps 改善交付，偏 DevEx／效率。 | Small Team、DevOps、Production、DevEx | DevEx | 1／M0 |
| Day 2 09:30-11:00 | Workshop | 不再只是寫腳本！讓 AI 代理人成為你的 SRE 最佳夥伴 | AI 用於 SRE 的實作與限制，偏 incident／ops。 | SRE、AI Ops、Incident | DevEx | 1／M0 |
| Day 2 09:30-11:00 | Workshop | 從 MCP 到 Agentic AI：Windows 維運自動化實戰 | 用 MCP／Agentic AI 管理 Windows 維運，偏 IT Ops。 | MCP、Agentic AI、Windows Ops | DevEx | 1／M0 |
| Day 2 11:30-13:00 | Workshop | Go 整合 ECS Service Connect 與 LLM 實作 AIOps 自動化決策 | 用 Go、ECS、LLM 做 AIOps，適合維運智慧化探索。 | AIOps、Go、ECS、LLM | DevEx | 1／M0 |
| Day 2 13:30-14:10 | Talk | 以趨勢科技為例，如何實現低成本高效率的 Observability 2.0 | Observability 主題，對安全與 AI 相關度較低。 | Observability、Cost Efficiency | 低／無直接命中 | 0／M0 |
| Day 2 13:30-14:10 | Talk | 走出混沌的 DevOps 時代：智慧協作 | 產品與平台協作，偏 DevEx／平台治理。 | Platform Engineering、Collaboration、DevEx | DevEx | 1／M0 |
| Day 2 13:30-14:10 | Talk | 告別 RCA 撰寫地獄：利用 MCP 讓 AI 替你完成維運最後一哩路 | 用 MCP 協助 RCA 流程，偏 incident analysis。 | MCP、RCA、SRE、AIOps | DevEx | 1／M0 |
| Day 2 14:30-15:10 | Talk | Alert 分析進化史：從 Excel 到 AI Agent，6 個月的迭代與妥協 | 把告警分析從手工表格轉成 AI Agent，偏維運自動化。 | Alert、AI Agent、AIOps | DevEx | 1／M0 |
| Day 2 14:30-15:10 | Talk | Shipping Infrastructure Safely with Modern IaC and CI/CD Patterns | 現代 IaC 與 CI/CD 安全交付模式，對 DevSecOps 底座有幫助。 | IaC、CI/CD、Safe Delivery、Infrastructure | DevEx | 1／M0 |
| Day 2 15:30-15:55 | Talk | 每分鐘超過 5 億筆可觀測性服務 | 偏 observability 架構與高流量可觀測性服務。 | Observability、Metrics、Scale | 低／無直接命中 | 0／M0 |
| Day 2 15:30-15:55 | Talk | 打造金融業 SRE Portal：在高監管環境下實現自助治理與可靠性工程 | 高監管場域 SRE portal，偏治理、維運體驗。 | SRE Portal、Regulated Industry、Self-service Governance | DevEx | 1／M0 |
| Day 2 15:30-15:55 | Talk | OTel Lakehouse: From O11y to AIOps | OpenTelemetry 與 Lakehouse 打造 AIOps，偏 observability 架構。 | OTel、Lakehouse、AIOps、Observability | DevEx | 1／M0 |
| Day 2 16:15-16:40 | Talk | CI/CD 也需要自己的 Observability：Centralized Pipeline 的觀察與實踐 | 觀測 CI/CD pipeline，適合補足交付可靠性。 | CI/CD Observability、Pipeline、Reliability | DevEx | 1／M0 |
| Day 2 16:15-16:40 | Talk | 不是我的系統，但與我有關！團隊從「各自為政」到「群體決策」的協作實踐 | 團隊決策工具與流程，偏協作體驗。 | Collaboration、Decision Platform、Team | DevEx | 1／M0 |
| Day 2 16:15-16:40 | Talk | [當 Release 不再靠人工：自動化版本治理與 DevX 實戰](https://www.devopsdays.tw/2026/session/4760) | 用 Conventional Commits、release note、自動版號、tag alignment 改善 release DevX 與可追溯性。 | Release、DevX、Traceability、Versioning | DevEx | 1／M0 |
| Day 2 16:15-16:40 | Talk | DataOps + ChatOps：打造跨團隊協作的控制面 | 把資料管線和 ChatOps 結合，偏資料工程協作。 | DataOps、ChatOps、Collaboration | DevEx | 1／M0 |
## D. Keynote／文化／組織／低題目相關

不一定直接得分高，但可校準大會趨勢、組織文化、AI 導入責任與 DevOps 管理視角。
| 時間 | 型態 | Session | 內容導讀 | 關鍵字 | 題目相關 | 分／魔力 |
| --- | --- | --- | --- | --- | --- | --- |
| Day 1 09:30-09:40 | Opening | Welcome Opening | 大會開場，適合快速掌握活動節奏與公告。 | Opening | 低／無直接命中 | 0／M0 |
| Day 1 09:40-10:40 | Keynote | 從多模型視角談與 AI 共智 | 從多模型協作角度理解 AI 應用趨勢，適合作為兩天 AI／DevOps／治理議題的宏觀暖身。 | 多模型、AI 共智、AI Strategy | DevEx | 1／M0 |
| Day 1 09:40-12:40 | Workshop | agile boot camp 積木敏捷體驗營 | 以體驗方式理解敏捷與團隊協作；與目標題目間接相關。 | Agile、Team Collaboration | DevEx | 1／M0 |
| Day 1 13:30-14:10 | Talk | 當 AI 帶來思考外包 x 認知負債，要如何不讓 AI 奴役你 | 探討 AI 導入後的認知負債與人類判斷退化，對 AI governance 有背景價值。 | AI Literacy、Cognitive Debt、Governance | DevEx | 1／M0 |
| Day 1 13:30-14:10 | Talk | AI 落地生存法則：DevOps、DataOps 與 MLOps 密不可分的 ML 專案現場 | 從 DevOps、DataOps、MLOps 整合看 AI 專案落地；偏流程與組織整合。 | DevOps、DataOps、MLOps、AI Delivery | DevEx | 1／M0 |
| Day 1 13:30-14:10 | Bootcamp | AI 讓效率提升，但誰來保護品質的人？ | AI 提效後的品質責任與角色變化，適合補足導入 AI Coding 的治理觀。 | Quality、AI Governance、Human Responsibility | DevEx | 1／M0 |
| Day 1 14:30-15:10 | Bootcamp | Flow 不死：AI 時代 DevOps 的不變本質 | 從 DevOps flow、隊列與組織瓶頸切入，適合補足方法論背景。 | Flow、Queue、DevOps Culture | DevEx | 1／M0 |
| Day 1 17:00-17:40 | Bootcamp | 不用擔心被 AI 裁員，因為出事還是你要負責 | 從組織責任與效率迷思切入，偏管理與文化。 | AI Responsibility、Org Change、Quality | DevEx | 1／M0 |
| Day 2 09:30-09:40 | Opening | Welcome Opening | 第二天開場。 | Opening | 低／無直接命中 | 0／M0 |
| Day 2 09:40-10:40 | Keynote | Quality Management Systems in the Agile Era: Balancing ISO 9001 Compliance and Agility | AI 未來下的品質管理系統與流程問題，偏管理治理。 | QMS、ISO 9001、Agility、Quality | 低／無直接命中 | 0／M0 |
| Day 2 11:00-12:00 | Keynote | OKR and DevOps — Why OKRs Fail, and DevOps as the Practice to Make Them Work | DevOps 與 OKR 管理視角，對團隊導入 AI／安全治理可作為目標管理參考。 | OKR、DevOps、Management | DevEx | 1／M0 |
| Day 2 14:30-15:10 | Talk | [GenAI Maturity Model：打造可監控、可治理的 AI 系統](https://devopsdays.tw/2026/session/4740) | 從技術 POC 到企業級治理，涵蓋 GenAI observability、Prompt、Agent decision、成本、延遲與平台成熟度。 | GenAI Governance、Observability、Maturity Model、AI Platform | AI 資安 | 3／M1 |
| Day 2 17:00-17:40 | Talk | DevOps 衰退？從 CIO 大調查看 AI 原生浪潮的衝擊 | 從 CIO 視角看 DevOps 衰退、AI 原生浪潮與組織問題。 | CIO、DevOps Trend、AI Native | 低／無直接命中 | 0／M0 |

# 參加建議總結

主推薦：**魔力最高中的分數最高路線**。  
這條路線估算總值為 **58 分／魔力 13**，適合同時完成兩個目標：

1. 以 DevSecOps／RAI 代表身份，帶回 AI DevSecOps、AI supply chain、SBOM remediation、Agent 權限治理與漏洞治理方法。
2. 以 AI 開發小組成員身份，帶回 Agentic SDLC、AI Coding、AI testing、AI reviewer、SDD 與 release traceability 的導入方法。

## 兩天總目標

**Day 1 學 AI Agent 如何進入 SDLC 與測試，Day 2 學 AI DevSecOps、AI supply chain、SBOM remediation 與 release traceability。**

會後建議產出：

- AI DevSecOps reference architecture
- AI Coding 安全治理 checklist
- Agentic DevOps / AI reviewer PoC backlog
- AI supply chain inventory checklist
- SBOM remediation workflow
- Release traceability policy

## 推薦路線：不衝突 session

| 時間 | 場地 | 型態 | 建議參加 | 分／魔力 | 這堂設定的目標 |
| --- | --- | --- | --- | --- | --- |
| Day 1 09:40-10:40 | DE 會議室 | Keynote | 從多模型視角談與 AI 共智 | 1／M0 | 建立多模型協作視角，判斷不同模型在開發、審查、安全分析中的分工。 |
| Day 1 11:00-12:30 | 605+606 會議室 | Workshop | [devops 交給 skill + ai agent 一條龍弄到好吧](https://devopsdays.tw/2026/session/4700) | 6／M1 | 理解 AI Agent 如何操作 IaC、GitOps 與 K8s，並把安全掃描納入自動化流程。 |
| Day 1 12:45-13:10 | DE 會議室 | Bootcamp | 以 AI Agent 重構 SDLC：建構企業級自動軟體交付流程 | 3／M1 | 建立 Agentic SDLC 的流程語言，定義 AI 在需求、規格、code review、測試與驗收中的邊界。 |
| Day 1 13:30-15:00 | 603+604 會議室 | Workshop | [AI 時代的應用安全：邁向 Mythos Ready 的實務策略](https://devopsdays.tw/2026/session/4846) | 6／M1 | 把 AI AppSec、AST、自動化弱掃與供應鏈可視化串成安全策略。 |
| Day 1 15:30-16:10 | 607+608 會議室 | Bootcamp | [工程師的新角色：掌控 AI 從需求到程式碼](https://www.devopsdays.tw/2026/session/4717) | 3／M1 | 避免 AI Coding 變成快速產生技術債，建立需求、上下文、規格與人類判斷框架。 |
| Day 1 16:15-16:40 | ABC 會議室 | Talk | [基於 Agent Skills、MCP 與 Playwright 的全鏈路智慧測試實踐](https://devopsdays.tw/2026/session/4714) | 3／M1 | 把 AI Coding 延伸到測試案例、測試腳本與缺陷修復閉環。 |
| Day 1 17:00-17:40 | DE 會議室 | Talk | [在 DevOps 生命週期的 AI 輔助驅動](https://devopsdays.tw/2026/speaker/628) | 3／M1 | 用生命週期角度收斂 Day 1 學到的工具，轉成 plan-dev-validate-ops adoption map。 |
| Day 2 09:30-11:00 | 607+608 會議室 | Workshop | [從開發到部署全都交給 AI：實作 AI 驅動的自動化流程](https://devopsdays.tw/2026/session/4706) | 6／M1 | 學習端到端 AI 開發交付迴圈，理解 AI 何時寫 code、何時 review、何時修 CI/CD。 |
| Day 2 11:30-13:00 | 603+604 會議室 | Workshop | [AI Agent 上雲實戰：用 Google ADK + Cloud Run 打造自動化測試程式碼審查員](https://devopsdays.tw/2026/session/4736) | 3／M1 | 把 AI reviewer 從個人工具變成雲端服務。 |
| Day 2 13:30-14:10 | 605+606 會議室 | Talk | [AI 時代的 DevSecOps 變革：安全開發流程的重塑與實踐](https://www.devopsdays.tw/2026/session/4746) | 8／M2 | 定義公司下一階段 AI DevSecOps／RAI 工作藍圖。 |
| Day 2 14:30-15:10 | F 會議室 | Talk | [淨化 AI 軟體供應鏈：攔截惡意開源套件，把 Repository 變成企業信任中心](https://www.devopsdays.tw/2026/session/4768) | 6／M1 | 建立 LLMSecOps／AgentSecOps 的供應鏈信任模型。 |
| Day 2 15:30-15:55 | 605+606 會議室 | Talk | [AI driven SBOM & Remediation](https://devopsdays.tw/2026/session/4755) | 6／M1 | 把 SBOM 從被動盤點變成可行動的修補閉環。 |
| Day 2 16:15-16:40 | F 會議室 | Talk | [當 Release 不再靠人工：自動化版本治理與 DevX 實戰](https://www.devopsdays.tw/2026/session/4760) | 1／M0 | 補上 release DevX、traceability 與治理證據鏈。 |
| Day 2 17:00-17:40 | F 會議室 | Talk | [規格驅動的 AI 強化 DevOps](https://www.devopsdays.tw/2026/session/4764) | 3／M1 | 把 SOP／runbook 轉成可驗收、可治理的 AI 自動化任務。 |

## 備案替換

| 替換掉 | 改聽 | 適用情境 |
| --- | --- | --- |
| d1-bootcamp-engineer-role-ai + d1-agent-skills-mcp-playwright | d1-workshop-rebac-openfga-mcp | 若回公司第一優先是 Agent 權限治理與授權模型，犧牲部分 AI Coding／Testing，換取 ReBAC、OpenFGA、MCP 的資安架構觀。 |
| d2-spec-driven-ai-devops | d2-vulnerability-prioritization | 若近期要推公司漏洞治理制度，將 SDD／AI automation 換成 CVE 優先排序、SLA、break build 與開發者信任。 |
| d2-release-devx | d2-agent-production-day2 | 若更關注 Agent 上線後 Day 2 Operations，可用 release DevX 場次換取 LLM/Agent production readiness。 |
# 推薦場次聆聽目標與 checklist

## 1. 從多模型視角談與 AI 共智

- 時間：Day 1 2026-06-25 09:40-10:40
- 場地：DE 會議室
- 分／魔力：1／M0
- 目標：建立多模型協作視角，判斷不同模型在開發、審查、安全分析中的分工。

Checklist：
- [ ] 有哪些模型分工型態適合企業內部開發流程？
- [ ] 人類判斷在哪些節點必須保留？
- [ ] 多模型協作會帶來哪些治理與紀錄需求？

## 2. devops 交給 skill + ai agent 一條龍弄到好吧

- 時間：Day 1 2026-06-25 11:00-12:30
- 場地：605+606 會議室
- 分／魔力：6／M1
- 目標：理解 AI Agent 如何操作 IaC、GitOps 與 K8s，並把安全掃描納入自動化流程。

Checklist：
- [ ] Terraform／Helm／Kustomize 操作如何拆成 agent skills？
- [ ] 哪些步驟需要 human approval？
- [ ] security scan、secret audit、manifest review 放在哪裡？
- [ ] 是否可回公司做 AI DevOps Agent + 安全檢查 PoC？

## 3. 以 AI Agent 重構 SDLC：建構企業級自動軟體交付流程

- 時間：Day 1 2026-06-25 12:45-13:10
- 場地：DE 會議室
- 分／魔力：3／M1
- 目標：建立 Agentic SDLC 的流程語言，定義 AI 在需求、規格、code review、測試與驗收中的邊界。

Checklist：
- [ ] AI Agent 在需求、規格、coding、review、testing 的責任邊界是什麼？
- [ ] DoD 與 acceptance criteria 如何寫給 AI 使用？
- [ ] 哪些風險要設 gate，而不是靠事後 review？
- [ ] 是否能畫出公司版 Agentic SDLC？

## 4. AI 時代的應用安全：邁向 Mythos Ready 的實務策略

- 時間：Day 1 2026-06-25 13:30-15:00
- 場地：603+604 會議室
- 分／魔力：6／M1
- 目標：把 AI AppSec、AST、自動化弱掃與供應鏈可視化串成安全策略。

Checklist：
- [ ] AI／Agentic application 新增了哪些攻擊面？
- [ ] AST coverage 如何量測？
- [ ] 哪些 AppSec 檢查可以 shift left？
- [ ] AI 修補建議要如何驗證，避免自動引入新風險？

## 5. 工程師的新角色：掌控 AI 從需求到程式碼

- 時間：Day 1 2026-06-25 15:30-16:10
- 場地：607+608 會議室
- 分／魔力：3／M1
- 目標：避免 AI Coding 變成快速產生技術債，建立需求、上下文、規格與人類判斷框架。

Checklist：
- [ ] 需求如何轉成 AI 可用的 spec？
- [ ] context package 應包含哪些資訊？
- [ ] hallucination、架構偏移、不可維護程式碼如何防止？
- [ ] 人類工程師的判斷點應保留在哪裡？

## 6. 基於 Agent Skills、MCP 與 Playwright 的全鏈路智慧測試實踐

- 時間：Day 1 2026-06-25 16:15-16:40
- 場地：ABC 會議室
- 分／魔力：3／M1
- 目標：把 AI Coding 延伸到測試案例、測試腳本與缺陷修復閉環。

Checklist：
- [ ] MCP 在測試流程中扮演什麼角色？
- [ ] Playwright Agent 如何產生與修正測試？
- [ ] 自動修復後要經過哪些驗證？
- [ ] 是否能形成『生成程式碼 → 測試 → 修正 → 再測』閉環？

## 7. 在 DevOps 生命週期的 AI 輔助驅動

- 時間：Day 1 2026-06-25 17:00-17:40
- 場地：DE 會議室
- 分／魔力：3／M1
- 目標：用生命週期角度收斂 Day 1 學到的工具，轉成 plan-dev-validate-ops adoption map。

Checklist：
- [ ] AI 在 plan、dev、validate、ops 各階段的價值與限制是什麼？
- [ ] 如何避免工具導入碎片化？
- [ ] 有哪些指標可以衡量 AI 導入真的改善交付？

## 8. 從開發到部署全都交給 AI：實作 AI 驅動的自動化流程

- 時間：Day 2 2026-06-26 09:30-11:00
- 場地：607+608 會議室
- 分／魔力：6／M1
- 目標：學習端到端 AI 開發交付迴圈，理解 AI 何時寫 code、何時 review、何時修 CI/CD。

Checklist：
- [ ] AI 何時寫 code，何時做 review，何時修 CI/CD？
- [ ] security scan 與 PR review 如何設在流程中？
- [ ] human start／human end 的控制點是什麼？
- [ ] 內部 AI 開發小組是否能複製這套流程？

## 9. AI Agent 上雲實戰：用 Google ADK + Cloud Run 打造自動化測試程式碼審查員

- 時間：Day 2 2026-06-26 11:30-13:00
- 場地：603+604 會議室
- 分／魔力：3／M1
- 目標：把 AI reviewer 從個人工具變成雲端服務。

Checklist：
- [ ] Google ADK 的 agent 架構如何設計？
- [ ] Cloud Run 部署 AI reviewer 的邊界與限制是什麼？
- [ ] reviewer API 如何接 PR／CI？
- [ ] 如何評估 reviewer 的準確率、誤報與漏報？

## 10. AI 時代的 DevSecOps 變革：安全開發流程的重塑與實踐

- 時間：Day 2 2026-06-26 13:30-14:10
- 場地：605+606 會議室
- 分／魔力：8／M2
- 目標：定義公司下一階段 AI DevSecOps／RAI 工作藍圖。

Checklist：
- [ ] SSDF 如何變成 AI Coding guardrail？
- [ ] AI Agent 如何協助 PRD、source review、QA、pentest 初判？
- [ ] 誤報調查如何自動化但不失控？
- [ ] 如何把漏洞發現回饋到安全模板與開發規範？

## 11. 淨化 AI 軟體供應鏈：攔截惡意開源套件，把 Repository 變成企業信任中心

- 時間：Day 2 2026-06-26 14:30-15:10
- 場地：F 會議室
- 分／魔力：6／M1
- 目標：建立 LLMSecOps／AgentSecOps 的供應鏈信任模型。

Checklist：
- [ ] 模型、dataset、package、MCP tool 是否都應納入 inventory？
- [ ] 惡意套件、惡意模型、惡意 MCP 工具如何阻擋？
- [ ] SBOM、provenance、policy、rollback 如何形成交付證據？
- [ ] 內部是否需要 AI artifact intake policy？

## 12. AI driven SBOM & Remediation

- 時間：Day 2 2026-06-26 15:30-15:55
- 場地：605+606 會議室
- 分／魔力：6／M1
- 目標：把 SBOM 從被動盤點變成可行動的修補閉環。

Checklist：
- [ ] SBOM validation 如何自動化？
- [ ] reachability analysis 如何幫助排序？
- [ ] 哪些修補可由 AI 建議，哪些不能自動套用？
- [ ] MTTR、誤修率、風險降低如何衡量？

## 13. 當 Release 不再靠人工：自動化版本治理與 DevX 實戰

- 時間：Day 2 2026-06-26 16:15-16:40
- 場地：F 會議室
- 分／魔力：1／M0
- 目標：補上 release DevX、traceability 與治理證據鏈。

Checklist：
- [ ] Conventional Commits 是否能支撐 release automation？
- [ ] release note、version、image tag、artifact 如何對齊？
- [ ] rollback 與稽核證據如何保留？
- [ ] 這套流程能否接到 DevSecOps 報表？

## 14. 規格驅動的 AI 強化 DevOps

- 時間：Day 2 2026-06-26 17:00-17:40
- 場地：F 會議室
- 分／魔力：3／M1
- 目標：把 SOP／runbook 轉成可驗收、可治理的 AI 自動化任務。

Checklist：
- [ ] 哪些 DevOps 任務符合重複、明確、低風險、可驗收？
- [ ] Done criteria 如何寫？
- [ ] AI 自動化流程如何接 human approval？
- [ ] 是否能產出公司第一批 Agentic DevOps use cases？


# Day-by-day 會後整理模板

## Day 1：Agentic SDLC + AI AppSec + AI Testing

要回答的核心問題：AI Agent 進入 SDLC 後，哪些地方能自動化、哪些地方要人審、哪些地方要資安閘門、哪些地方要測試閉環？

會後輸出草稿：

- Agentic SDLC 流程圖
- AI Coding 規格模板草案
- AI Testing / Playwright / MCP PoC 題目
- DevSecOps pipeline improvement backlog

## Day 2：AI DevSecOps + AI Supply Chain + SBOM Remediation

要回答的核心問題：如何把 AI reviewer、SSDF guardrail、AI supply chain control、SBOM remediation、release traceability 變成可落地的公司治理架構？

會後輸出草稿：

- AI DevSecOps reference architecture
- AI supply chain inventory checklist
- SBOM remediation workflow
- Release traceability policy
- Agentic DevOps PoC backlog

# 資料來源

- DevOpsDays Taipei 2026 官網：<https://devopsdays.tw/2026/>
- 議程頁：<https://devopsdays.tw/2026/agenda>
- 議程 PDF：<https://s.itho.me/vendor/2026/DODT2026Agenda/DevOpsDays%20Taipei_2026_Agenda.pdf>

> 官方 PDF 註明主辦單位保留變更議程之權利，實際議程以大會當日公告為主。
