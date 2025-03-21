import Carousel from "../../components/Carousel";
// import CryptoSlider from "../../components/CryptoSlider";
import BannerSection from "./BannerSection";
import CardSection from "./CardSection";

const Home = () => {
    return (<>
        {/* <div className="w-full h-60 bg-red-500 text-white flex items-center justify-center rounded-xl shadow-lg">
            Perfect Card
        </div> */}
        <BannerSection/>
        <CardSection/>
        {/* <CryptoSlider/> */}
        <Carousel/>

    </>)
}
export default Home;