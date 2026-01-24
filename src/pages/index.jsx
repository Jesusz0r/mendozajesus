import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faCode, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

// Components
import Layout from "../components/Layout";
import SocialLinks from "../components/SocialLinks";
import SkillList from "../components/SkillsList";
import ExperienceList from "../components/ExperienceList";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const HomePage = () => {
  useEffect(() => {
    window.leadflowConfig = {
      widgetId: "77c6c1ec-f1df-4fd5-8b5b-2ebe21ae8a9c",
    };

    const script = document.createElement("script");
    script.src = "http://localhost:3000/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen w-full relative bg-[#0f0f1a] text-center flex flex-col justify-center items-center p-5 overflow-hidden"
      >
        {/* Animated background gradient orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#e94560] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob" />
          <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#0f3460] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#7c3aed] rounded-full mix-blend-multiply filter blur-[128px] opacity-15 animate-blob animation-delay-4000" />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        {/* Content */}
        <div className="container w-full max-w-[1000px] z-10 animate-fade-in-up">
          {/* Terminal-like header */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-white/60 text-sm font-mono">
              Disponible para nuevos proyectos
            </span>
          </div>

          {/* Main heading */}
          <div className="relative mb-6">
            <p className="text-[#e94560] text-sm font-semibold tracking-[4px] uppercase mb-4">
              Hola, mi nombre es
            </p>
            <h1 className="font-bold text-5xl sm:text-6xl lg:text-8xl text-white mb-2 relative">
              <span className="relative">
                Jesús
                <span className="absolute -inset-1 bg-gradient-to-r from-[#e94560] to-[#7c3aed] blur-2xl opacity-30" />
              </span>{" "}
              <span className="bg-gradient-to-r from-[#e94560] to-[#7c3aed] bg-clip-text text-transparent">
                Mendoza
              </span>
            </h1>
          </div>

          {/* Role with code brackets */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="text-[#e94560] font-mono text-2xl">{"<"}</span>
            <div className="text-xl sm:text-2xl lg:text-3xl font-light text-white/80 min-h-[40px]">
              <TypeAnimation
                sequence={[
                  "Front-end Developer",
                  2000,
                  "Especialista en React",
                  2000,
                ]}
                speed={50}
                deletionSpeed={70}
                repeat={Infinity}
              />
            </div>
            <span className="text-[#e94560] font-mono text-2xl">{"/>"}</span>
          </div>

          {/* Tech badges */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["React", "TypeScript", "Node.js", "TailwindCSS"].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-white/5 border-white/20 text-white/70 hover:bg-white/10 hover:text-white transition-all px-4 py-1.5"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Social links */}
          <SocialLinks />

          {/* Code decoration */}
          <div className="absolute bottom-32 left-10 hidden lg:block text-left font-mono text-sm text-white/20">
            <p>{"const developer = {"}</p>
            <p className="pl-4">{"name: 'Jesús',"}</p>
            <p className="pl-4">{"passion: 'code',"}</p>
            <p>{"}"}</p>
          </div>

          <div className="absolute bottom-32 right-10 hidden lg:block text-right font-mono text-sm text-white/20">
            <p>{"// 7+ years building"}</p>
            <p>{"// web experiences"}</p>
            <p className="text-[#e94560]/40">{"<React />"}</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#sobre-mi"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#e94560] transition-all duration-300 flex flex-col items-center gap-2 group"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase group-hover:tracking-[0.3em] transition-all">
            Explorar
          </span>
          <FontAwesomeIcon icon={faChevronDown} className="animate-bounce" />
        </a>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-white/10" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-white/10" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-white/10" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-white/10" />
      </section>

      {/* About Section */}
      <section
        id="sobre-mi"
        className="relative bg-[#fafafa] overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#e94560] rounded-full filter blur-[128px] opacity-5" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#0f3460] rounded-full filter blur-[128px] opacity-5" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="container mx-auto max-w-[1100px] px-6 py-32 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#e94560]/10 border border-[#e94560]/20 mb-6">
              <FontAwesomeIcon icon={faCode} className="text-[#e94560] text-sm" />
              <span className="text-[#e94560] text-sm font-medium">
                Sobre mí
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Conoce al{" "}
              <span className="bg-gradient-to-r from-[#e94560] to-[#7c3aed] bg-clip-text text-transparent">
                desarrollador
              </span>
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              +7 años creando experiencias web memorables
            </p>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center mb-20">
            {/* Left: Quote card */}
            <Card className="relative p-8 bg-white border-0 shadow-xl overflow-hidden group hover:-translate-y-1 transition-all duration-300">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e94560] to-[#7c3aed]" />

              {/* Quote icon */}
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-6xl text-[#e94560]/10 absolute top-6 right-6"
              />

              <p className="text-lg leading-relaxed text-slate-600 relative z-10">
                Soy una persona un poco introvertida al principio pero luego me
                vuelvo alguien que expresa sus ideas y opiniones con seguridad.
                Me gusta participar en temas relacionados con la empresa, el
                buen ambiente laboral y de forma equitativa{" "}
                <span className="text-[#e94560] font-semibold">
                  enseñar y aprender
                </span>{" "}
                cosas nuevas cada día.
              </p>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#e94560]/10 to-transparent" />
            </Card>

            {/* Right: Stats and info */}
            <div className="space-y-6">
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "7+", label: "Años de experiencia" },
                  { value: "4", label: "Empresas" },
                  { value: "2", label: "Países" },
                ].map((stat) => (
                  <Card
                    key={stat.label}
                    className="p-6 bg-white border-0 shadow-lg text-center group hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                  >
                    <p className="text-3xl font-bold bg-gradient-to-r from-[#e94560] to-[#7c3aed] bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </p>
                    <p className="text-sm text-slate-500">{stat.label}</p>
                  </Card>
                ))}
              </div>

              {/* Code snippet decoration */}
              <Card className="p-4 bg-[#1a1a2e] border-0 shadow-xl font-mono text-sm overflow-hidden">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-3 h-3 rounded-full bg-[#e94560]" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="text-slate-500">{"// Mi enfoque"}</p>
                <p className="text-white">
                  <span className="text-[#7c3aed]">const</span>{" "}
                  <span className="text-[#e94560]">skills</span> = [
                </p>
                <p className="text-green-400 pl-4">'Clean Code',</p>
                <p className="text-green-400 pl-4">'User Experience',</p>
                <p className="text-green-400 pl-4">'Performance'</p>
                <p className="text-white">];</p>
              </Card>
            </div>
          </div>

          {/* Skills section */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Tech Stack
            </h3>
            <p className="text-slate-500">
              Herramientas con las que trabajo día a día
            </p>
          </div>

          <SkillList />
        </div>

        {/* Corner decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-slate-200" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-slate-200" />
      </section>

      {/* Experience Section */}
      <section
        id="experiencia"
        className="relative bg-white overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-[#7c3aed] rounded-full filter blur-[150px] opacity-5" />
          <div className="absolute bottom-1/4 -left-48 w-[500px] h-[500px] bg-[#e94560] rounded-full filter blur-[150px] opacity-5" />
        </div>

        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            #000 40px,
            #000 41px
          )`
        }} />

        <div className="container mx-auto max-w-[1100px] px-6 py-32 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f3460]/10 border border-[#0f3460]/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#0f3460]" />
              <span className="text-[#0f3460] text-sm font-medium">
                Trayectoria profesional
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Mi{" "}
              <span className="bg-gradient-to-r from-[#0f3460] to-[#7c3aed] bg-clip-text text-transparent">
                experiencia
              </span>
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto">
              Un recorrido por las empresas donde he dejado mi huella
            </p>
          </div>

          {/* Code decoration - left */}
          <div className="absolute top-48 left-8 hidden xl:block font-mono text-sm text-slate-300">
            <p>{"/**"}</p>
            <p>{" * Career path"}</p>
            <p>{" * @since 2017"}</p>
            <p>{" */"}</p>
          </div>

          {/* Code decoration - right */}
          <div className="absolute top-48 right-8 hidden xl:block font-mono text-sm text-slate-300 text-right">
            <p>{"career.map("}</p>
            <p className="pl-4">{"(exp) =>"}</p>
            <p className="pl-4">{"<Growth />"}</p>
            <p>{")"}</p>
          </div>

          <ExperienceList />
        </div>

        {/* Corner decorations */}
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-slate-200" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-slate-200" />
      </section>
    </Layout>
  );
};

export default HomePage;
