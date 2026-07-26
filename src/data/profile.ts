export type Locale = "en" | "zh";

export const siteMeta = {
  baseUrl: "https://wang-bohan-portfolio.pages.dev",
  title: {
    en: "Wang Bohan | Supply Chain Operations, Analytics & Automation",
    zh: "王泊翰 | 供应链运营、数据分析与智能自动化",
  },
  description: {
    en: "Independent bilingual portfolio for Wang Bohan, focused on supply-chain operations, procurement, inventory analytics, forecasting and operations automation.",
    zh: "王泊翰的独立双语作品集网站，聚焦供应链运营、采购、库存分析、预测与运营自动化。",
  },
  image: "/assets/operations-intelligence-hero.png",
};

export const contact = {
  email: "your.email@example.com",
  linkedin: "",
  github: "",
  resumeUrl: "/downloads/wang-bohan-resume-placeholder.pdf",
};

export const nav = {
  en: ["Home", "About", "Experience", "Projects", "Capabilities", "Education", "Contact"],
  zh: ["首页", "关于", "经历", "项目", "能力", "教育", "联系"],
};

export const hero = {
  en: {
    label: "Operations Intelligence x Editorial Technology",
    name: "Wang Bohan",
    chineseName: "王泊翰",
    headline: "Supply Chain Operations, Analytics & Automation",
    value:
      "I turn procurement, inventory and operational complexity into visible, actionable and increasingly automated systems.",
    intro:
      "MSc Supply Chain Engineering candidate at Nanyang Technological University, connecting hands-on operations with forecasting, dashboards and AI-agent workflow design.",
    primary: "Explore My Work",
    secondary: "Contact Me",
    labels: ["Procurement", "Inventory", "Forecasting", "Automation"],
  },
  zh: {
    label: "运营智能 x 编辑型科技表达",
    name: "Wang Bohan",
    chineseName: "王泊翰",
    headline: "供应链运营、数据分析与智能自动化",
    value: "把采购、库存与运营中的复杂问题，转化为清晰、可执行并可持续自动化的工作系统。",
    intro:
      "南洋理工大学供应链工程硕士在读，将一线运营经验与预测、仪表盘和 AI Agent 工作流设计结合。",
    primary: "查看项目",
    secondary: "联系我",
    labels: ["采购", "库存", "预测", "自动化"],
  },
};

export const about = {
  en: {
    kicker: "About",
    title: "A supply-chain operator who designs analytical systems.",
    paragraphs: [
      "I am pursuing an MSc in Supply Chain Engineering at Nanyang Technological University and have experience across e-commerce procurement and inventory control, semiconductor material management, NPI forecasting and inventory analytics, textile supply-chain operations, international logistics and supplier development.",
      "My strength is converting real operational pain points into practical analytical and automation tools: structured purchase-order data, exception workflows, forecast governance, dashboards and follow-up agents that help teams act with clearer priorities.",
    ],
    intersections: ["Operations", "Analytics", "Automation"],
  },
  zh: {
    kicker: "关于",
    title: "从供应链现场出发，设计可分析、可执行的系统。",
    paragraphs: [
      "我正在南洋理工大学攻读供应链工程硕士，经历覆盖电商采购与库存控制、半导体物料管理、NPI 预测与库存分析、纺织供应链运营、国际物流与供应商开发。",
      "我擅长把真实业务中的复杂问题转化为可落地的分析和自动化工具，包括结构化采购订单数据、异常跟进机制、预测治理、仪表盘和 AI 跟进工作流，帮助团队更清楚地判断优先级并快速行动。",
    ],
    intersections: ["运营", "分析", "自动化"],
  },
};

export const experiences = [
  {
    org: { en: "E-commerce Procurement & Inventory Control", zh: "电商采购与库存控制" },
    role: { en: "Current practical experience", zh: "当前实践经历" },
    emphasis: "Procurement operations",
    points: {
      en: [
        "Managed the purchase-order lifecycle from supplier quotation and PO creation through booking, inbound receiving, exception handling and settlement.",
        "Coordinated supplier, warehouse and internal stakeholders across three warehouse operations.",
        "Managed shortage, overage, damage, delayed inbound and incomplete-receiving cases.",
        "Built Excel, VBA and AI-agent workflows for RFQs, PO preparation, supplier follow-up, daily exception reporting and operational tracking.",
        "Designed a structured PO Master Sheet and dashboard logic to support automated daily actions.",
      ],
      zh: [
        "负责采购订单从供应商报价、PO 创建，到订舱、入库、异常处理和结算的完整流程。",
        "协调供应商、仓库和内部团队，覆盖三个仓库的日常运营。",
        "处理短缺、超收、破损、延迟入库和未完整收货等异常。",
        "搭建 Excel、VBA 和 AI Agent 工作流，用于 RFQ、PO 准备、供应商跟进、每日异常报告和运营追踪。",
        "设计结构化 PO 主表与仪表盘逻辑，支持每日行动自动识别。",
      ],
    },
  },
  {
    org: { en: "Schneider Electric x NTU", zh: "Schneider Electric x NTU" },
    role: { en: "NPI Forecasting and Inventory Analytics Research", zh: "NPI 预测与库存分析研究" },
    emphasis: "Forecast governance",
    points: {
      en: [
        "Researched forecasting and inventory approaches for new-product introduction.",
        "Studied launch segmentation, phase-in and phase-out behaviour, forecast accuracy, bias and cold-start forecasting.",
        "Explored segment-based model assignment and inventory-policy scenarios.",
        "Designed Power BI concepts for forecasting and inventory governance.",
      ],
      zh: [
        "研究新品导入场景下的预测与库存方法。",
        "分析上市分群、新旧品切换行为、预测准确性、偏差和冷启动预测问题。",
        "探索基于分群的模型分配与库存策略场景。",
        "设计用于预测与库存治理的 Power BI 概念方案。",
      ],
    },
  },
  {
    org: { en: "Vanguard International Semiconductor", zh: "Vanguard International Semiconductor" },
    role: { en: "Material Management Specialist Intern", zh: "物料管理专员实习生" },
    emphasis: "Material readiness",
    points: {
      en: [
        "Supported inbound receiving and purchase-order processes.",
        "Checked shipment and receiving documentation.",
        "Maintained material, required-date and supplier-related records.",
        "Followed open POs and supplier readiness.",
        "Participated in buyer hurdle reviews and procurement coordination.",
        "Used Oracle and learned SAP or MyVanguard-related processes.",
      ],
      zh: [
        "支持入库收货与采购订单相关流程。",
        "核对运输与收货文件。",
        "维护物料、需求日期和供应商相关记录。",
        "跟进未结 PO 与供应商备货状态。",
        "参与 buyer hurdle review 和采购协同。",
        "使用 Oracle，并学习 SAP 或 MyVanguard 相关流程。",
      ],
    },
  },
  {
    org: { en: "Saviero Textile Limited", zh: "Saviero Textile Limited" },
    role: { en: "Supply Chain Officer", zh: "供应链专员" },
    emphasis: "SKU and logistics control",
    points: {
      en: [
        "Maintained order, material and inventory records.",
        "Managed master data covering more than 800 SKUs.",
        "Coordinated receiving, quality inspection, shipping and customs documentation.",
        "Prepared packing lists and invoices and supported HS-code matching.",
        "Tracked international deliveries under DAP and DDP arrangements.",
        "Supported daily sales reporting, replenishment and inventory reconciliation.",
      ],
      zh: [
        "维护订单、物料和库存记录。",
        "管理覆盖 800 多个 SKU 的主数据。",
        "协调收货、质检、发运和清关文件。",
        "准备装箱单与发票，并支持 HS 编码匹配。",
        "跟踪 DAP 和 DDP 条款下的国际交付。",
        "支持每日销售报告、补货和库存对账。",
      ],
    },
  },
  {
    org: { en: "Neptune Global Logistics", zh: "Neptune Global Logistics" },
    role: { en: "Business Development Intern", zh: "商务拓展实习生" },
    emphasis: "Regional supplier development",
    points: {
      en: [
        "Researched supplier and logistics markets in Singapore, Indonesia and Thailand.",
        "Supported supplier development and cross-border commercial discussions.",
        "Assisted with a CIF oversized-equipment logistics project.",
        "Compared shipping-line costs and service options.",
        "Supported multilingual supplier communication.",
      ],
      zh: [
        "调研新加坡、印尼和泰国的供应商与物流市场。",
        "支持供应商开发和跨境商务沟通。",
        "协助 CIF 超大型设备物流项目。",
        "比较船公司成本与服务方案。",
        "支持多语言供应商沟通。",
      ],
    },
  },
];

export const projects = [
  {
    title: { en: "PO Daily Follow-up Agent", zh: "PO 每日跟进 Agent" },
    tags: ["Excel", "VBA", "AI Agent", "PO Master"],
    problem: {
      en: "PO status can scatter across approval, booking, inbound, exception and settlement workflows.",
      zh: "PO 状态往往分散在审批、订舱、入库、异常和结算多个流程中。",
    },
    context: {
      en: "A structured PO Master Sheet can become the operating layer for daily review.",
      zh: "结构化 PO 主表可以成为每日运营复盘和行动分配的基础。",
    },
    approach: {
      en: "Classify approval status, shipment follow-up, overdue receiving, shortage, overage, damage, settlement status, PIC, next action, review date and priority.",
      zh: "识别审批状态、出运跟进、超期收货、短缺、超收、破损、结算状态、负责人、下一步行动、复查日期和优先级。",
    },
    value: {
      en: "Turns daily follow-up into an action queue instead of manual searching.",
      zh: "把每日跟进转化为行动队列，而不是反复人工查找。",
    },
    visual: "queue",
  },
  {
    title: { en: "PO Visibility and Logistics Dashboard", zh: "PO 可视化与物流仪表盘" },
    tags: ["Power BI", "ETA", "Map", "Warehouses"],
    problem: {
      en: "Supplier origin, destination warehouse, ETA and PO stage need one shared view.",
      zh: "供应商来源、目的仓、ETA 和 PO 阶段需要统一视图。",
    },
    context: {
      en: "Three Netherlands warehouse destinations create coordination pressure across inbound plans.",
      zh: "三个荷兰目的仓让入库计划和异常沟通更需要清晰可视化。",
    },
    approach: {
      en: "Model supplier origin, current stage, route, today's inbound POs, delayed or exception orders and destination warehouse.",
      zh: "建模供应商来源、当前阶段、运输路线、今日入库 PO、延迟或异常订单和目的仓。",
    },
    value: {
      en: "Improves cross-functional visibility without claiming unverified performance metrics.",
      zh: "提升跨部门可视性，同时不虚构未经验证的绩效指标。",
    },
    visual: "map",
  },
  {
    title: { en: "PO Quantity and MOQ Calculator", zh: "PO 数量与 MOQ 计算器" },
    tags: ["Excel", "MOQ", "Turnover", "Scenario"],
    problem: {
      en: "Order quantity decisions must balance carton size, turnover, unit price and minimum order value.",
      zh: "下单数量需要平衡箱规、周转、单价和最低起订金额。",
    },
    context: {
      en: "Buyers need a fast way to compare suggested and manually adjusted quantities.",
      zh: "采购需要快速比较建议数量和手动调整后的影响。",
    },
    approach: {
      en: "Combine SKU, carton size, turnover days, unit price, MOV, suggested order quantity and projected post-order turnover days.",
      zh: "结合 SKU、箱规、周转天数、单价、MOV、建议下单量和下单后预计周转天数。",
    },
    value: {
      en: "Makes inventory trade-offs visible before purchase-order creation.",
      zh: "在创建采购订单前看清库存权衡。",
    },
    visual: "calculator",
  },
  {
    title: { en: "PO and Invoice Reconciliation Automation", zh: "PO 与发票对账自动化" },
    tags: ["Python", "PDF", "EAN", "Reconciliation"],
    problem: {
      en: "EAN, quantity and price can appear on separate PDF lines, making manual reconciliation fragile.",
      zh: "EAN、数量和价格可能出现在 PDF 的不同行，人工对账容易出错。",
    },
    context: {
      en: "Operational review requires consistent comparison between PO price, invoice price, quantity, amount and margin impact.",
      zh: "运营复核需要稳定比较 PO 价格、发票价格、数量、金额和预计毛利影响。",
    },
    approach: {
      en: "Extract PDF fields, align line items, compare values and flag mismatch categories for review.",
      zh: "提取 PDF 字段，对齐行项目，比较数值并标记差异类别供复核。",
    },
    value: {
      en: "Creates a repeatable exception review workflow without line-by-line checking.",
      zh: "形成可重复的异常复核流程，减少逐行核对。",
    },
    visual: "reconcile",
  },
  {
    title: { en: "NPI Forecasting Research", zh: "NPI 预测研究" },
    tags: ["Forecasting", "Clustering", "Cold Start", "Inventory"],
    problem: {
      en: "New-product introductions face cold-start demand, launch uncertainty and phase-in or phase-out interactions.",
      zh: "新品导入面临冷启动需求、上市不确定性和新旧品切换影响。",
    },
    context: {
      en: "Forecasting must distinguish model output from demand-planning governance.",
      zh: "预测需要区分模型输出与需求计划治理。",
    },
    approach: {
      en: "Study similar-product references, launch segmentation, channel and market-growth factors, forecast bias and inventory-policy scenarios.",
      zh: "研究相似产品参考、上市分群、渠道和市场增长因素、预测偏差与库存策略场景。",
    },
    value: {
      en: "Frames NPI as a model-assignment and governance problem rather than a single-model exercise.",
      zh: "将 NPI 视为模型分配与治理问题，而不是单一模型练习。",
    },
    visual: "forecast",
  },
  {
    title: { en: "Forecasting and Simulation Studies", zh: "预测与仿真研究" },
    tags: ["Holt-Winters", "Arena", "Queueing", "Decision Analysis"],
    problem: {
      en: "Operational decisions need structured experiments while avoiding unsupported performance claims.",
      zh: "运营决策需要结构化实验，同时避免没有依据的绩效宣称。",
    },
    context: {
      en: "Studies covered Holt-Winters forecasting for nine imported materials, Arena simulation with 30 replications, inventory, queueing and decision analysis.",
      zh: "研究包括九种进口物料 Holt-Winters 预测、30 次重复的 Arena 仿真、库存、排队和运营决策分析。",
    },
    approach: {
      en: "Use modelling discipline to compare scenarios and keep results bounded to verified study scope.",
      zh: "用建模方法比较场景，并将结论控制在可验证研究范围内。",
    },
    value: {
      en: "Shows analytical reasoning without inventing numerical outcomes.",
      zh: "展示分析推理能力，同时不虚构数值结果。",
    },
    visual: "simulation",
  },
];

export const capabilities = [
  {
    group: { en: "Supply Chain", zh: "供应链" },
    items: ["Procurement", "Inventory control", "Demand planning", "Supplier coordination", "Logistics", "Inbound receiving", "PO lifecycle management", "Exception management", "NPI planning"],
  },
  {
    group: { en: "Analytics", zh: "数据分析" },
    items: ["Forecasting", "Inventory modelling", "Scenario analysis", "KPI design", "Root-cause analysis", "Data visualisation", "Process mapping"],
  },
  {
    group: { en: "Technology", zh: "技术工具" },
    items: ["Advanced Excel", "VBA", "Power Query", "Power BI", "Python", "pandas", "scikit-learn", "Tableau", "Arena Simulation", "Oracle", "ERP systems"],
  },
  {
    group: { en: "Automation", zh: "自动化" },
    items: ["AI-agent workflow design", "Automated follow-up", "Data validation", "Operational reporting", "PO and invoice reconciliation", "Dashboard automation"],
  },
];

export const education = [
  {
    school: "Nanyang Technological University",
    degree: { en: "MSc in Supply Chain Engineering", zh: "供应链工程硕士" },
    years: "2025-2026",
    themes: ["Operations management", "Inventory planning", "Procurement", "Forecasting", "Optimisation", "Data analytics"],
  },
  {
    school: "University of Melbourne",
    degree: { en: "BA in Media and Communications", zh: "媒体与传播学士" },
    years: "2022-2024",
    themes: ["Stakeholder communication", "Digital platforms", "Cross-cultural communication"],
  },
];
