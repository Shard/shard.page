// Single source for everything printed on the board, the CV and the projects page.
// Bullet strings may contain inline HTML (links), rendered with set:html.

export const profile = {
  name: 'Mark Beukers',
  title: 'Platform & AI Engineer',
  location: 'Brisbane, Australia',
  site: { label: 'shard.page', href: 'https://shard.page/' },
  github: { label: 'github.com/Shard', href: 'https://github.com/Shard' },
  email: { label: 'mark@afrotoss.com', href: 'mailto:mark@afrotoss.com' },
  /** Opening paragraph of the CV. May contain inline HTML. */
  summary:
    'Platform and AI engineer building for the web since 2008. I run production AWS and Kubernetes infrastructure with Terraform, GitOps and CI/CD, on top of a full stack background. Co-founder and CTO of a SaaS product, and I build AI-native: <a href="https://store.steampowered.com/app/4274390/Lichworks/">a Steam game</a> with an almost entirely agent-written engine, and <a href="https://wrathbench.shard.page">an open-source benchmark</a> for LLM agents. Open to senior contract roles.',
  skills: [
    { label: 'Infrastructure', items: ['AWS', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD'] },
    { label: 'AI', items: ['Agentic development', 'LLM evaluation'] },
    { label: 'Languages', items: ['TypeScript/JavaScript', 'Python', 'Go', 'C#', 'Rust'] },
    { label: 'Backend', items: ['Node.js', 'Django', 'Ruby on Rails', 'REST', 'Hasura'] },
    { label: 'Frontend', items: ['React', 'Redux', 'GraphQL', 'Storybook'] },
  ],
};

export type Job = {
  company: string;
  role: string;
  years: string;
  icon: string;
  bullets: string[];
};

// Current roles first (Sizle and Rune Logic run alongside each other), then newest first.
export const jobs: Job[] = [
  {
    company: 'Sizle.io',
    role: 'Co-Founder/CTO',
    years: '2017–Present',
    icon: '/icons/sizle.webp',
    bullets: [
      'Migrated a production platform into a client’s AWS accounts using Terraform, with no outage (2026)',
      'Co-founded and built mediapress.io, now sizle.io, working closely with the CEO to design and build the product',
      'Built the full stack on AWS with Node.js, Express, Docker, React and Hasura',
    ],
  },
  {
    company: 'Rune Logic',
    role: 'Founder',
    years: '2025–Present',
    icon: '/icons/rune-logic.webp',
    bullets: [
      'Building <a href="https://store.steampowered.com/app/4274390/Lichworks/">Lichworks</a>, an automation RTS on Steam, in C# on FNA with a custom ECS enforced by Roslyn analyzers',
      'Run as a stress test of AI-native development: the engine is nearly 100% agent-written and sustains 50k+ entities at 60fps',
      'Built deterministic lockstep co-op multiplayer with drop-in play, headless dedicated servers, replays and desync detection',
      'Released <a href="https://wrathbench.shard.page">WrathBench</a>, an open-source benchmark that evaluates LLM agents playing World of Warcraft',
    ],
  },
  {
    company: 'Valiant Finance',
    role: 'DevOps Engineer',
    years: '2024–2025',
    icon: '/icons/valiant.webp',
    bullets: [
      'Cut commit-to-completed CI runs from 15+ minutes to under 5 by overhauling the backend and frontend pipelines',
      'Designed and deployed a GitOps Kubernetes cluster on AWS, managed with FluxCD, for internal development environments',
      'Worked hands-on with production AWS, managed as code with Terraform, and improved database performance and observability',
    ],
  },
  {
    company: 'Userback',
    role: 'Full Stack Developer',
    years: '2022–2024',
    icon: '/icons/userback.webp',
    bullets: [
      'Led development of the npm <a href="https://github.com/userback/widget-js">Widget SDKs</a> for multiple frameworks, with automated test coverage',
      'Migrated the browser extension to Manifest V3',
      'Built and deployed a new Node.js REST API',
      'Delivered features and modernisation work on the existing PHP/Backbone stack',
    ],
  },
  {
    company: 'News Corp Australia',
    role: 'Senior Frontend Developer',
    years: '2020–2022',
    icon: '/icons/newscorp.webp',
    bullets: [
      'Led the modernisation of a legacy Django 2/Grunt/jQuery frontend, cutting its size by more than 20x and lifting search traffic',
      'Designed and implemented a Docker Swarm architecture covering deployments from local to production',
      'Worked in Python on the custom Django 2 fork, supporting its migration and improving CI',
    ],
  },
  {
    company: 'Liquid State',
    role: 'Lead Frontend Developer',
    years: '2018–2019',
    icon: '/icons/liquid-state.webp',
    bullets: [
      'Led frontend development for client solutions, building custom iOS, Android and web apps with React, Redux and GraphQL',
      'Ran Storybook-driven component development, upstreaming components to open source',
    ],
  },
  {
    company: 'Isobar',
    role: 'Senior Frontend Developer',
    years: '2015–2017',
    icon: '/icons/isobar.webp',
    bullets: [
      'Built bespoke client solutions for Australia Post, AGN, BHP and Jetstar on Sitefinity and SharePoint',
      'Designed and rolled out a frontend workflow for a team of 20, enabling lightweight JS frontends',
      'Developed an offline-first mobile web app architecture sourcing its data from SharePoint',
    ],
  },
  {
    company: 'Busivid',
    role: 'Software Engineer',
    years: '2014–2015',
    icon: '/icons/busivid.webp',
    bullets: [
      'Developed C#/Mono video encoding APIs, adding multithreading and the ability to scale',
      'Designed and implemented workflow improvements, including an SVN-to-git migration and CI/CD',
      'Built a Salesforce Apex application integrated with the main CakePHP/jQuery app',
    ],
  },
  {
    company: '3rd Sense',
    role: 'Full Stack Web Developer',
    years: '2012–2014',
    icon: '/icons/third-sense.webp',
    bullets: [
      'Built Node.js and Ruby on Rails APIs behind iOS and Android games for McDonald’s, Blockbuster and Nickelodeon',
      'Designed and developed Technicolor’s metadata catalogue system',
    ],
  },
  {
    company: 'Big Click Studios',
    role: 'Full Stack Web Developer',
    years: '2008–2012',
    icon: '/icons/bigclick.webp',
    bullets: [
      'Built custom web applications and websites with CakePHP and Ruby on Rails, with jQuery and Prototype.js frontends',
      'Administered CentOS/Debian servers running Apache, Nginx, MySQL and Sphinx',
    ],
  },
];

export type StampTone = 'red' | 'blue' | 'green';

export type Project = {
  slug: string;
  title: string;
  /** Primary link: the live thing (site, store page). */
  url?: string;
  repo?: string;
  stamp: { label: string; tone: StampTone };
  /** One line for the pinboard and card headers. */
  tagline: string;
  /** Longer description for the projects page. */
  description: string;
  tags: string[];
  image?: { src: string; alt: string; width: number; height: number; caption?: string; pixelated?: boolean };
};

export const projects: Project[] = [
  {
    slug: 'lichworks',
    title: 'Lichworks',
    url: 'https://store.steampowered.com/app/4274390/Lichworks/',
    stamp: { label: 'On Steam', tone: 'blue' },
    tagline: 'An automation RTS, built at Rune Logic',
    description:
      'An automation RTS built in C# on FNA with a custom ECS architecture enforced by Roslyn analyzers. A deliberate stress test of AI-native development: near-100% of the engine is agent-written, sustaining 50k+ active entities at 60fps, with deterministic lockstep multiplayer co-op.',
    tags: ['C#', 'FNA', 'ECS', 'Lockstep multiplayer'],
    image: { src: '/images/rune-logic.webp', alt: 'Pixel-art lich in a purple hood beside a smoking chimney and a green gear', width: 256, height: 256, caption: 'Rune Logic', pixelated: true },
  },
  {
    slug: 'wrathbench',
    title: 'WrathBench',
    url: 'https://wrathbench.shard.page',
    repo: 'https://github.com/Shard/WrathBench',
    stamp: { label: 'Open source', tone: 'green' },
    tagline: 'An agent workbench for World of Warcraft',
    description:
      'AI models play World of Warcraft: Wrath of the Lich King through a TypeScript SDK on a private AzerothCore server. A thin server module exposes what a game client could see and do, a runner harness gives each model the SDK in a sandbox and logs everything, and the results land on a public dashboard. Self-hostable with Docker Compose or Helm.',
    tags: ['TypeScript', 'Bun', 'AzerothCore', 'LLM evaluation'],
    image: { src: '/images/wrathbench.webp', alt: 'WrathBench results chart: model logos plotted by cost per run against experience earned, with the Pareto frontier drawn as a step line', width: 800, height: 420 },
  },
  {
    slug: 'foxhole-logi-pyramid',
    title: 'Foxhole Logi Pyramid',
    url: 'https://pyramid.82dk.net/',
    repo: 'https://github.com/Shard/fir',
    stamp: { label: 'Live', tone: 'red' },
    tagline: 'Logistics supply calculator for Foxhole',
    description:
      "Logistics supply calculator for the game Foxhole — a priority-calculation layer built on fir’s TensorFlow/TensorFlow.js image recognition, turning stockpile screenshots into prioritised supply requirements",
    tags: ['TensorFlow.js', 'Image recognition'],
  },
  {
    slug: 'fronius-exporter',
    title: 'Fronius Exporter',
    repo: 'https://github.com/Shard/fronius-exporter',
    stamp: { label: 'In use', tone: 'blue' },
    tagline: 'Prometheus metrics for Fronius solar inverters',
    description:
      'Rust Prometheus exporter for Fronius solar inverters with subnet auto-discovery, Grafana dashboards and Docker/Kubernetes (Helm) deployment, used at home to monitor my local power grid',
    tags: ['Rust', 'Prometheus', 'Grafana', 'Helm'],
  },
];

/** Short display form of a URL for link labels. */
export const displayUrl = (href: string) => href.replace(/^https?:\/\//, '').replace(/\/$/, '');
