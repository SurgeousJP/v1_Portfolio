import React from "react";

interface Props {
  content: string;
}

export const Tag: React.FC<Props> = ({ content }) => {
  return <div className="text-white bg-primary font-medium px-3 py-1 rounded-2xl text-md">{content}</div>;
};
