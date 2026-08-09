const rubric = [
  ["Intent clarity", 15],
  ["Answer extractability", 15],
  ["Entity clarity", 15],
  ["Information structure", 15],
  ["Evidence / trust", 15],
  ["Internal knowledge graph", 10],
  ["Technical AI accessibility", 10],
  ["Freshness / provenance", 5],
];

const pages = [
  {
    page: "/",
    before: [10, 8, 10, 11, 9, 8, 9, 2],
    after: [14, 13, 15, 14, 11, 10, 10, 2],
    evidence: [
      "Hero copy now defines what eaglecast is in one extractable paragraph.",
      "Added an 'eaglecast at a glance' fact block with service, devices, trial, support, and reseller fields.",
      "Homepage now links clearly to packages, free trial, support, reseller, and blog.",
    ],
  },
  {
    page: "/contact",
    before: [12, 10, 12, 12, 10, 9, 10, 2],
    after: [15, 15, 14, 14, 11, 10, 10, 2],
    evidence: [
      "Added a direct-answer block for how to contact eaglecast customer service.",
      "WhatsApp, login help, and portal help are visible immediately near the top.",
      "Added ContactPage JSON-LD for clearer machine-readable page intent.",
    ],
  },
  {
    page: "/login-help",
    before: [12, 11, 12, 11, 10, 8, 10, 2],
    after: [15, 15, 14, 13, 11, 9, 10, 2],
    evidence: [
      "Added a concise answer block for 'How do I log in to eaglecast?'",
      "Clarifies that there is no public website login dashboard and where credentials are used.",
      "Added WebPage JSON-LD for login-help intent.",
    ],
  },
  {
    page: "/portal-help",
    before: [12, 11, 12, 11, 10, 8, 10, 2],
    after: [15, 15, 14, 13, 11, 9, 10, 2],
    evidence: [
      "Added a concise answer block for where eaglecast portal details come from.",
      "Explains recovery and troubleshooting without exposing private infrastructure.",
      "Added WebPage JSON-LD for portal-help intent.",
    ],
  },
  {
    page: "/reseller",
    before: [11, 9, 11, 12, 9, 8, 10, 2],
    after: [15, 14, 14, 13, 10, 9, 10, 2],
    evidence: [
      "Added a direct-answer block for what the reseller program is and how to start.",
      "Explains audience, workflow, and contact method without income claims.",
      "Added WebPage JSON-LD for reseller program intent.",
    ],
  },
  {
    page: "/blog",
    before: [11, 10, 11, 12, 10, 8, 10, 2],
    after: [13, 12, 12, 12, 10, 9, 10, 2],
    evidence: [
      "Index remains crawlable and clear as an IPTV guide hub.",
      "Blog architecture still routes into topic-specific articles rather than brand-stuffed summaries.",
      "Blog posts themselves provide most of the answer extractability gains.",
    ],
  },
  {
    page: "/blog/what-is-iptv",
    before: [13, 14, 13, 13, 10, 8, 10, 5],
    after: [14, 14, 14, 13, 10, 8, 10, 5],
    evidence: [
      "Quick answer already answered the core query directly.",
      "Strong concept definition and internal links support retrieval.",
    ],
  },
  {
    page: "/blog/iptv-vs-cable-streaming",
    before: [13, 13, 12, 14, 10, 8, 10, 5],
    after: [14, 14, 13, 14, 10, 8, 10, 5],
    evidence: [
      "Comparison framing and table support passage extraction.",
      "Headings already map well to decision questions.",
    ],
  },
  {
    page: "/blog/best-devices-for-iptv",
    before: [13, 12, 12, 12, 9, 8, 10, 5],
    after: [14, 13, 13, 12, 9, 8, 10, 5],
    evidence: [
      "Direct answer already near the top.",
      "Device-selection logic and room-based recommendations provide information gain.",
    ],
  },
  {
    page: "/blog/how-to-set-up-iptv-smart-tv",
    before: [13, 13, 12, 13, 9, 9, 10, 5],
    after: [14, 14, 13, 13, 12, 9, 10, 5],
    evidence: [
      "Added source links to official Google TV help resources.",
      "Article already had extractable setup steps and now has stronger provenance.",
    ],
  },
  {
    page: "/blog/how-to-set-up-iptv-fire-tv",
    before: [13, 13, 12, 13, 9, 9, 10, 5],
    after: [14, 14, 13, 13, 12, 9, 10, 5],
    evidence: [
      "Added source links to official Amazon Fire TV documentation.",
      "Checklist-style sections support retrieval and step extraction.",
    ],
  },
  {
    page: "/blog/fix-iptv-buffering",
    before: [14, 14, 12, 14, 10, 9, 10, 5],
    after: [14, 14, 13, 14, 13, 9, 10, 5],
    evidence: [
      "Added RFC-based sources for jitter and packet-delay terminology.",
      "Decision matrix and troubleshooting workflow give strong information gain.",
    ],
  },
  {
    page: "/blog/internet-speed-for-iptv",
    before: [14, 14, 12, 14, 10, 9, 10, 5],
    after: [14, 14, 13, 14, 13, 9, 10, 5],
    evidence: [
      "Added RFC-based sources for latency, jitter, and packet-delay variation.",
      "Bandwidth planning table and household scenarios improve extractable usefulness.",
    ],
  },
  {
    page: "/blog/what-is-iptv-epg",
    before: [13, 13, 13, 13, 10, 8, 10, 5],
    after: [14, 14, 13, 13, 10, 8, 10, 5],
    evidence: [
      "Quick answer and troubleshooting sequence already support extraction.",
      "Clear EPG definition and link graph help concept grounding.",
    ],
  },
  {
    page: "/blog/iptv-reseller-guide",
    before: [13, 13, 12, 13, 10, 9, 10, 5],
    after: [14, 14, 13, 13, 10, 9, 10, 5],
    evidence: [
      "Operational checklists and workflow framing provide original value.",
      "Clear bridge to reseller page and contact path improves graph clarity.",
    ],
  },
  {
    page: "/blog/how-to-choose-iptv-provider",
    before: [14, 14, 12, 14, 10, 9, 10, 5],
    after: [14, 14, 13, 14, 10, 10, 10, 5],
    evidence: [
      "Provider checklist and evaluation table remain strong extractable assets.",
      "Support, login-help, and portal-help references improve knowledge graph quality.",
    ],
  },
];

function total(scores) {
  return scores.reduce((sum, value) => sum + value, 0);
}

function validate() {
  const maxTotal = rubric.reduce((sum, [, max]) => sum + max, 0);

  for (const page of pages) {
    if (
      page.before.length !== rubric.length ||
      page.after.length !== rubric.length
    ) {
      throw new Error(`Score length mismatch for ${page.page}`);
    }

    page.before.forEach((score, index) => {
      if (score < 0 || score > rubric[index][1]) {
        throw new Error(
          `Invalid before score for ${page.page} at ${rubric[index][0]}`,
        );
      }
    });

    page.after.forEach((score, index) => {
      if (score < 0 || score > rubric[index][1]) {
        throw new Error(
          `Invalid after score for ${page.page} at ${rubric[index][0]}`,
        );
      }
    });

    if (total(page.before) > maxTotal || total(page.after) > maxTotal) {
      throw new Error(`Total exceeds rubric for ${page.page}`);
    }
  }
}

function render() {
  const lines = [];
  lines.push("# eaglecast GEO audit");
  lines.push("");
  lines.push("## Rubric");
  lines.push("");
  lines.push("| Category | Max |");
  lines.push("| --- | ---: |");
  for (const [label, max] of rubric) {
    lines.push(`| ${label} | ${max} |`);
  }
  lines.push("");
  lines.push("## Before and after scores");
  lines.push("");
  lines.push("| Page | Before | After | Delta |");
  lines.push("| --- | ---: | ---: | ---: |");

  for (const page of pages) {
    const before = total(page.before);
    const after = total(page.after);
    lines.push(
      `| ${page.page} | ${before} | ${after} | ${after - before >= 0 ? "+" : ""}${after - before} |`,
    );
  }

  lines.push("");
  lines.push("## Evidence notes");
  lines.push("");

  for (const page of pages) {
    lines.push(`### ${page.page}`);
    lines.push(`Before: ${total(page.before)} / 100`);
    lines.push(`After: ${total(page.after)} / 100`);
    for (const note of page.evidence) {
      lines.push(`- ${note}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

validate();
console.log(render());
