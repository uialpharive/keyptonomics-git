const TradeCountryReading=()=>{
    return(
        <>
        <div className=" rounded-lg shadow-lg">
                <h2 className="dark:text-white text-[14px] font-semibold mb-4 px-2">Economic Calendar</h2>
                <div className="dark:text-white space-y-3">
                    {[
                        { time: "17:00", event: "IGP-DI Inflation Index", impact: "1.15%" },
                        { time: "17:00", event: "IGP-DI Inflation Index", impact: "1.15%" },
                        { time: "17:00", event: "IGP-DI Inflation Index", impact: "1.15%" },
                        { time: "17:00", event: "IGP-DI Inflation Index", impact: "1.15%" },
                        { time: "17:00", event: "IGP-DI Inflation Index", impact: "1.15%" },
                      { time: "17:00", event: "Exports - USD", impact: "P: 36.43 B" },
                      { time: "17:00", event: "Trade Def Gov", impact: "P: 22.99 B" }]
                      .map((event, index) => (
                        <div key={index} className="dark:bg-[#1D2331] p-3 rounded-lg flex justify-between items-center">
                            <div>
                                <p className="text-[11px]">{event.time} - {event.event}</p>
                            </div>
                            <span className="text-gray-400 text-[11px]">{event.impact}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default TradeCountryReading