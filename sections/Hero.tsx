"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type HeroProps = {
  rolefirstname: string;
  rolesecondname: string;
  description: string;
  buttontext: string;
  showText: boolean;
};

export default function Hero({
  rolefirstname,
  rolesecondname,
  description,
  buttontext,
  showText,
}: HeroProps) {
  const [hovered, setHovered] = useState(false);
  const [buttonTextHovered, setButtonTextHovered] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex items-center justify-center"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale: hovered ? 1.05 : 1,
          y: hovered ? 0 : [0, -8, 8, -5, 5, 0],
        }}
        transition={{
          scale: { type: "spring", stiffness: 50, damping: 15 },
          y: { repeat: Infinity, duration: 20, ease: "easeInOut" },
        }}
      >
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/40 via-transparent to-black/30" />
      </motion.div>

      {showText && (
        <div className="relative z-10 w-full px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-[1600px] mx-auto">
            <motion.div
              className="text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tighter"
                style={{
                  textShadow:
                    "4px 4px 12px rgba(0, 0, 0, 0.7), 2px 2px 6px rgba(0, 0, 0, 0.5)",
                }}
              >
                <span className="block text-white drop-shadow-2xl">
                  {rolefirstname}
                </span>
                <span className="block text-white drop-shadow-2xl">
                  {rolesecondname}
                </span>
              </h1>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center lg:justify-start lg:mt-[8%] space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="backdrop-blur-md bg-white/10 p-6 sm:p-8 rounded-2xl border border-white/20 shadow-2xl">
                <p
                  className="text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed text-white"
                  style={{
                    textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
                  }}
                >
                  {description}
                </p>
              </div>

              <button
                onMouseEnter={() => setButtonTextHovered(true)}
                onMouseLeave={() => setButtonTextHovered(false)}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative overflow-hidden bg-white text-black px-8 py-4 rounded-full text-lg sm:text-xl font-bold uppercase tracking-wide hover:bg-black hover:text-white border-2 border-white transition-all duration-300 transform hover:scale-105 shadow-2xl w-fit"
              >
                <motion.span
                  className="block whitespace-nowrap relative z-10"
                  animate={
                    buttonTextHovered ? { x: ["0%", "-100%"] } : { x: "0%" }
                  }
                  transition={
                    buttonTextHovered
                      ? {
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 2.5,
                          ease: "linear",
                        }
                      : { duration: 0.2 }
                  }
                >
                  {buttontext} →
                </motion.span>

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/0 via-amber-500/30 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <motion.div
                className="hidden lg:flex items-center gap-3 text-white/80"
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <div className="w-px h-16 bg-linear-to-b from-transparent via-white/60 to-transparent" />
                <span
                  className="text-sm uppercase tracking-wider"
                  style={{ textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)" }}
                >
                  Scroll to explore
                </span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      )}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-8 h-12 border-2 border-white/50 rounded-full p-2"
        >
          <div className="w-2 h-2 bg-white rounded-full mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
