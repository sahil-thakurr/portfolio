import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { fadeIn, staggerContainer } from "../animations";

const techIcons = {
  HTML: { icon: <FaHtml5 className="h-8 w-8 text-orange-500" />, color: "text-orange-500" },
  CSS: { icon: <FaCss3Alt className="h-8 w-8 text-blue-500" />, color: "text-blue-500" },
  JavaScript: { icon: <FaJs className="h-8 w-8 text-yellow-500" />, color: "text-yellow-500" },
  TypeScript: { icon: <SiTypescript className="h-8 w-8 text-blue-400" />, color: "text-blue-400" },
  React: { icon: <FaReact className="h-8 w-8 text-sky-500" />, color: "text-sky-500" },
  TailwindCSS: { icon: <SiTailwindcss className="h-8 w-8 text-cyan-500" />, color: "text-cyan-500" },
  "Node.js": { icon: <FaNodeJs className="h-8 w-8 text-green-600" />, color: "text-green-600" },
  Python: { icon: <FaPython className="h-8 w-8 text-yellow-300" />, color: "text-yellow-300" },
  Java: { icon: <FaJava className="h-8 w-8 text-red-500" />, color: "text-red-500" },
  Github: { icon: <FaGithub className="h-8 w-8 text-gray-400" />, color: "text-gray-400" },
};

export const About = () => {
  const techStack = ["HTML", "CSS", "React", "TypeScript", "TailwindCSS", "Node.js", "Python", "JavaScript", "Java", "Github"];
  const courseWork = ["Data Structures & Algorithms", "OOPS Concept", "DBMS", "Operating System", "Computer Architecture", "Theory of Computation"];
  const hobbies = ["Football", "Chess", "Cricket", "Dance", "Cooking"];

  return (
    <section id="about" className="min-h-screen py-20 px-4 relative overflow-hidden">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2 
          variants={fadeIn("down", "spring", 0.2, 1)}
          className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Bio & Skills */}
            <motion.div variants={fadeIn("right", "spring", 0.3, 1)} className="glass rounded-xl p-8 hover:-translate-y-2 transition-all duration-300">

                <h3 className="text-xl font-bold mb-4 text-white">About Me</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                I began coding out of curiosity, which soon became a passion for solving problems with technology. In college, I honed my skills in algorithms and modern tools. Now, I’m focused on growing into a capable software developer.
                </p>
                <div className="mt-8">
                    <h4 className="text-lg font-semibold mb-4 text-blue-400">Tech Stack</h4>
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                        {techStack.map((tech, key) => (
                            <div key={key} className="flex flex-col items-center group cursor-pointer">
                                <div className="transform transition-transform duration-300 group-hover:scale-110">
                                    {techIcons[tech]?.icon}
                                </div>
                                <span className={`text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity ${techIcons[tech]?.color}`}>
                                    {tech}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Education & Other */}
            <div className="space-y-8">
                <motion.div variants={fadeIn("left", "spring", 0.4, 1)} className="glass rounded-xl p-8 hover:-translate-y-2 transition-all duration-300">
                     <h3 className="text-xl font-bold mb-4 text-white">Education</h3>
                     <ul className="space-y-4 text-gray-300">
                         <li>
                             <strong className="text-blue-400">Galgotias College of Engineering</strong> (2022-2026)<br/>
                             <span className="text-sm text-gray-400">B.Tech in CSE</span>
                         </li>
                         <li>
                             <strong className="text-blue-400">Shiksha Niketan Sr. Sec School</strong> (2021-2022)<br/>
                             <span className="text-sm text-gray-400">Intermediate (94.6%)</span>
                         </li>
                     </ul>

                     <h6 className="text-blue-400 mt-6 mb-2 font-semibold">Relevant Coursework</h6>
                     <div className="flex flex-wrap gap-2">
                        {courseWork.map((course, key) => (
                            <span key={key} className="text-xs bg-blue-500/10 text-blue-300 py-1 px-3 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                                {course}
                            </span>
                        ))}
                     </div>
                </motion.div>
                
                 <motion.div variants={fadeIn("left", "spring", 0.5, 1)} className="glass rounded-xl p-8 hover:-translate-y-2 transition-all duration-300">

                    <h3 className="text-xl font-bold mb-4 text-white">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                        {hobbies.map((hobby, key) => (
                            <span key={key} className="text-sm bg-purple-500/10 text-purple-300 py-1 px-3 rounded-full border border-purple-500/20 hover:bg-purple-500/20 transition-colors">
                            {hobby}
                        </span>
                        ))}
                    </div>
                 </motion.div>
            </div>
        </div>
      </motion.div>
    </section>
  );
};
