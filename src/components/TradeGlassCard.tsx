interface GlassProps {
    className?: string;
    titleFontSize?: string;
    valueFontSize?:string;
    valueColor?:string;
    balanceData: { label: string; value: string }[]; // Accept balance data from the parent
  }
  
  const TradeGlassCard = ({ className, titleFontSize,valueFontSize,valueColor, balanceData }: GlassProps) => {
    return (
      <div
        className={`p-4 sx:!p-4 rounded-xl mb-10 flex justify-between sm:gap-5 overflow-scroll whitespace-nowrap gap-12 lg:overflow-hidden ${className}`}
        style={{
          background:
            "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
          boxShadow: "0px 10.01px 20.03px 0px rgba(7, 7, 26, 0.15)",
          backdropFilter: "blur(13.82px)",
          border: "1px solid #2954A3",
        }}
      >
        {balanceData.map((item, index) => (
          <div key={index} className="xs:mb-3">
            <p className={`${titleFontSize} font-semibold dark:text-white`}>
              {item.label}:
            </p>
            <p className={`text-3xl font-bold  ${valueFontSize} ${valueColor}`}>{item.value}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default TradeGlassCard;
  