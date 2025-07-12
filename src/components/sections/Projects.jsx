import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaEnvelope } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const techIcons = {
  React: {
    icon: <FaReact className="h-8 w-8 text-sky-500" />,
    color: "text-sky-500",
  },
  "Node.js": {
    icon: <FaNodeJs className="h-8 w-8 text-green-600" />,
    color: "text-green-600",
  },
  TailwindCSS: {
    icon: <SiTailwindcss className="h-8 w-8 text-cyan-500" />,
    color: "text-cyan-500",
  },
  EmailJS: {
    icon: <FaEnvelope className="h-8 w-8 text-purple-500" />,
    color: "text-purple-500",
  },
  HTML: {
    icon: <FaHtml5 className="h-8 w-8 text-orange-500" />,
    color: "text-orange-500",
  },
  CSS: {
    icon: <FaCss3Alt className="h-8 w-8 text-blue-500" />,
    color: "text-blue-500",
  },
  Javascript: {
    icon: <FaJs className="h-8 w-8 text-yellow-500" />,
    color: "text-yellow-500",
  },
};

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Portfolio",
                description1:
                  "Built a responsive portfolio website using React and Vite to showcase projects and skills.",
                description2:
                  "I built a modern, responsive resume section using React and Tailwind CSS, ensuring clean design and smooth performance.",
                description3:
                  "I integrated EmailJS to implement a seamless contact form, enabling visitors to reach out to me effortlessly.",
                techs: ["React", "Node.js", "TailwindCSS", "EmailJS"],
                link: "#Sahil-Portfolio",
              },
              {
                title: "Amazon Web Clone",
                description1:
                  "Built a responsive e-commerce website replicating Amazon’s core interface and functionalities using HTML, CSS, and JavaScript.",
                description2:
                  "Implemented dynamic product rendering, cart management, and API-based listings using JavaScript, showcasing proficiency in client-side scripting and front-end architecture.",
                techs: ["HTML", "CSS", "Javascript"],
                link: "#Clone-App",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description1}</p>
                <p className="text-gray-400 mb-4">{project.description2}</p>
                {project.description3 && (
                  <p className="text-gray-400 mb-4">{project.description3}</p>
                )}
                <div className="flex flex-wrap gap-4 mb-4">
                  {project.techs.map((tech, key) => (
                    <div
                      key={key}
                      className="tech-link flex flex-col items-center transition transform hover:scale-105"
                    >
                      {techIcons[tech].icon}
                      <span className={`text-xs mt-1 ${techIcons[tech].color}`}>
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors mt-2"
                  >
                    View project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
