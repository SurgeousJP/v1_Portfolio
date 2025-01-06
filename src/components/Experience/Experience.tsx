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
  return <div className="flex flex-row items-start">
    <span className="inline-block w-[250px]">{time}</span>
    <div className="flex-1">
      <div className="block">
        <span>{position} · {company}</span>
        <ExternalLink className="inline-block" />
      </div>
      <p>{description}</p>
      <div className="flex flex-row mt-2 gap-2 flex-wrap">
        {technologies.map((tech) => {
          return <Tag content={tech} />
        })}
      </div>
    </div>
  </div>;
};
