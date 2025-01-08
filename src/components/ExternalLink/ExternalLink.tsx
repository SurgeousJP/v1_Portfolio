import { useEffect, useState } from "react";

interface Props {
  isHoveredState: boolean;
}

export const ExternalLink: React.FC<Props> = ({ isHoveredState }) => {
  const [isHovered, setIsHovered] = useState(isHoveredState);

  useEffect(() => {
    setIsHovered(isHoveredState);
  }, [isHoveredState]);

  return (
    <svg
      className="inline-block mb-1 overflow-visible lucide lucide-arrow-up-right"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        className={`transition-all duration-300 ease-in-out ${
          isHovered && "translate-x-1 -translate-y-1"
        }`}
        d="M7 7h10v10"
      />
      <path
        className={`transition-all duration-300 ease-in-out ${
          isHovered && "translate-x-1 -translate-y-1"
        }`}
        d="M5 19 17 7"
      />
    </svg>
  );
};
