import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img from "../assets/images/ada.svg"

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Carousel = () => {
    return (
        <div className="w-full max-w-7xl mx-auto">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className=""
            >
                <SwiperSlide>
                    <div className="shadow-lg">
                        <div>
                            <img
                                src={img}
                                alt="Nature"
                                className="w-full h-64 object-cover rounded-xl"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img}
                        alt="City"
                        className="w-full h-64 object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img}
                        alt="Technology"
                        className="w-full h-64 object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img}
                        alt="Technology"
                        className="w-full h-64 object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img}
                        alt="Technology"
                        className="w-full h-64 object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img}
                        alt="Technology"
                        className="w-full h-64 object-cover rounded-xl"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={img}
                        alt="Technology"
                        className="w-full h-64 object-cover rounded-xl"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Carousel;
