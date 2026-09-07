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

const SocialLinks = () => (
  <div className="social-links">
    {socialLinks.map(({ href, label, icon: Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noreferrer"
        className="text-link social-link"
      >
        <Icon size={15} strokeWidth={1.7} aria-hidden="true" />
        {label}
        <ArrowUpRight
          size={13}
          strokeWidth={1.7}
          aria-hidden="true"
        />
      </a>
    ))}
  </div>
);

export default SocialLinks;
