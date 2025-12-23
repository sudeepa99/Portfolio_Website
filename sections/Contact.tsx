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
          alt="Classical art background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="hidden lg:block absolute left-6 top-3/4 -translate-y-1/2 z-10">
        <h2 className="text-white font-semibold uppercase leading-none ">
          <div className="text-[150px] xl:text-[210px] tracking-[-0.09em]">
            {" "}
            {"LET'S"}{" "}
          </div>
          <div className="text-[140px] xl:text-[200px] tracking-[-0.10em]">
            {" "}
            CONNECT
          </div>
        </h2>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 uppercase tracking-wide">
          {"I'm Always Interested About"}
        </h3>

        <div className="flex flex-wrap justify-center gap-3 mb-12 max-w-3xl">
          {interests.map((interest, index) => (
            <button
              key={index}
              className="px-6 py-3 border-2 border-white text-white rounded-full uppercase text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 cursor-default"
            >
              {interest}
            </button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 mb-12 mt-5">
          <p className="text-white text-lg sm:text-xl lg:text-2xl font-medium uppercase tracking-wide text-center">
            Are You Minding To Hire Me?
          </p>

          <button
            onClick={handleContactClick}
            className="px-4 sm:px-6 py-2 sm:py-3 border-2 border-white text-white rounded-full uppercase text-xs sm:text-sm font-medium tracking-wide"
          >
            Contact Me
          </button>
        </div>
        <div className="-mt-8 w-full h-1 bg-white"></div>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mt-2 text-center">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm sm:text-base font-medium uppercase tracking-wider hover:opacity-70 transition-opacity duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
