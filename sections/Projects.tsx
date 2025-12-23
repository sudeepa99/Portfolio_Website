"use client";
import { useState } from "react";
import { motion } from "framer-motion";

import { ProjectCard } from "@/components/ProjectCard";
import { projectsData } from "@/data/projects";

export default function Projects() {
  const [buttonTextHovered, setButtonTextHovered] = useState(false);

  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-[#0f0f0f] text-white py-16 sm:py-20 lg:py-24"
    >
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[8%]">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[100px] font-bold leading-none uppercase tracking-tight mb-16 lg:mb-24">
          Selected Cases
        </h2>

        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {projectsData[0] && (
              <div className="lg:col-span-2">
                <ProjectCard project={projectsData[0]} size="large" />
              </div>
            )}
            {projectsData[1] && (
              <div className="lg:col-span-1">
                <ProjectCard project={projectsData[1]} size="small" />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData[2] && (
              <div className="lg:col-span-1">
                <ProjectCard project={projectsData[2]} size="small" />
              </div>
            )}
            {projectsData[3] && (
              <div className="lg:col-span-2">
                <ProjectCard project={projectsData[3]} size="large" />
              </div>
            )}
          </div>

          {projectsData.length > 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projectsData[4] && (
                <div className="lg:col-span-2">
                  <ProjectCard project={projectsData[4]} size="large" />
                </div>
              )}
              {projectsData[5] && (
                <div className="lg:col-span-1">
                  <ProjectCard project={projectsData[5]} size="small" />
                </div>
              )}
            </div>
          )}
        </div>
        <div className="mt-12 text-center">
          <button
            className=" p-3 rounded-xl bg-white text-black text-xl font-bold text-center uppercase"
            onClick={() =>
              window.open(
                "https://github.com/sudeepa99?tab=repositories",
                "_blank"
              )
            }
            onMouseEnter={() => setButtonTextHovered(true)}
            onMouseLeave={() => setButtonTextHovered(false)}
          >
            <motion.span
              className="block text-black whitespace-nowrap"
              animate={buttonTextHovered ? { x: ["0%", "-100%"] } : { x: "0%" }}
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
              See Other Cases
            </motion.span>{" "}
          </button>
        </div>
      </div>
    </section>
  );
}
