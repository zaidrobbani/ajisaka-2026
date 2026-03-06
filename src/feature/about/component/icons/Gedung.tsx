import React from "react";

interface GedungProps {
  scale?: number;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  className?: string;
}

const Gedung: React.FC<GedungProps> = ({ scale = 1, position, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      className={className}
      style={{
        transform: scale !== 1 ? `scale(${scale})` : undefined,
        position: position,
      }}
    >
      <path
        d="M70.0007 63.3333H76.6673V70H3.33398V63.3333H10.0007V13.3333C10.0007 12.4493 10.3518 11.6014 10.977 10.9763C11.6021 10.3512 12.4499 10 13.334 10H46.6673C47.5514 10 48.3992 10.3512 49.0243 10.9763C49.6495 11.6014 50.0007 12.4493 50.0007 13.3333V63.3333H56.6673V30H66.6673C67.5514 30 68.3992 30.3512 69.0243 30.9763C69.6495 31.6014 70.0007 32.4493 70.0007 33.3333V63.3333ZM23.334 36.6667V43.3333H36.6673V36.6667H23.334ZM23.334 23.3333V30H36.6673V23.3333H23.334Z"
        fill="white"
      />
    </svg>
  );
};

export default Gedung;
