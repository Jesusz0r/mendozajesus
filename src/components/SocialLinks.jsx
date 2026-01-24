import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Button } from "@/components/ui/button";

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-4">
      <Button
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full border-white/30 bg-transparent text-white hover:bg-[#e94560] hover:border-[#e94560] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(233,69,96,0.3)]"
        asChild
      >
        <a
          href="http://github.com/Jesusz0r"
          target="_blank"
          rel="noreferrer"
          aria-label="Github"
        >
          <FontAwesomeIcon icon={faGithub} className="text-xl" />
        </a>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="w-12 h-12 rounded-full border-white/30 bg-transparent text-white hover:bg-[#0077b5] hover:border-[#0077b5] hover:text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,119,181,0.3)]"
        asChild
      >
        <a
          href="https://es.linkedin.com/in/jesusreveron"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </a>
      </Button>
    </div>
  );
};

export default SocialLinks;
