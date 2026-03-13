import { useMemo } from 'react';

type FrameLink = {
  label: string;
  icon: string;
  href: string;
  colorClass: string;
};

type Project = {
  name: string;
  summary: string;
  stack: string;
  github: string;
  demo: string;
};

const frameLinks: FrameLink[] = [
  { label: 'About Me', icon: '👤', href: '#about', colorClass: 'frame-about' },
  { label: 'Substack Blog', icon: '✍️', href: '/blog', colorClass: 'frame-blog' },
  { label: 'Coding Projects', icon: '💻', href: '#projects', colorClass: 'frame-projects' },
  { label: 'Heyzine Flipbook', icon: '📖', href: '#flipbook', colorClass: 'frame-flipbook' },
];

const projects: Project[] = [
  {
    name: 'Inclusive Campus Navigator',
    summary: 'Accessible web app to map quiet study zones, elevators, and low-sensory paths.',
    stack: 'React, TypeScript, Firebase',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    name: 'Community Story Atlas',
    summary: 'Interactive visual journal that maps interviews and neighborhood oral histories.',
    stack: 'Next.js, Mapbox, Prisma',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    name: 'Mentor Match Toolkit',
    summary: 'A design-forward dashboard that pairs students with mentors by goals and availability.',
    stack: 'React, Node, PostgreSQL',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
];

const plannedPosts = [
  {
    title: 'Designing Belonging in Tech Spaces',
    date: 'Planned • May 2026',
    teaser: 'How community-centered product choices can make technical experiences more human.',
  },
  {
    title: 'What Building in Public Taught Me',
    date: 'Planned • June 2026',
    teaser: 'Lessons from sharing drafts, prototypes, and unfinished thinking while growing as a developer.',
  },
  {
    title: 'My Accessibility-First Frontend Checklist',
    date: 'Planned • July 2026',
    teaser: 'Practical checks I now run before calling any interface production-ready.',
  },
];

const isBlogRoute = (pathname: string) => pathname === '/blog' || pathname === '/blog/';

function App() {
  const pathname = useMemo(() => window.location.pathname, []);

  if (isBlogRoute(pathname)) {
    return <BlogPage />;
  }

  return <HomePage />;
}

function HomePage() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <span className="brand">Amtullah N.</span>
        <nav>
          <a href="#about">About</a>
          <a href="#blog-preview">Blog</a>
          <a href="#projects">Projects</a>
          <a href="#flipbook">Flipbook</a>
        </nav>
      </header>

      <section className="living-room" aria-label="Welcome to my virtual living room">
        <p className="eyebrow">✦ Welcome to ✦</p>
        <h1>My Virtual Living Room</h1>
        <p className="intro">Click a frame to explore the space.</p>

        <div className="frames-wall">
          {frameLinks.map((frame) => (
            <a key={frame.label} className={`frame-card ${frame.colorClass}`} href={frame.href}>
              <span className="icon" aria-hidden="true">
                {frame.icon}
              </span>
              <span>{frame.label}</span>
            </a>
          ))}
        </div>

        <div className="room-illustration" aria-hidden="true">
          <div className="bookshelf" />
          <div className="couch" />
          <div className="plant left" />
          <div className="plant right" />
        </div>
      </section>

      <main>
        <section id="about" className="panel">
          <h2>About Me</h2>
          <p>
            I&apos;m a developer who loves thoughtful interfaces, storytelling through code, and building products that
            feel welcoming. This website is my digital home for projects, writing, and experiments.
          </p>
        </section>

        <section id="blog-preview" className="panel">
          <div className="section-head">
            <h2>Planned Substack Posts</h2>
            <a href="/blog">View full blog page →</a>
          </div>
          <div className="post-grid">
            {plannedPosts.map((post) => (
              <article key={post.title}>
                <h3>{post.title}</h3>
                <p className="meta">{post.date}</p>
                <p>{post.teaser}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="panel">
          <h2>Personal Coding Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.name} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <p className="meta">{project.stack}</p>
                <div className="project-links">
                  <a href={project.github}>GitHub</a>
                  <a href={project.demo}>Live Demo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="flipbook" className="panel">
          <h2>Flipbook Corner</h2>
          <p>Embed your Heyzine link below by replacing the iframe src with your published flipbook URL.</p>
          <div className="flipbook-wrap">
            <iframe
              title="Heyzine flipbook"
              src="https://heyzine.com/flip-book/placeholder.html"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </section>
      </main>
    </div>
  );
}

function BlogPage() {
  return (
    <div className="blog-page">
      <header className="topbar">
        <span className="brand">Amtullah N.</span>
        <nav>
          <a href="/">← Back Home</a>
        </nav>
      </header>

      <main className="panel">
        <p className="eyebrow">Substack Studio</p>
        <h1>Blog Posts</h1>
        <p>
          This page is intentionally separate so you can grow it into a true archive of published Substack writing.
          For now, here&apos;s your starter structure.
        </p>

        <div className="post-grid">
          {plannedPosts.map((post) => (
            <article key={post.title}>
              <h3>{post.title}</h3>
              <p className="meta">{post.date}</p>
              <p>{post.teaser}</p>
              <a href="https://substack.com">Draft in Substack →</a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
