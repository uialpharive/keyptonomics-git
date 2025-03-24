import rocket from "../../../public/Group 3438.png";
import GradientButton from "../../UIComponents/GradientButton";
import spaceman from "../../../public/home/spaceman.png";
import galaxcy from "../../../public/home/spaceman_galaxcy.png";

const AssetSection = () => {
  return (
    <>
      <div className="w-full text-black dark:text-white flex flex-col md:flex-row items-start justify-center">
        <div className="w-full md:w-3/6 space-y-5 lg:pt-[20px] lg-xl:pt-[20px] xl:pt-[20px]">
          <div className="text-[28px] md:text-[38px] font-medium dark:text-white">
            Earn up to Keyptonomics On your assets
          </div>
          <div className="text-[15px] space-y-4">
            <div className="text-themeBlue">Passive Income with Staking</div>
            <div className="text-[12px]">
              Stake Your Cryptocurrency: Choose a cryptocurrency that supports
              staking, acquire it, and transfer it to a compatible staking
              platform or wallet.
            </div>
          </div>
          <div className="text-[15px] space-y-4">
            <div className="text-themeBlue">Passive Income with Staking</div>
            <div className="text-[12px]">
              Stake Your Cryptocurrency: Choose a cryptocurrency that supports
              staking, acquire it, and transfer it to a compatible staking
              platform or wallet.
            </div>
          </div>
          <div className="text-[15px] space-y-4">
            <div className="text-themeBlue">Passive Income with Staking</div>
            <div className="text-[12px]">
              Stake Your Cryptocurrency: Choose a cryptocurrency that supports
              staking, acquire it, and transfer it to a compatible staking
              platform or wallet.
            </div>
          </div>
        </div>
        <div className="md:relative pt-16 md:pt-0 w-full md:w-3/6 flex flex-col justify-end items-center mx-auto">
          <img
            src={spaceman}
            alt=""
            width={220}
            height={220}
            className="md:relative z-10"
          />

          <img
            src={galaxcy}
            alt=""
            className="md:absolute mt-[-250px] xs:mt-[-150px] md:mt-0  md:top-[150px] z-0 opacity-100"
          />
        </div>
      </div>
      {/* <div className="w-full text-black dark:text-white grid grid-cols-1 md:grid-cols-2 items-center justify-center">
        <div className="w-full space-y-5 text-center md:text-left md:pt-[20px]">
          <div className="md:text-[25px] lg:text-[38px] font-bold dark:text-white">
            Earn up to Keyptonomics On your assets
          </div>

          <div className="text-[15px] space-y-4">
            <div className="text-themeBlue">Passive Income with Staking</div>
            <div className="text-[12px]">
              Stake Your Cryptocurrency: Choose a cryptocurrency that supports
              staking, acquire it, and transfer it to a compatible staking
              platform or wallet.
            </div>
          </div>

          <div className="text-[15px] space-y-4">
            <div className="text-themeBlue">Passive Income with Staking</div>
            <div className="text-[12px]">
              Stake Your Cryptocurrency: Choose a cryptocurrency that supports
              staking, acquire it, and transfer it to a compatible staking
              platform or wallet.
            </div>
          </div>

          <div className="text-[15px] space-y-4">
            <div className="text-themeBlue">Passive Income with Staking</div>
            <div className="text-[12px]">
              Stake Your Cryptocurrency: Choose a cryptocurrency that supports
              staking, acquire it, and transfer it to a compatible staking
              platform or wallet.
            </div>
          </div>
        </div>

        <div className="relative w-full flex flex-col justify-center items-center mx-auto -mt-10 sm:mt-10 md:-mt-20">
          <img
            src={spaceman}
            alt=""
            width={220}
            height={220}
            className="relative z-10"
          />

          <img
            src={galaxcy}
            alt=""
            width={700}
            height={700}
            className="absolute top-[200px] z-0 opacity-100"
          />
        </div>
      </div> */}
    </>
  );
};
export default AssetSection;
