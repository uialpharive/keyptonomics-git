import React from "react";

interface GradientCardProps {
  width?: string; // Example: "w-64"
  height?: string; // Example: "h-40"
  text: string; // Example: "All Participants"
  count: string; // Example: "3232+"
  Icon: React.ElementType; // Example: User from lucide-react
}

export default function GradientCard({
  width = "w-64",
  height = "h-40",
  text,
  count,
  Icon,
}: GradientCardProps) {
  return (
    <div className={`relative p-[2px] rounded-xl bg-gradient-to-r from-[#01D3FF] to-[#2954A3] ${width} ${height}`}>
      <div className="flex flex-col items-center justify-center bg-white rounded-xl h-full w-full p-6">
        <Icon size={32} className="text-[#01D3FF]" />
        <p className="text-black text-md mt-2">{text}</p>
        <p className="text-[#01D3FF] text-3xl font-bold">{count}</p>
      </div>
    </div>
  );
}
