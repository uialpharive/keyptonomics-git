const TradeTopStories=()=>{
    return(
        <>
        <div className=" rounded-lg shadow-lg">
                <h2 className="dark:text-white text-[14px] font-semibold mb-4">Top Stories</h2>
                <div className="space-y-3">
                    {[
                        { time: "2 hours ago", title: "Bitcoin Seeks Rebound After Painful Week" },
                        { time: "2 hours ago", title: "Bitcoin Seeks Rebound After Painful Week" },
                        { time: "2 hours ago", title: "Bitcoin Seeks Rebound After Painful Week" },
                      { time: "3 hours ago", title: "Nasdaq Futures Turn Lower After Tech Index Drop" },
                      { time: "3 days ago", title: "LUNR: Intuitive Machines Stock Craters 50%" }]
                      .map((story, index) => (
                        <div key={index} className="dark:bg-[#1D2331] p-3 rounded-lg">
                            <p className="text-gray-400 text-[12px]">{story.time}</p>
                            <p className="dark:text-white text-[11px]">{story.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default TradeTopStories