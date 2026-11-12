// Static Correlation Relationship Presentation with Hover & Click Inspection
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('interlinkDiagramContainer');
  if (!container) return;

  const correlationData = {
    core: {
      name: "Empire Core",
      role: "Central Holding & Treasury Custodian",
      correlations: [
        "Re-injects 50% group net earnings into IKR land acquisitions and ZenIT hardware R&D.",
        "Underwrites centralized compliance, legal armor, and statutory tax filings for all operating bastions.",
        "Authorizes formal subsidiary spin-out triggers once division revenue exceeds $250,000."
      ],
      interlinksWith: ["IKR", "KOSA", "ZenIT", "BanditSec", "Portfolio"]
    },
    ikr: {
      name: "IKR Plantations & Real Estate",
      role: "Plantations, Land Banks & Infrastructure",
      correlations: [
        "Supplies cultivated plantation acreage and cold-storage consolidation directly to KOSA.",
        "Hosts ZenIT smart building automation and IoT micro-grid energy metering.",
        "Physically fortified by BanditSec perimeter security and anti-tamper intrusion prevention."
      ],
      interlinksWith: ["KOSA", "ZenIT", "BanditSec", "Empire Core"]
    },
    kosa: {
      name: "KOSA Agri-Food & Bio-Trade",
      role: "All Crops, Livestock Stewardship & Food Systems",
      correlations: [
        "Farms and harvests across IKR plantation acreage, processing yields for global export.",
        "Supplies live cross-border trade transaction data directly into ZenIT telemetry.",
        "Directly certified by BanditSec for EUDR due diligence and export provenance clearance."
      ],
      interlinksWith: ["IKR", "ZenIT", "BanditSec", "Portfolio"]
    },
    zenit: {
      name: "ZenIT Technology & Devices",
      role: "AI Platforms, Electronics Hardware & IoT Telematics",
      correlations: [
        "Builds custom edge sensors and traceability software deployed across KOSA supply chains.",
        "Firmware, device cryptography, and APIs hardened and audited by BanditSec.",
        "Integrates IoT facilities and smart utility monitoring into IKR real estate.",
        "Recruits top-of-cohort software and hardware engineers from Portfolio Institutes."
      ],
      interlinksWith: ["KOSA", "BanditSec", "IKR", "Portfolio"]
    },
    banditsec: {
      name: "BanditSec Security Integrity",
      role: "Cyber Defense, Physical Integrity & Threat Auditing",
      correlations: [
        "Operates under a strict independence covenant: never audits ZenIT-built code.",
        "Certifies physical export shipments and tamper-evident seals for KOSA.",
        "Secures IKR warehousing, industrial real estate, and digital networks.",
        "Collaborates on post-quantum cryptography research with the Portfolio Institute."
      ],
      interlinksWith: ["ZenIT", "KOSA", "IKR", "Portfolio"]
    },
    portfolio: {
      name: "Portfolio, Research & Education",
      role: "Future-Based Research & Academic Institutions",
      correlations: [
        "Develops bio-organic agronomy and soil science deployed on IKR plantations.",
        "Conducts applied AI and advanced materials research commercialized by ZenIT.",
        "Supplies elite junior developers and security analysts to ZenIT and BanditSec."
      ],
      interlinksWith: ["ZenIT", "BanditSec", "IKR", "KOSA"]
    }
  };

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: 1.25fr 1fr; gap: var(--space-48); align-items: center;">
      <!-- Static Correlation Map (No Repulsion / No Movement) -->
      <div class="correlation-network-wrap">
        <svg viewBox="0 0 600 600" id="correlationSvg">
          <defs>
            <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Core Network Relationship Web Lines -->
          <g id="networkLines">
            <line x1="300" y1="300" x2="300" y2="90" class="correlation-line" data-nodes="core kosa" />
            <line x1="300" y1="300" x2="480" y2="200" class="correlation-line" data-nodes="core zenit" />
            <line x1="300" y1="300" x2="430" y2="440" class="correlation-line" data-nodes="core banditsec" />
            <line x1="300" y1="300" x2="170" y2="440" class="correlation-line" data-nodes="core portfolio" />
            <line x1="300" y1="300" x2="120" y2="200" class="correlation-line" data-nodes="core ikr" />

            <line x1="120" y1="200" x2="300" y2="90" class="correlation-line" data-nodes="ikr kosa" />
            <line x1="300" y1="90" x2="480" y2="200" class="correlation-line" data-nodes="kosa zenit" />
            <line x1="480" y1="200" x2="430" y2="440" class="correlation-line" data-nodes="zenit banditsec" />
            <line x1="430" y1="440" x2="170" y2="440" class="correlation-line" data-nodes="banditsec portfolio" />
            <line x1="170" y1="440" x2="120" y2="200" class="correlation-line" data-nodes="portfolio ikr" />
            <line x1="120" y1="200" x2="480" y2="200" class="correlation-line" data-nodes="ikr zenit" />
          </g>

          <!-- Completely Static Nodes (No repel, always ready for click or hover) -->
          <!-- Central Core Node -->
          <g class="network-node active-node" data-id="core" transform="translate(300, 300)">
            <circle cx="0" cy="0" r="64" fill="#0A0A0A" stroke="#d4af37" stroke-width="2.5" filter="url(#goldGlow)" />
            <image href="assets/icons/mamba-empire.svg" x="-26" y="-36" width="52" height="52" />
            <text x="0" y="30" text-anchor="middle" fill="#d4af37" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="12" letter-spacing="1">EMPIRE CORE</text>
            <text x="0" y="44" text-anchor="middle" fill="rgba(245, 245, 240, 0.6)" font-size="9">Treasury Hub</text>
          </g>

          <!-- Node 1: KOSA (Top) -->
          <g class="network-node" data-id="kosa" transform="translate(300, 90)">
            <circle cx="0" cy="0" r="48" fill="#043927" stroke="#d4af37" stroke-width="2" />
            <text x="0" y="-8" text-anchor="middle" fill="#f5f5f0" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="14">KOSA</text>
            <text x="0" y="8" text-anchor="middle" fill="#d4af37" font-size="9.5" font-weight="600">All Crops & Food</text>
            <text x="0" y="21" text-anchor="middle" fill="rgba(245, 245, 240, 0.6)" font-size="8.5">& Animals</text>
          </g>

          <!-- Node 2: ZenIT (Top Right) -->
          <g class="network-node" data-id="zenit" transform="translate(480, 200)">
            <circle cx="0" cy="0" r="48" fill="#043927" stroke="#4fa58a" stroke-width="2" />
            <text x="0" y="-8" text-anchor="middle" fill="#f5f5f0" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="14">ZenIT</text>
            <text x="0" y="8" text-anchor="middle" fill="#4fa58a" font-size="9.5" font-weight="600">Electronics & Devices</text>
            <text x="0" y="21" text-anchor="middle" fill="rgba(245, 245, 240, 0.6)" font-size="8.5">& AI Systems</text>
          </g>

          <!-- Node 3: BanditSec (Bottom Right) -->
          <g class="network-node" data-id="banditsec" transform="translate(430, 440)">
            <circle cx="0" cy="0" r="48" fill="#043927" stroke="#ffd700" stroke-width="2" />
            <text x="0" y="-8" text-anchor="middle" fill="#f5f5f0" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="14">BanditSec</text>
            <text x="0" y="8" text-anchor="middle" fill="#ffd700" font-size="9.5" font-weight="600">Security Integrity</text>
            <text x="0" y="21" text-anchor="middle" fill="rgba(245, 245, 240, 0.6)" font-size="8.5">& Cyber Defense</text>
          </g>

          <!-- Node 4: Portfolio & Education (Bottom Left) -->
          <g class="network-node" data-id="portfolio" transform="translate(170, 440)">
            <circle cx="0" cy="0" r="48" fill="#043927" stroke="#7aa86a" stroke-width="2" />
            <text x="0" y="-8" text-anchor="middle" fill="#f5f5f0" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="13">Portfolio</text>
            <text x="0" y="8" text-anchor="middle" fill="#7aa86a" font-size="9.5" font-weight="600">Future Research</text>
            <text x="0" y="21" text-anchor="middle" fill="rgba(245, 245, 240, 0.6)" font-size="8.5">& Higher Institutes</text>
          </g>

          <!-- Node 5: IKR Plantations (Top Left) -->
          <g class="network-node" data-id="ikr" transform="translate(120, 200)">
            <circle cx="0" cy="0" r="48" fill="#043927" stroke="#3ebd8c" stroke-width="2" />
            <text x="0" y="-8" text-anchor="middle" fill="#f5f5f0" font-family="'Cormorant Garamond', serif" font-weight="700" font-size="14">IKR</text>
            <text x="0" y="8" text-anchor="middle" fill="#3ebd8c" font-size="9.5" font-weight="600">Plantations & Land</text>
            <text x="0" y="21" text-anchor="middle" fill="rgba(245, 245, 240, 0.6)" font-size="8.5">& Real Estate</text>
          </g>
        </svg>
      </div>

      <!-- Real-Time Correlation Inspector -->
      <div class="card" id="correlationPanel" style="padding: var(--space-40); background: rgba(10, 10, 10, 0.95); border-color: rgba(212, 175, 55, 0.4);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--space-16);">
          <span class="badge operating" id="correlationBadge"><span class="badge-dot"></span> Active Bastion</span>
          <span style="font-size: 0.8rem; color: var(--color-accent); font-weight: 600;">Hover / Click Any Node</span>
        </div>

        <h3 id="corrTitle" style="font-size: 2.2rem; margin-bottom: var(--space-6); color: var(--color-text-primary);">
          Empire Core
        </h3>
        <p id="corrRole" style="color: var(--color-accent); font-weight: 600; font-size: 0.95rem; margin-bottom: var(--space-20);">
          Central Holding & Treasury Custodian
        </p>

        <div style="background: rgba(4, 57, 39, 0.35); border: 1px solid var(--color-border); border-radius: var(--radius-card); padding: var(--space-20); margin-bottom: var(--space-20);">
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-accent); letter-spacing: 0.08em; display: block; margin-bottom: 8px;">Direct Cross-Ecosystem Correlations:</span>
          <ul id="corrList" style="padding-left: 20px; font-size: 0.9rem; color: var(--color-text-secondary); display: flex; flex-direction: column; gap: 8px; line-height: 1.55;">
            <li>Re-injects 50% group net earnings into IKR land acquisitions and ZenIT hardware R&D.</li>
            <li>Underwrites centralized compliance, legal armor, and statutory tax filings for all operating bastions.</li>
            <li>Authorizes formal subsidiary spin-out triggers once division revenue exceeds $250,000.</li>
          </ul>
        </div>

        <div>
          <span style="font-size: 0.75rem; text-transform: uppercase; color: var(--color-text-dim); letter-spacing: 0.08em; display: block; margin-bottom: 6px;">Interlinked Alliance:</span>
          <p id="corrPartners" style="font-size: 0.88rem; color: var(--color-text-secondary); font-weight: 500;">
            IKR · KOSA · ZenIT · BanditSec · Portfolio
          </p>
        </div>
      </div>
    </div>
  `;

  // Attach Hover & Click Listeners
  const nodes = container.querySelectorAll('.network-node');
  const lines = container.querySelectorAll('.correlation-line');
  const corrTitle = document.getElementById('corrTitle');
  const corrRole = document.getElementById('corrRole');
  const corrList = document.getElementById('corrList');
  const corrPartners = document.getElementById('corrPartners');

  function selectNode(id) {
    const info = correlationData[id];
    if (!info) return;

    // Update Node visual state
    nodes.forEach(n => {
      if (n.dataset.id === id) {
        n.classList.add('active-node');
      } else {
        n.classList.remove('active-node');
      }
    });

    // Highlight connecting lines
    lines.forEach(line => {
      const pair = line.dataset.nodes || '';
      if (pair.includes(id)) {
        line.classList.add('highlighted');
      } else {
        line.classList.remove('highlighted');
      }
    });

    // Update details panel
    corrTitle.textContent = info.name;
    corrRole.textContent = info.role;
    corrList.innerHTML = info.correlations.map(c => `<li>${c}</li>`).join('');
    corrPartners.textContent = info.interlinksWith.join(' · ');
  }

  nodes.forEach(node => {
    const id = node.dataset.id;
    node.addEventListener('mouseenter', () => selectNode(id));
    node.addEventListener('click', () => selectNode(id));
  });

  // Select core initially
  selectNode('core');
});
