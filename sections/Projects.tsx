"use client";
import { motion } from "framer-motion";

import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen bg-linear-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl" />

      <div className="relative w-full px-6 sm:px-8 lg:px-12 xl:px-16 max-w-400 mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-amber-500" />
            <span className="text-sm uppercase tracking-widest text-amber-500 font-semibold">
              Projects
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight">
            Selected Cases
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8 lg:space-y-10">
          {/* Row 1 - Large left, Small right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectsData[0] && (
              <div className="lg:col-span-2">
                <ProjectCard project={projectsData[0]} size="large" index={0} />
              </div>
            )}
            {projectsData[1] && (
              <div className="lg:col-span-1">
                <ProjectCard project={projectsData[1]} size="small" index={1} />
              </div>
            )}
          </div>

          {/* Row 2 - Small left, Large right */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {projectsData[2] && (
              <div className="lg:col-span-1">
                <ProjectCard project={projectsData[2]} size="small" index={2} />
              </div>
            )}
            {projectsData[3] && (
              <div className="lg:col-span-2">
                <ProjectCard project={projectsData[3]} size="large" index={3} />
              </div>
            )}
          </div>

          {/* Row 3 - Large left (if exists) */}
          {projectsData.length > 4 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {projectsData[4] && (
                <div className="lg:col-span-2">
                  <ProjectCard
                    project={projectsData[4]}
                    size="large"
                    index={4}
                  />
                </div>
              )}
              {projectsData[5] && (
                <div className="lg:col-span-1">
                  <ProjectCard
                    project={projectsData[5]}
                    size="small"
                    index={5}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* View All Button */}
        <motion.div
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            onClick={() =>
              window.open(
                "https://github.com/sudeepa99?tab=repositories",
                "_blank"
              )
            }
            className="group relative px-8 py-4 bg-white text-black rounded-full text-lg font-bold uppercase tracking-wide overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button Background Animation */}
            <span className="absolute inset-0 bg-linear-to-r from-amber-500 to-amber-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

            {/* Button Text */}
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors duration-300">
              View All Projects
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
