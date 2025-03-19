import React from "react";

interface GradientButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  paddingX?: string; // Horizontal padding
  paddingY?: string; // Vertical padding
  width?: string; // Width
  fontSize?: string; // Font size
}

export default function GradientButton({
  text,
  onClick,
  className = "",
  paddingX = "px-6",
  paddingY = "py-3",
  width = "w-auto",
  fontSize = "text-lg",
}: GradientButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg font-bold text-white 
      bg-gradient-to-r from-[#01D3FF] to-[#2954A3] 
      hover:opacity-80 transition-all duration-300 ease-in-out 
      ${paddingX} ${paddingY} ${width} ${fontSize} ${className}`}
    >
      {text}
    </button>
  );
}
