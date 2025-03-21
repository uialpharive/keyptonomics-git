import rocket from "../../../public/Group 3438.png"
import GradientButton from "../../UIComponents/GradientButton";

const BannerSection = () => {
    return (
        <>
            <div className="w-full text-black dark:text-white flex items-start justify-center lg:pt-[80px]  lg:pb-[100px]">
                <div className="w-1/2 lg:mt-[70px] items-center space-y-7">
                    <div className="text-[48px] font-bold font-gilroy">
                        Unlock earning potential:
                        Maximize your returns with
                        <br />
                        <span className="text-themeBlue">Crypto Staking!</span>
                    </div>
                    <div >
                        Start your aypto staking jot-rney today and watch your investments flourish. It's tme to
                        stake your claim in the crypto revolt-Rion!
                    </div>
                    <div>
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
                <div className="w-1/2 flex justify-center items-center">
                    <img src={rocket} alt="" width={550} height={550} />
                    {/* <Rocket/> */}
                </div>
            </div>


        </>
    )
}
export default BannerSection;