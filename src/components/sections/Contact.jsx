import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-[50vh] flex items-center justify-center bg-black text-gray-100 overflow-hidden"
    >
      <RevealOnScroll>
      <div className="glass rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all duration-300 w-full max-w-2xl">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Connect with Me
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          <a
            href="https://github.com/sahil-thakurr"
            target="_blank"
            rel="noopener noreferrer"
            className="Github-link transition transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-8 w-8 mb-2"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5a12 12 0 00-3.8 23.4c.6.1.8-.2.8-.5v-1.8c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1 .1 1.5 1.1 1.5 1.1.9 1.5 2.4 1 3 .7.1-.7.4-1 .6-1.3-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3 0-.3-.5-1.3.1-2.8 0 0 1-.3 3.3 1.2a11.3 11.3 0 016 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.5.1 2.5.1 2.8.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.7.9.7 1.8v2.7c0 .3.2.6.8.5A12 12 0 0012 .5z" />
            </svg>
            <span className="text-sm">GitHub</span>
          </a>

         <a
  href="https://www.instagram.com/sahill.thakurr/"
  target="_blank"
  rel="noopener noreferrer"
  className="instagram-link transition transform hover:scale-105"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    className="h-8 w-8 mb-2"
    viewBox="0 0 24 24"
  >
    <path d="M7.8 2h8.4A5.8 5.8 0 0122 7.8v8.4A5.8 5.8 0 0116.2 22H7.8A5.8 5.8 0 012 16.2V7.8A5.8 5.8 0 017.8 2zm0 2A3.8 3.8 0 004 7.8v8.4A3.8 3.8 0 007.8 20h8.4A3.8 3.8 0 0020 16.2V7.8A3.8 3.8 0 0016.2 4H7.8zm8.2 2.2a1 1 0 110 2 1 1 0 010-2zm-4.2 1.3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
  </svg>
  <span className="text-sm">Instagram</span>
</a>


          <a
            href="https://www.linkedin.com/in/sahill-thakurr/"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-link transition transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-8 w-8 mb-2"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM3 8.98h4v12H3v-12zm7 0h3.6v1.6h.1c.5-1 1.6-2 3.3-2 3.5 0 4.2 2.3 4.2 5.3v7h-4v-6.2c0-1.5 0-3.5-2-3.5s-2.3 1.6-2.3 3.4V21h-4v-12z" />
            </svg>
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href="mailto:sahillsinghthakurr@gmail.com"
            className="Mail-link transition transform hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="h-8 w-8 mb-2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16c1 0 2 .9 2 2v12c0 1-.9 2-2 2H4c-1 0-2-.9-2-2V6c0-1 .9-2 2-2zm8 7L4 6v12h16V6l-8 5z" />
            </svg>
            <span className="text-sm">Email</span>
          </a>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
