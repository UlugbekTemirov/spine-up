import Button from "@/components/Button";
import LazyImage from "@/components/LazyImage";
import BasicModal from "@/components/Modal/BasicModal";
import { postClientData, resetStatus } from "@/redux/api/client.slice";
import { getProducts } from "@/redux/api/products.slice";
import { IMAGES } from "@/static/images";
import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const initData = {
  phone: "",
  name: "",
  service: "test",
  platform: "website"
}

export default function Service() {
  const { slug } = useParams();
  const [modal, setModal] = useState(false);
  const [endModal, setEndModal] = useState(false);
  const [userData, setUserData] = useState(initData)
  const [newProduct, setNewProduct] = useState({})

  const dispatch = useDispatch()
  const {status, error} = useSelector(state => state.client)
  const {products, status: productStatus} = useSelector(state => state.product)

  useEffect(() => {
    if (productStatus === "succeeded") {
      const product = products.find(item => item.id == slug)

    if (product) {
      setNewProduct(product)
    }
  }
  }, [products])


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
    dispatch(getProducts())
  }, []);

  const handleSubmit = () => {
    dispatch(postClientData({...userData, phone: "+" + userData.phone}))
  };

  useEffect(() => {
    if (status === "succeeded") {
setModal(false);
setUserData(initData)
    setEndModal(true);
      dispatch(resetStatus())
    }
  }, [status])

  const data = [
    {
      id: 1,
      title: 'Общение с родителями',
      text: 'Предварительный осмотр ребенка и консультации нашим специалистом и рекомендации для родителей'
    },
    {
      id: 2,
      title: 'Диагностика',
      text: 'Визуальное исследование и оценка состояния позвоночника суставов и подвижности ребенка.'
    },
    {
      id: 3,
      title: 'Запись в группу',
      text: 'Подбор удобного времени, с учетом расписания ребенка и рабочего графика родителей'
    },
    {
      id: 4,
      title: 'Постоянный контроль',
      text: 'На каждом занятии, от начала-и до конца курса осуществляется контроль состояния здоровья ребенка с учетом индивидуальных особенностей организма и корректировки нагрузки'
    },
    {
      id: 5,
      title: 'Постоянная обратная связь',
      text: 'Наглядное Фиксирование (фото) продвижения коррекции у ребенка, с подробными ответами на все вопросы для родителей'
    },
    {
      id: 6,
      title: 'Результаты прогресса',
      text: 'Демонстрация улучшения показателей здоровья, подвижности, осанки у ребенка и финальные рекомендации для поддержания этого состояния'
    },
  ]

  const handleDataChange = (e) => {
    setUserData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  return (
    <div>
      {/* MODAL */}
      <BasicModal isOpen={modal} onClose={() => setModal(false)}>
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

      {/* HEADER */}
      <div className="md:py-[50px] py-10 bg-vacancy">
        <div className="container flex md:flex-row flex-col items-center md:gap-[50px]">
          <div className="md:w-[48%] flex flex-col md:gap-[30px] gap-[18px]">
            <span className="font-semibold flex items-center md:justify-start justify-center text-nowrap gap-2 md:text-base text-sm">
              <span className="text-secondary font-normal">
                Наши Продукты &gt;
              </span>{" "}
              {newProduct?.title}
            </span>

            <h1 className="md:text-[50px] text-[32px] font-dudka md:leading-[55px] leading-[41px] font-bold md:text-left text-center">
              {newProduct?.title}
            </h1>

            <p className="text-secondary-light md:text-base text-sm md:text-left text-center">
            {newProduct?.description}
            </p>

            <div className="flex flex-col gap-4">
              <div className="md:text-[15px] text-[12px] grid grid-cols-2 items-center gap-[26px]">
                <div className="flex items-center gap-3">
                  <span>
                    <span className="icon icon-list bg-secondary-icon !w-6 !h-6" />
                  </span>
                  <h1 className="text-secondary-light text-nowrap">
                    Число занятий
                  </h1>
                </div>

                <h1 className="font-dudka font-bold">{newProduct?.number_of_sessions} занятий</h1>
              </div>

              <div className="md:text-[15px] text-[12px] grid grid-cols-2 items-center gap-[26px]">
                <div className="flex items-center gap-3">
                  <span>
                    <span className="icon icon-clock bg-secondary-icon !w-6 !h-6" />
                  </span>
                  <h1 className="text-secondary-light">Длительность</h1>
                </div>

                <h1 className="font-dudka font-bold">{newProduct?.duration}</h1>
              </div>

              <div className="md:text-[15px] text-[12px] grid grid-cols-2 items-start gap-[26px]">
                <div className="flex items-center gap-3">
                  <span>
                    <span className="icon icon-calendar bg-secondary-icon !w-6 !h-6" />
                  </span>
                  <h1 className="text-secondary-light text-nowrap">
                    Дни занятий
                  </h1>
                </div>

                <h1 className="font-dudka font-bold">
                {newProduct?.hasOwnProperty("class_days") && newProduct?.class_days[0]?.days?.join(", ")}
                </h1>
              </div>
            </div>

            <Button onClick={() => setModal(true)} className="w-[300px] md:block hidden">
              Записаться
            </Button>
          </div>

          <div className="md:w-[52%] md:my-0 my-4">
            <LazyImage className="rounded-lg" width="100%" src={newProduct?.image || ""} />
          </div>

          <Button onClick={() => setModal(true)} className="md:w-[300px] md:hidden block w-full">
              Записаться
            </Button>
        </div>
      </div>

      {/* SECTION1 */}
      <div className="container md:py-20 py-10 grid md:grid-cols-2 grid-cols-1 items-center md:gap-[75px] gap-6">
        <div className="flex items-start md:gap-[30px] gap-[12px]">
          <div>
            <img
              src={newProduct.hasOwnProperty('two_pictures') && newProduct?.two_pictures[0]?.image || ""}
              className="w-full md:h-[300px] h-[220px] rounded-lg object-cover"
              alt="image.png"
            />
          </div>
          <div>
            <img
              className="mt-[60px] w-full md:h-[300px] h-[220px] rounded-lg object-cover"
              src={newProduct.hasOwnProperty('two_pictures') && newProduct?.two_pictures[0]?.image || ""}
              alt="image.png"
            />
          </div>
        </div>

        <div className="flex flex-col md:gap-[30px] gap-6">
          <h1 className="font-dudka font-bold md:text-[34px] text-[24px] md:leading-[44px] leading-[31px]">
            {newProduct.big_title}
          </h1>
          <p className="text-secondary md:text-[18px] text-sm">
          {newProduct.big_description}
          </p>

          <Button onClick={() => setModal(true)} className="md:w-[300px] w-full">Записаться на демо курс</Button>
        </div>
      </div>

      {/* SECTION2 */}
      <div className="py-[60px] bg-contact">
        <div className="container">
          <h1 className="md:text-[34px] text-[24px] font-dudka leading-[40px] font-bold text-center">
            Как проходит занятие?
          </h1>

          <div className="grid md:grid-cols-3 grid-cols-1 xl:gap-[60px] md:gap-10 gap-5 md:mt-10 mt-6">
            {data.map(({title, id, text}) => (
              <div className="gap-[18px] flex items-start" key={id}>
                <span>
                  <span className="md:w-[60px] md:h-[60px] w-10 h-10 shadow-faq flex items-center justify-center font-dudka md:text-[42px] text-2xl text-primary rounded-full bg-white">
                    {id}
                  </span>
                </span>

                <div>
                  <h1 className="md:text-[20px] font-bold">
                    {title}
                  </h1>
                  <p className="mt-2 leading-[24px] text-secondary md:text-base text-sm">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PHOTOS */}
      <div className="md:py-20 py-10 container">
        <h1 className="font-dudka md:text-[34px] text-2xl text-center font-bold md:mb-10 mb-6">
        Фотографии занятий и результаты
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-[30px] gap-[18px]">
          <div>
            <img
              className="rounded-[12px] h-full"
              src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[0]?.image || ''}
              alt="placeholder"
            />
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-[30px] gap-[18px]">
            <div>
              <img
                className="rounded-[12px]"
                src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[1]?.image || ''}
                alt="placeholder"
              />
            </div>
            <div>
              <img
                className="rounded-[12px]"
                src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[2]?.image || ''}
                alt="placeholder"
              />
            </div>

            <div>
              <img
                className="rounded-[12px]"
                src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[3]?.image || ''}
                alt="placeholder"
              />
            </div>
            <div>
              <img
                className="rounded-[12px]"
                src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[4]?.image || ''}
                alt="placeholder"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 md:gap-x-[30px] md:mt-[30px] gap-[18px] mt-[18px]">
          <div className="md:col-span-3 flex flex-col md:gap-[30px] gap-[18px]">
            <div>
              <img
                className="rounded-[12px] h-full"
                src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[5]?.image || ''}
                alt="placeholder"
              />
            </div>
            <div>
              <img
                className="rounded-[12px] h-full"
                src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[6]?.image || ''}
                alt="placeholder"
              />
            </div>
          </div>

          <div className="md:col-span-6">
            <div>
              <img
                className="rounded-[12px] h-full"
                src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[7]?.image || ''}
                alt="placeholder"
              />
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-[30px]">
            <div>
              <img
                className="rounded-[12px] h-full"
                src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[8]?.image || ''}
                alt="placeholder"
              />
            </div>
            <div>
              <img
                className="rounded-[12px] h-full" 
                src={newProduct.hasOwnProperty('ten_pictures') && newProduct?.ten_pictures[9]?.image || ''}
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </div>

      {/* REGISTER */}
      <div className="md:pb-20 pb-10">
        <div className="container bg-vacancy rounded-[24px] md:px-[77px] px-4 py-[47px] relative z-[1] overflow-hidden">
          <>
            <span className="absolute md:top-[-148px] md:right-[-148px] bottom-[-90px] right-[-90px] -z-[1] bg-[#6A90FD0F] border-[3px] border-[#6A90FD] md:w-[291px] md:h-[291px] w-[152px] h-[152px] rounded-full" />
            <span className="absolute md:top-[-82px] md:left-[-108px] top-[-90px] right-[-90px]  -z-[1] bg-[#FF65350F] border-[3px] border-[#FF6535] md:w-[291px] md:h-[291px] w-[152px] h-[152px] rounded-full" />
          </>

          <div className="text-center">
            <h1 className="font-bold font-dudka md:text-[60px] text-2xl">
              Записаться на демо курс!
            </h1>
            <p className="mt-4 md:text-[20px] text-sm md:leading-[30px] leading-[21px] md:max-w-[680px] mx-auto text-secondary-light">
            Попробуйте наше пробное и бесплатное занятие для того, чтобы почувствовать улучшение вашей подвижности и здоровья!
            </p>
          </div>

          <form className="flex md:flex-row flex-col items-end md:mt-[44px] mt-10 md:gap-[30px] gap-6">
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
                className="border border-[#E7EAEE] bg-white py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
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
                className="border border-[#E7EAEE] bg-white py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
              />
            </div>

            <Button disabled={status === 'loading'} onClick={handleSubmit} type="button" className={`py-3 px-10 md:w-fit w-full ${status === 'loading' ? 'opacity-50 pointer-events-none' : ''} `}>{status === 'loading' ? 'Загрузка...' : 'Записаться'}</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
