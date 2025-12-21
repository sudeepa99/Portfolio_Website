"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";

type HeroProps = {
  rolefirstname: string;
  rolesecondname: string;
  description: string;
  buttontext: string;
};

export default function Hero({
  rolefirstname,
  rolesecondname,
  description,
  buttontext,
}: HeroProps) {
  const [hovered, setHovered] = useState(false);
  const [buttonTextHovered, setButtonTextHovered] = useState(false);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center">
      <Header name="Sudeepa Nisal" role="Software Engineer" />
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={{
          scale: hovered ? 0.9 : 1,
          rotate: hovered ? 2 : 0,
          borderRadius: hovered ? "20%" : "0%",
        }}
        transition={{ type: "spring", stiffness: 50, damping: 10 }}
      >
        <Image
          src="/hero.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="relative z-10 w-full px-4">
        <div className="grid grid-cols-2 items-start">
          <div className="text-left">
            <h1 className="text-9xl font-bold leading-none text-slate-900 tracking-tighter">
              <span className="block">{rolefirstname}</span>
              <span className="block">{rolesecondname}</span>
            </h1>
          </div>

          <div className="text-left flex flex-col items-end font-semibold mt-[8%] ml-auto ">
            <p className="text-2xl max-w-md mb-6 text-slate-700  ">
              {description}
            </p>

            <button
              onMouseEnter={() => setButtonTextHovered(true)}
              onMouseLeave={() => setButtonTextHovered(false)}
              className=" text-xl relative overflow-hidden bg-black px-6 py-3 rounded-lg w-fit"
            >
              <motion.span
                className="block text-white whitespace-nowrap"
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
                {buttontext}
              </motion.span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
