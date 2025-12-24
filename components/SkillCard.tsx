import { motion } from "framer-motion";

import { TechIcon } from "./TechIcons";

interface SkillCardProps {
  skill: { name: string; color: string; icon: string };
  index: number;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{
        scale: 1.1,
        y: -10,
        transition: { duration: 0.3 },
      }}
      className="group relative flex flex-col items-center justify-center p-6 bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{ backgroundColor: `${skill.color}20` }}
      />

      <div className="relative z-10 mb-4 transform group-hover:scale-110 transition-transform duration-300">
        <TechIcon name={skill.icon} color={skill.color} />
      </div>

      <p className="relative z-10 text-sm sm:text-base font-semibold text-white text-center group-hover:text-amber-500 transition-colors duration-300">
        {skill.name}
      </p>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-tr from-transparent via-white to-transparent" />
    </motion.div>
  );
};
