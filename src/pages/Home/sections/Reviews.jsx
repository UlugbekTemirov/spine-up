import React from "react";
import AnimatedCounter from "@components/AnimatedCounter/index";

import ReviewPlayer from "../components/ReviewPlayer";
import { SwiperSlide, Swiper } from "swiper/react";

export default function Reviews() {
  return (
    <div id="reviews" className="bg-home md:pt-[75px] md:pb-[60px] py-10">
      <div className="container">
        <div className="flex items-center md:flex-row flex-col justify-between md:gap-20 gap-6 w-full">
          <div className="max-w-[662px]">
            <h1 className="mb-4 font-dudka font-bold md:text-[38px] text-[24px]">
              Отзыви о нас и мы в цифрах!
            </h1>
            <p className="text-secondary md:leading-[30px] leading-[21px] md:text-[20px] text-[14px]">
              today there are new radiology systems installed in even smaller
              community hospitals across the country The heads of these
              radiology operations face the same kinds of issues confronting our
              colleagues across Europe or the United{" "}
            </p>
          </div>

          <div className="flex items-center gap-[20px] md:ml-0 md:gap-[70px] -ml-10">
            <div className="flex flex-col gap-10">
              <div className="flex items-center relative">
                <span>
                  <AnimatedCounter width={200} prefix="+" end={10000} />
                  <h1 className="text-secondary text-center -mt-3">
                    Пациентов
                  </h1>
                </span>
                <span className="absolute icon icon-ellipse bg-[#FF6535] md:-top-3 md:-left-[29px] left-3 -top-4 md:!w-[244px] md:!h-[113px] !w-[172px] !h-[98px]" />
              </div>

              <span>
                <AnimatedCounter width={200} end={82} />
                <h1 className="text-secondary text-center -mt-3">Пациентов</h1>
              </span>
            </div>

            <div className="flex flex-col gap-10">
              <div>
                <AnimatedCounter width={100} prefix="+" end={268} />
                <h1 className="text-secondary text-center -mt-3">Пациентов</h1>
              </div>

              <div>
                <AnimatedCounter width={100} prefix="+" end={68} />
                <h1 className="text-secondary text-center -mt-3">Пациентов</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-[56px] mt-6 border md:flex hidden items-center gap-[30px] overflow-x-auto whitespace-nowrap">
          {[1, 2, 3, 4].map((_) => (
            <ReviewPlayer key={_} />
          ))}
        </div>

        <div className="md:hidden mt-6">
          <Swiper
            spaceBetween={8}
            slidesPerView={2.1}
            speed={500}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {Array.from({ length: 4 }).map((_, slideIndex) => (
              <SwiperSlide
                key={slideIndex}
                className="xl:h-[280px] h-[220px] rounded-[12px] w-full"
              >
                <ReviewPlayer />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
