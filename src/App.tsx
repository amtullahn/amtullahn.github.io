import { useMemo } from 'react';
import {
  FaBookOpen,
  FaLaptopCode,
  FaPenNib,
  FaRegUser,
  FaArrowUpRightFromSquare,
  FaGithub,
} from 'react-icons/fa6';

type FrameLink = {
  label: string;
  href: string;
  Icon: typeof FaRegUser;
  note: string;
};

type Project = {
  name: string;
  summary: string;
  stack: string;
  github: string;
  demo: string;
};

const frameLinks: FrameLink[] = [
  { label: 'About Me', href: '#about', Icon: FaRegUser, note: 'story + journey' },
  { label: 'Substack Blog', href: '/blog', Icon: FaPenNib, note: 'essays in progress' },
  { label: 'Coding Projects', href: '#projects', Icon: FaLaptopCode, note: 'builds + demos' },
  { label: 'Heyzine Flipbook', href: '#flipbook', Icon: FaBookOpen, note: 'creative corner' },
];

const projects: Project[] = [
  {
    name: 'Inclusive Campus Navigator',
    summary: 'Accessible map experience for quiet study zones, elevators, and low-sensory routes.',
    stack: 'React, TypeScript, Firebase',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    name: 'Community Story Atlas',
    summary: 'Interactive storytelling space for interviews, neighborhoods, and oral history data.',
    stack: 'Next.js, Mapbox, Prisma',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    name: 'Mentor Match Toolkit',
    summary: 'A warm, simple dashboard that matches students and mentors by goals and availability.',
    stack: 'React, Node, PostgreSQL',
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
];

const plannedPosts = [
  {
    title: 'Designing Belonging in Tech Spaces',
    date: 'Planned • May 2026',
    teaser: 'How community-centered product choices can make technical experiences feel more human.',
  },
  {
    title: 'What Building in Public Taught Me',
    date: 'Planned • June 2026',
    teaser: 'Lessons from sharing drafts and prototypes while growing into a stronger engineer.',
  },
  {
    title: 'My Accessibility-First Frontend Checklist',
    date: 'Planned • July 2026',
    teaser: 'The practical checks I run before calling an interface production-ready.',
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
        <a className="brand" href="/">
          Amtullah N.
        </a>
        <nav>
          <a href="#about">About</a>
          <a href="#blog-preview">Blog</a>
          <a href="#projects">Projects</a>
          <a href="#flipbook">Flipbook</a>
        </nav>
      </header>

      <section className="living-room" aria-label="Welcome to my virtual living room">
        <p className="eyebrow">WELCOME TO MY SPACE</p>
        <h1>Virtual Living Room</h1>
        <p className="intro">
          A cleaner, cozy landing room with quick paths to my writing, work, and creative projects.
        </p>

        <div className="room-scene" aria-hidden="true">
          <div className="scene-wall" />
          <div className="gallery-grid">
            {frameLinks.map(({ label, href, Icon, note }) => (
              <a key={label} className="frame-card" href={href}>
                <Icon className="frame-icon" />
                <span>{label}</span>
                <small>{note}</small>
              </a>
            ))}
          </div>
          <div className="couch" />
          <div className="bookshelf" />
          <div className="coffee-table" />
        </div>
      </section>

      <main>
        <section id="about" className="panel">
          <h2>About Me</h2>
          <p>
            I&apos;m a software developer who cares about thoughtful UX, accessibility, and storytelling through code.
            I love building products that feel clear, welcoming, and technically strong.
          </p>
        </section>

        <section id="blog-preview" className="panel">
          <div className="section-head">
            <h2>Planned Substack Posts</h2>
            <a href="/blog">See blog page</a>
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
                  <a href={project.github}>
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.demo}>
                    <FaArrowUpRightFromSquare /> Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="flipbook" className="panel">
          <h2>Flipbook Corner</h2>
          <p>Replace the iframe source below with your live Heyzine URL when your flipbook is ready.</p>
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
        <a className="brand" href="/">
          Amtullah N.
        </a>
        <nav>
          <a href="/">← Back Home</a>
        </nav>
      </header>

      <main className="panel blog-panel">
        <p className="eyebrow">SUBSTACK STUDIO</p>
        <h1>Blog Posts</h1>
        <p>A dedicated page for drafting and organizing upcoming essays before they go live on Substack.</p>

        <div className="post-grid">
          {plannedPosts.map((post) => (
            <article key={post.title}>
              <h3>{post.title}</h3>
              <p className="meta">{post.date}</p>
              <p>{post.teaser}</p>
              <a href="https://substack.com">Draft in Substack</a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
