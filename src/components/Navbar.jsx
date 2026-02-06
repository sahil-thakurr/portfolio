import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);

    // Trigger Animation Programmatically
    const target = e.currentTarget;
    target.classList.remove("nav-pop");
    void target.offsetWidth; // Force reflow
    target.classList.add("nav-pop");

    // Remove animation class after completion to keep clean state
    setTimeout(() => {
        target.classList.remove("nav-pop");
    }, 150);

    const element = document.querySelector(targetId);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(5,5,5,0.6)] backdrop-blur-xl border-b border-white/5">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "#home")}
            className="font-mono text-xl font-bold text-white"
          >
            SAHIL<span className="text-blue-500"> THAKUR</span>
          </a>

          {/* Mobile menu icon */}
          <div
            className="w-7 h-5 cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              ["Home", "#home"],
              ["About", "#about"],
              ["Projects", "#projects"],
              ["Contact", "#contact"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={id}
                onClick={(e) => handleScroll(e, id)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
