"use client";

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
      <div className="flex w-full h-full px-[8%] items-center justify-between gap-12">
        <div className="w-1/2 flex-shrink-0 z-10">
          <h2 className="text-[90px] font-bold leading-none uppercase font-mono tracking-tight">
            {firstname}
          </h2>

          <h3 className="text-lg  uppercase mb-6 mt-2 text-amber-200">
            {fullname}
          </h3>

          <p className="text-base leading-relaxed uppercase max-w-xl">
            {description}
          </p>
        </div>

        <div className="w-1/2 h-full  relative flex items-center justify-center -translate-y-54">
          <div className="w-full h-full flex items-center justify-center">
            <ThreeDModel modelPath="/models/head_of_david_but_with_hay.glb" />
          </div>

          <div className="absolute bottom-8 right-8 text-right z-10">
            <p className="text-sm text-gray-400">{caption}</p>
            <p className="text-sm font-semibold">{statuename}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
