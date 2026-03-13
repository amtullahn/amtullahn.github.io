import { ArrowUpRight, Clock, Tag } from "lucide-react";

const T = "#577371";
const G = "#E6B079";
const O = "#BCA446";
const B = "#EFD6D5";
const SKY = "#BED2D5";

const BLOG_POSTS = [
  {
    id: 1, tag: "Tech & Life",
    title: "The Art of Debugging: When Everything Works But Nothing Makes Sense",
    excerpt: "There's a special kind of chaos that happens when your code is technically correct but spiritually broken. Let's talk about that 2am debugging session.",
    date: "Feb 12, 2025", readTime: "5 min read", tagColor: T,
  },
  {
    id: 2, tag: "Frontend",
    title: "Frontend Trends I'm Actually Excited About in 2025",
    excerpt: "Not another \"top 10 frameworks\" listicle. These are the shifts in frontend development that genuinely made me sit up straighter — and actually change how I write code.",
    date: "Jan 28, 2025", readTime: "7 min read", tagColor: O,
  },
  {
    id: 3, tag: "Building in Public",
    title: "Building in Public: Lessons From My First Side Project (That No One Saw)",
    excerpt: "I shipped something. It got 11 visitors (6 were me). But the lessons I learned about scoping, launching, and letting go of perfection? Genuinely priceless.",
    date: "Jan 10, 2025", readTime: "6 min read", tagColor: G,
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      style={{
        backgroundColor: B,
        fontFamily: "Nunito, sans-serif",
        padding: "clamp(60px, 10vw, 110px) clamp(20px, 6vw, 80px)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative blob */}
      <div style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px",
        height: "350px", borderRadius: "50%", backgroundColor: "rgba(87,115,113,0.06)",
        pointerEvents: "none" }}/>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "36px", height: "2px", backgroundColor: T }}/>
          <span style={{ fontFamily: "Nunito, sans-serif", fontSize: "0.75rem",
            letterSpacing: "0.2em", color: T, textTransform: "uppercase", opacity: 0.75 }}>
            Writing & Musings
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-3">
          <h2 style={{ fontFamily: "'Fraunces', serif", color: T,
            fontSize: "clamp(2rem, 5vw, 3rem)", fontStyle: "italic", lineHeight: "1.2" }}>
            Brain Dump Digest ✦
          </h2>
          <a href="https://substack.com/@braindumpdigest" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 transition-all duration-200 hover:opacity-70 self-start sm:self-auto"
             style={{ color: T, fontSize: "0.85rem", textDecoration: "none",
               letterSpacing: "0.02em", flexShrink: 0, opacity: 0.75 }}>
            View all on Substack <ArrowUpRight size={16} strokeWidth={2}/>
          </a>
        </div>

        <p style={{ color: T, opacity: 0.65, fontSize: "0.95rem",
          marginBottom: "clamp(32px, 5vw, 52px)", maxWidth: "540px" }}>
          Thoughts on tech, life, and everything in between. Dropped when the mood strikes.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post, i) => (
            <a key={post.id} href="https://substack.com/@braindumpdigest"
               target="_blank" rel="noopener noreferrer"
               className="group block transition-all duration-300 hover:-translate-y-1"
               style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: "#fff", borderRadius: "20px", padding: "28px",
                height: "100%", display: "flex", flexDirection: "column", gap: "14px",
                border: "1.5px solid rgba(87,115,113,0.1)",
                boxShadow: "0 4px 20px rgba(87,115,113,0.07)" }}>
                {/* Number + tag */}
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.6rem",
                    color: "rgba(87,115,113,0.15)", fontWeight: "700", lineHeight: "1" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Tag size={10} strokeWidth={2} style={{ color: post.tagColor }}/>
                    <span style={{ fontSize: "0.68rem", color: post.tagColor,
                      letterSpacing: "0.08em", backgroundColor: `${post.tagColor}18`,
                      padding: "3px 10px", borderRadius: "100px", fontWeight: "700" }}>
                      {post.tag}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontFamily: "'Fraunces', serif", color: T,
                  fontSize: "1.02rem", lineHeight: "1.45", flex: 1 }}>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p style={{ color: "#5A7270", fontSize: "0.84rem", lineHeight: "1.7" }}>
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-2"
                     style={{ borderTop: "1px solid rgba(87,115,113,0.1)", marginTop: "auto" }}>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: "0.75rem", color: T, opacity: 0.65 }}>{post.date}</span>
                    <span style={{ color: G }}>·</span>
                    <div className="flex items-center gap-1" style={{ color: T, opacity: 0.6 }}>
                      <Clock size={11} strokeWidth={2}/>
                      <span style={{ fontSize: "0.75rem" }}>{post.readTime}</span>
                    </div>
                  </div>
                  <ArrowUpRight size={16} strokeWidth={1.8} style={{ color: T, opacity: 0.5 }}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a href="https://substack.com/@braindumpdigest" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 transition-all duration-200 hover:opacity-80 hover:-translate-y-0.5"
             style={{ backgroundColor: T, color: "#FDECDF", padding: "14px 32px",
               borderRadius: "100px", fontSize: "0.88rem", textDecoration: "none",
               letterSpacing: "0.04em", fontFamily: "Nunito, sans-serif", fontWeight: "700",
               boxShadow: "0 4px 18px rgba(87,115,113,0.3)" }}>
            Read Brain Dump Digest on Substack
            <ArrowUpRight size={16} strokeWidth={2.5}/>
          </a>
        </div>
      </div>
    </section>
  );
}
