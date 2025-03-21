import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for each item in availableBalance
interface BalanceItem {
    text: string;
    value: string | number;
}

// Define props type
interface BalanceSliderProps {
    availableBalance: BalanceItem[];
}

const BalanceSlider: React.FC<BalanceSliderProps> = ({ availableBalance }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === availableBalance.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval);
    }, [availableBalance]);

    return (
        <nav
            className="flex xs:flex xs-sm:flex sm:hidden md:hidden lg:hidden lg-xl:hidden xl:hidden lg:px-14 items-center gap-10 px-6 bg-gray-100 dark:bg-[#262d4d] border-b border-gray-200 dark:border-gray-100"
            aria-label="Global"
        >
            <div className="h-[40px] overflow-hidden relative flex flex-col justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex gap-4 items-center"
                    >
                        <div className="flex flex-col justify-end">
                            <h1 className="text-[10px] xs:text-[12px] xs-sm:text-[12px] font-medium dark:text-white">
                                {availableBalance[currentIndex]?.text}
                            </h1>
                        </div>
                        <p className="text-[11px] font-extrabold text-themeBlue flex items-center">
                            {availableBalance[currentIndex]?.value}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default BalanceSlider;
