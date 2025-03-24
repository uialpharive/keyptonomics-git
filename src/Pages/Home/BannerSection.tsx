import rocket from "../../../public/Group 3438.png";
import GradientButton from "../../UIComponents/GradientButton";

const BannerSection = () => {
  return (
    <>
      <div className="w-full text-black dark:text-white flex flex-col sm:flex-row items-start justify-center">
        <div className="w-full lg:w-1/2 pt-10 md:pt-[50px] lg:pt-[70px] lg-xl:pt-[100px] xl:pt-[100px] items-center space-y-7">
          <div className="lg:text-[48px] text-[35px] font-bold font-gilroy">
            Unlock earning potential: Maximize your returns with
            {/* <br /> */}
            <span className="text-themeBlue"> Crypto Staking!</span>
          </div>
          <div>
            Start your aypto staking jot-rney today and watch your investments
            flourish. It's tme to stake your claim in the crypto revolt-Rion!
          </div>
          <div className="flex justify-center sm:justify-start">
            <GradientButton
              text="Register Now!"
              onClick={() => alert("Button Clicked")}
              paddingX="px-6"
              paddingY="py-[8px]"
              width="w-[200px]"
              fontSize="text-[14px]"
              fontWeight="font-medium"
              // className="shadow-[1px_3px_9px_#4fb2d1] shadow-themeBlue/80 "
              className="shadow-[1px_3px_9px_#4fb2d1] shadow-themeBlue/80
                                                    hover:shadow-[0px_0px_2px_#4fb2d1,0px_0px_5px_#4fb2d1] 
                                                    hover:scale-110 transition-transform duration-300 ease-out 
                                                    will-change-transform transform-gpu"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mx-auto pt-16 md:pt-5 md-lg:pt-[50px] lg:pt-5 xl:pt-10">
          <img src={rocket} alt="" width={550} height={550} />
        </div>
      </div>
    </>
  );
};
export default BannerSection;
