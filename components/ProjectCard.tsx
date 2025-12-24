import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Project } from "@/types/project.types";

interface ProjectCardProps {
  project: Project;
  size: "large" | "small";
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  size,
  index,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      className={`
        relative overflow-hidden cursor-pointer group rounded-xl
        ${size === "large" ? "h-100 sm:h-112.5" : "h-75 sm:h-87.5"}
        transition-all duration-500 ease-out
        hover:shadow-2xl hover:shadow-amber-500/20
      `}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        {project.tags && (
          <motion.div
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 rounded-full backdrop-blur-sm border border-amber-500/30"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        )}

        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 transform transition-transform duration-500 group-hover:translate-x-2">
          {project.name}
        </h3>

        <div className="flex items-center justify-between">
          {project.year && (
            <span className="text-sm text-gray-400 font-medium">
              {project.year}
            </span>
          )}

          <div className="flex items-center gap-3">
            <motion.div
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(245, 158, 11, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <Github className="w-5 h-5 text-white" />
            </motion.div>
            <motion.div
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.5,
              }}
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(245, 158, 11, 0.3)",
              }}
              transition={{ duration: 0.2 }}
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
    </motion.div>
  );
};
