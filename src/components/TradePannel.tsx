import { useEffect, useRef, useState } from "react";
import { ChevronDown, Minus, Plus } from "lucide-react";
import GradientButton from "../UIComponents/GradientButton";
import WhiteBtn from "../UIComponents/WhiteBtn";

interface Coin {
    name: string;
    icon: string;
}

const coins: Coin[] = [
    { name: "BTC/USDT", icon: "/btc-icon.png" },
    { name: "ETH/USDT", icon: "/eth-icon.png" },
    { name: "BNB/USDT", icon: "/bnb-icon.png" },
    { name: "SOL/USDT", icon: "/sol-icon.png" },
    { name: "XRP/USDT", icon: "/xrp-icon.png" },
];
export default function TradePanel() {
    const [tradeType, setTradeType] = useState("buy");
    const [quantity, setQuantity] = useState(0);
    const [leverage, setLeverage] = useState(100);
    const balance = 1339.925799; // Example balance
    const [selectedCoin, setSelectedCoin] = useState<Coin>(coins[0]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (
        <div className="dark:bg-[#0D0F1A] rounded-lg shadow-lg w-full p-5">

            {/* Buy & Sell Buttons */}
            <div className="flex space-x-3 mb-5">
                <GradientButton text="Buy" width="w-full" className="py-2" />
                <WhiteBtn text="Sell" width="w-full" className="" />
            </div>

            {/* Asset Selection */}
            <div
                ref={dropdownRef}
                onClick={() => setIsOpen(!isOpen)}
                className="relative bg-inputLight dark:bg-[#161B28] p-3 rounded-lg flex justify-between items-center mb-4 cursor-pointer"
            >
                <div className="flex items-center space-x-3">
                    <img src={selectedCoin.icon} alt={selectedCoin.name} className="w-6 h-6" />
                    <span className="text-white">{selectedCoin.name}</span>
                </div>
                <ChevronDown className={`text-white transition-transform ${isOpen ? "rotate-180" : ""}`} size={18} />

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute left-0 mt-2 w-36 bg-gray-900 rounded-lg shadow-lg z-10">
                        {coins.map((coin, index) => (
                            <button
                                key={index}
                                className="flex items-center space-x-3 p-2 w-full text-white hover:bg-gray-700"
                                onClick={(e) => {
                                    e.stopPropagation(); // Prevents div click from re-triggering toggle
                                    setSelectedCoin(coin);
                                    setIsOpen(false);
                                }}
                            >
                                <img src={coin.icon} alt={coin.name} className="w-5 h-5" />
                                <span>{coin.name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Quantity Selector */}
            <div className="flex justify-between items-center mb-3 dark:text-white text-sm">
                <span className="text-[12px]">Quantity</span>
                <span className="text-[12px]">Available Balance: {balance.toFixed(6)} USDT</span>
            </div>
            <div className="flex items-center bg-inputLight dark:bg-[#161B28] rounded-lg p-3">
                <button
                    className="p-2 bg-gray-800 rounded-md"
                    onClick={() => setQuantity(Math.max(0, quantity - 1))}
                >
                    <Minus className="text-white" size={16} />
                </button>
                <input
                    type="text"
                    value={quantity}
                    readOnly
                    className="w-full text-center font-[12px] dark:text-white bg-transparent outline-none"
                />
                <button className="p-2 bg-gray-800 rounded-md" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="text-white" size={16} />
                </button>
            </div>

            {/* Leverage Slider */}
            <div className="mt-5">
                <p className="text-white mb-2">Leverage: {leverage}x</p>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={leverage}
                    onChange={(e) => setLeverage(Number(e.target.value))}
                    className="w-full cursor-pointer"
                />
            </div>

            {/* Trade Information */}
            <div className="mt-5 dark:text-white text-[12px] space-y-2">
                <p>Trade Size: 0</p>
                <p>Pip Value: 0</p>
                <p>Used Margin: 0.00</p>
            </div>

            {/* Buy Button */}
            <GradientButton text={tradeType === "buy" ? "Buy" : "Sell"} width="w-full" className="px-5 py-3 mt-5" />
        </div>
    );
}
