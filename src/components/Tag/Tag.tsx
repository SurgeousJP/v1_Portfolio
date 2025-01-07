import React from "react";

interface Props {
  content: string;
}

export const Tag: React.FC<Props> = ({ content }) => {
  return <div className="text-white bg-primary font-medium px-3 py-[6px] rounded-2xl text-xs">{content}</div>;
};
