import { BookOpen, Code2, Sparkles, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const frames = [
  { icon: UserRound, label: 'About Me', href: '#about', accent: 'frame-pink' },
  { icon: BookOpen, label: 'Substack Blog', href: '/blog', accent: 'frame-cream' },
  { icon: Code2, label: 'Coding Projects', href: '#projects', accent: 'frame-blue' },
  { icon: Sparkles, label: 'Heyzine Flipbook', href: '#flipbook', accent: 'frame-peach' },
];

export function HomePage() {
  return (
    <main>
      <section className="living-room" id="welcome">
        <div className="hero-copy">
          <p>WELCOME TO</p>
          <h1>My Virtual Living Room</h1>
          <span>Click a frame to explore</span>
        </div>

        <div className="frame-row">
          {frames.map(({ icon: Icon, label, href, accent }) => {
            const frameCard = (
              <>
                <Icon size={32} />
                <strong>{label}</strong>
              </>
            );

            return href.startsWith('/') ? (
              <Link key={label} className={`frame-card ${accent}`} to={href}>
                {frameCard}
              </Link>
            ) : (
              <a key={label} className={`frame-card ${accent}`} href={href}>
                {frameCard}
              </a>
            );
          })}
        </div>

        <div className="scene">
          <div className="bookshelf" />
          <div className="couch" />
          <div className="gallery-wall" />
        </div>
      </section>

      <section id="about" className="content-section">
        <h2>About Me</h2>
        <p>
          I&apos;m Amtullah, a software engineer who loves pairing delightful design with meaningful code. I build
          products that feel warm, useful, and grounded in community.
        </p>
        <ul>
          <li>🌱 Currently exploring front-end architecture and product storytelling.</li>
          <li>🤝 Passionate about mentoring and leadership experiences in tech communities.</li>
          <li>🎨 Inspired by editorials, sketchbooks, and playful visual systems.</li>
        </ul>
      </section>

      <section id="projects" className="content-section">
        <h2>Personal Coding Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.github}>GitHub</a>
                <a href={project.demo}>Live Demo</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="flipbook" className="content-section">
        <h2>Featured Flipbook</h2>
        <p>Embed your Heyzine flipbook link below when you are ready to publish your collection.</p>
        <div className="embed-shell">
          <iframe
            title="Heyzine flipbook preview"
            src="https://heyzine.com/flip-book/placeholder.html"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </section>
    </main>
  );
}
