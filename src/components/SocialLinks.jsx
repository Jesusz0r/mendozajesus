import { ArrowUpRight, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    href: "https://github.com/Jesusz0r",
    label: "GitHub",
    icon: Github,
  },
  {
    href: "https://es.linkedin.com/in/jesusreveron",
    label: "LinkedIn",
    icon: Linkedin,
  },
];

const SocialLinks = ({ className = "" }) => (
  <div className={`flex flex-wrap gap-3 ${className}`.trim()}>
    {socialLinks.map(({ href, label, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group inline-flex items-center gap-2 border border-border bg-secondary px-4 py-2.5 font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
      >
        <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
        {label}
        <ArrowUpRight
          size={13}
          strokeWidth={1.7}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none"
        />
      </a>
    ))}
  </div>
);

export default SocialLinks;
