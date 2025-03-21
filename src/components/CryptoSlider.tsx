import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CryptoItem {
  name: string;
  price: string;
  icon: string;
}

const cryptoData: CryptoItem[] = [
  { name: "USDT", price: "$0.99", icon: "🟢" },
  { name: "BTC", price: "$91338.58", icon: "🟠" },
  { name: "BCH", price: "$404.3", icon: "🟢" },
  { name: "ETH", price: "$2285.97", icon: "🔵" },
];

export default function CryptoSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center w-full max-w-xl mx-auto p-4">
      {/* Left Scroll Button */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 z-10 p-2 bg-white shadow-lg rounded-full"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Scrollable Content */}
      <div
        ref={sliderRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory w-full px-8"
      >
        {cryptoData.map((crypto, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-2xl p-4 shadow-lg min-w-[120px] snap-center"
          >
            <span className="text-2xl">{crypto.icon}</span>
            <span className="text-blue-600 font-semibold">{crypto.name}</span>
            <span className="text-gray-600">{crypto.price}</span>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 z-10 p-2 bg-white shadow-lg rounded-full"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
