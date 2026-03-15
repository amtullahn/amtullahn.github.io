import { Github, Linkedin, Music, BookOpen } from "lucide-react";

export type SocialLink = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

export const SOCIAL_LINKS: SocialLink[] = [
  { icon: <Github size={16} strokeWidth={1.8} />, href: "https://github.com/amtullahn", label: "GitHub" },
  { icon: <Linkedin size={16} strokeWidth={1.8} />, href: "https://www.linkedin.com/in/amtullahnaalwala", label: "LinkedIn" },
  { icon: <BookOpen size={16} strokeWidth={1.8} />, href: "https://www.goodreads.com/user/show/35948846-amtullah", label: "Goodreads" },
  { icon: <Music size={16} strokeWidth={1.8} />, href: "https://open.spotify.com/user/amtulls", label: "Spotify" },
];
