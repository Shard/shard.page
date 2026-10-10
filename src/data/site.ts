// Single source for everything printed on the board, the CV and the projects page.
// Bullet strings may contain inline HTML (links), rendered with set:html.

export const profile = {
  name: 'Mark Beukers',
  title: 'Full Stack Engineer',
  location: 'Brisbane, Australia',
  site: { label: 'shard.page', href: 'https://shard.page/' },
  github: { label: 'github.com/Shard', href: 'https://github.com/Shard' },
  email: { label: 'mark@afrotoss.com', href: 'mailto:mark@afrotoss.com' },
};

export type Job = {
  company: string;
  role: string;
  years: string;
  icon: string;
  bullets: string[];
};

export const jobs: Job[] = [
  {
    company: 'Rune Logic',
    role: 'Founder',
    years: '2025–Present',
    icon: '/icons/rune-logic.webp',
    bullets: [
      'Leading development of <a href="https://store.steampowered.com/app/4274390/Lichworks/">Lichworks</a>, an automation RTS built in C# on FNA with a custom ECS architecture enforced by Roslyn analyzers',
      'A deliberate stress test of AI-native development: near-100% of the engine is agent-written, sustaining 50k+ active entities at 60fps',
      'Deterministic lockstep multiplayer co-op with drop-in/drop-out play, headless dedicated servers, replay recording and desync detection',
      'Shipping cross-platform Linux/Windows/Mac builds to Steam and itch.io',
    ],
  },
  {
    company: 'Valiant Finance',
    role: 'DevOps Engineer',
    years: '2024–2025',
    icon: '/icons/valiant.webp',
    bullets: [
      'Overhauled backend and frontend CI pipelines, cutting commit-to-completed runs from 15+ minutes to under 5',
      'Designed and deployed a FluxCD-managed (GitOps) Kubernetes cluster on AWS for internal development environments',
      'Improved database performance and uplifted observability practices and systems',
    ],
  },
  {
    company: 'Userback',
    role: 'Full Stack Developer',
    years: '2022–2024',
    icon: '/icons/userback.webp',
    bullets: [
      'Led development on npm <a href="https://github.com/userback/widget-js">Widget SDKs</a> for multiple frameworks including automated testing',
      'Refactored and upgraded existing web extension to support Manifest V3',
      'Developed and deployed new Node.js REST API',
      'Feature development and modernisation work on existing PHP/Backbone stack',
    ],
  },
  {
    company: 'Newscorp Australia',
    role: 'Senior Frontend Developer',
    years: '2020–2022',
    icon: '/icons/newscorp.webp',
    bullets: [
      'Led frontend efforts to modernise a legacy django2/grunt/jquery stack',
      'Python development on the custom Django 2 fork, supporting its migration alongside CI improvements',
      'Achieved more than 20x reductions in total FE size and vastly improved search traffic',
      'Designed and implemented a Docker Swarm architecture to handle deployments from local to production',
    ],
  },
  {
    company: 'Sizle.io',
    role: 'Co-Founder/CTO',
    years: '2017–2018/2022',
    icon: '/icons/sizle.webp',
    bullets: [
      'Originally building and founding mediapress.io (now sizle.io)',
      'Working closely with the CEO to design and develop features for a new and developing product',
      'Full stack development (AWS/Node.js/Express/Docker/React/Hasura)',
    ],
  },
  {
    company: 'Liquid State',
    role: 'Lead Frontend Developer',
    years: '2018–2019',
    icon: '/icons/liquid-state.webp',
    bullets: [
      'Led client solutions frontend development using React/Redux/GraphQL to create custom iOS, Android and web apps',
      'Agile based storybook driven development for open source up-streaming of components',
    ],
  },
  {
    company: 'Isobar',
    role: 'Senior Frontend Developer',
    years: '2015–2017',
    icon: '/icons/isobar.webp',
    bullets: [
      'Developing bespoke client solutions for AusPost/AGN/BHP/Jetstar built on top of Sitefinity and Sharepoint',
      'Designed and integrated frontend workflow for a team of 20 to enable low weight JS frontends',
      'Developed an offline-first mobile web app architecture with data sourcing from Sharepoint',
    ],
  },
  {
    company: 'Busivid',
    role: 'Software Engineer',
    years: '2014–2015',
    icon: '/icons/busivid.webp',
    bullets: [
      'C#/Mono development of video encoding APIs to enable multithreading and scaling capabilities',
      'Frontend development with CakePHP/jQuery',
      'Workflow improvements designed and implemented including SVN/git migration and CI/CD',
      'Development of Salesforce Apex application for integration into the main app',
    ],
  },
  {
    company: '3rd Sense',
    role: 'Full Stack Web Developer',
    years: '2012–2014',
    icon: '/icons/third-sense.webp',
    bullets: [
      "Backend APIs for Starling/iOS/Android video games with Node.js and Ruby on Rails for McDonald’s, Blockbuster and Nickelodeon",
      "Design and development of Technicolor’s metadata catalogue system",
    ],
  },
  {
    company: 'Big Click Studios',
    role: 'Full Stack Web Developer',
    years: '2008–2012',
    icon: '/icons/bigclick.webp',
    bullets: [
      'Developing custom web applications and websites with CakePHP 2/3 and ruby on rails',
      'Frontend development with jQuery(ui) and prototype.js',
      'System admin for CentOS/Debian servers running Apache/Nginx/MySQL/Sphinx',
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
