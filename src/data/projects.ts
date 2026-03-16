export interface Project {
  name: string;
  company: 'personal' | 'kloudle' | 'appsecco';
  description: string;
  url: string | null;
  tags: string[];
}

export const projects: Project[] = [
  {
    name: 'ccrank.dev',
    company: 'personal',
    description: 'Leaderboard and analytics for Claude Code usage, with a live public scoreboard.',
    url: 'https://github.com/makash/claude-leaderboard-using-ccusage',
    tags: ['claude-code', 'analytics', 'cloudflare'],
  },
  {
    name: 'SPA Hacker Agent',
    company: 'personal',
    description: 'Agent-driven SPA security scanner with browser automation, recon workflows, and exploit validation.',
    url: 'https://github.com/makash/spa-hacking-agent',
    tags: ['security', 'agent', 'pentesting'],
  },
  {
    name: 'clawdwa',
    company: 'personal',
    description: 'Use Claude from WhatsApp groups — a chat bridge for fast, collaborative agent workflows.',
    url: 'https://github.com/makash/clawdwa',
    tags: ['whatsapp', 'claude', 'agent-ops'],
  },
  {
    name: 'Learn Claude Code Workbook',
    company: 'personal',
    description: 'Hands-on guides for founders and engineers to become productive with Claude Code.',
    url: 'https://github.com/makash/learn-claude-code',
    tags: ['education', 'claude-code', 'workbook'],
  },
  {
    name: 'Great Web Copy',
    company: 'personal',
    description: 'Claude Code plugin to generate high-converting website copy using structured copywriting frameworks.',
    url: 'https://github.com/makash/great-web-copy',
    tags: ['copywriting', 'plugin', 'marketing'],
  },
  {
    name: 'PMF Plugin',
    company: 'personal',
    description: 'Plugin-oriented toolkit focused on product-market-fit validation workflows.',
    url: 'https://github.com/makash/pmf-plugin',
    tags: ['pmf', 'product-strategy', 'founder-tools'],
  },
  {
    name: 'Cloud Security List',
    company: 'personal',
    description: 'Curated resource hub for cloud security engineers, tools, and practical references.',
    url: 'https://github.com/makash/cloud-security-list',
    tags: ['cloud-security', 'curation', 'community'],
  },
  {
    name: 'Learn Kannada Alphabet',
    company: 'personal',
    description: 'Offline-ready educational PWA for early learners to practice Kannada alphabet basics.',
    url: 'https://github.com/makash/learn-kannada-alphabet-for-kids',
    tags: ['education', 'pwa', 'language-learning'],
  },
  {
    name: 'Scam Calls India',
    company: 'personal',
    description: 'Public awareness and data project documenting patterns in scam calls in India.',
    url: 'https://github.com/makash/scam-calls-india',
    tags: ['security-awareness', 'osint', 'community'],
  },
  {
    name: 'OpenClaw Secure Setup',
    company: 'personal',
    description: 'Opinionated security hardening and deployment flow for running OpenClaw quickly and safely.',
    url: 'https://github.com/makash/getbot-secure-openclaw',
    tags: ['security', 'devops', 'automation'],
  },
  {
    name: 'Kloudle Scan',
    company: 'kloudle',
    description: 'Cloud security posture scanning tooling adapted for modern cloud and agentic workflows.',
    url: 'https://github.com/Kloudle/kloudle-scan',
    tags: ['cloud-security', 'scanner', 'cspm'],
  },
  {
    name: 'Kloudle Agent Security Platform',
    company: 'kloudle',
    description: 'Backend and frontend services for Kloudle\'s agent-era security platform — scan, detect, report.',
    url: null,
    tags: ['platform', 'agent-security', 'private'],
  },
  {
    name: 'Web Security Scanner AI Agent',
    company: 'appsecco',
    description: 'AI-assisted web application security scanner focused on practical recon, analysis, and testing.',
    url: 'https://github.com/appsecco/appsecco-web-security-scanner-ai-agent',
    tags: ['security', 'ai-agent', 'scanner'],
  },
  {
    name: 'AI Security Knowledge Base',
    company: 'appsecco',
    description: 'Structured knowledge base of Appsecco methodologies for AI and application security testing.',
    url: 'https://github.com/appsecco/appsecco-ai-security-kb',
    tags: ['knowledge-base', 'security', 'documentation'],
  },
  {
    name: 'Pentester to AI Red Teamer',
    company: 'appsecco',
    description: 'Training platform and curriculum to help traditional pentesters transition into AI red teaming.',
    url: 'https://github.com/appsecco/pentester-to-ai-red-teamer',
    tags: ['training', 'ai-red-teaming', 'education'],
  },
  {
    name: 'MCP Client & Proxy',
    company: 'appsecco',
    description: 'MCP proxy/client tooling for routing and inspecting MCP server traffic during security testing.',
    url: null,
    tags: ['mcp', 'security', 'proxy', 'private'],
  },
];

export const companies = {
  kloudle: {
    name: 'Kloudle',
    role: 'Founder',
    description: 'Cloud security for the agent era. Scanning, detection, and posture management — built for teams shipping with AI agents.',
    url: 'https://kloudle.com',
  },
  appsecco: {
    name: 'Appsecco',
    role: 'Founder',
    description: 'Application security consulting and training. From pentesting to AI red teaming — helping teams find and fix what matters.',
    url: 'https://appsecco.com',
  },
} as const;
