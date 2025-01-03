import React from "react";
import { IMAGES } from "@/static/images";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Button from "@/components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ServiceCard({
  title,
  id,
  description,
  duration,
  number_of_sessions,
  class_days,
  image,
  openModal
}) {
  const navigate = useNavigate();

  return (
    <div
      itemScope
      itemType="https://schema.org/Service"
      className="service-card"
    >
      <meta itemProp="serviceType" content={title} />
      <meta itemProp="description" content={description} />
      
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {Array.from({ length: 1 }).map((_, slideIndex) => (
          <SwiperSlide
            key={slideIndex}
            className="xl:h-[280px] h-[220px] rounded-[12px] w-full overflow-hidden"
          >
            <img
              className="w-full md:h-[300px] h-[220px] object-cover"
              src={image}
              alt={`${title} image`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <div className="md:my-6 my-4">
          <h1 itemProp="name" className="font-bold md:text-[24px] text-[18px] mb-2 font-dudka leading-[28px]">
            {title}
          </h1>
          <p itemProp="description" className="text-secondary-light text-[14px] leading-[21px] font-normal line-clamp-1">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="md:text-[15px] text-[12px] grid grid-cols-2 items-center gap-[26px]">
            <div className="flex items-center gap-3">
              <span className="icon icon-list bg-secondary-icon !w-6 !h-6" />
              <h1 className="text-secondary-light text-nowrap">Число занятий</h1>
            </div>
            <h1 className="font-dudka font-bold" itemProp="additionalType">
              {number_of_sessions}
            </h1>
          </div>

          <div className="md:text-[15px] text-[12px] grid grid-cols-2 items-center gap-[26px]">
            <div className="flex items-center gap-3">
              <span className="icon icon-clock bg-secondary-icon !w-6 !h-6" />
              <h1 className="text-secondary-light">Длительность</h1>
            </div>
            <h1 className="font-dudka font-bold" itemProp="duration">
              {duration}
            </h1>
          </div>

          <div className="md:text-[15px] text-[12px] grid grid-cols-2 items-start gap-[26px]">
            <div className="flex items-center gap-3">
              <span className="icon icon-calendar bg-secondary-icon !w-6 !h-6" />
              <h1 className="text-secondary-light text-nowrap">Дни занятий</h1>
            </div>
            <h1 className="font-dudka font-bold h-[45px] line-clamp-2" itemProp="availability">
              {class_days[0]?.days?.join(", ") || "Не указано"} 
            </h1>
          </div>
        </div>

        <div className="flex items-center md:gap-6 gap-3 font-semibold md:mt-10 mt-6">
          <Button
            onClick={() => navigate(`/service/${id}`)}
            className="w-full"
            variant="outlined"
          >
            Подробнее
          </Button>
          <Button onClick={openModal} className="w-full">Записаться</Button>
        </div>
      </div>
    </div>
  );
}
