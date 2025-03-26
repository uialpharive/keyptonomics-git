import TradeAccordion from "../components/TradeAccordion";
import TradeGlassCard from "../components/TradeGlassCard";
import TradePanel from "../components/TradePannel";
import TradingChart from "../components/TradingChart";
import TradingDashboard from "../components/TradingDashboard";
import TradingTable from "../components/TradingTable";

const BasicTrade = () => {
    const balanceData = [
        { label: "Available Balance", value: "$ 1,339.79" },
        { label: "Staked Balance", value: "$ 0.00" },
        { label: "Account Balance", value: "$ 1,339.79" },
        { label: "Total P&L", value: "$ 339.93" },
    ];
    return (
        <>
            <div className="dark:text-white space-y-5">

                <div className="px-2">
                    <TradeGlassCard balanceData={balanceData} titleFontSize="text-sm" valueFontSize="text-sm" className="xl:px-[300px]" valueColor="text-green-500" />
                </div>


                <div className="flex flex-col md:flex-row">
                    {/* Sidebar */}
                    <aside className="mx-2 sm:w-full md:w-2/6 lg:w-1/6 xl:w-1/6 text-white  shadow-lg rounded-xl border-[1px] dark:bg-[#181627] ">
                        <TradeAccordion />
                    </aside>

                    {/* Main Content */}
                    <main className="flex-1 flex flex-col px-2">
                        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 h-full">
                            {/* TradePanel takes 1/3 width */}
                            <div className="sm:col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-1">
                                <TradePanel />
                            </div>
                            {/* TradingChart takes 2/3 width */}
                            <div className="sm:col-span-1 md:col-span-3  lg:col-span-3 xl:col-span-2">
                                <TradingChart />
                            </div>
                            
                        </div>
                        <div className="my-[50px] ">
                                <TradingDashboard/>
                            </div>
                            <div>
                                <TradingTable/>
                            </div>
                    </main>
                </div>
            </div>
        </>
    )
}
export default BasicTrade;