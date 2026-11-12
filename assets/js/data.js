/* Comprehensive ecosystem data from the Mamba Empire Refined Master Plan (2026 Edition) */
window.MAMBA_DATA = {
  meta: {
    name: "Mamba Empire Ltd",
    jurisdiction: "Kenya (BRS Registered)",
    edition: "Refined Master Plan | 2026 Edition",
    currency: "USD",
    fxRateNote: "Converted at ~KSh 129.7 per USD",
    contactEmail: "info@mambaempire.com"
  },
  executiveSummary: {
    year1Revenue: "$349,000",
    grossProfit: "$125,595 (36.0%)",
    netProfit: "$21,045 (6.0%)",
    capitalNeeded: "$74,800",
    tradeWorkingCapital: "$40,000",
    year3TargetRevenue: "$1.48 Million",
    year3NetMargin: "About 12%",
    coreDifferentiators: [
      { title: "Asset-Light", desc: "Partner warehouses, licensed payment providers, and contracted farmer cooperatives instead of owned plant and heavy equipment." },
      { title: "Compliance-First", desc: "Company registration, tax, e-invoicing (eTIMS), and data protection compliance completed prior to booking revenue." },
      { title: "Stage-Gated Growth", desc: "Each subsequent expansion phase unlocks only when measurable milestones are met, capping downside risk." },
      { title: "Honest Numbers", desc: "Grounded projections benchmarked against realistic margin profiles, verified against conservative and optimistic scenarios." }
    ]
  },
  principles: [
    { title: "Revenue Before Structure", desc: "Add legal subsidiaries and physical assets only when sustained trade volume or regulatory thresholds dictate." },
    { title: "One Ledger Per Division", desc: "Every division tracks its own profit, margin, and cash flow every month for rigorous accountability." },
    { title: "Arm's-Length Dealings", desc: "Internal cross-division services are documented, transparently audited, and priced exactly as with outside clients." },
    { title: "Trust Is The Product", desc: "End-to-end traceability, strict data privacy, and rigorous compliance are natively built into every commercial offering." },
    { title: "Reinvest First", desc: "At least 50% of group net earnings are retained in the ecosystem for the first 24 months to compound capital." }
  ],
  divisions: [
    {
      id: "kosa",
      name: "KOSA",
      subtitle: "Agriculture & Export Trade",
      badge: "Core Revenue Engine",
      badgeClass: "launch",
      color: "#3ebd8c",
      y1Revenue: "$194,000",
      grossMargin: "18%",
      netMargin: "6%",
      y1NetProfit: "$11,640",
      overview: "Traceable specialty coffee, single-origin tea, and organic honey sourced directly from cooperatives and aggregators under forward contracts.",
      details: [
        "Product mix: 50% specialty coffee, 25% organic honey, 25% single-origin highland tea.",
        "Trading margin boosted by quality premiums and verified harvest traceability.",
        "Financed via buyer deposits and letters of credit, keeping inventory days low.",
        "EU Deforestation Regulation (EUDR) and phytosanitary (KEPHIS) compliant."
      ]
    },
    {
      id: "zenit",
      name: "ZenIT",
      subtitle: "Technology & AI Automation",
      badge: "Core Revenue Engine",
      badgeClass: "launch",
      color: "#4fa58a",
      y1Revenue: "$93,000",
      grossMargin: "60%",
      netMargin: "18%",
      y1NetProfit: "$16,740",
      overview: "Custom enterprise software, automated AI workflows, cloud modernization, and an export-grade farm-to-buyer traceability platform.",
      details: [
        "First built and battle-tested for KOSA trade, then packaged and commercialized as a B2B SaaS platform.",
        "Revenue mix: project implementation fees, monthly maintenance retainers, and cloud subscriptions.",
        "Seamless integration with licensed payment rails (M-PESA, bank APIs) without holding client deposits directly.",
        "Year-2 target: 40% recurring annual recurring revenue (ARR)."
      ]
    },
    {
      id: "banditsec",
      name: "BanditSec",
      subtitle: "Cybersecurity & Digital Trust",
      badge: "Service Line Launch",
      badgeClass: "launch",
      color: "#c5a358",
      y1Revenue: "$31,000",
      grossMargin: "65%",
      netMargin: "15%",
      y1NetProfit: "$4,650",
      overview: "Independent vulnerability assessments, penetration testing, ISO 27001 readiness, Data Protection Act compliance, and tax API verification.",
      details: [
        "Fixed-fee security assessments paired with monthly compliance & continuous threat monitoring retainers.",
        "Cross-sold across ZenIT client infrastructure and KOSA export network partners.",
        "Strict corporate governance independence: BanditSec operates under a mandatory rule never to audit software it developed."
      ]
    },
    {
      id: "education",
      name: "Portfolio & Education",
      subtitle: "Technical Bootcamps & Talent Pipeline",
      badge: "Cohort Launch",
      badgeClass: "launch",
      color: "#7aa86a",
      y1Revenue: "$15,500",
      grossMargin: "60%",
      netMargin: "10%",
      y1NetProfit: "$1,550",
      overview: "Cohort-based software engineering, cloud architecture, cybersecurity bootcamps, executive workshops, and digital publications.",
      details: [
        "Year-1 target: 3 focused cohorts × 20 vetted learners @ $180 ($10,800), plus executive corporate training.",
        "Serves as the internal feeder and junior talent engine for ZenIT and BanditSec client delivery.",
        "Enhances group brand authority and creates thought-leadership publications across East Africa."
      ]
    },
    {
      id: "ikr",
      name: "IKR",
      subtitle: "Infrastructure & Logistics Coordination",
      badge: "Partner Pilot",
      badgeClass: "pilot",
      color: "#9bb0a5",
      y1Revenue: "$15,500",
      grossMargin: "35%",
      netMargin: "3%",
      y1NetProfit: "$465",
      overview: "Asset-light third-party warehousing coordination, cold-storage aggregation, property operations, and renewable energy project facilitation.",
      details: [
        "Year 1: 100% partner facility coordination; zero heavy debt or capital expenditures.",
        "Lowers logistics, sorting, and holding costs for KOSA export consignments.",
        "Years 2–3: Pilot targeted off-grid solar micro-grids and commercial water systems upon regulatory permitting and contracted payback."
      ]
    },
    {
      id: "core",
      name: "Mamba Empire (Core)",
      subtitle: "Holding, Governance & Shared Services",
      badge: "Cost Centre & Custodian",
      badgeClass: "pilot",
      color: "#b89a5a",
      y1Revenue: "Shared Cost: ($14,000)",
      grossMargin: "N/A",
      netMargin: "N/A",
      y1NetProfit: "N/A",
      overview: "Centralized legal, tax, brand IP custodian, human capital, banking, regulatory compliance, and group strategic capital allocation.",
      details: [
        "Centrally manages group compliance, statutory audits, contracts, and banking relations.",
        "Allocates shared operating overhead ($14,000 in Year 1) across divisions.",
        "Spins out divisions into distinct limited subsidiaries once individual revenue crosses $250,000 or license requirements dictate."
      ]
    }
  ],
  financialsYear1: [
    { division: "KOSA (Agri-Trade)", revenue: "$194,000", grossMargin: "18%", grossProfit: "$34,920", netMargin: "6%", netProfit: "$11,640" },
    { division: "ZenIT (Tech & AI)", revenue: "$93,000", grossMargin: "60%", grossProfit: "$55,800", netMargin: "18%", netProfit: "$16,740" },
    { division: "BanditSec (Cybersecurity)", revenue: "$31,000", grossMargin: "65%", grossProfit: "$20,150", netMargin: "15%", netProfit: "$4,650" },
    { division: "Portfolio & Education", revenue: "$15,500", grossMargin: "60%", grossProfit: "$9,300", netMargin: "10%", netProfit: "$1,550" },
    { division: "IKR (Infrastructure)", revenue: "$15,500", grossMargin: "35%", grossProfit: "$5,425", netMargin: "3%", netProfit: "$465" },
    { division: "Division Combined", revenue: "$349,000", grossMargin: "36.0%", grossProfit: "$125,595", netMargin: "10.0%", netProfit: "$35,045", isHighlight: true },
    { division: "Less: Group Shared Costs (Core)", revenue: "—", grossMargin: "—", grossProfit: "—", netMargin: "—", netProfit: "($14,000)" },
    { division: "Group Net Profit (Consolidated)", revenue: "$349,000", grossMargin: "36.0%", grossProfit: "$125,595", netMargin: "6.0%", netProfit: "$21,045", isTotal: true }
  ],
  threeYearOutlook: [
    { division: "KOSA", y1: "$194,000", y2: "$380,000", y3: "$650,000" },
    { division: "ZenIT", y1: "$93,000", y2: "$210,000", y3: "$420,000" },
    { division: "BanditSec", y1: "$31,000", y2: "$80,000", y3: "$190,000" },
    { division: "Portfolio & Education", y1: "$15,500", y2: "$40,000", y3: "$80,000" },
    { division: "IKR", y1: "$15,500", y2: "$50,000", y3: "$140,000" },
    { division: "Total Revenue", y1: "$349,000", y2: "$760,000", y3: "$1,480,000", isHighlight: true },
    { division: "Group Net Profit", y1: "$21,045", y2: "$68,000", y3: "$178,000", isHighlight: true },
    { division: "Group Net Margin", y1: "6.0%", y2: "8.9%", y3: "12.0%", isHighlight: true }
  ],
  launchCapital: [
    { use: "Legal, registration, licences & compliance set-up", amount: "$6,000" },
    { use: "Technology stack, cloud hosting & infra", amount: "$8,000" },
    { use: "Security tools, vulnerability tooling & certifications", amount: "$6,000" },
    { use: "KOSA trade working capital (~60-day shipment cycle)", amount: "$40,000" },
    { use: "Marketing, buyer samples & commercial development", amount: "$8,000" },
    { use: "Contingency reserve (10%)", amount: "$6,800" },
    { use: "Total Capital Requirement", amount: "$74,800", isTotal: true }
  ],
  roadmap: [
    {
      phase: "Phase 1",
      name: "Legal & Compliance Foundation",
      timeline: "Months 0 – 3",
      actions: "Register Mamba Empire Ltd with BRS; KRA PIN & eTIMS e-invoicing; register with Data Protection Commissioner (ODPC); corporate banking & USD accounts; IP assignment & shareholder accords; division ledger architecture.",
      gate: "All licences in hand; active eTIMS; accounting software live; verified contract templates."
    },
    {
      phase: "Phase 2",
      name: "Core Engine Activation",
      timeline: "Months 3 – 9",
      actions: "KOSA: contract 3 wholesale buyers & dispatch first export lots; ZenIT: sign 5 enterprise clients & ship traceability MVP; BanditSec: deliver first 5 audits; Education: complete first learner cohort.",
      gate: "KOSA gross margin ≥ 15% across first 3 shipments; buyer payment within 45 days; ZenIT margin ≥ 55%."
    },
    {
      phase: "Phase 3",
      name: "Ecosystem Expansion",
      timeline: "Months 9 – 18",
      actions: "Reinvest earnings into BanditSec continuous monitoring; extend KOSA trade routes into Uganda, Tanzania & Rwanda; scale Education to 3 cohorts; initiate IKR partner warehouse network.",
      gate: "Group profitable for 2 consecutive quarters; recurring revenue ≥ 25% of tech/security turnover."
    },
    {
      phase: "Phase 4",
      name: "Scale & Subsidiary Structure",
      timeline: "Months 18 – 36",
      actions: "Spin out qualifying divisions into dedicated subsidiaries; formalise IP licensing from Core; pilot off-grid solar micro-grid; assess external growth capital and global export agreements.",
      gate: "Audited financial statements; ≥ $1,000,000 annual revenue run-rate; formal fiduciary board active."
    }
  ],
  synergies: [
    { from: "ZenIT", to: "KOSA", value: "Custom traceability platform, buyer portals, digital eTIMS invoicing, and rapid trade settlement." },
    { from: "BanditSec", to: "ZenIT & KOSA", value: "Vulnerability audits, GDPR/ODPC compliance, and trust certificates that unlock international buyers." },
    { from: "Education", to: "ZenIT & BanditSec", value: "Pre-trained junior engineers and security analysts at lower recruitment costs, converting top performers." },
    { from: "IKR", to: "KOSA", value: "Optimised warehousing, cold storage partner rates, and renewable energy to lower processing overhead." },
    { from: "Core", to: "All Divisions", value: "Unified legal, tax, accounting, shared back-office, brand custodianship, and capital redeployment." }
  ],
  regulatoryChecklist: [
    { area: "Corporate Registration", req: "Incorporation via BRS (Business Registration Service), beneficial ownership filings, annual statutory returns.", applies: "All Divisions" },
    { area: "Tax & e-Invoicing", req: "KRA PIN, eTIMS compliance, VAT and corporate tax filings, arm's-length transfer pricing documentation.", applies: "All Divisions" },
    { area: "Data Protection", req: "Registration with the Office of the Data Protection Commissioner (ODPC) under Data Protection Act 2019.", applies: "ZenIT, BanditSec, Education" },
    { area: "Agricultural Commodities", req: "AFA (Agriculture and Food Authority) licenses for coffee, tea and honey, KEPHIS phytosanitary certifications, KEBS standards.", applies: "KOSA" },
    { area: "Export Compliance", req: "Traceability protocols conforming to EU Deforestation Regulation (EUDR) and destination market port standards.", applies: "KOSA" },
    { area: "Payments Architecture", req: "Integration with licensed National Payment System (CBK) providers; no direct unlicensed deposit-taking.", applies: "ZenIT" },
    { area: "Cybersecurity Compliance", req: "Compliance with Computer Misuse and Cybercrimes Act statutory guidelines.", applies: "BanditSec" }
  ],
  riskMatrix: [
    { risk: "Commodity price swings", impact: "KOSA margin compression", mitigation: "Sell forward against fixed-price contracts; keep inventory holding days low; diversify across coffee, tea, and honey." },
    { risk: "Exchange-rate volatility", impact: "USD contracts vs local costs", mitigation: "Quote export sales in USD; hold treasury reserves in USD accounts; review hedging quarterly." },
    { risk: "Buyer payment default", impact: "Cash flow constriction", mitigation: "30% upfront deposits, irrevocable Letters of Credit; cap single-buyer exposure to 25% of working capital." },
    { risk: "Regulatory bottlenecks", impact: "Launch delays / compliance penalties", mitigation: "Enforce strict Phase 1 compliance gate before commercial invoicing; dedicated compliance manager." },
    { risk: "Customer concentration", impact: "Revenue vulnerability", mitigation: "No single client to represent over 30% of any division's revenue by end of Year 2." }
  ]
};
