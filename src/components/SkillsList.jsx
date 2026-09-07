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
  { icon: Braces, name: "React" },
  { icon: Code2, name: "JavaScript" },
  { icon: Server, name: "Node.js" },
  { icon: Gem, name: "Ruby on Rails" },
  { icon: Bot, name: "Claude Code" },
  { icon: GitBranch, name: "Git" },
  { icon: FileCode2, name: "HTML5" },
  { icon: Paintbrush, name: "CSS3" },
];

const SkillsList = () => (
  <ul className="skills">
    {skills.map(({ icon: Icon, name }) => (
      <li key={name}>
        <Icon size={16} aria-hidden="true" />
        {name}
      </li>
    ))}
  </ul>
);
export default SkillsList;
