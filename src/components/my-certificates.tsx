import React from "react";
import { FaBuffer } from "react-icons/fa";
import TranslateOnScroll from "../common/translate-on scroll";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Autoplay, Navigation } from "swiper/modules";
export default function MyCertificates() {
  const imgArray = Array<string>(11).fill("");
  return (
    <>
      <div className=" w-full ">
        <div className=" flex flex-row justify-center items-center py-1  rounded-2xl border border-prime_gray gap-2 w-44 mb-8 ">
          <FaBuffer size={18} className=" text-prime_gray " />
          <p className="  ">Certificates</p>
        </div>
        <div className=" group/first  ">
          <TranslateOnScroll translateY={100} duration={700}>
            <p className="text-4xl lg:text-6xl mb-10  ">
              My <span className=" text-prime_Green ">Certificates</span>
            </p>
          </TranslateOnScroll>
          <div className="">
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              centeredSlides={true}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                680: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
              modules={[Pagination, Autoplay, Navigation]}
            >
              {imgArray.map((img, i) => (
                <SwiperSlide key={i}>
                  <div className=" w-80 h-64 text-gray-800 text-3xl relative bg-slate-50 flex items-center justify-center ">
                    <Image
                      fill
                      className=" object-cover "
                      src={`/cert/${i + 1}.webp`}
                      alt={`My ${i + 1} Certificate`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
