import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faNodeJs,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faGem, faRobot } from "@fortawesome/free-solid-svg-icons";
import { Card } from "@/components/ui/card";

const skills = [
  { icon: faReact, name: "React", color: "#61DAFB" },
  { icon: faJs, name: "JavaScript", color: "#F7DF1E" },
  { icon: faNodeJs, name: "Node.js", color: "#68A063" },
  { icon: faGem, name: "Ruby on Rails", color: "#CC0000" },
  { icon: faRobot, name: "Claude Code", color: "#D97706" },
  { icon: faGitAlt, name: "Git", color: "#F05032" },
  { icon: faHtml5, name: "HTML5", color: "#E44D26" },
  { icon: faCss3Alt, name: "CSS3", color: "#264DE4" },
];

const SkillCard = ({ skill }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="group p-6 flex flex-col items-center gap-3 transition-all duration-300 cursor-default relative overflow-hidden hover:-translate-y-2 hover:shadow-lg border-0 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-t-xl"
        style={{ backgroundColor: skill.color }}
      />
      <FontAwesomeIcon
        icon={skill.icon}
        className="text-4xl transition-all duration-300 group-hover:scale-110"
        style={{ color: isHovered ? skill.color : "#64748b" }}
      />
      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
    </Card>
  );
};

const SkillList = () => {
  return (
    <div className="mt-12">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
