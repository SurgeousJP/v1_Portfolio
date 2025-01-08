import React, { useEffect, useState } from "react";
import { ExternalLink, Tag } from "@/components";

interface Props {
  time: string;
  position: string;
  company: string;
  description: string;
  technologies: string[];
  link: string;
  isDarkMode: boolean;
}

export const Experience: React.FC<Props> = ({
  time,
  position,
  company,
  description,
  technologies,
  link,
  isDarkMode,
}) => {
  const [currentDarkModeState, setCurrentDarkModeState] = useState(isDarkMode);

  useEffect(() => {
    setCurrentDarkModeState(isDarkMode);
  }, [isDarkMode]);

  const [isHovered, setIsHovered] = useState(false);

  const onOpenLink = () => {
    window.open(link, '_blank');
  }

  return (
    <div
      className={`flex flex-col md:flex-row items-start cursor-pointer md:gap-4 rounded-lg md:p-4 border-1 border-transparent ${
        currentDarkModeState
          ? "md:hover:bg-[rgba(252,252,252,0.05)] md:hover:border-[rgba(198,198,198,0.1)]"
          : "md:hover:bg-[#f2f2f2]"
      }`}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover stat
      onClick={onOpenLink}
    >
      <span
        className={`inline-block md:w-[150px] lg:w-[250px] text-md  ${
          currentDarkModeState ? "text-extra" : "text-secondary"
        } opacity-75 font-semibold mb-1 md:mb-0`}
      >
        {time}
      </span>
      <div className="flex-1 gap-2 flex flex-col">
        <div className="inline-flex items-center gap-2">
          <span className="font-bold">
            {position} · {company}{" "}
          </span>
          <ExternalLink isHoveredState={isHovered} />
        </div>
        <p>{description}</p>
        <div className="flex flex-row mt-2 gap-2 flex-wrap">
          {technologies.map((tech) => {
            return <Tag key={tech} content={tech} />;
          })}
        </div>
      </div>
    </div>
  );
};
