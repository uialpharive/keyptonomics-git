import LightBlueButton from "../../UIComponents/LightBlueButton";
import WhiteBtn from "../../UIComponents/WhiteBtn";

const EarnStakeSection = () => {
  return (
    <>
      <div className="space-y-5 xs:pt-10">
        <div className="text-[28px] md:text-[38px] font-medium dark:text-white xs:px-5 ">
          See what you can <br />
          <span className="text-themeBlue">Earn Staking</span>
        </div>

        {/* <div className="bg-[#edf0f2] dark:bg-stakeCard dark:bg-opacity-0 shadow-lg rounded-md p-5 space-y-5"> */}
        <div className="bg-[#edf0f2]/50 dark:bg-stakeCard/50 shadow-lg rounded-xl p-5 space-y-5">

          <div className="w-full flex">
            <div className="w-1/2 px-2">
              <p className="text-black dark:text-tradeGray">Asset</p>
              <input
                className="w-full rounded-md p-2 dark:text-white dark:bg-inputDark"
                placeholder="Name"
                name="name"
                type="text"
              />
            </div>
            <div className="w-1/2 px-2">
              <p className="text-black dark:text-tradeGray">Amount</p>

              <input
                className="w-full rounded-md p-2 dark:text-white dark:bg-inputDark"
                placeholder="Name"
                name="name"
                type="text"
              />
            </div>
          </div>
          <div className="w-full p-2">
            <p className="text-black dark:text-tradeGray">Staking Method</p>
            <div className="w-full flex gap-5 pt-5">
              <LightBlueButton text="Flexible" />
              <WhiteBtn text="Fixed" />
            </div>
          </div>
          <div className="w-full p-2">
            <div
              className="p-8 rounded-xl "
              style={{
                background:
                  "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
                boxShadow: "0px 10.01px 20.03px 0px rgba(7, 7, 26, 0.15)",
                backdropFilter: "blur(13.82px)",
                border: "1px solid #2954A3",
              }}
            >
              <div className="flex justify-between flex-wrap sm:gap-5">
                <div className="total-assets flex gap-2 items-center flex-wrap">
                  <p className="text-[11px] font-semibold py-10 text-black font-bold dark:text-white">
                    In 12 months you will have total of
                  </p>
                </div>
                <div className="flex gap-5 flex-wrap">
                  {/* <input
              placeholder="Search"
            //   value={searchQuery}
            //   onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 rounded-md focus-visible:outline-none shadow-[0px_39.87px_39.87px_0px_rgba(69,42,124,0.15)] dark:text-white bg-inputBg"
            /> */}
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      // checked={hideZero}
                      // onChange={() => setHideZero(!hideZero)}
                      className="w-5 h-5 text-blue-600 rounded"
                      style={{
                        backdropFilter: "blur(20.107913970947266px)",
                        boxShadow: "0px 39.87px 39.87px 0px #452A7C26",
                        background: "#dde4f1",
                        color: "#000",
                        border: "1.6px solid #f6f8ffb5",
                      }}
                    />
                    <span className="text-gray-700 dark:text-white">
                      Hide Zero Balances
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EarnStakeSection;
