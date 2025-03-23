import Carousel from "../../components/Carousel";
import AssetSection from "./AssetSection";
// import CryptoSlider from "../../components/CryptoSlider";
import BannerSection from "./BannerSection";
import CardSection from "./CardSection";
import EarnStakeSection from "./EarnStakeSection";
import WorkSection from "./WorkSection";
import img from "../../../public/home/Illustration.png";
import Accordion from "../../components/Accordion";

const Home = () => {
  return (
    <>
      <div className="sm:pt-14 pb-10 px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px 2xl:px-[300px] 3xl:px-[400px] 4xl:px-[550px]">
        <BannerSection />
      </div>
      <div className="py-16  sm:py-16 lg:py-[100px] xl:py-[100px] px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px 2xl:px-[300px] 3xl:px-[400px] 4xl:px-[550px]">
        <CardSection />
      </div>
      <div className="py-16  sm:py-16 lg:py-[100px] xl:py-[100px] px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px 2xl:px-[300px] 3xl:px-[400px] 4xl:px-[550px]">
        <CardSection />
      </div>
      {/* <Carousel/> */}
      <div className="py-10 sm:py-[100px] sm-md:py-16 md:py-[100px] lg:py-[150px] px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px 2xl:px-[300px] 3xl:px-[400px] 4xl:px-[550px]">
        <WorkSection />
      </div>
      <div className="mb-[-100px]  md:mb-[200px] px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px 2xl:px-[300px] 3xl:px-[400px] 4xl:px-[550px]">
        <AssetSection />
      </div>
      {/* <div className="pb-10 sm:pb-[100px] sm-md:pb-16 md:pb-[100px] lg:pb-[150px]">
        <EarnStakeSection />
      </div> */}

      <div className="relative overflow-hidden">
        {/* First EarnStakeSection */}
        <div className="relative z-20 mb-[200px] px-4 xs:px-0 sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px 2xl:px-[300px] 3xl:px-[400px] 4xl:px-[550px]">
          <EarnStakeSection />
        </div>

        {/* Fixed Image Aligned to the Left */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 pointer-events-none xl:px-5">
          <img
            src={img}
            alt=""
            className="object-cover mt-10 md:mt-14 lg:mt-16 ml-10 md:-ml-10 lg:ml-15 xl:ml-5 xs:ml-[80px]" /* Adjust margin for better spacing */
            width={800}
            height={800}
          />
        </div>

        {/* FAQ Section with Fixed Height */}
        <div className="relative z-9 -mt-10 ">
          <div className="bg-[#edf0f2]/50 dark:bg-stakeCard/50 shadow-lg rounded-md p-5 space-y-5 h-[600px] overflow-hidden ">
            <div className="w-full flex justify-center px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px">
              <div className="text-[28px] md:text-[38px] font-medium dark:text-white py-5 md:py-16 ">
                Frequently Asked Questions
              </div>
            </div>
            <div className="overflow-auto max-h-[450px] pb-5 xs:pb-[100px]">
              <Accordion />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative pb-10 sm:pb-[100px] sm-md:pb-16 md:pb-[100px] lg:pb-[150px] overflow-hidden">
        <div className="relative z-20 translate-y-[20%]">
          <EarnStakeSection />
        </div>
        <img
          src={img}
          alt=""
          className="absolute top-0 mt-[500px] left-0 w-full h-full object-cover z-10"
        />
        <div className="relative z-20 mt-[600px]">
          <EarnStakeSection />
        </div>
      </div> */}

      {/* <div className="relative pb-10 sm:pb-[100px] sm-md:pb-16 md:pb-[100px] lg:pb-[150px] overflow-hidden">
        <div className="relative z-20 translate-y-[20%]">
          <EarnStakeSection />
        </div>
        <img
          src={img}
          alt=""
          className="absolute top-0 mt-[500px] left-0 w-full h-full object-cover z-10"
        />
      </div> */}
    </>
  );
};
export default Home;
