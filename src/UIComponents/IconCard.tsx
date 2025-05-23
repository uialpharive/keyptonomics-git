import React from "react";

interface GradientCardProps {
    Icon: React.ElementType;
    className?: string;
    onClick?: () => void; // Make onClick optional
    
}

export default function IconCard({ Icon, className, onClick }: GradientCardProps) {
    return (
        <div 
            className={`relative w-[32px] h-[32px] rounded-md p-[1px] 
                bg-gradient-to-r from-[#01D3FF] to-[#2954A3] 
                transition-all duration-300 hover:scale-110 hover:shadow-lg 
                ${className}`}
        >
            <div 
                className="flex items-center justify-center w-full h-full 
                bg-white dark:bg-black rounded-md 
                transition-all duration-300 hover:bg-opacity-90" 
                onClick={onClick} // Fixed the typo here
            >
                <Icon size={20} className="text-black dark:text-white transition-colors duration-300 hover:text-themeBlue dark:hover:text-[#d7a407]" />
            </div>
        </div>
    );
}
