import { ArrowUpRight, Clock } from "lucide-react";

const FOREST  = "#173A2B";
const SAGE    = "#5A7969";
const TERRA   = "#CB6B4D";
const PEACH   = "#FBE8D8";
const TAN     = "#E5C7B1";
const CARAMEL = "#BB885E";

const BLOG_POSTS = [
  {
    id: 1, tag: "Tech & Life", tagColor: FOREST,
    title: "The Art of Debugging: When Everything Works But Nothing Makes Sense",
    excerpt: "There's a special kind of chaos when your code is technically correct but spiritually broken. On 2am debugging sessions and what they teach you.",
    date: "Feb 12, 2025", readTime: "5 min",
  },
  {
    id: 2, tag: "Frontend", tagColor: TERRA,
    title: "Frontend Trends I'm Actually Excited About in 2025",
    excerpt: "Not another listicle. These are the shifts in frontend development that genuinely changed how I write code — and why they matter.",
    date: "Jan 28, 2025", readTime: "7 min",
  },
  {
    id: 3, tag: "Building in Public", tagColor: SAGE,
    title: "Building in Public: Lessons From My First Side Project That No One Saw",
    excerpt: "I shipped something. It got 11 visitors — 6 were me. The lessons on scoping, launching, and letting go of perfection were genuinely priceless.",
    date: "Jan 10, 2025", readTime: "6 min",
  },
];

export function BlogSection() {
  return (
    <section id="blog" style={{ backgroundColor: "#fff",
      fontFamily: "Nunito, sans-serif",
      padding: "clamp(64px, 10vw, 112px) clamp(20px, 6vw, 80px)" }}>

      <div className="max-w-6xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-3">
          <div style={{ width: "32px", height: "1.5px", backgroundColor: TERRA }}/>
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.22em", color: FOREST,
            textTransform: "uppercase", opacity: 0.55, fontWeight: "700" }}>
            Writing
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-3">
          <h2 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
            fontSize: "clamp(1.9rem, 4.8vw, 2.9rem)", fontStyle: "italic", lineHeight: "1.2" }}>
            Brain Dump Digest
          </h2>
          <a href="https://substack.com/@braindumpdigest" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-1.5 transition-opacity hover:opacity-50 self-start sm:self-auto"
             style={{ color: FOREST, fontSize: "0.83rem", textDecoration: "none",
               flexShrink: 0, opacity: 0.55, fontWeight: "700" }}>
            View on Substack <ArrowUpRight size={15} strokeWidth={2}/>
          </a>
        </div>

        <p style={{ color: FOREST, opacity: 0.5, fontSize: "0.93rem",
          marginBottom: "clamp(36px, 5vw, 56px)", maxWidth: "480px", lineHeight: "1.7" }}>
          Thoughts on tech, front-end craft, and life in between.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post, i) => (
            <a key={post.id} href="https://substack.com/@braindumpdigest"
               target="_blank" rel="noopener noreferrer"
               className="group block transition-all duration-300 hover:-translate-y-1"
               style={{ textDecoration: "none" }}>
              <div style={{ backgroundColor: i === 1 ? PEACH : "#fff", borderRadius: "16px",
                padding: "28px", height: "100%", display: "flex", flexDirection: "column", gap: "12px",
                border: `1px solid rgba(23,58,43,${i === 1 ? "0.07" : "0.09"})`,
                boxShadow: "0 2px 14px rgba(23,58,43,0.05)" }}>
                {/* Index + tag */}
                <div className="flex items-center justify-between">
                  <span style={{ fontFamily: "'Fraunces', serif", fontSize: "1.5rem",
                    color: "rgba(23,58,43,0.1)", fontWeight: "700", lineHeight: "1" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontSize: "0.67rem", color: post.tagColor,
                    backgroundColor: `${post.tagColor}14`, padding: "3px 10px",
                    borderRadius: "100px", letterSpacing: "0.07em", fontWeight: "700" }}>
                    {post.tag}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Fraunces', serif", color: FOREST,
                  fontSize: "0.98rem", lineHeight: "1.5", flex: 1 }}>
                  {post.title}
                </h3>

                <p style={{ color: "#3D5248", fontSize: "0.83rem", lineHeight: "1.72", opacity: 0.8 }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-3"
                     style={{ borderTop: "1px solid rgba(23,58,43,0.08)", marginTop: "auto" }}>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: "0.74rem", color: FOREST, opacity: 0.5 }}>{post.date}</span>
                    <span style={{ color: TAN }}>·</span>
                    <div className="flex items-center gap-1" style={{ color: FOREST, opacity: 0.45 }}>
                      <Clock size={10} strokeWidth={2}/>
                      <span style={{ fontSize: "0.74rem" }}>{post.readTime} read</span>
                    </div>
                  </div>
                  <ArrowUpRight size={15} strokeWidth={1.8} style={{ color: FOREST, opacity: 0.35 }}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"/>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <a href="https://substack.com/@braindumpdigest" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 transition-all duration-200 hover:opacity-75"
             style={{ backgroundColor: FOREST, color: PEACH, padding: "13px 28px",
               borderRadius: "100px", fontSize: "0.85rem", textDecoration: "none",
               fontWeight: "700", letterSpacing: "0.03em",
               boxShadow: "0 4px 16px rgba(23,58,43,0.2)" }}>
            Read on Substack <ArrowUpRight size={15} strokeWidth={2.5}/>
          </a>
        </div>
      </div>
    </section>
  );
}
