// import { ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Tag } from "@/components";
import { ExternalLink } from "@/components";
interface Props {
  imgSrc: string;
  name: string;
  position: string;
  description: string;
  technologies: string[];
  link: string;
  isDarkMode: boolean;
  isLastItem: boolean;
}

export const Project: React.FC<Props> = ({
  imgSrc,
  name,
  position,
  description,
  technologies,
  link,
  isDarkMode,
  isLastItem,
}) => {
  const [currentDarkModeState, setCurrentDarkModeState] = useState(isDarkMode);

  useEffect(() => {
    setCurrentDarkModeState(isDarkMode);
  }, [isDarkMode]);

  const [isHovered, setIsHovered] = useState(false);

  const onOpenLink = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={`flex flex-col md:flex-row items-start md:gap-4 cursor-pointer rounded-lg md:p-4 overflow-visible border-1 border-transparent ${
        !isLastItem ? "mb-8" : ""
      } ${
        currentDarkModeState
          ? "md:hover:bg-[rgba(252,252,252,0.05)] md: md:hover:border-[rgba(198,198,198,0.1)]"
          : "md:hover:bg-[#f2f2f2]"
      }`}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true
      onMouseLeave={() => setIsHovered(false)} // Reset hover stat
      onClick={onOpenLink}
    >
      <img
        src={imgSrc}
        className="block w-full md:w-[150px] lg:w-[250px] object-cover rounded-lg mb-2 md:mb-0"
      />
      <div className="flex-1 gap-2 flex flex-col">
        <div className="inline-flex items-center gap-2">
          <span className="font-bold">
            {name}

            {/* <ExternalLink
              size={14}
              className="inline-block w-[14px] h-[14px] mb-1"
            /> */}
          </span>
          <ExternalLink isHoveredState={isHovered} />
        </div>
        <span
          className={`font-medium ${
            currentDarkModeState ? "text-extra" : "text-secondary"
          }`}
        >
          {position}
        </span>
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
