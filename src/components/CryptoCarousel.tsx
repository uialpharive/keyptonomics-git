import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CryptoSlider.css"

const cryptoData = [
    { name: "USDT", price: "$0.99", icon: "\ud83d\udcb8" },
    { name: "BTC", price: "$91338.58", icon: "\u20bf" },
    { name: "BCH", price: "$404.3", icon: "\ud83d\udcb2" },
    { name: "ETH", price: "$2285.97", icon: "\u26a1" },
];

const CryptoCarousel: React.FC = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,       // Enable autoplay
        autoplaySpeed: 2000,  // 3 seconds per slide
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full max-w-7xl mx-auto p-4">
            <Slider {...settings}>
                {cryptoData.map((crypto, index) => (
                    <div key={index} className="px-2 py-5">
                        <div className="bg-gray-100 dark:bg-inputBg text-white rounded-xl p-4 flex flex-row items-center justify-center shadow-lg xs:h-[200px]">
                            <div className="text-3xl mr-3">{crypto.icon}</div>
                            <div className="flex flex-col items-center"> {/* Center content */}
                                <h2 className="text-lg font-semibold text-themeBlue">{crypto.name}</h2>
                                <p className="text-md text-black dark:text-white ">{crypto.price}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CryptoCarousel;