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
import BasicModal from "@/components/Modal/BasicModal";
import { useDispatch, useSelector } from "react-redux";
import { postClientData, resetStatus } from "@/redux/api/client.slice";
import { IMaskInput } from "react-imask";
import ReactPlayer from "react-player";

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

const initData = {
  phone: "",
  name: "",
  service: "test",
  platform: "website"
}

export default function Home() {
  const swiper = useSwiper();
  const [consultaionModal, setConsultaionModal] = React.useState(false)
  const [endModal, setEndModal] = React.useState(false)
  const [userData, setUserData] = React.useState(initData)
  const {status} = useSelector(state => state.client)
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const openModal = () => setConsultaionModal(true)
  const closeModal = () => setConsultaionModal(false)

  const handleDataChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    dispatch(postClientData({...userData, phone: "+" + userData.phone}))
  }

  
  useEffect(() => {
    if (status === "succeeded") {
closeModal()
setUserData(initData)
    setEndModal(true);
      dispatch(resetStatus())
    }
  }, [status])

  return (
    <div>

      

<BasicModal isOpen={consultaionModal} onClose={closeModal}>
        <h1 className="font-dudka text-[24px] font-bold">
          Записаться на демо курс!
        </h1>
        <p className="text-secondary leading-[22px] mt-2">
          Оставьте свое имя и номер телефона, наш оператор обязательно свяжется
          с вами!
        </p>

        <form className="flex flex-col mt-[30px] gap-[30px]">
          <div className="flex flex-col w-full">
            <label
              className="font-normal text-[#5B6370] mb-2 cursor-pointer md:text-[16px] text-[14px]"
              htmlFor="name"
            >
              Ваше имя
            </label>
            <input
              type="text"
              placeholder="Пишите свое имя"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleDataChange}
              className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
            />
          </div>

          <div className="flex flex-col w-full">
            <label
              className="font-normal text-[#5B6370] mb-2 cursor-pointer md:text-[16px] text-[14px]"
              htmlFor="phone"
            >
              Номер телефона
            </label>
            <IMaskInput
              id="phone"
              mask={"+{998} 00 000 00 00"}
              defaultValue={"+998"}
              radix="."
              type="tel"
              unmask={true}
              value={userData.phone}
              onAccept={(value, mask) => setUserData(prev => ({...prev, phone: value}))}
              placeholder="+998 97 628 28 87"
              className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
            />
          </div>

          <Button disabled={status === "loading"} type="button" onClick={handleSubmit} className={` ${status === 'loading' && "bg-gray-400 pointer-events-none"} py-3`}>
            { status === "loading" ? "Loading..." : "Записаться"}
          </Button>
        </form>
      </BasicModal>

      <BasicModal
        className="w-[450px]"
        isOpen={endModal}
        onClose={() => setEndModal(false)}
      >
        <div className="flex flex-col items-center">
          <img src={IMAGES.ICONS.GOOD} />
          <h1 className="font-dudka font-bold text-[24px]">
            Успешно отправлено!
          </h1>
          <p className="mt-2 text-secondary">
            Оставьте свое имя и номер телефона, наш оператор обязательно
            свяжется с вами!
          </p>
          <Button
            onClick={() => setEndModal(false)}
            className="mt-[30px] w-full"
          >
            Понятно!
          </Button>
        </div>
      </BasicModal>
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
              <Button onClick={openModal} className="px-6 font-semibold md:w-fit w-full py-[14px]">
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
              Основной курс "Здоровая спина"
              </h1>
              <p className="text-secondary md:leading-[30px] leading-[24px] xl:text-[20px] md:text-[18px]">
              Групповые оздоровительные занятия по программе «Здоровая Спина» направлены на укрепление мышц спины и позвоночника, а также профилактику и оздоровление суставов. Методика основана на уникальном авторском подходе, который учитывает индивидуальные особенности каждого клиента. Эта техника позволяет добиться долгосрочного результата благодаря комбинированию статично-динамических упражнений, с акцентом на работу глубочайших мышц позвоночника (до 90% задействованных мышц). Эффект от курса сохраняется на срок от 2 лет и более, обеспечивая продолжительное улучшение состояния спины и суставов.
В дополнение к курсу предлагается авторский массаж по технике «Deep Tissue», который значительно усиливает его эффект. Это не просто расслабляющий массаж, а сеанс, направленный на проработку глубоких мышц шеи, спины и ног, что улучшает результаты занятий.
              </p>
            </div>
          </div>

          <div className="flex items-center">
          <span className=" w-full rounded-xl overflow-hidden">
          <ReactPlayer
          width={"100%"}
          height={500}
          url={"https://youtu.be/YvEtt6VMs2g"}
        />
          </span>
            {/* <div
              style={{
                backgroundImage: `url(${IMAGES.HOME.AUTHOR_METHOD})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="relative rounded-[18px] w-full xl:h-[440px] md:h-[380px] h-[250px]"
            >
              <span className="icon icon-play !w-20 !h-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-110 duration-200 cursor-pointer active:scale-95" />
            </div> */}
          </div>
        </div>
      </section>

      <Services openModal={openModal} />

      <WhyUs />

      <Team />

      <Reviews />

      <Faq />

      <Contact userData={userData} setUserData={setUserData} handleDataChange={handleDataChange} handleSubmit={handleSubmit} status={status}  />
    </div>
  );
}
