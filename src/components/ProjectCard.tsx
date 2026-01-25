"use client";

import { FC, ReactNode } from "react";
import { Card } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  href?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({ title, description, icon, href }) => {
  const cardContent = (
    <div className="group cursor-pointer transform transition-all duration-500 hover:scale-105 h-full">
      <Card className="text-white rounded-2xl border border-white/10 bg-gradient-to-br from-black/70 via-black/50 to-black/70 shadow-2xl relative backdrop-blur-sm overflow-hidden hover:border-white/25 hover:shadow-white/5 hover:shadow-3xl h-full">
        {/* Background effects */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-gradient-to-tr from-white/10 to-transparent blur-3xl opacity-30 group-hover:opacity-50 transform group-hover:scale-110 transition-all duration-700"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
        </div>

        {/* Card content */}
        <div className="p-8 relative z-10 flex flex-col items-center text-center h-full">
          {/* Icon container */}
          <div className="relative mb-6">
            {/* Pulse ring - only animates once on hover */}
            <div
              className="absolute inset-0 rounded-full border-2 border-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-[ping_0.75s_ease-out_forwards]"
            ></div>

            <div className="p-6 rounded-full backdrop-blur-lg border border-white/20 bg-gradient-to-br from-black/80 to-black/60 shadow-2xl transform group-hover:scale-110 transition-all duration-500 hover:shadow-white/20">
              <div className="transform group-hover:rotate-12 transition-transform duration-700">
                {icon}
              </div>
            </div>
          </div>

          {/* Title */}
          <h3 className="mb-4 text-2xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent transform group-hover:scale-105 transition-transform duration-300">
            {title}
          </h3>

          {/* Description */}
          <div className="max-w-sm">
            <p className="text-gray-300 text-sm leading-relaxed transform group-hover:text-gray-200 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Decorative line */}
          <div className="mt-auto pt-6 w-1/3 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent rounded-full transform group-hover:w-1/2 group-hover:h-1 transition-all duration-500"></div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-white/10 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-white/10 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </Card>
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    );
  }

  return <div className="h-full">{cardContent}</div>;
};

export default ProjectCard;
