import { RevealOnScroll } from "../RevealOnScroll";
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

const techIcons = {
  HTML: {
    icon: <FaHtml5 className="h-8 w-8 text-orange-500" />,
    color: "text-orange-500",
  },
  CSS: {
    icon: <FaCss3Alt className="h-8 w-8 text-blue-500" />,
    color: "text-blue-500",
  },
  JavaScript: {
    icon: <FaJs className="h-8 w-8 text-yellow-500" />,
    color: "text-yellow-500",
  },
  TypeScript: {
    icon: <SiTypescript className="h-8 w-8 text-blue-400" />,
    color: "text-blue-400",
  },
  React: {
    icon: <FaReact className="h-8 w-8 text-sky-500" />,
    color: "text-sky-500",
  },
  TailwindCSS: {
    icon: <SiTailwindcss className="h-8 w-8 text-cyan-500" />,
    color: "text-cyan-500",
  },
  "Node.js": {
    icon: <FaNodeJs className="h-8 w-8 text-green-600" />,
    color: "text-green-600",
  },
  Python: {
    icon: <FaPython className="h-8 w-8 text-yellow-300" />,
    color: "text-yellow-300",
  },
  Java: {
    icon: <FaJava className="h-8 w-8 text-red-500" />,
    color: "text-red-500",
  },
  Github: {
    icon: <FaGithub className="h-8 w-8 text-gray-400" />,
    color: "text-gray-400",
  },
};

export const About = () => {
  const techStack = [
    "HTML",
    "CSS",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Node.js",
    "Python",
    "JavaScript",
    "Java",
    "Github",
  ];
  const courseWork = [
    "Data Structures & Algorithms",
    "OOPS Concept",
    "DBMS",
    "Operating System",
    "Computer Architecture",
    "Theory of Computation",
  ];
  const hobbies = ["Football", "Chess", "Cricket", "Dance", "Cooking"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I began coding out of curiosity, which soon became a passion for solving problems with technology. In college, I honed my skills in algorithms and modern tools. Now, I’m focused on growing into a capable software developer.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
  {techStack.map((tech, key) => (
    <div
      key={key}
      className="tech-link flex flex-col items-center transition transform hover:scale-105"
    >
      {techIcons[tech]?.icon}
      <span className={`text-xs mt-1 ${techIcons[tech]?.color}`}>{tech}</span>
    </div>
  ))}
</div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">➣ Education</h3>
              <p className="text-gray-300 mb-6">
                <>
                  <span className="font-semibold text-white">• Shiksha Niketan Sr. Sec School</span><br />
                  <span className="text-gray-400">‣ Intermediate (Apr 2021 – Mar 2022)</span><br />
                  ‣ Percentage: <span className="text-cyan-400 font-medium">94.6%</span><br />
                  ‣ Jammu, Jammu and Kashmir
                  <br /><br />
                  <span className="font-semibold text-white">• MKP High School</span><br />
                  <span className="text-gray-400">‣ High School (Apr 2019 – Mar 2020)</span><br />
                  ‣ Percentage: <span className="text-cyan-400 font-medium">94%</span><br />
                  ‣ Jammu, Jammu and Kashmir
                </>
              </p>
              <p className="text-gray-300 mb-6">
                <>
                  <span className="font-semibold text-white">
                    • Galgotias College of Engineering and Technology
                    <br />
                    <span className="text-gray-400">
                      ‣ Bachelor of Technology – Computer Science and Engineering (2022 – 2026)
                      <h6 className="text-gray-300 mt-4 mb-2">• Relevant Coursework</h6>
                      <div className="flex flex-wrap gap-2">
                        {courseWork.map((course, key) => (
                          <span
                            key={key}
                            className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </span>
                  </span>
                </>
              </p>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h4 className="text-xl font-bold mb-4">➣ Other Skills</h4>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h5 className="font-semibold">Club Head – Literature Club of GCET</h5>
                  <p className="text-gray-400">
                    ‣ Organized literary events like Shaam-e-Sukhan and debate competitions, fostering creative expression and campus-wide engagement.<br />
                    ‣ Conducted interviews with seniors and faculty to document academic and cultural insights.
                  </p>
                </div>
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">➣ I'm also good at</h3>
                  <div className="flex flex-wrap gap-2">
                    {hobbies.map((hobby, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow transition"
                      >
                        {hobby}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
