import TradeCountryReading from "./TradeCountryReading";
import TradeOrderBook from "./TradeOrderBook";
import TradeTopStories from "./TradeTopStories";


export default function TradingDashboard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            
            {/* Order Book */}
          <TradeOrderBook/>

            {/* Economic Calendar */}
            <TradeCountryReading/>

            {/* Top Stories */}
           <TradeTopStories/>

        </div>
    );
}
