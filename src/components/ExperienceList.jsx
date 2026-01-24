import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faMapMarkerAlt, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

const experienceData = [
  {
    name: "Nuvocargo",
    location: "Ciudad de México",
    date: "Mar 2022 - Actualidad",
    duration: "+2 años",
    position: "Front-end Developer",
    description: "Desarrollo de aplicaciones web para la industria logística, creando interfaces intuitivas y escalables.",
    tags: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    isCurrent: true,
  },
  {
    name: "Credijusto",
    location: "Ciudad de México",
    date: "Oct 2019 - Mar 2022",
    duration: "2 años 5 meses",
    position: "Front-end Developer",
    description: "Desarrollo de plataformas fintech para servicios de crédito empresarial.",
    tags: ["React", "JavaScript", "Redux", "REST APIs"],
  },
  {
    name: "Fintonic",
    location: "Madrid, España",
    date: "Abr 2018 - Ago 2019",
    duration: "1 año 4 meses",
    position: "Full-stack Developer",
    description: "Desarrollo de funcionalidades para aplicación de gestión financiera personal.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    name: "King Of App",
    location: "Madrid, España",
    date: "Ene 2017 - Abr 2018",
    duration: "1 año 3 meses",
    position: "Full-stack Developer",
    description: "Creación de módulos y plugins para plataforma de desarrollo de apps móviles.",
    tags: ["AngularJS", "Node.js", "Firebase", "Ionic"],
  },
];

const ExperienceList = () => {
  return (
    <div>
      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#e94560] via-[#0f3460] to-transparent md:-translate-x-1/2" />

        <div className="space-y-4">
          {experienceData.map((experience, index) => (
            <div
              key={experience.name}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 md:-translate-x-1/2 -translate-x-1/2 top-8">
                <div
                  className={`w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                    experience.isCurrent
                      ? "bg-green-500"
                      : "bg-gradient-to-br from-[#e94560] to-[#0f3460]"
                  }`}
                />
                {experience.isCurrent && (
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-green-500 animate-ping opacity-75" />
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white">
                  {/* Gradient accent */}
                  <div className="h-1.5 bg-gradient-to-r from-[#e94560] to-[#0f3460]" />

                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="text-xl font-bold text-slate-900">
                            {experience.name}
                          </h3>
                          {experience.isCurrent && (
                            <Badge className="bg-green-500/10 text-green-600 border-green-500/30 text-xs">
                              Actual
                            </Badge>
                          )}
                        </div>
                        <p className="text-[#e94560] font-semibold">
                          {experience.position}
                        </p>
                      </div>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
                        {experience.duration}
                      </Badge>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-4 text-sm text-slate-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#e94560] text-xs" />
                        {experience.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-[#0f3460] text-xs" />
                        {experience.date}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {experience.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {experience.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceList;
