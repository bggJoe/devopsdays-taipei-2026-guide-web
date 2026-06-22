window.SUMMIT_DATA = {
  "meta": {
    "title": "DevOpsDays Taipei 2026 Session Guide for DevSecOps / RAI / AI Coding",
    "summit": "DevOpsDays Taipei 2026",
    "dates": "2026/6/25–6/26",
    "venue": "臺北文創大樓 6 樓",
    "roleContext": "公司內部資安代表，負責 DevSecOps / RAI（LLMSecOps、AgentSecOps），同時為處內 AI 開發小組成員。",
    "overview": "DevOpsDays Taipei 2026 是年度 DevOps 社群大會，聚集開發、維運、資安、平台與 AI 實務者，主軸涵蓋 DevOps 協作、開發／維運／安全／AI 整合，以及 AI 時代下的軟體交付轉型。",
    "sourceUrls": {
      "official": "https://devopsdays.tw/2026/",
      "agenda": "https://devopsdays.tw/2026/agenda",
      "agenda_pdf": "https://s.itho.me/vendor/2026/DODT2026Agenda/DevOpsDays%20Taipei_2026_Agenda.pdf"
    },
    "lastReviewed": "2026-06-21",
    "note": "主辦單位保留變更議程之權利，實際議程以大會當日公告為主。"
  },
  "weights": [
    {
      "topic": "DevSecOps",
      "score": 3,
      "magic": 0,
      "description": "安全開發流程、漏洞治理、安全掃描、供應鏈安全、權限治理。"
    },
    {
      "topic": "AI 資安",
      "score": 3,
      "magic": 1,
      "description": "LLMSecOps、AgentSecOps、AI AppSec、AI supply chain、AI governance。"
    },
    {
      "topic": "AI Coding",
      "score": 2,
      "magic": 1,
      "description": "AI Agent coding、SDD、AI reviewer、AI testing、AI-native delivery。"
    },
    {
      "topic": "DevEx",
      "score": 1,
      "magic": 0,
      "description": "開發者體驗、平台工程、release automation、CI/CD 可用性。"
    }
  ],
  "groups": {
    "security": {
      "name": "A. DevSecOps／AI 資安／供應鏈安全",
      "short": "DevSecOps & AI Security",
      "why": "最貼近公司內部資安代表、DevSecOps／RAI、LLMSecOps、AgentSecOps 的角色。重點是把 AI 引入 SDLC 後，如何補上安全治理、漏洞優先排序、供應鏈信任、SBOM、自動化修補與授權模型。"
    },
    "ai-coding": {
      "name": "B. AI Coding／Agentic SDLC／SDD／AI Testing",
      "short": "AI Coding & Agentic SDLC",
      "why": "支撐處內 AI 開發小組，重點是把 AI Coding 從個人效率工具提升為團隊級流程：規格、上下文、測試、PR、CI/CD、code review、品質閘門與人類決策點。"
    },
    "platform": {
      "name": "C. Platform／SRE／Observability／DevEx",
      "short": "Platform / SRE / DevEx",
      "why": "補足 AI 與安全落地後，團隊如何穩定交付，包括平台工程、SRE、release、observability、DataOps、ChatOps 與開發者體驗。"
    },
    "culture": {
      "name": "D. Keynote／文化／組織／低題目相關",
      "short": "Keynote & Organization",
      "why": "不一定直接得分高，但可校準大會趨勢、組織文化、AI 導入責任與 DevOps 管理視角。"
    }
  },
  "sessions": [
    {
      "id": "d1-opening",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "09:30",
      "end": "09:40",
      "room": "DE 會議室",
      "type": "Opening",
      "title": "Welcome Opening",
      "speaker": "陳正瑋｜DevOpsDays Taipei Co-Organizer",
      "group": "culture",
      "summary": "大會開場，適合快速掌握活動節奏與公告。",
      "keywords": [
        "Opening"
      ],
      "topics": [],
      "score": 0,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf"
    },
    {
      "id": "d1-keynote-multimodel",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "09:40",
      "end": "10:40",
      "room": "DE 會議室",
      "type": "Keynote",
      "title": "從多模型視角談與 AI 共智",
      "speaker": "李智樺｜集英信誠 顧問",
      "group": "culture",
      "summary": "從多模型協作角度理解 AI 應用趨勢，適合作為兩天 AI／DevOps／治理議題的宏觀暖身。",
      "keywords": [
        "多模型",
        "AI 共智",
        "AI Strategy"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": true,
      "objective": "建立多模型協作視角，判斷不同模型在開發、審查、安全分析中的分工。",
      "checklist": [
        "有哪些模型分工型態適合企業內部開發流程？",
        "人類判斷在哪些節點必須保留？",
        "多模型協作會帶來哪些治理與紀錄需求？"
      ],
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4710",
      "level": "進階",
      "language": "中文",
      "officialTags": [
        "Developer Experience (DevX開發者體驗)"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "顧問",
      "officialTagSource": "https://devopsdays.tw/2026/session/4710"
    },
    {
      "id": "d1-workshop-agile-bootcamp",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "09:40",
      "end": "12:40",
      "room": "603+604 會議室",
      "type": "Workshop",
      "title": "agile boot camp 積木敏捷體驗營",
      "speaker": "葉承宇｜光寶科技",
      "group": "culture",
      "summary": "以體驗方式理解敏捷與團隊協作；與目標題目間接相關。",
      "keywords": [
        "Agile",
        "Team Collaboration"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4701",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Culture & Agile"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "非IT部門 (Non-IT)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Principal Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4701"
    },
    {
      "id": "d1-keynote-coding-agent-architect",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "11:00",
      "end": "12:00",
      "room": "DE 會議室",
      "type": "Keynote",
      "title": "當 Coding Agent 能寫 Code，架構師該做什麼改變？",
      "speaker": "吳剛志｜91APP Chief Architect",
      "group": "ai-coding",
      "summary": "從架構師角色重新定位 AI Coding；重點在 AI 生成程式碼後的架構治理、品質守門與系統設計責任。",
      "keywords": [
        "Coding Agent",
        "Architecture",
        "AI Coding",
        "Governance"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4702",
      "level": "進階",
      "language": "中文",
      "officialTags": [
        "BizDevOps（價值驅動）"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏開發 (IT / DEV)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Chief Architect",
      "officialTagSource": "https://devopsdays.tw/2026/session/4702"
    },
    {
      "id": "d1-workshop-devops-skill-ai-agent",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "11:00",
      "end": "12:30",
      "room": "605+606 會議室",
      "type": "Workshop",
      "title": "devops 交給 skill + ai agent 一條龍弄到好吧",
      "speaker": "黃品叡、謝明宏、邱清章、徐兆彣｜阿物科技",
      "group": "ai-coding",
      "summary": "透過 AI DevOps Agents、IaC、Terraform、Helm、GitOps、Kustomize、K8s 做端到端操作，並納入安全掃描與審查思維。",
      "keywords": [
        "AI Agent",
        "IaC",
        "GitOps",
        "Kubernetes",
        "Security Scan"
      ],
      "topics": [
        "DevSecOps",
        "AI Coding",
        "DevEx"
      ],
      "score": 6,
      "magic": 1,
      "recommended": true,
      "objective": "理解 AI Agent 如何操作 IaC、GitOps 與 K8s，並把安全掃描納入自動化流程。",
      "checklist": [
        "Terraform／Helm／Kustomize 操作如何拆成 agent skills？",
        "哪些步驟需要 human approval？",
        "security scan、secret audit、manifest review 放在哪裡？",
        "是否可回公司做 AI DevOps Agent + 安全檢查 PoC？"
      ],
      "session_url": "https://devopsdays.tw/2026/session/4700",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "高級SRE工程師 / SRE技術經理 / 資深工程師 / MIS",
      "officialTagSource": "https://devopsdays.tw/2026/session/4700"
    },
    {
      "id": "d1-bootcamp-agentic-sdlc",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "12:45",
      "end": "13:10",
      "room": "DE 會議室",
      "type": "Bootcamp",
      "title": "以 AI Agent 重構 SDLC：建構企業級自動軟體交付流程",
      "speaker": "濮紹華｜91APP",
      "group": "ai-coding",
      "summary": "說明 AI Agent 在需求、規格、coding、code review、測試、任務流、DoD 與 acceptance criteria 的角色。",
      "keywords": [
        "Agentic SDLC",
        "DoD",
        "Acceptance Criteria",
        "Code Review"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": true,
      "objective": "建立 Agentic SDLC 的流程語言，定義 AI 在需求、規格、code review、測試與驗收中的邊界。",
      "checklist": [
        "AI Agent 在需求、規格、coding、review、testing 的責任邊界是什麼？",
        "DoD 與 acceptance criteria 如何寫給 AI 使用？",
        "哪些風險要設 gate，而不是靠事後 review？",
        "是否能畫出公司版 Agentic SDLC？"
      ],
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4699",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)"
      ],
      "speakerRole": "產品發展處 副總經理",
      "officialTagSource": "https://devopsdays.tw/2026/session/4699"
    },
    {
      "id": "d1-ai-cognitive-debt",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "13:30",
      "end": "14:10",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "當 AI 帶來思考外包 x 認知負債，要如何不讓 AI 奴役你",
      "speaker": "柯仁傑｜Odd-e",
      "group": "culture",
      "summary": "探討 AI 導入後的認知負債與人類判斷退化，對 AI governance 有背景價值。",
      "keywords": [
        "AI Literacy",
        "Cognitive Debt",
        "Governance"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4704",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Best Practices（成功案例最佳實踐）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏開發 (IT / DEV)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Agile Coach",
      "officialTagSource": "https://devopsdays.tw/2026/session/4704"
    },
    {
      "id": "d1-devsecops-vuln-tracking",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "13:30",
      "end": "14:10",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "DevSecOps 漏洞發現、追蹤與數據統計自動化分享！",
      "speaker": "何品緯｜BTSE",
      "group": "security",
      "summary": "從 Shift Left 後的漏洞治理痛點出發，串起 SCA/SAST、DefectDojo、Jira、統計報表與追蹤流程。 官方 session 頁也標示此場為中階、中文，tag 為 DevSecOps（測試要趁早）。",
      "keywords": [
        "DevSecOps",
        "SAST",
        "SCA",
        "DefectDojo",
        "Jira",
        "Metrics"
      ],
      "topics": [
        "DevSecOps"
      ],
      "score": 3,
      "magic": 0,
      "recommended": false,
      "session_url": "https://devopsdays.tw/2026/session/4726",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "DevSecOps（測試要趁早）"
      ],
      "officialAudience": [
        "非IT部門 (Non-IT)",
        "經營決策者 (Decision maker)",
        "資安工程師"
      ],
      "speakerRole": "Security Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4726"
    },
    {
      "id": "d1-ai-dataops-mlops",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "13:30",
      "end": "14:10",
      "room": "F 會議室",
      "type": "Talk",
      "title": "AI 落地生存法則：DevOps、DataOps 與 MLOps 密不可分的 ML 專案現場",
      "speaker": "林煒鈞、陳正瑋｜炬識科技",
      "group": "culture",
      "summary": "從 DevOps、DataOps、MLOps 整合看 AI 專案落地；偏流程與組織整合。",
      "keywords": [
        "DevOps",
        "DataOps",
        "MLOps",
        "AI Delivery"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4745",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "DataOps & MLOps"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "技術顧問",
      "officialTagSource": "https://devopsdays.tw/2026/session/4745"
    },
    {
      "id": "d1-quality-ai-bootcamp",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "13:30",
      "end": "14:10",
      "room": "607+608 會議室",
      "type": "Bootcamp",
      "title": "AI 讓效率提升，但誰來保護品質的人？",
      "speaker": "盧建成｜靖本行策、政治大學",
      "group": "culture",
      "summary": "AI 提效後的品質責任與角色變化，適合補足導入 AI Coding 的治理觀。",
      "keywords": [
        "Quality",
        "AI Governance",
        "Human Responsibility"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4705",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "AI & DevOps 企業應用"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)"
      ],
      "speakerRole": "CEO / 兼任助理教授",
      "officialTagSource": "https://devopsdays.tw/2026/session/4705"
    },
    {
      "id": "d1-workshop-npm-supply-chain",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "13:30",
      "end": "15:00",
      "room": "605+606 會議室",
      "type": "Workshop",
      "title": "90 秒就裝進你的 CI——動手攔下一次真實的 npm 供應鏈攻擊（JFrog Curation 實作）",
      "speaker": "王青｜JFrog",
      "group": "security",
      "summary": "從 CI/CD 供應鏈攻擊切入，適合補足 package、dependency、pipeline 風險意識。",
      "keywords": [
        "CI/CD",
        "npm",
        "Supply Chain Attack",
        "JFrog Curation"
      ],
      "topics": [
        "DevSecOps"
      ],
      "score": 3,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf"
    },
    {
      "id": "d1-workshop-ai-appsec-mythos",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "13:30",
      "end": "15:00",
      "room": "603+604 會議室",
      "type": "Workshop",
      "title": "AI 時代的應用安全：邁向 Mythos Ready 的實務策略",
      "speaker": "丁蓀｜Black Duck",
      "group": "security",
      "summary": "聚焦 AI-driven／agentic 弱點偵測擴大攻擊面，強化 AST 覆蓋、自動化、供應鏈風險可視化與 AI 輔助修補。",
      "keywords": [
        "AI AppSec",
        "AST",
        "Supply Chain",
        "AI Remediation",
        "Agentic Security"
      ],
      "topics": [
        "DevSecOps",
        "AI 資安"
      ],
      "score": 6,
      "magic": 1,
      "recommended": true,
      "objective": "把 AI AppSec、AST、自動化弱掃與供應鏈可視化串成安全策略。",
      "checklist": [
        "AI／Agentic application 新增了哪些攻擊面？",
        "AST coverage 如何量測？",
        "哪些 AppSec 檢查可以 shift left？",
        "AI 修補建議要如何驗證，避免自動引入新風險？"
      ],
      "session_url": "https://devopsdays.tw/2026/session/4846",
      "source": "agenda_pdf",
      "level": "通識",
      "language": "中文",
      "officialTags": [],
      "officialAudience": [],
      "speakerRole": "Head of Sales, Taiwan",
      "officialTagSource": "https://devopsdays.tw/2026/session/4846"
    },
    {
      "id": "d1-kamal-zero-downtime",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "14:30",
      "end": "15:10",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "部署零停機的秘密：Kamal 流量切換原理拆解",
      "speaker": "高見龍｜五倍學院",
      "group": "platform",
      "summary": "部署與流量切換實務，與安全／AI 關聯較低。",
      "keywords": [
        "Deployment",
        "Kamal",
        "Zero Downtime"
      ],
      "topics": [],
      "score": 0,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4703",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "CI/CD（持續整合部署）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏開發 (IT / DEV)"
      ],
      "speakerRole": "負責人",
      "officialTagSource": "https://devopsdays.tw/2026/session/4703"
    },
    {
      "id": "d1-infra-platform-10y",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "14:30",
      "end": "15:10",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "從產品團隊看，十年打造的 Infra Platform",
      "speaker": "陳俊毅｜91APP",
      "group": "platform",
      "summary": "平台工程與內部平台長期演化，對 DevEx 與治理底座有間接價值。",
      "keywords": [
        "Platform Engineering",
        "Infra Platform",
        "DevEx"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4725",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Platform Engineering（平台工程）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "產品發展部資深經理",
      "officialTagSource": "https://devopsdays.tw/2026/session/4725"
    },
    {
      "id": "d1-kagent-a2a-k8s",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "14:30",
      "end": "15:10",
      "room": "F 會議室",
      "type": "Talk",
      "title": "以 kagent × A2A 構築自主協作的 Agentic K8s",
      "speaker": "蕭兆洋｜MaiCoin",
      "group": "ai-coding",
      "summary": "將 Agentic AI 帶入 Kubernetes 操作與自動化，偏平台與 AI Ops。",
      "keywords": [
        "Agentic K8s",
        "A2A",
        "Kubernetes",
        "AI Ops"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4742",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "SRE",
      "officialTagSource": "https://devopsdays.tw/2026/session/4742"
    },
    {
      "id": "d1-flow-bootcamp",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "14:30",
      "end": "15:10",
      "room": "607+608 會議室",
      "type": "Bootcamp",
      "title": "Flow 不死：AI 時代 DevOps 的不變本質",
      "speaker": "陳正瑋｜DevOpsDays Taipei",
      "group": "culture",
      "summary": "從 DevOps flow、隊列與組織瓶頸切入，適合補足方法論背景。",
      "keywords": [
        "Flow",
        "Queue",
        "DevOps Culture"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4712",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "BizDevOps（價值驅動）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)"
      ],
      "speakerRole": "Co-Organizer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4712"
    },
    {
      "id": "d1-platform-genai",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "15:30",
      "end": "15:55",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "Platform Engineering 遇上 GenAI",
      "speaker": "林樹熙｜sciwork",
      "group": "platform",
      "summary": "平台工程結合 GenAI，偏內部開發平台與體驗升級。",
      "keywords": [
        "Platform Engineering",
        "GenAI",
        "DevEx"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4751",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Platform Engineering（平台工程）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "member",
      "officialTagSource": "https://devopsdays.tw/2026/session/4751"
    },
    {
      "id": "d1-legacy-modernization-ai",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "15:30",
      "end": "15:55",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "AI 輔助遺留系統現代化的經驗分享",
      "speaker": "王家駿",
      "group": "ai-coding",
      "summary": "用 AI 協助 legacy modernization，適合需要改造舊系統、降低理解成本的團隊。",
      "keywords": [
        "Legacy Modernization",
        "AI Coding",
        "Cloud Migration"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4721",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "Team Leader",
      "officialTagSource": "https://devopsdays.tw/2026/session/4721"
    },
    {
      "id": "d1-ai-agent-oncall",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "15:30",
      "end": "15:55",
      "room": "F 會議室",
      "type": "Talk",
      "title": "當 AI Agent 接管你的 On-Call",
      "speaker": "翁傳翔｜台泥儲能科技",
      "group": "platform",
      "summary": "AI Agent 用於 on-call／SRE 情境，偏維運自動化與 incident response。",
      "keywords": [
        "SRE",
        "On-call",
        "AI Ops",
        "Incident"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4715",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "AIOps（智慧維運）"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)"
      ],
      "speakerRole": "資訊副理",
      "officialTagSource": "https://devopsdays.tw/2026/session/4715"
    },
    {
      "id": "d1-bootcamp-engineer-role-ai",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "15:30",
      "end": "16:10",
      "room": "607+608 會議室",
      "type": "Bootcamp",
      "title": "工程師的新角色：掌控 AI 從需求到程式碼",
      "speaker": "楊琬晴｜靖本行策",
      "group": "ai-coding",
      "summary": "探討 AI 從需求到開發的風險，避免生成速度超過架構承載，強調規格、上下文與人類判斷。",
      "keywords": [
        "AI Coding",
        "Spec",
        "Context",
        "Tech Debt",
        "Human Judgment"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": true,
      "objective": "避免 AI Coding 變成快速產生技術債，建立需求、上下文、規格與人類判斷框架。",
      "checklist": [
        "需求如何轉成 AI 可用的 spec？",
        "context package 應包含哪些資訊？",
        "hallucination、架構偏移、不可維護程式碼如何防止？",
        "人類工程師的判斷點應保留在哪裡？"
      ],
      "session_url": "https://www.devopsdays.tw/2026/session/4717",
      "source": "agenda_pdf",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)"
      ],
      "speakerRole": "資深顧問",
      "officialTagSource": "https://devopsdays.tw/2026/session/4717"
    },
    {
      "id": "d1-workshop-rebac-openfga-mcp",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "15:30",
      "end": "17:00",
      "room": "605+606 會議室",
      "type": "Workshop",
      "title": "ReBAC with OpenFGA, Powered by MCP",
      "speaker": "劉庭瑋、方亞伯｜TSMC",
      "group": "security",
      "summary": "把授權視為基礎建設，透過 ReBAC、OpenFGA 與 MCP／AI 輔助撰寫權限規則，適合延伸到 Agent 權限治理。",
      "keywords": [
        "ReBAC",
        "OpenFGA",
        "MCP",
        "Authorization",
        "Agent Permission"
      ],
      "topics": [
        "DevSecOps",
        "AI 資安"
      ],
      "score": 6,
      "magic": 1,
      "recommended": false,
      "objective": "建立 Agent 權限治理與 authorization-as-infrastructure 視角。",
      "checklist": [
        "ReBAC 模型如何表達細粒度權限？",
        "MCP 如何協助權限規則設計或驗證？",
        "Agent 權限是否需要獨立 policy 與 audit trail？"
      ],
      "session_url": "https://www.devopsdays.tw/2026/session/4737",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "英文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Senior Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4737"
    },
    {
      "id": "d1-workshop-enterprise-cicd",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "15:30",
      "end": "17:00",
      "room": "603+604 會議室",
      "type": "Workshop",
      "title": "企業級 CI/CD 設計框架經驗分享",
      "speaker": "范明城｜趣未智慧有限公司",
      "group": "platform",
      "summary": "企業 CI/CD 架構設計，對 DevSecOps 流程治理有基礎價值。",
      "keywords": [
        "CI/CD",
        "Enterprise Pipeline",
        "Delivery Governance"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4735",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "CI/CD（持續整合部署）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)"
      ],
      "speakerRole": "執行長",
      "officialTagSource": "https://devopsdays.tw/2026/session/4735"
    },
    {
      "id": "d1-gsi-sdd",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "16:15",
      "end": "16:40",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "GSI 協議：提升 AI 驅動 SDD 的效率與敏捷性",
      "speaker": "薛華慶｜Cafler",
      "group": "ai-coding",
      "summary": "以規格作為 AI 開發控制面，避免只靠 prompt 的不可控開發。",
      "keywords": [
        "GSI",
        "SDD",
        "AI Coding",
        "Spec"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4723",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Developer Experience (DevX開發者體驗)"
      ],
      "officialAudience": [
        "IT人員 / 偏開發 (IT / DEV)"
      ],
      "speakerRole": "後端軟體工程師",
      "officialTagSource": "https://devopsdays.tw/2026/session/4723"
    },
    {
      "id": "d1-agent-skills-mcp-playwright",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "16:15",
      "end": "16:40",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "基於 Agent Skills、MCP 與 Playwright 的全鏈路智慧測試實踐",
      "speaker": "蔡明哲｜Ubiquiti",
      "group": "ai-coding",
      "summary": "用 Agent Skills、Playwright Agent 與 MCP 形成測試案例生成、腳本生成、缺陷修復的閉環。",
      "keywords": [
        "AI Testing",
        "MCP",
        "Playwright",
        "Closed Loop",
        "Agent Skills"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": true,
      "objective": "把 AI Coding 延伸到測試案例、測試腳本與缺陷修復閉環。",
      "checklist": [
        "MCP 在測試流程中扮演什麼角色？",
        "Playwright Agent 如何產生與修正測試？",
        "自動修復後要經過哪些驗證？",
        "是否能形成『生成程式碼 → 測試 → 修正 → 再測』閉環？"
      ],
      "session_url": "https://devopsdays.tw/2026/session/4714",
      "source": "agenda_pdf",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "AI Testing"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "Quality Assurance",
      "officialTagSource": "https://devopsdays.tw/2026/session/4714"
    },
    {
      "id": "d1-vibe-coding-sdd-small-team",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "16:15",
      "end": "16:40",
      "room": "F 會議室",
      "type": "Talk",
      "title": "從 Vibe Coding 到 SDD：AI 時代的小團隊開發流程實驗",
      "speaker": "鍾筑安｜紅門互動",
      "group": "ai-coding",
      "summary": "分享 Vibe Coding、RD refactor、SDD 三階段框架，建立 playbook 與 checklist。",
      "keywords": [
        "Vibe Coding",
        "SDD",
        "Team Playbook",
        "AI Coding"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "session_url": "https://devopsdays.tw/2026/session/4753",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "產品部-資深技術經理",
      "officialTagSource": "https://devopsdays.tw/2026/session/4753"
    },
    {
      "id": "d1-ai-assisted-devops-lifecycle",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "17:00",
      "end": "17:40",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "在 DevOps 生命週期的 AI 輔助驅動",
      "speaker": "郭家齊｜Microsoft Regional Director",
      "group": "ai-coding",
      "summary": "強調 AI 不只是 vibe coding，而是規劃、開發、驗證、維運中的協作工程師，也提醒避免為 AI 而 AI。",
      "keywords": [
        "AI DevOps",
        "Lifecycle",
        "Governance",
        "AI Coding"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": true,
      "objective": "用生命週期角度收斂 Day 1 學到的工具，轉成 plan-dev-validate-ops adoption map。",
      "checklist": [
        "AI 在 plan、dev、validate、ops 各階段的價值與限制是什麼？",
        "如何避免工具導入碎片化？",
        "有哪些指標可以衡量 AI 導入真的改善交付？"
      ],
      "session_url": "https://devopsdays.tw/2026/speaker/628",
      "source": "agenda_pdf"
    },
    {
      "id": "d1-openclaw-agent-teammate",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "17:00",
      "end": "17:40",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "真。無人值守！團隊的怪物新人：OpenClaw",
      "speaker": "王仁宏、簡汎羽｜趨勢科技",
      "group": "ai-coding",
      "summary": "將 AI Agent 視為團隊成員，重點偏協作、任務切分與落地。",
      "keywords": [
        "OpenClaw",
        "AI Agent",
        "Team Collaboration"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4741",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "AIOps（智慧維運）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "非IT部門 (Non-IT)"
      ],
      "speakerRole": "Staff Site Reliability Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4741"
    },
    {
      "id": "d1-one-person-devops",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "17:00",
      "end": "17:40",
      "room": "F 會議室",
      "type": "Talk",
      "title": "一個人的 DevOps：從程式碼到 Production",
      "speaker": "鄭重男｜國軍高雄總醫院",
      "group": "platform",
      "summary": "小團隊如何用 DevOps 改善交付，偏 DevEx／效率。",
      "keywords": [
        "Small Team",
        "DevOps",
        "Production",
        "DevEx"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4730",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)"
      ],
      "speakerRole": "資訊室主任",
      "officialTagSource": "https://devopsdays.tw/2026/session/4730"
    },
    {
      "id": "d1-ai-layoff-responsibility",
      "day": "Day 1",
      "date": "2026-06-25",
      "start": "17:00",
      "end": "17:40",
      "room": "607+608 會議室",
      "type": "Bootcamp",
      "title": "不用擔心被 AI 裁員，因為出事還是你要負責",
      "speaker": "蔡宗城｜MaiCoin",
      "group": "culture",
      "summary": "從組織責任與效率迷思切入，偏管理與文化。",
      "keywords": [
        "AI Responsibility",
        "Org Change",
        "Quality"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4728",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "AIOps（智慧維運）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)"
      ],
      "speakerRole": "Director of Infrastructure Engineering",
      "officialTagSource": "https://devopsdays.tw/2026/session/4728"
    },
    {
      "id": "d2-opening",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "09:30",
      "end": "09:40",
      "room": "DE 會議室",
      "type": "Opening",
      "title": "Welcome Opening",
      "speaker": "吳其勳｜iThome 總編輯",
      "group": "culture",
      "summary": "第二天開場。",
      "keywords": [
        "Opening"
      ],
      "topics": [],
      "score": 0,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf"
    },
    {
      "id": "d2-workshop-dev-to-deploy-ai",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "09:30",
      "end": "11:00",
      "room": "607+608 會議室",
      "type": "Workshop",
      "title": "從開發到部署全都交給 AI：實作 AI 驅動的自動化流程",
      "speaker": "吳柏毅｜聯發科技",
      "group": "ai-coding",
      "summary": "實作 AI 產生程式、code review、修正、CI/CD 診斷與部署；涵蓋安全掃描、PR review 與 human-in-the-loop。",
      "keywords": [
        "AI Coding",
        "CI/CD",
        "Security Scan",
        "PR Review",
        "Human-in-the-loop"
      ],
      "topics": [
        "DevSecOps",
        "AI Coding",
        "DevEx"
      ],
      "score": 6,
      "magic": 1,
      "recommended": true,
      "objective": "學習端到端 AI 開發交付迴圈，理解 AI 何時寫 code、何時 review、何時修 CI/CD。",
      "checklist": [
        "AI 何時寫 code，何時做 review，何時修 CI/CD？",
        "security scan 與 PR review 如何設在流程中？",
        "human start／human end 的控制點是什麼？",
        "內部 AI 開發小組是否能複製這套流程？"
      ],
      "session_url": "https://devopsdays.tw/2026/session/4706",
      "source": "agenda_pdf",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Technolog Platform Service 工程師",
      "officialTagSource": "https://devopsdays.tw/2026/session/4706"
    },
    {
      "id": "d2-workshop-ai-sre",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "09:30",
      "end": "11:00",
      "room": "605+606 會議室",
      "type": "Workshop",
      "title": "不再只是寫腳本！讓 AI 代理人成為你的 SRE 最佳夥伴",
      "speaker": "林建宏｜Soho",
      "group": "platform",
      "summary": "AI 用於 SRE 的實作與限制，偏 incident／ops。",
      "keywords": [
        "SRE",
        "AI Ops",
        "Incident"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4719",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)"
      ],
      "speakerRole": "Prompter",
      "officialTagSource": "https://devopsdays.tw/2026/session/4719"
    },
    {
      "id": "d2-workshop-mcp-windows-ops",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "09:30",
      "end": "11:00",
      "room": "603+604 會議室",
      "type": "Workshop",
      "title": "從 MCP 到 Agentic AI：Windows 維運自動化實戰",
      "speaker": "王偉任｜Microsoft MVP",
      "group": "platform",
      "summary": "用 MCP／Agentic AI 管理 Windows 維運，偏 IT Ops。",
      "keywords": [
        "MCP",
        "Agentic AI",
        "Windows Ops"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4707",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "AIOps（智慧維運）"
      ],
      "officialAudience": [
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "Microsoft MVP",
      "officialTagSource": "https://devopsdays.tw/2026/session/4707"
    },
    {
      "id": "d2-keynote-qms-agile",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "09:40",
      "end": "10:40",
      "room": "DE 會議室",
      "type": "Keynote",
      "title": "Quality Management Systems in the Agile Era: Balancing ISO 9001 Compliance and Agility",
      "speaker": "Hosotani Yasuo｜Mitsubishi Electric Corporation",
      "group": "culture",
      "summary": "AI 未來下的品質管理系統與流程問題，偏管理治理。",
      "keywords": [
        "QMS",
        "ISO 9001",
        "Agility",
        "Quality"
      ],
      "topics": [],
      "score": 0,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4695",
      "level": "通識",
      "language": "英文",
      "interpretation": "即時中英文翻譯",
      "officialTags": [
        "Culture & Agile"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)",
        "經營決策者 (Decision maker)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 偏維運 (IT / OPS)"
      ],
      "speakerRole": "DX Innovation Center / Development & Quality Management Department",
      "officialTagSource": "https://devopsdays.tw/2026/session/4695"
    },
    {
      "id": "d2-keynote-okr-devops",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "11:00",
      "end": "12:00",
      "room": "DE 會議室",
      "type": "Keynote",
      "title": "OKR and DevOps — Why OKRs Fail, and DevOps as the Practice to Make Them Work",
      "speaker": "Ikuo Odanaka｜KAKEHASHI Inc",
      "group": "culture",
      "summary": "DevOps 與 OKR 管理視角，對團隊導入 AI／安全治理可作為目標管理參考。",
      "keywords": [
        "OKR",
        "DevOps",
        "Management"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4697",
      "level": "中階",
      "language": "英文",
      "interpretation": "即時中英文翻譯",
      "officialTags": [
        "Culture & Agile"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)"
      ],
      "speakerRole": "Head of Engineering",
      "officialTagSource": "https://devopsdays.tw/2026/session/4697"
    },
    {
      "id": "d2-workshop-go-ecs-llm-aiops",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "11:30",
      "end": "13:00",
      "room": "607+608 會議室",
      "type": "Workshop",
      "title": "Go 整合 ECS Service Connect 與 LLM 實作 AIOps 自動化決策",
      "speaker": "何剛｜鈦創軟體資訊",
      "group": "platform",
      "summary": "用 Go、ECS、LLM 做 AIOps，適合維運智慧化探索。",
      "keywords": [
        "AIOps",
        "Go",
        "ECS",
        "LLM"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4718",
      "level": "進階",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "full stack engineer / Senior Full-Stack Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4718"
    },
    {
      "id": "d2-workshop-google-adk-voice",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "11:30",
      "end": "13:00",
      "room": "605+606 會議室",
      "type": "Workshop",
      "title": "Google ADK 即時語音串流實現 GCP 平台與 DevOps 的整合應用",
      "speaker": "葉昱宏｜國泰人壽",
      "group": "ai-coding",
      "summary": "偏 AI Agent 與雲端整合，適合探索多模態／語音操作 DevOps。",
      "keywords": [
        "Google ADK",
        "Voice Agent",
        "GCP",
        "DevOps Agent"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4734",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "資深技術架構師",
      "officialTagSource": "https://devopsdays.tw/2026/session/4734"
    },
    {
      "id": "d2-workshop-cloud-code-reviewer",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "11:30",
      "end": "13:00",
      "room": "603+604 會議室",
      "type": "Workshop",
      "title": "AI Agent 上雲實戰：用 Google ADK + Cloud Run 打造自動化測試程式碼審查員",
      "speaker": "劉育維｜APMIC",
      "group": "ai-coding",
      "summary": "用 Google ADK 與 Cloud Run 建立自動化測試／code reviewer API，適合把 AI reviewer 產品化。",
      "keywords": [
        "AI Agent",
        "Code Review",
        "Cloud Run",
        "Google ADK",
        "Testing"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": true,
      "objective": "把 AI reviewer 從個人工具變成雲端服務。",
      "checklist": [
        "Google ADK 的 agent 架構如何設計？",
        "Cloud Run 部署 AI reviewer 的邊界與限制是什麼？",
        "reviewer API 如何接 PR／CI？",
        "如何評估 reviewer 的準確率、誤報與漏報？"
      ],
      "session_url": "https://devopsdays.tw/2026/session/4736",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Developer Experience (DevX開發者體驗)"
      ],
      "officialAudience": [
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "MLOps Engineer | Google Developer Expert (Cloud AI)",
      "officialTagSource": "https://devopsdays.tw/2026/session/4736"
    },
    {
      "id": "d2-observe-2",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "13:30",
      "end": "14:10",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "以趨勢科技為例，如何實現低成本高效率的 Observability 2.0",
      "speaker": "Scott Liao｜AWS",
      "group": "platform",
      "summary": "Observability 主題，對安全與 AI 相關度較低。",
      "keywords": [
        "Observability",
        "Cost Efficiency"
      ],
      "topics": [],
      "score": 0,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4711",
      "level": "進階",
      "language": "中文",
      "officialTags": [
        "Best Practices（成功案例最佳實踐）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "非IT部門 (Non-IT)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Lead Solutions Architecture / Staff Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4711"
    },
    {
      "id": "d2-ai-not-only-code-300-1500",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "13:30",
      "end": "14:10",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "AI 不只幫你寫 Code：當專案從 300 暴增到 1500，我們如何撐住 DevOps",
      "speaker": "Herber Wang｜趨勢科技",
      "group": "ai-coding",
      "summary": "分享 AI Agent 讓專案量擴張後，如何用 AI PR 架構／安全審查與 GitOps-driven MCP 流程因應。",
      "keywords": [
        "AI Coding",
        "AI Review",
        "GitOps",
        "MCP",
        "Scale"
      ],
      "topics": [
        "DevSecOps",
        "AI Coding",
        "DevEx"
      ],
      "score": 6,
      "magic": 1,
      "recommended": false,
      "session_url": "https://www.devopsdays.tw/2026/session/4709",
      "source": "agenda_pdf",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Technolog Platform Service 工程師",
      "officialTagSource": "https://devopsdays.tw/2026/session/4709"
    },
    {
      "id": "d2-product-platform-collab",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "13:30",
      "end": "14:10",
      "room": "F 會議室",
      "type": "Talk",
      "title": "走出混沌的 DevOps 時代：智慧協作",
      "speaker": "李智樺｜集英信誠",
      "group": "platform",
      "summary": "產品與平台協作，偏 DevEx／平台治理。",
      "keywords": [
        "Platform Engineering",
        "Collaboration",
        "DevEx"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4727",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)"
      ],
      "speakerRole": "顧問",
      "officialTagSource": "https://devopsdays.tw/2026/session/4727"
    },
    {
      "id": "d2-mcp-rca-pipeline",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "13:30",
      "end": "14:10",
      "room": "607+608 會議室",
      "type": "Talk",
      "title": "告別 RCA 撰寫地獄：利用 MCP 讓 AI 替你完成維運最後一哩路",
      "speaker": "宋岡諺｜Individual",
      "group": "platform",
      "summary": "用 MCP 協助 RCA 流程，偏 incident analysis。",
      "keywords": [
        "MCP",
        "RCA",
        "SRE",
        "AIOps"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4748",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "DevOps/SRE",
      "officialTagSource": "https://devopsdays.tw/2026/session/4748"
    },
    {
      "id": "d2-ai-devsecops-transformation",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "13:30",
      "end": "14:10",
      "room": "605+606 會議室",
      "type": "Talk",
      "title": "AI 時代的 DevSecOps 變革：安全開發流程的重塑與實踐",
      "speaker": "蔡龍佑｜雲力橘子數位",
      "group": "security",
      "summary": "以 SSDF、安全程式碼模板與 AI Agent 改造需求、PRD、原始碼審查、QA、滲測初判與誤報調查。全場最貼近 DevSecOps／RAI 的場次。",
      "keywords": [
        "DevSecOps",
        "SSDF",
        "AI Agent",
        "Secure SDLC",
        "AI Review"
      ],
      "topics": [
        "DevSecOps",
        "AI 資安",
        "AI Coding"
      ],
      "score": 8,
      "magic": 2,
      "recommended": true,
      "objective": "定義公司下一階段 AI DevSecOps／RAI 工作藍圖。",
      "checklist": [
        "SSDF 如何變成 AI Coding guardrail？",
        "AI Agent 如何協助 PRD、source review、QA、pentest 初判？",
        "誤報調查如何自動化但不失控？",
        "如何把漏洞發現回饋到安全模板與開發規範？"
      ],
      "session_url": "https://www.devopsdays.tw/2026/session/4746",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "DevSecOps（測試要趁早）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "IT人員 / 偏開發 (IT / DEV)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "技術經理",
      "officialTagSource": "https://devopsdays.tw/2026/session/4746"
    },
    {
      "id": "d2-workshop-ai-dd-sdd",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "13:30",
      "end": "15:00",
      "room": "603+604 會議室",
      "type": "Workshop",
      "title": "AI-DD Spec Driven Develop 工作坊",
      "speaker": "王健行｜91APP",
      "group": "ai-coding",
      "summary": "解決 AI 任意改架構、寫出不可建置程式碼的問題，以 system boundary、context、spec、acceptance criteria 管理人機協作。",
      "keywords": [
        "SDD",
        "Acceptance Criteria",
        "AI Coding",
        "Spec"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "session_url": "https://www.devopsdays.tw/2026/session/4743",
      "source": "agenda_pdf",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)"
      ],
      "speakerRole": "產品發展處 資深經理",
      "officialTagSource": "https://devopsdays.tw/2026/session/4743"
    },
    {
      "id": "d2-genai-maturity-model",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "14:30",
      "end": "15:10",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "GenAI Maturity Model：打造可監控、可治理的 AI 系統",
      "speaker": "周建毅｜一零四資訊科技",
      "group": "culture",
      "summary": "從技術 POC 到企業級治理，涵蓋 GenAI observability、Prompt、Agent decision、成本、延遲與平台成熟度。",
      "keywords": [
        "GenAI Governance",
        "Observability",
        "Maturity Model",
        "AI Platform"
      ],
      "topics": [
        "AI 資安"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "session_url": "https://devopsdays.tw/2026/session/4740",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "非IT部門 (Non-IT)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Sr. Solutions Architect",
      "officialTagSource": "https://devopsdays.tw/2026/session/4740"
    },
    {
      "id": "d2-alert-ai-agent",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "14:30",
      "end": "15:10",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "Alert 分析進化史：從 Excel 到 AI Agent，6 個月的迭代與妥協",
      "speaker": "王青｜JFrog",
      "group": "platform",
      "summary": "把告警分析從手工表格轉成 AI Agent，偏維運自動化。",
      "keywords": [
        "Alert",
        "AI Agent",
        "AIOps"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4767",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "AIOps（智慧維運）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏開發 (IT / DEV)"
      ],
      "speakerRole": "開發工程主管",
      "officialTagSource": "https://devopsdays.tw/2026/session/4767"
    },
    {
      "id": "d2-ai-software-supply-chain",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "14:30",
      "end": "15:10",
      "room": "F 會議室",
      "type": "Talk",
      "title": "淨化 AI 軟體供應鏈：攔截惡意開源套件，把 Repository 變成企業信任中心",
      "speaker": "楊騏",
      "group": "security",
      "summary": "討論 AI 時代更快、更廣、更難稽核的風險，涵蓋惡意 NPM、LLM 模型、MCP 工具、資料外洩、RCE、SBOM、provenance 與信任證據。",
      "keywords": [
        "AI Supply Chain",
        "MCP",
        "SBOM",
        "Provenance",
        "Repository Trust"
      ],
      "topics": [
        "DevSecOps",
        "AI 資安"
      ],
      "score": 6,
      "magic": 1,
      "recommended": true,
      "objective": "建立 LLMSecOps／AgentSecOps 的供應鏈信任模型。",
      "checklist": [
        "模型、dataset、package、MCP tool 是否都應納入 inventory？",
        "惡意套件、惡意模型、惡意 MCP 工具如何阻擋？",
        "SBOM、provenance、policy、rollback 如何形成交付證據？",
        "內部是否需要 AI artifact intake policy？"
      ],
      "session_url": "https://www.devopsdays.tw/2026/session/4768",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "DataOps & MLOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "解决方案总监",
      "officialTagSource": "https://devopsdays.tw/2026/session/4768"
    },
    {
      "id": "d2-gcp-devops-agent",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "14:30",
      "end": "15:10",
      "room": "607+608 會議室",
      "type": "Talk",
      "title": "從寫到管：打造 GCP DevOps Agent 的實戰紀錄",
      "speaker": "Edwin Moedano Cardiel｜Caylent",
      "group": "ai-coding",
      "summary": "偏 GCP 上的 Agentic DevOps，適合雲端平台與 AI automation 探索。",
      "keywords": [
        "GCP",
        "DevOps Agent",
        "AI Automation"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4765",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "Senior Full Stack Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4765"
    },
    {
      "id": "d2-iac-cicd-safe-infra",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "14:30",
      "end": "15:10",
      "room": "605+606 會議室",
      "type": "Talk",
      "title": "Shipping Infrastructure Safely with Modern IaC and CI/CD Patterns",
      "speaker": "Ray Wang、Shanna｜AWS",
      "group": "platform",
      "summary": "現代 IaC 與 CI/CD 安全交付模式，對 DevSecOps 底座有幫助。",
      "keywords": [
        "IaC",
        "CI/CD",
        "Safe Delivery",
        "Infrastructure"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4749",
      "level": "中階",
      "language": "英文",
      "interpretation": "即時中英文翻譯",
      "officialTags": [
        "CI/CD（持續整合部署）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 偏維運 (IT / OPS)"
      ],
      "speakerRole": "Cloud Architect",
      "officialTagSource": "https://devopsdays.tw/2026/session/4749"
    },
    {
      "id": "d2-observability-5b",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "15:30",
      "end": "15:55",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "每分鐘超過 5 億筆可觀測性服務",
      "speaker": "熊崇緯｜Taboola",
      "group": "platform",
      "summary": "偏 observability 架構與高流量可觀測性服務。",
      "keywords": [
        "Observability",
        "Metrics",
        "Scale"
      ],
      "topics": [],
      "score": 0,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4716",
      "level": "進階",
      "language": "中文",
      "officialTags": [
        "Observability (可觀測性)"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "R&D Team Lead, Infrastructure",
      "officialTagSource": "https://devopsdays.tw/2026/session/4716"
    },
    {
      "id": "d2-llm-ml-pipeline-as-code",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "15:30",
      "end": "15:55",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "LLM 驅動的 ML Pipeline as Code",
      "speaker": "陳彥誠｜緯雲",
      "group": "ai-coding",
      "summary": "把 Pipeline as Code 延伸到 LLM／ML 工作流，偏 MLOps 與可重現性。",
      "keywords": [
        "LLMOps",
        "MLOps",
        "Pipeline as Code"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4752",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "DataOps & MLOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Data Scientist",
      "officialTagSource": "https://devopsdays.tw/2026/session/4752"
    },
    {
      "id": "d2-sre-portal-regulated",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "15:30",
      "end": "15:55",
      "room": "F 會議室",
      "type": "Talk",
      "title": "打造金融業 SRE Portal：在高監管環境下實現自助治理與可靠性工程",
      "speaker": "秦芝儀｜國泰世華商業銀行",
      "group": "platform",
      "summary": "高監管場域 SRE portal，偏治理、維運體驗。",
      "keywords": [
        "SRE Portal",
        "Regulated Industry",
        "Self-service Governance"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4758",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "SRE（服務可靠性工程）"
      ],
      "officialAudience": [
        "IT人員 / 偏開發 (IT / DEV)"
      ],
      "speakerRole": "襄理",
      "officialTagSource": "https://devopsdays.tw/2026/session/4758"
    },
    {
      "id": "d2-otel-lakehouse-aiops",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "15:30",
      "end": "15:55",
      "room": "607+608 會議室",
      "type": "Talk",
      "title": "OTel Lakehouse: From O11y to AIOps",
      "speaker": "游舜傑｜外商",
      "group": "platform",
      "summary": "OpenTelemetry 與 Lakehouse 打造 AIOps，偏 observability 架構。",
      "keywords": [
        "OTel",
        "Lakehouse",
        "AIOps",
        "Observability"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4759",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Observability (可觀測性)"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "經營決策者 (Decision maker)",
        "非IT部門 (Non-IT)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "Data Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4759"
    },
    {
      "id": "d2-ai-driven-sbom-remediation",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "15:30",
      "end": "15:55",
      "room": "605+606 會議室",
      "type": "Talk",
      "title": "AI driven SBOM & Remediation",
      "speaker": "Himanshu Sangshetti｜Mem0",
      "group": "security",
      "summary": "用 AI Agent 自動化 SBOM 驗證、reachability analysis、修補建議與閉環 DevSecOps，目標是降低 MTTR 與安全瓶頸。",
      "keywords": [
        "SBOM",
        "Remediation",
        "Reachability Analysis",
        "MTTR",
        "AI Agent"
      ],
      "topics": [
        "DevSecOps",
        "AI 資安"
      ],
      "score": 6,
      "magic": 1,
      "recommended": true,
      "objective": "把 SBOM 從被動盤點變成可行動的修補閉環。",
      "checklist": [
        "SBOM validation 如何自動化？",
        "reachability analysis 如何幫助排序？",
        "哪些修補可由 AI 建議，哪些不能自動套用？",
        "MTTR、誤修率、風險降低如何衡量？"
      ],
      "session_url": "https://devopsdays.tw/2026/session/4755",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "英文",
      "interpretation": "即時中英文翻譯",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)"
      ],
      "speakerRole": "AI Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4755"
    },
    {
      "id": "d2-workshop-continuous-ai",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "15:30",
      "end": "17:00",
      "room": "603+604 會議室",
      "type": "Workshop",
      "title": "你的 Repo 會自己上班了：用 GitHub Agentic Workflows 打造 Continuous AI",
      "speaker": "謝政廷｜TSMC",
      "group": "ai-coding",
      "summary": "用 GitHub Agentic Workflows 串接 Copilot、Claude、Codex，處理 CI 診斷、issue triage、文件同步與 repo 健康報告。",
      "keywords": [
        "Continuous AI",
        "GitHub Actions",
        "Copilot",
        "Claude",
        "Codex"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "session_url": "https://devopsdays.tw/2026/session/4756",
      "source": "agenda_pdf",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "DevOps新手 (Newbie)"
      ],
      "officialAudience": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "speakerRole": "Section Manager / GitHub Star",
      "officialTagSource": "https://devopsdays.tw/2026/session/4756"
    },
    {
      "id": "d2-cicd-observability",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "16:15",
      "end": "16:40",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "CI/CD 也需要自己的 Observability：Centralized Pipeline 的觀察與實踐",
      "speaker": "吳明倫｜玉山商業銀行",
      "group": "platform",
      "summary": "觀測 CI/CD pipeline，適合補足交付可靠性。",
      "keywords": [
        "CI/CD Observability",
        "Pipeline",
        "Reliability"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4722",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Observability (可觀測性)"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "副主任工程師",
      "officialTagSource": "https://devopsdays.tw/2026/session/4722"
    },
    {
      "id": "d2-group-decision-platform",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "16:15",
      "end": "16:40",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "不是我的系統，但與我有關！團隊從「各自為政」到「群體決策」的協作實踐",
      "speaker": "陳家丞｜玉山商業銀行",
      "group": "platform",
      "summary": "團隊決策工具與流程，偏協作體驗。",
      "keywords": [
        "Collaboration",
        "Decision Platform",
        "Team"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4754",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Culture & Agile"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "IT人員 / 偏維運 (IT / OPS)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "主任工程師",
      "officialTagSource": "https://devopsdays.tw/2026/session/4754"
    },
    {
      "id": "d2-release-devx",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "16:15",
      "end": "16:40",
      "room": "F 會議室",
      "type": "Talk",
      "title": "當 Release 不再靠人工：自動化版本治理與 DevX 實戰",
      "speaker": "陳松林｜沛思坦網路",
      "group": "platform",
      "summary": "用 Conventional Commits、release note、自動版號、tag alignment 改善 release DevX 與可追溯性。",
      "keywords": [
        "Release",
        "DevX",
        "Traceability",
        "Versioning"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": true,
      "objective": "補上 release DevX、traceability 與治理證據鏈。",
      "checklist": [
        "Conventional Commits 是否能支撐 release automation？",
        "release note、version、image tag、artifact 如何對齊？",
        "rollback 與稽核證據如何保留？",
        "這套流程能否接到 DevSecOps 報表？"
      ],
      "session_url": "https://www.devopsdays.tw/2026/session/4760",
      "source": "agenda_pdf",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Developer Experience (DevX開發者體驗)"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)"
      ],
      "speakerRole": "Devops Engineer",
      "officialTagSource": "https://devopsdays.tw/2026/session/4760"
    },
    {
      "id": "d2-dataops-chatops",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "16:15",
      "end": "16:40",
      "room": "607+608 會議室",
      "type": "Talk",
      "title": "DataOps + ChatOps：打造跨團隊協作的控制面",
      "speaker": "石璨華｜誠品生活",
      "group": "platform",
      "summary": "把資料管線和 ChatOps 結合，偏資料工程協作。",
      "keywords": [
        "DataOps",
        "ChatOps",
        "Collaboration"
      ],
      "topics": [
        "DevEx"
      ],
      "score": 1,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4761",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "DataOps & MLOps"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "非IT部門 (Non-IT)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "主任工程師 / DataOps",
      "officialTagSource": "https://devopsdays.tw/2026/session/4761"
    },
    {
      "id": "d2-vibe-to-ai-native-devops",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "17:00",
      "end": "17:40",
      "room": "DE 會議室",
      "type": "Talk",
      "title": "從 Vibe Coding 到 AI-Native DevOps",
      "speaker": "董大偉｜光岩資訊",
      "group": "ai-coding",
      "summary": "從 AI 輔助 coding 擴展到需求、測試、code review、PR 與交付流程，人類仍負責問題定義與決策。",
      "keywords": [
        "AI-Native DevOps",
        "Vibe Coding",
        "PR",
        "AI Coding"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "session_url": "https://www.devopsdays.tw/2026/session/4738",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "非IT部門 (Non-IT)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "資深技術顧問",
      "officialTagSource": "https://devopsdays.tw/2026/session/4738"
    },
    {
      "id": "d2-vulnerability-prioritization",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "17:00",
      "end": "17:40",
      "room": "ABC 會議室",
      "type": "Talk",
      "title": "漏洞這麼多哪裡修得完：DevOps 實務中的漏洞決策與優先排序",
      "speaker": "高于凱｜UCCU Hacker",
      "group": "security",
      "summary": "解決 CVE 爆量與單靠 CVSS 的缺陷，導入 CVSS、EPSS、CISA KEV、SLA、break build 策略與開發者信任。",
      "keywords": [
        "CVE",
        "CVSS",
        "EPSS",
        "CISA KEV",
        "SLA",
        "Break Build"
      ],
      "topics": [
        "DevSecOps"
      ],
      "score": 3,
      "magic": 0,
      "recommended": false,
      "objective": "把漏洞優先排序、SLA、break build 與開發者信任轉成公司治理制度。",
      "checklist": [
        "如何結合 CVSS、EPSS、KEV 而不是只看 CVSS？",
        "哪些漏洞要 break build？",
        "SLA 如何對開發團隊可接受？",
        "如何用資料建立開發者信任？"
      ],
      "session_url": "https://devopsdays.tw/2026/session/4747",
      "source": "agenda_pdf",
      "level": "進階",
      "language": "中文",
      "officialTags": [
        "DevSecOps（測試要趁早）"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "Member",
      "officialTagSource": "https://devopsdays.tw/2026/session/4747"
    },
    {
      "id": "d2-spec-driven-ai-devops",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "17:00",
      "end": "17:40",
      "room": "F 會議室",
      "type": "Talk",
      "title": "規格驅動的 AI 強化 DevOps",
      "speaker": "張哲嘉｜MaiCoin",
      "group": "ai-coding",
      "summary": "用 SDD 把重複、明確、可驗收的任務轉成 AI 自動化流程，包含 Done criteria、SOP、runbook 與治理。",
      "keywords": [
        "SDD",
        "Runbook",
        "AI Automation",
        "DevOps",
        "Done Criteria"
      ],
      "topics": [
        "AI Coding",
        "DevEx"
      ],
      "score": 3,
      "magic": 1,
      "recommended": true,
      "objective": "把 SOP／runbook 轉成可驗收、可治理的 AI 自動化任務。",
      "checklist": [
        "哪些 DevOps 任務符合重複、明確、低風險、可驗收？",
        "Done criteria 如何寫？",
        "AI 自動化流程如何接 human approval？",
        "是否能產出公司第一批 Agentic DevOps use cases？"
      ],
      "session_url": "https://www.devopsdays.tw/2026/session/4764",
      "source": "agenda_pdf",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "Agentic DevOps / AI-powered DevOps"
      ],
      "officialAudience": [
        "IT人員 / 全都做 (IT / I have to do everything)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "SRE",
      "officialTagSource": "https://devopsdays.tw/2026/session/4764"
    },
    {
      "id": "d2-agent-production-day2",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "17:00",
      "end": "17:40",
      "room": "607+608 會議室",
      "type": "Talk",
      "title": "打造 Agent Production Day 2 Operations",
      "speaker": "Jimmy Liao｜躍智工作室",
      "group": "security",
      "summary": "從 LLM／Agent 上線後的觀測與除錯切入，關注 tool call 失敗、輸出品質漂移、trace 與 production readiness。",
      "keywords": [
        "AgentSecOps",
        "LLM Observability",
        "Tool Call",
        "Production Readiness"
      ],
      "topics": [
        "AI 資安"
      ],
      "score": 3,
      "magic": 1,
      "recommended": false,
      "session_url": "https://www.devopsdays.tw/2026/session/4739",
      "source": "agenda_pdf",
      "level": "中階",
      "language": "中文",
      "officialTags": [
        "Observability (可觀測性)"
      ],
      "officialAudience": [
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 全都做 (IT / I have to do everything)"
      ],
      "speakerRole": "Co-Founder / CTO / Google Cloud AI GDE",
      "officialTagSource": "https://devopsdays.tw/2026/session/4739"
    },
    {
      "id": "d2-devops-decline-cio",
      "day": "Day 2",
      "date": "2026-06-26",
      "start": "17:00",
      "end": "17:40",
      "room": "605+606 會議室",
      "type": "Talk",
      "title": "DevOps 衰退？從 CIO 大調查看 AI 原生浪潮的衝擊",
      "speaker": "王宏仁｜iThome",
      "group": "culture",
      "summary": "從 CIO 視角看 DevOps 衰退、AI 原生浪潮與組織問題。",
      "keywords": [
        "CIO",
        "DevOps Trend",
        "AI Native"
      ],
      "topics": [],
      "score": 0,
      "magic": 0,
      "recommended": false,
      "source": "agenda_pdf",
      "session_url": "https://devopsdays.tw/2026/session/4845",
      "level": "通識",
      "language": "中文",
      "officialTags": [
        "AI & DevOps 企業應用"
      ],
      "officialAudience": [
        "DevOps新手 (Newbie)",
        "DevOps老司機 (DevOps Veteran)",
        "IT人員 / 偏維運 (IT / OPS)",
        "IT人員 / 偏開發 (IT / DEV)",
        "IT人員 / 全都做 (IT / I have to do everything)",
        "非IT部門 (Non-IT)",
        "經營決策者 (Decision maker)"
      ],
      "speakerRole": "副總編輯",
      "officialTagSource": "https://devopsdays.tw/2026/session/4845"
    }
  ],
  "recommendedPath": [
    "d1-keynote-multimodel",
    "d1-workshop-devops-skill-ai-agent",
    "d1-bootcamp-agentic-sdlc",
    "d1-workshop-ai-appsec-mythos",
    "d1-bootcamp-engineer-role-ai",
    "d1-agent-skills-mcp-playwright",
    "d1-ai-assisted-devops-lifecycle",
    "d2-workshop-dev-to-deploy-ai",
    "d2-workshop-cloud-code-reviewer",
    "d2-ai-devsecops-transformation",
    "d2-ai-software-supply-chain",
    "d2-ai-driven-sbom-remediation",
    "d2-release-devx",
    "d2-spec-driven-ai-devops"
  ],
  "backupRecommendations": [
    {
      "from": "d1-bootcamp-engineer-role-ai + d1-agent-skills-mcp-playwright",
      "to": "d1-workshop-rebac-openfga-mcp",
      "why": "若回公司第一優先是 Agent 權限治理與授權模型，犧牲部分 AI Coding／Testing，換取 ReBAC、OpenFGA、MCP 的資安架構觀。"
    },
    {
      "from": "d2-spec-driven-ai-devops",
      "to": "d2-vulnerability-prioritization",
      "why": "若近期要推公司漏洞治理制度，將 SDD／AI automation 換成 CVE 優先排序、SLA、break build 與開發者信任。"
    },
    {
      "from": "d2-release-devx",
      "to": "d2-agent-production-day2",
      "why": "若更關注 Agent 上線後 Day 2 Operations，可用 release DevX 場次換取 LLM/Agent production readiness。"
    }
  ],
  "outcomes": [
    "AI DevSecOps reference architecture",
    "AI Coding 安全治理 checklist",
    "Agentic DevOps / AI reviewer PoC backlog",
    "AI supply chain inventory checklist",
    "SBOM remediation workflow",
    "Release traceability policy"
  ]
};
