import { ExternalLink } from 'lucide-react';
import React from 'react'
import { Tag } from "@/components";


interface Props {
  imgSrc: string;
  name: string;
  position: string;
  description: string;
  technologies: string[];
}

export const Project: React.FC<Props> = ({imgSrc, name, position, description, technologies}) => {
  return <div className="flex flex-row items-start">
    <img src={imgSrc} className="inline-block w-[250px] object-contain" />
    <div className="flex-1">
      <div className="block">
        <span>{name}</span>
        <ExternalLink className="inline-block" />
      </div>
      <span>{position}</span>
      <p>{description}</p>
      <div className="flex flex-row mt-2 gap-2 flex-wrap">
        {technologies.map((tech) => {
          return <Tag content={tech} />
        })}
      </div>
    </div>
  </div>;
}
