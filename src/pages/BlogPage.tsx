import { Link } from 'react-router-dom';

const plannedPosts = [
  {
    title: 'Designing a Personal Website Like a Storybook',
    status: 'Drafting',
    summary: 'Notes on blending a whimsical visual language with portfolio-grade clarity and hierarchy.',
  },
  {
    title: 'What I Learned Building Product Features End-to-End',
    status: 'Outlining',
    summary: 'A practical breakdown of balancing UX, system design, and teammate collaboration.',
  },
  {
    title: 'Leadership Lessons from Community-Centered Tech Spaces',
    status: 'Researching',
    summary: 'Reflections from organizing and contributing to spaces where people learn in public.',
  },
];

export function BlogPage() {
  return (
    <main className="blog-page">
      <header>
        <p>SUBSTACK CORNER</p>
        <h1>Planned Blog Posts</h1>
        <span>This page can evolve into a full archive once your Substack is live.</span>
        <Link to="/">← Back to Living Room</Link>
      </header>

      <section className="post-list">
        {plannedPosts.map((post) => (
          <article key={post.title}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.summary}</p>
            </div>
            <span>{post.status}</span>
          </article>
        ))}
      </section>
    </main>
  );
}
