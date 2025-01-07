import { ExternalLink } from "lucide-react";
import React from "react";
import { Tag } from "@/components";

interface Props {
  time: string;
  position: string;
  company: string;
  description: string;
  technologies: string[];
}

export const Experience: React.FC<Props> = ({
  time,
  position,
  company,
  description,
  technologies,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start cursor-pointer md:gap-4 hover:bg-[#f2f2f2] rounded-lg md:p-4">
      <span className="inline-block md:w-[150px] lg:w-[250px] text-md text-secondary opacity-75 font-semibold mb-1 md:mb-0">
        {time}
      </span>
      <div className="flex-1 gap-2 flex flex-col">
        <div className="inline-flex items-center gap-2">
          <span className="font-bold">
            {position} · {company}{" "}
            <ExternalLink size={14} className="inline w-[14px] h-[14px] mb-1" />
          </span>
        </div>
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
