import { useState } from "react";
import TradeCarousel from "../components/TradeCarousel";
import GradientButton from "../UIComponents/GradientButton";
import WhiteBtn from "../UIComponents/WhiteBtn";
import BasicTrade from "./BasicTrade";
import ProTrade from "./ProTrade";


const Trade = () => {
    const [tradeMode, setTradeMode] = useState("basic"); // 'basic' or 'pro'

    return (
        <div className="space-y-5  xl:px-[50px] 2xl:px-[100px] 3xl:px-[350px] 4xl:px-[550px] 5xl:px-[800px] 6xl:px-[950px] 7xl:px-[1000px] 8xl:px-[1250px] 9xl:px-[1400px] 10xl:px-[1600px] 11xl:px-[2100px] 12xl:px-[3000px]">
            <div className="flex flex-col lg:flex-row w-full justify-between gap-6 lg:gap-0">
                <div className="w-full lg:w-2/4 px-10 lg:px-0 pt-5">
                    <TradeCarousel />
                </div>
                <div className="w-full px-2 lg:w-2/4 flex justify-between lg:justify-end items-center gap-4 mt-5">
                    <WhiteBtn 
                        text="Basic" 
                        fontSize="text-[13px]"
                        onClick={() => setTradeMode("basic")} 
                        className={tradeMode === "basic" ? "border border-gray-500 w-[150px]" : ""}
                    />
                    <GradientButton
                        text="PRO TRADING"
                        fontSize="text-[13px]"
                        paddingX="px-7"
                        onClick={() => setTradeMode("pro")}
                        className={`w-auto p-2 sm:w-70 ${tradeMode === "pro" ? "shadow-lg" : ""}`}
                    />
                </div>
            </div>
            <div>
                {tradeMode === "basic" ? <BasicTrade /> : <ProTrade />}
            </div>
        </div>
    );
};

export default Trade;
