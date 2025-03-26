import TechnicalAnalysis from "../components/TechnicalAnalysis";
import TradeAccordion from "../components/TradeAccordion";
import TradeGlassCard from "../components/TradeGlassCard";
import TradeOrderBook from "../components/TradeOrderBook";
import TradePanel from "../components/TradePannel";
import TradeTopStories from "../components/TradeTopStories";
import TradingChart from "../components/TradingChart";
import TradingDashboard from "../components/TradingDashboard";

const ProTrade = () => {
    const balanceData = [
        { label: "Available Balance", value: "$ 1,339.79" },
        { label: "Staked Balance", value: "$ 0.00" },
        { label: "Account Balance", value: "$ 1,339.79" },
        { label: "Total P&L", value: "$ 339.93" },
    ];
    return (
        <>
            <div className="dark:text-white space-y-5">

                <div>
                    <TradeGlassCard balanceData={balanceData} titleFontSize="text-sm" valueFontSize="text-sm" className="xl:px-[300px]" valueColor="text-green-500" />
                </div>
                {/* <div className="flex flex-col xl:grid xl:grid-cols-[70%_30%] gap-4 p-4">

                    <div className="flex flex-col md:flex-row gap-4 w-full">
                        <div className="w-full md:w-2/6 bg-[#161B28] p-4 rounded-lg text-white shadow-lg">
                            <TradeAccordion />
                        </div>

                        <div className="w-full md:w-4/6 bg-[#161B28] p-4 rounded-lg text-white shadow-lg">
                            <TradingChart />
                        </div>
                    </div>


                    <div className="bg-[#161B28] p-4 rounded-lg text-white shadow-lg w-full xl:w-auto">
                        <TradePanel />
                    </div>

                </div> */}


                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}
                    {/* <aside className="sm:w-full md:w-2/6 lg:w-1/6 xl:w-1/6 bg-gray-900 text-white p-4">
                        <TradeAccordion />
                    </aside> */}

                    {/* Main Content */}
                    <main className="flex-1 flex flex-col p-4">
                        <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-4  gap-4 h-full">
                            {/* TradePanel takes 1/3 width */}
                            <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
                                {/* <TradePanel /> */}
                                <TradeOrderBook />
                            </div>
                            {/* TradingChart takes 2/3 width */}
                            <div className="sm:col-span-1 md:col-span-3  lg:col-span-2 xl:col-span-2">
                                <TradingChart />
                            </div>
                            <div className="sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
                                {/* <TradePanel /> */}
                                <TechnicalAnalysis />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-4  gap-4 h-full mt-10">
                            {/* TradePanel takes 1/3 width */}
                            <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
                                <TradePanel />
                            </div>
                            {/* TradingChart takes 2/3 width */}
                            <div className="sm:col-span-1 md:col-span-3  lg:col-span-2 xl:col-span-2">
                                <TradingChart />
                            </div>
                            <div className="sm:col-span-1 md:col-span-5 lg:col-span-1 xl:col-span-1">
                                <TradeTopStories />
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-3  xl:grid-cols-3 gap-4 h-full mt-10">
                            <div className="sm:col-span-1 md:col-span-3  lg:col-span-2 xl:col-span-2">
                                <TradingChart />
                            </div>
                            <div className="sm:col-span-1 md:col-span-2 lg:col-span-1 xl:col-span-1">
                                <TradeTopStories />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default ProTrade;