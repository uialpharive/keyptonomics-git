const TradeOrderBook=()=>{
    return(
        <>
           <div className="dark:bg-[#161B28] p-2 rounded-lg shadow-lg">
                <h2 className="dark:text-white text-[14px] font-semibold mb-4">Order Book</h2>
                <div className="grid grid-cols-3 text-gray-400 text-sm border-b border-gray-600 pb-2">
                    <span>Price</span>
                    <span>Amount</span>
                    <span>Total</span>
                </div>

                {/* Order Data */}
                <div className="mt-2">
                    {[{ price: "96850", amount: "0.106285", total: "36.555779" }, 
                      { price: "96825", amount: "0.000048", total: "36.44944" },
                      { price: "96850", amount: "0.106285", total: "36.555779" }, 
                      { price: "96850", amount: "0.106285", total: "36.555779" }, 
                      { price: "96850", amount: "0.106285", total: "36.555779" }, 
                      { price: "96825", amount: "0.000048", total: "36.44944" },
                      { price: "96825", amount: "0.000048", total: "36.44944" },
                      { price: "96825", amount: "0.000048", total: "36.44944" },
                      { price: "96739.13", amount: "8,287,747.88", total: "INR", highlight: true }]
                      .map((order, index) => (
                        <div key={index} className={`grid grid-cols-3 text-sm p-2 
                            ${order.highlight ? "text-red-500 font-bold text-[11px]" : "dark:text-white text-[11px]"}`}>
                            <span className="text-[11px]">{order.price}</span>
                            <span className="text-[11px]">{order.amount}</span>
                            <span className="text-[11px] ml-3">{order.total}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default TradeOrderBook