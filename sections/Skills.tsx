"use client";
import { motion } from "framer-motion";
import { SkillCard } from "@/components/SkillCard";
import { skillsData } from "@/data/skills";
import { Database, Layout, Server } from "lucide-react";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-linear-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white py-20 sm:py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute top-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative w-full px-6 sm:px-8 lg:px-12 xl:px-16 max-w-350 mx-auto">
        <motion.div
          className="mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-16 bg-amber-500" />
            <span className="text-sm uppercase tracking-widest text-amber-500 font-semibold">
              Tech Stack
            </span>
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl">
            Technologies I work with to build modern, scalable applications
          </p>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Layout className="w-6 h-6 text-amber-500" />
            <h3 className="text-2xl sm:text-3xl font-bold">
              Frontend Development
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {skillsData.frontend.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Server className="w-6 h-6 text-amber-500" />
            <h3 className="text-2xl sm:text-3xl font-bold">
              Backend Development
            </h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {skillsData.backend.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Database className="w-6 h-6 text-amber-500" />
            <h3 className="text-2xl sm:text-3xl font-bold">Database</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
            {skillsData.database.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
