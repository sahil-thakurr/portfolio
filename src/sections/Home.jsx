import { motion } from "framer-motion";
import ProfileImage from "../assets/profile.jpeg";
import ResumeDownload from "../assets/resume.png";
import ResumePDF from "../assets/resume.pdf";
import { slideIn, textVariant, zoomIn } from "../animations";

export const Home = () => {
    const handleScroll = (e, targetId) => {
        e.preventDefault();
        const element = document.querySelector(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            className="min-h-screen pt-20 flex items-center justify-center relative px-4"
        >
            <div className="text-center z-10 px-4 max-w-4xl mx-auto flex flex-col items-center justify-center">

                <motion.div
                    variants={zoomIn(0, 0.8)}
                    initial="hidden"
                    animate="show"
                    className="relative mb-8"
                >
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-[80px] opacity-20 animate-pulse"></div>
                    <img
                        src={ProfileImage}
                        alt="Sahil Thakur"
                        className="relative w-48 h-48 md:w-64 md:h-64 rounded-full object-cover object-[center_20%] border-2 border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.3)] hover:scale-105 transition-transform duration-500"
                    />
                </motion.div>

                <motion.h1
                    variants={textVariant(0.3)}
                    initial="hidden"
                    animate="show"
                    className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
                >
                    Hello, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Sahil Thakur</span>
                </motion.h1>

                <motion.p
                    variants={textVariant(0.5)}
                    initial="hidden"
                    animate="show"
                    className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto"
                >
                    Computer Science undergraduate with strong fundamentals in data structures, object-oriented programming, and
DBMS, and hands-on experience building real-time, data-driven applications. I work with Java, JavaScript, SQL,
React (TypeScript), and Power BI, focusing on API integration, performance optimization, clean UI/UX, and
meaningful data insights through projects like a resume analyzer, weather platform, and interactive election
dashboard.
                </motion.p>

                <motion.div
                    variants={slideIn("up", "tween", 0.7, 0.8)}
                    initial="hidden"
                    animate="show"
                    className="flex flex-wrap justify-center gap-4"
                >
                    <a
                        href="#projects"
                        onClick={(e) => handleScroll(e, "#projects")}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium transition-all hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => handleScroll(e, "#contact")}
                        className="border border-blue-500/30 hover:border-blue-500 text-blue-400 py-3 px-8 rounded-full font-medium transition-all hover:-translate-y-1 hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>
                    <a
                        href={ResumePDF}
                        download="Sahil_Thakur_Resume.pdf"
                        className="flex items-center gap-2 border border-white/10 hover:border-white/30 text-gray-300 py-3 px-8 rounded-full font-medium transition-all hover:-translate-y-1 hover:bg-white/5"
                    >
                        <span>Resume</span>
                        <img
                            src={ResumeDownload}
                            alt="Download Icon"
                            className="w-4 h-4 invert opacity-70"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};
