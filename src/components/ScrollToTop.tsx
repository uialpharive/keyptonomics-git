import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`z-50 fixed bottom-5 right-5 p-2 rounded-full  bg-gradient-to-r from-[#01D3FF] to-[#2954A3]   hover:-translate-y-[1px] 
  hover:shadow-[0_8px_20px_0_#00cdf94d] 
  hover:text-[#2954A3] duration-300 ease-in-out text-gray-600 hover:text-white/60 shadow-md transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"
        }`}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
