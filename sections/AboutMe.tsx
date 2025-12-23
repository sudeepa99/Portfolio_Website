"use client";

import { Undo } from "lucide-react";
import ThreeDModel from "../components/ThreeDModel";

type AboutMeProps = {
  firstname: string;
  fullname: string;
  description: string;
  caption: string;
  statuename: string;
};

export default function AboutMe({
  firstname,
  fullname,
  description,
  caption,
  statuename,
}: AboutMeProps) {
  return (
    <section
      id="about"
      className="relative w-full h-screen flex items-center bg-[#0f0f0f] text-white overflow-hidden"
    >
      <div className="flex flex-col lg:flex-row w-full h-full px-6 lg:px-[8%] items-center justify-center lg:justify-between gap-10">
        <div className="w-full lg:w-1/2 z-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] font-bold leading-none uppercase font-mono tracking-tight text-center lg:text-left">
            {firstname}
          </h2>

          <h3 className="text-sm sm:text-base uppercase mb-4 lg:mb-6 -mt-1 text-amber-200 text-center lg:text-left">
            {fullname}
          </h3>

          <p className="text-sm sm:text-base leading-relaxed uppercase max-w-xl text-center lg:text-left">
            {description}
          </p>
        </div>

        <div className="w-full lg:w-1/2 h-[45vh] sm:h-[50vh] lg:h-full relative flex items-center justify-center lg:-translate-y-40">
          <div className="w-full h-full flex items-center justify-center">
            <ThreeDModel modelPath="/models/head_of_david_but_with_hay.glb" />
          </div>

          <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 lg:bottom-8 lg:right-8 z-10 flex items-end gap-3">
            <button className="p-2 rounded-full bg-transparent hover:bg-transparent transition">
              <Undo className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-amber-200 rotate-12" />
            </button>

            <div className="text-right">
              <p className="text-xs sm:text-sm text-gray-400">{caption}</p>
              <p className="text-xs sm:text-sm font-black">{statuename}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
