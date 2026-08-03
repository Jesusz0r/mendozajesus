import {
  Bot,
  Braces,
  Code2,
  FileCode2,
  Gem,
  GitBranch,
  Paintbrush,
  Server,
} from "lucide-react";

const skills = [
  { icon: Braces, name: "React", color: "#61dafb" },
  { icon: Code2, name: "JavaScript", color: "#f7df1e" },
  { icon: Server, name: "Node.js", color: "#68a063" },
  { icon: Gem, name: "Ruby on Rails", color: "#ff4b2f" },
  { icon: Bot, name: "Claude Code", color: "#d4a574" },
  { icon: GitBranch, name: "Git", color: "#f1502f" },
  { icon: FileCode2, name: "HTML5", color: "#e34c26" },
  { icon: Paintbrush, name: "CSS3", color: "#264de4" },
];

const SkillsList = () => (
  <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border sm:grid-cols-4">
    {skills.map(({ icon: Icon, name, color }) => (
      <article
        key={name}
        className="group relative overflow-hidden bg-secondary p-6 transition-colors duration-300 hover:bg-background sm:p-7"
      >
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-full w-1 origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100 motion-reduce:transform-none"
          style={{ backgroundColor: color }}
        />
        <Icon
          size={28}
          strokeWidth={1.5}
          style={{ color }}
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 motion-reduce:transform-none"
        />
        <p className="mt-8 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
          {name}
        </p>
      </article>
    ))}
  </div>
);

export default SkillsList;
