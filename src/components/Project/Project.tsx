import { ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Tag } from "@/components";

interface Props {
  imgSrc: string;
  name: string;
  position: string;
  description: string;
  technologies: string[];
  isDarkMode: boolean;
  isLastItem: boolean;
}

export const Project: React.FC<Props> = ({
  imgSrc,
  name,
  position,
  description,
  technologies,
  isDarkMode,
  isLastItem,
}) => {
  const [currentDarkModeState, setCurrentDarkModeState] = useState(isDarkMode);

  useEffect(() => {
    setCurrentDarkModeState(isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`flex flex-col md:flex-row items-start md:gap-4 cursor-pointer md:hover:bg-[#f2f2f2] rounded-lg md:p-4 ${
        !isLastItem ? "mb-4" : ""
      }`}
    >
      <img
        src={imgSrc}
        className="block w-full md:w-[150px] lg:w-[250px] object-cover rounded-lg mb-2 md:mb-0"
      />
      <div className="flex-1 gap-2 flex flex-col">
        <div className="inline-flex items-center gap-2">
          <span className="font-bold">
            {name}{" "}
            <ExternalLink
              size={14}
              className="inline-block w-[14px] h-[14px] mb-1"
            />
          </span>
        </div>
        <span
          className={`text-secondary font-medium ${
            currentDarkModeState ? "tertiary-dark-mode-text" : ""
          }`}
        >
          {position}
        </span>
        <p>{description}</p>
        <div className="flex flex-row mt-2 gap-2 flex-wrap">
          {technologies.map((tech) => {
            return <Tag content={tech} />;
          })}
        </div>
      </div>
    </div>
  );
};
