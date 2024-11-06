import Button from "@/components/Button";
import React, { useEffect } from "react";

import { useSwiper } from "swiper/react";
import LazyImage from "./../../components/LazyImage/index";
import { IMAGES } from "@/static/images";

// sections
import Services from "./sections/Services";
import WhyUs from "./sections/WhyUs";
import Team from "./sections/Team";
import Reviews from "./sections/Reviews";
import Faq from "./sections/FAQ";
import Contact from "./sections/Contact";

const FAQ = [
  {
    id: 1,
    icon: "icon-location bg-[#6A90FD]",
    iconbg: "bg-faq-blue",
    text: "Где мы находимся?",
    hash: "#contact"
  },
  {
    id: 2,
    icon: "icon-wishlist bg-[#FF6535] ",
    iconbg: "bg-faq-orange",
    text: "Наши продукты и услуги",
    hash: "#services"
  },
  {
    id: 3,
    icon: "icon-users bg-[#94BB16]",
    iconbg: "bg-faq-green border border-[#F1F6E1]",
    text: "Наши опытные специалисты",
    hash: '#team'
  },
];

export default function Home() {
  const swiper = useSwiper();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div>
      <div className="bg-home md:h-[520px] overflow-hidden">
        <div className="container grid md:grid-cols-2 h-full md:gap-[50px] gap-20">
          <div className="flex items-center">
            <div>
              <h1 className="md:text-[60px] text-[32px] md:text-left text-center md:leading-[68px] leading-[41px] font-semibold md:mt-0 mt-10">
                Добро пожаловать <br className="md:hidden" /> в Revite
              </h1>
              <p className="text-secondary my-[30px] md:text-[20px] text-[14px] md:text-left text-center">
              Мы рады приветствовать Вас в нашем оздоровительном Центре!
              Ваше здоровье, подвижность и красота-в наших профессиональных руках!
              </p>
              <Button className="px-6 font-semibold md:w-fit w-full py-[14px]">
                Получить консультацию
              </Button>
            </div>
          </div>

          <div className="relative md:h-auto h-[250px]">
            <div className="absolute z-[1] bottom-0 md:-right-24 -right-0 md:w-[648px] md:h-[520px] w-[360px] h-[320px]">
              <img className="w-full h-full" src={IMAGES.HOME.CHECK_SPINE} />
            </div>

            <div className="relative w-full h-full">
              <div className="md:w-[600px] md:h-[600px] w-[330px] h-[330px]  bg-[#FF65350F] border-[3px] border-[#FF6535] rounded-full absolute md:-right-[30%] md:-bottom-[45%] -right-12 -bottom-[40%]" />
              <div className="md:w-[600px] md:h-[600px] w-[330px] h-[330px] bg-[#6A90FD0F] border-[3px] border-[#6A90FD] rounded-full absolute md:-right-20 md:-bottom-1/2 right-2 -bottom-[50%]" />
            </div>
          </div>
        </div>
      </div>

      <section className="py-[60px]">
        <div className="container grid md:grid-cols-3 gap-5">
          {FAQ.map((faq, index) => (
            <div
              key={index}
              className="shadow-faq rounded-[24px] border border-[#EAEEDC] p-6"
            >
              <div className="flex items-center gap-5 ">
                <span>
                  <span
                    className={`rounded-full md:w-20 md:h-20 w-[50px] h-[50px] flex items-center justify-center ${faq.iconbg}`}
                  >
                    <span
                      className={`${faq.icon} w-[46px] h-[46px] md:scale-100 scale-[60%]`}
                    />
                  </span>
                </span>

                <h1
                  dangerouslySetInnerHTML={{ __html: faq.text }}
                  className="font-semibold xl:text-[22px] md:text-[20px] text-[18px] leading-[30px]"
                />
              </div>
              <a href={faq.hash}>
              <Button className="font-semibold w-full mt-6" variant="outlined">
                Подробнее
              </Button>
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-author-method md:py-[60px] py-10">
        <div className="container grid md:grid-cols-2 md:gap-[42px] gap-[30px]">
          <div className="flex items-center">
            <div>
              <h1 className="md:mb-[25px] mb-[18px] md:text-[38px] text-[24px] font-bold font-dudka md:text-left text-center">
                Авторская методика
              </h1>
              <p className="text-secondary md:leading-[30px] leading-[24px] xl:text-[20px] md:text-[18px]">
              Программа для детей «Spine Up Kid's» — это комплекс оздоровительных занятий в детской группе, направленных на профилактику и исправление нарушений опорно-двигательного аппарата. 
              Авторская методика программы включает упражнения для укрепления мышц спины, позвоночника и ног, что особенно важно в период роста ребенка. Дети выполняют задания в игровой форме, что делает тренировки увлекательными и способствует их физической подготовке.
              </p>
            </div>
          </div>

          <div className="flex items-center">
            <div
              style={{
                backgroundImage: `url(${IMAGES.HOME.AUTHOR_METHOD})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="relative rounded-[18px] w-full xl:h-[440px] md:h-[380px] h-[250px]"
            >
              <span className="icon icon-play !w-20 !h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 duration-200 cursor-pointer active:scale-95" />
            </div>
          </div>
        </div>
      </section>

      <Services />

      <WhyUs />

      <Team />

      <Reviews />

      <Faq />

      <Contact />
    </div>
  );
}
