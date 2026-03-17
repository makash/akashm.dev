export interface Book {
  title: string;
  subtitle: string;
  role: 'Author' | 'Co-Author' | 'Technical Reviewer';
  coAuthors: string[];
  publisher: string;
  year: number;
  pages: number;
  isbn: string;
  description: string;
  distinction?: string;
  topics: string[];
  links: { label: string; url: string }[];
}

export const books: Book[] = [
  {
    title: 'Burp Suite Essentials',
    subtitle: 'Discover the secrets of web application pentesting using Burp Suite',
    role: 'Author',
    coAuthors: [],
    publisher: 'Packt Publishing',
    year: 2014,
    pages: 144,
    isbn: '978-1783550111',
    description: 'A practical guide to mastering Burp Suite for web and mobile application penetration testing. Covers all major tools — Target, Proxy, Intruder, Scanner, Repeater, Spider, Sequencer, Decoder — plus custom extension development in Java, Python, and Ruby.',
    distinction: 'Recommended as a reference by PortSwigger, the creators of Burp Suite.',
    topics: ['Web Application Security', 'Penetration Testing', 'Burp Suite', 'Security Tools'],
    links: [
      { label: 'Amazon', url: 'https://www.amazon.com/Burp-Suite-Essentials-Akash-Mahajan/dp/1783550112' },
      { label: 'Packt', url: 'https://www.packtpub.com/en-us/product/burp-suite-essentials-9781783550111' },
      { label: "O'Reilly", url: 'https://www.oreilly.com/library/view/burp-suite-essentials/9781783550111/' },
    ],
  },
  {
    title: 'Security Automation with Ansible 2',
    subtitle: 'Leverage Ansible 2 to automate complex security tasks',
    role: 'Co-Author',
    coAuthors: ['Madhu Akula'],
    publisher: 'Packt Publishing',
    year: 2017,
    pages: 364,
    isbn: '978-1788394512',
    description: 'Teaches security automation using Ansible 2 for patching, hardening, vulnerability scanning, compliance, Docker container security, malware analysis, and forensics. Covers integration with Ansible Tower and Jenkins, plus custom module development.',
    topics: ['Security Automation', 'Ansible', 'DevSecOps', 'Cloud Security', 'Malware Analysis'],
    links: [
      { label: 'Amazon', url: 'https://www.amazon.com/Security-Automation-Ansible-Leverage-application/dp/1788394518' },
      { label: 'Packt', url: 'https://www.packtpub.com/en-us/product/security-automation-with-ansible-2-9781788394512' },
      { label: "O'Reilly", url: 'https://www.oreilly.com/library/view/security-automation-with/9781788394512/' },
    ],
  },
];

export const newsletters = [
  {
    title: 'Cloud Security Mutiny',
    platform: 'Substack',
    url: 'https://securitymutiny.substack.com/',
    description: 'No-BS cloud security strategies for small teams.',
  },
  {
    title: 'Agentic Security Brief',
    platform: 'Substack',
    url: 'https://securitymutiny.substack.com/',
    description: 'AI agent security — what breaks, what matters.',
  },
  {
    title: 'Akash in Beta',
    platform: 'Substack',
    url: 'https://akashinbeta.substack.com/',
    description: 'Building in public — shipping, learning, writing about it.',
  },
];
