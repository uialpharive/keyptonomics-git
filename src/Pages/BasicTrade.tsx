import TradeCarousel from "../components/TradeCarousel";
import GradientButton from "../UIComponents/GradientButton";
import WhiteBtn from "../UIComponents/WhiteBtn";

const BasicTrade = () => {
    return (
        <>
            <div className="dark:text-white">
                <div className="flex w-full justify-between">
                    <div className="w-2/4">
                        <TradeCarousel />
                    </div>
                    {/* <div></div> */}
                    <div className=" w-1/4">
                        <WhiteBtn text="Basic" className="w-50" />
                        <GradientButton
                            text="PRO TRADING"
                            className="w-auto p-2 sm:w-40"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
export default BasicTrade;