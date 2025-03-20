import React from "react";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  paddingX?: string; // Example: "px-4"
  paddingY?: string; // Example: "py-2"
  width?: string; // Example: "w-40"
  fontSize?: string; // Example: "text-lg"
  fontWeight?: string; // Example: "font-bold"
}

export default function GradientButton({
  text,
  onClick,
  className = "",
  paddingX = "",
  paddingY = "",
  width = "",
  fontSize = "",
  fontWeight = "",
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-white 
      bg-gradient-to-r from-[#01D3FF] to-[#2954A3] 
      hover:opacity-100 transition-all duration-300 ease-in-out 
      ${paddingX} ${paddingY} ${width} ${fontSize} ${fontWeight} ${className}`}
    >
      {text}
    </button>
  );
}
