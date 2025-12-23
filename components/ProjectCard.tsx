import { Project } from "@/types/project.types";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  size: "large" | "small";
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, size }) => {
  const handleClick = () => {
    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className={`
        relative overflow-hidden cursor-pointer group
        ${size === "large" ? "h-[400px]" : "h-[300px]"}
        transition-all duration-500 ease-out
      `}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
      </div>

      <div
        className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 lg:px-12
"
      >
        <h3
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
 font-bold text-white uppercase tracking-tight leading-none transform transition-transform duration-500 group-hover:translate-x-2"
        >
          {project.name}
        </h3>
      </div>

      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </div>
    </div>
  );
};
