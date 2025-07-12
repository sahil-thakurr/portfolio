import { RevealOnScroll } from "../RevealOnScroll";
import ProfileImage from "../../assets/profile.jpg";
import ResumeDownload from "../../assets/resume.png";
import ResumePDF from "../../assets/resume.pdf";



export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-start relative pt-18 px-4"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <div className="flex justify-center mt-8">
            <img
              src={ProfileImage}
              alt="Sahil Thakur"
              className="w-60 h-60 rounded-full object-cover border-4 border-white shadow-md"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#00529F] via-white to-[#FDB913] bg-clip-text text-transparent leading-tight">
            Hello, I'm Sahil Thakur
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            A full-stack developer and a passionate learner dedicated to
            contributing meaningfully to the tech world. I thrive on exploring
            new technologies, solving real world problems, and continuously
            expanding my skills to create impactful digital experiences.
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded-full font-medium transition overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
               className="relative overflow-hidden border border-blue-500/50 text-blue-500 py-3 px-6 rounded-full font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] button-fill"
            >
              Contact me
            </a>
              <a
  href={ResumePDF}
  download="Sahil_Thakur_Resume.pdf"
  className="bg-blue-500 
    text-white 
    py-3 
    px-6 
    rounded-full 
    font-medium 
    transition-all 
    flex 
    items-center 
    space-x-2   /* Adds space between text and icon */
    overflow-hidden 
    hover:-translate-y-0.5 
    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
>
  <span>Resume</span>
  <img
    src={ResumeDownload}
    alt="Download Icon"
    className="w-4 h-4 transition-transform duration-300 group-hover:scale-110"
  />
</a>


                </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
