import React from "react";

type ButtonProps = {
  text: string;
  isActive?: boolean;
  onClick: () => void;
};

export const FilterButton: React.FC<ButtonProps> = ({
  text,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-all ${
        isActive
          ? "bg-blue-500 text-white shadow-md"
          : "bg-gray-200 text-black hover:bg-gray-300"
      }`}
    >
      {text}
    </button>
  );
};
