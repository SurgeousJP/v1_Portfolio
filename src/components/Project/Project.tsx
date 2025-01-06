import { ExternalLink } from 'lucide-react';
import React from 'react'
import { Tag } from "@/components";


interface Props {
  imgSrc: string;
  name: string;
  position: string;
  description: string;
  technologies: string[];
  isLastItem: boolean;
}

export const Project: React.FC<Props> = ({imgSrc, name, position, description, technologies, isLastItem}) => {
  return <div className={`flex flex-col md:flex-row items-start cursor-pointer ${!isLastItem ? "mb-8" : ""}`}>
    <img src={imgSrc} className="block w-full md:w-[250px] object-cover rounded-lg mb-2 md:mb-0" />
    <div className="flex-1 gap-2 flex flex-col">
      <div className="flex items-center gap-2">
        <span className='font-bold'>{name}</span>
        <ExternalLink size={14} className="inline-block" />
      </div>
      <span className='text-secondary font-medium'>{position}</span>
      <p>{description}</p>
      <div className="flex flex-row mt-2 gap-2 flex-wrap">
        {technologies.map((tech) => {
          return <Tag content={tech} />
        })}
      </div>
    </div>
  </div>;
}
