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

export default function whiteBtn({
  text,
  onClick,
  className = "",
  paddingX = "px-6",
  paddingY = "py-3",
  width = "",
  fontSize = "text-lg",
}: GradientButtonProps) {
  return (
<button
  onClick={onClick}
  className="relative p-[1.6px] rounded-lg bg-gradient-to-r from-[#01D3FF] to-[#2954A3] transition-all duration-300 ease-in-out"
>
  <span className="block w-full h-full px-6 py-2 rounded-md bg-white text-black font-bold text-center transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#01D3FF] hover:to-[#2954A3] hover:text-white">
    {text}
  </span>
</button>


  
  );
}
