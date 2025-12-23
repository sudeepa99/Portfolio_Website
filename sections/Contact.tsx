"use client";
import Image from "next/image";

const interests = [
  "UI DESIGN",
  "FRONTEND DEVELOPMENT",
  "BACKEND DEVELOPMENT",
  "MACHINE LEARNING",
  "WEBFLOW DEVELOPMENT",
  "DIGITAL SOLUTIONS",
];

const socialLinks = [
  { name: "LINKEDIN", url: "https://www.linkedin.com/in/sudeepa-nisal/" },
  { name: "MEDIUM", url: "https://medium.com/@sudeepa5678nisal" },
  { name: "GITHUB", url: "https://github.com/sudeepa99" },
];

export default function Contact() {
  const handleContactClick = () => {
    window.location.assign("mailto:sudeepa1234nisal@gmail.com");
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-16 sm:py-24"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Abstract art background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      <div className="hidden lg:block absolute left-6 xl:left-12 top-3/4 -translate-y-1/2 z-10">
        <h2
          className="text-white font-bold uppercase leading-none select-none pointer-events-none"
          style={{ textShadow: "4px 4px 12px rgba(0, 0, 0, 0.9)" }}
        >
          <div className="text-[140px] xl:text-[200px] tracking-[-0.09em] opacity-90">
            {"LET'S"}
          </div>
          <div className="text-[130px] xl:text-[190px] tracking-[-0.10em] opacity-90">
            CONNECT
          </div>
        </h2>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <h3
          className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-10 sm:mb-12 uppercase tracking-wide"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)" }}
        >
          {" I'm Always Interested About"}
        </h3>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-16 max-w-4xl">
          {interests.map((interest, index) => (
            <button
              key={index}
              className="px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-white/80 text-white rounded-full uppercase text-xs sm:text-sm font-semibold tracking-wide hover:bg-white hover:text-black hover:scale-105 transition-all duration-300 cursor-default backdrop-blur-sm bg-black/20 shadow-lg"
            >
              {interest}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mb-16">
          <p
            className="text-white text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-center"
            style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.9)" }}
          >
            Are You Minding To Hire Me?
          </p>

          <button
            onClick={handleContactClick}
            className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-white text-black rounded-full uppercase text-sm sm:text-base font-bold tracking-wide hover:bg-black hover:text-white border-2 border-white transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-center pt-4 border-t border-white/30 w-full max-w-2xl">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-white text-sm sm:text-base font-semibold uppercase tracking-wider hover:text-amber-500 transition-all duration-300"
              style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)" }}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>

      <div className="lg:hidden absolute bottom-8 left-1/2 -translate-x-1/2 z-0 opacity-20">
        <h2
          className="text-white font-bold uppercase leading-none text-center"
          style={{ textShadow: "4px 4px 12px rgba(0, 0, 0, 0.9)" }}
        >
          <div className="text-5xl sm:text-6xl tracking-tight">{"LET'S"}</div>
          <div className="text-5xl sm:text-6xl tracking-tight">CONNECT</div>
        </h2>
      </div>
    </section>
  );
}
