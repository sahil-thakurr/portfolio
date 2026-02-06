import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaEnvelope, FaChartBar, FaLink } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { fadeIn, staggerContainer } from "../animations";

const techIcons = {
  React: { icon: <FaReact className="h-6 w-6 text-sky-500" />, color: "text-sky-500" },
  "Node.js": { icon: <FaNodeJs className="h-6 w-6 text-green-600" />, color: "text-green-600" },
  TailwindCSS: { icon: <SiTailwindcss className="h-6 w-6 text-cyan-500" />, color: "text-cyan-500" },
  EmailJS: { icon: <FaEnvelope className="h-6 w-6 text-purple-500" />, color: "text-purple-500" },
  HTML: { icon: <FaHtml5 className="h-6 w-6 text-orange-500" />, color: "text-orange-500" },
  CSS: { icon: <FaCss3Alt className="h-6 w-6 text-blue-500" />, color: "text-blue-500" },
  Javascript: { icon: <FaJs className="h-6 w-6 text-yellow-500" />, color: "text-yellow-500" },
  TypeScript: { icon: <SiTypescript className="h-6 w-6 text-purple-500" />, color: "text-purple-500" },
  PowerBI: { icon: <FaChartBar className="h-6 w-6 text-yellow-500" />, color: "text-yellow-500" },
};

export const Projects = () => {
  const projects = [
    {
      title: "OdinSky - Weather Web App",
      description: "Responsive weather application providing real-time conditions, 5-day forecasts, and global city search with favorites support. Optimized performance using lazy-loaded images (LCP 2.5s) and average API response time of 600ms.",
      techs: ["React", "TypeScript", "TailwindCSS"],
      link: "https://github.com/sahil-thakurr/OdinSky",
    },
    {
      title: "J&K Election Dashboard",
      description: "Interactive PowerBI dashboard analyzing voter demographics, turnout trends, and party performance. Highlighted women's participation, constituency-wise results, and historical comparisons for data-driven insights.",
      techs: ["PowerBI"],
      link: "https://github.com/sahil-thakurr/Election-DashBoard",
    },
    {
      title: "Lexicon - Resume Analyzer",
      description: "Real-time Resume Analyzer web app using React (TSX), TailwindCSS, and Puter.ai. Parses resumes provides intelligent feedback, score, and actionable improvement suggestions with a clean, minimalist UI.",
      techs: ["React", "TypeScript", "TailwindCSS"],
      link: "https://github.com/sahil-thakurr/lexicon",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", index * 0.2 + 0.3, 0.75)}
              className="glass p-6 rounded-xl border border-white/10 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all group"
            >
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                <FaLink className="text-lg opacity-80" /> {project.title}
              </h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {project.techs.map((tech, key) => (
                  <div key={key} className="flex items-center gap-2 bg-blue-500/5 px-3 py-1 rounded-full border border-blue-500/10 hover:scale-90 transition-transform duration-300 cursor-default">
                    {techIcons[tech]?.icon}
                    <span className={`text-xs font-medium ${techIcons[tech]?.color}`}>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-auto">
                 <a
                    href={project.link}
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-semibold"
                  >
                    View Project <span>→</span>
                  </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
