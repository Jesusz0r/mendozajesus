import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faCode } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f0f1a] text-white py-16 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#e94560] rounded-full filter blur-[150px] opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#7c3aed] rounded-full filter blur-[150px] opacity-10" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="container mx-auto max-w-[1000px] px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">
              <span className="text-white">Jesús</span>{" "}
              <span className="bg-gradient-to-r from-[#e94560] to-[#7c3aed] bg-clip-text text-transparent">
                Mendoza
              </span>
            </h3>
            <p className="text-white/50 text-sm font-mono">
              {"<Front-end Developer />"}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-[#e94560] hover:border-[#e94560] transition-all duration-300"
              asChild
            >
              <a
                href="http://github.com/Jesusz0r"
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <FontAwesomeIcon icon={faGithub} className="text-lg" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300"
              asChild
            >
              <a
                href="https://es.linkedin.com/in/jesusreveron"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
              </a>
            </Button>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-white/40 text-sm flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faCode} className="text-[#7c3aed]" />
              con
              <FontAwesomeIcon icon={faHeart} className="text-[#e94560]" />
              por Jesús Mendoza
            </p>
            <p className="text-white/20 text-xs font-mono">
              &copy; {new Date().getFullYear()} • Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l border-t border-white/10" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r border-t border-white/10" />
    </footer>
  );
};

export default Footer;
