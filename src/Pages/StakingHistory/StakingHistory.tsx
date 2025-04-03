import RedemptionHistory from "./RedemptionHistory";
import Staking from "./Staking";
import StakeHistory from "./StakeHistory";

const StakingHistory = () => {
  return (
    <div>
      <div className="p-8 sm:!p-4 xs:!p-4 rounded-xl mb-10 flex justify-between flex-wrap xs:flex-col sm:gap-5 bg-[linear-gradient(105.95deg,_rgba(102,_177,_230,_0.2)_24.79%,_rgba(41,_84,_163,_0.2)_71.87%)] shadow-[0px_10.01px_20.03px_0px_rgba(7,_7,_26,_0.15)] backdrop-blur-[13.82px] border border-[#2954A3]">
        <div className="xs:mb-3 text-center">
          <p className="font-semibold dark:text-white">
            Total Earned Redemption
          </p>
          <p className="text-sm text-themeBlue">0.00</p>
        </div>
        <div className="xs:mb-3 text-center">
          <p className="font-semibold dark:text-white">Interest Paid</p>
          <p className="text-sm text-themeBlue">0.00</p>
        </div>
        <div className="xs:mb-3 text-center">
          <p className="font-semibold dark:text-white">
            Estimated APY Interest
          </p>
          <p className="text-sm text-themeBlue">0.00</p>
        </div>
        <div className="xs:mb-3 text-center">
          <p className="font-semibold dark:text-white">
            Estimated Total Interest
          </p>
          <p className="text-sm text-themeBlue">0.00</p>
        </div>
        <div className="xs:mb-3 text-center">
          <p className="font-semibold dark:text-white">
            Estimated Total Redemption
          </p>
          <p className="text-sm text-themeBlue">0.00</p>
        </div>
      </div>
      <div>
        <Staking />
      </div>

      <div>
        <StakeHistory />
      </div>

      <div>
        <RedemptionHistory />
      </div>
    </div>
  );
};

export default StakingHistory;
