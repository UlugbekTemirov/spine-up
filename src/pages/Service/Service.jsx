import Button from "@/components/Button";
import LazyImage from "@/components/LazyImage";
import BasicModal from "@/components/Modal/BasicModal";
import { IMAGES } from "@/static/images";
import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { useParams } from "react-router-dom";

export default function Service() {
  const { slug } = useParams();
  const [modal, setModal] = useState(false);
  const [endModal, setEndModal] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const handleSubmit = () => {
    // same logic

    setModal(false);
    setEndModal(true);
  };

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
              onAccept={(value, mask) => console.log(value)}
              placeholder="+998 97 628 28 87"
              className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
            />
          </div>

          <Button type="button" onClick={handleSubmit} className="py-3">
            Записаться
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
      <div className="py-[50px] bg-vacancy">
        <div className="container flex items-center gap-[50px]">
          <div className="w-[48%] flex flex-col gap-[30px]">
            <span className="font-semibold">
              <span className="text-secondary font-normal">
                Наши Продукты &gt;
              </span>{" "}
              Авторская методика для детей
            </span>

            <h1 className="text-[50px] font-dudka leading-[55px] font-bold">
              Авторская методика для детей
            </h1>

            <p className="text-secondary-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been{" "}
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

                <h1 className="font-dudka font-bold">24 занятий</h1>
              </div>

              <div className="md:text-[15px] text-[12px] grid grid-cols-2 items-center gap-[26px]">
                <div className="flex items-center gap-3">
                  <span>
                    <span className="icon icon-clock bg-secondary-icon !w-6 !h-6" />
                  </span>
                  <h1 className="text-secondary-light">Длительность</h1>
                </div>

                <h1 className="font-dudka font-bold">По 2 часа</h1>
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
                  Понидельник, Среда, Пятница
                </h1>
              </div>
            </div>

            <Button onClick={() => setModal(true)} className="w-[300px]">
              Записаться
            </Button>
          </div>

          <div className="w-[52%]">
            <LazyImage width="100%" src={IMAGES.HOME.AUTHOR_METHOD} />
          </div>
        </div>
      </div>

      {/* SECTION1 */}
      <div className="container py-20 grid grid-cols-2 items-center gap-[75px]">
        <div className="flex items-start gap-[30px]">
          <div>
            <img
              src={IMAGES.SERVICE.IMAGE1}
              className="w-full"
              alt="image.png"
            />
          </div>
          <div>
            <img
              className="mt-[60px] w-full"
              src={IMAGES.SERVICE.IMAGE2}
              alt="image.png"
            />
          </div>
        </div>

        <div className="flex flex-col gap-[30px]">
          <h1 className="font-dudka font-bold text-[34px] leading-[44px]">
            Что такое авторская методика для детей?
          </h1>
          <p className="text-secondary text-[18px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960
          </p>

          <Button className="w-[300px]">Записаться на демо курс</Button>
        </div>
      </div>

      {/* SECTION2 */}
      <div className="py-[60px] bg-contact">
        <div className="container">
          <h1 className="text-[34px] font-dudka leading-[40px] font-bold text-center">
            Как проходит занятие?
          </h1>

          <div className="grid grid-cols-3 xl:gap-[60px] gap-10 mt-10">
            {[1, 2, 3, 4, 5, 6].map((nums) => (
              <div className="gap-[18px] flex items-start" key={nums}>
                <span>
                  <span className="w-[60px] h-[60px] shadow-faq flex items-center justify-center font-dudka text-[42px] text-primary rounded-full bg-white">
                    {nums}
                  </span>
                </span>

                <div>
                  <h1 className="text-[20px] font-bold">
                    Lorem Ipsum is simply{" "}
                  </h1>
                  <p className="mt-2 leading-[24px] text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's{" "}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PHOTOS */}
      <div className="py-20 container">
        <h1 className="font-dudka text-[34px] text-center font-bold mb-10">
          Фотографии из занятие и результаты
        </h1>

        <div className="grid grid-cols-2 gap-x-[30px]">
          <div>
            <img
              className="rounded-[12px] h-full"
              src={"https://placehold.co/600x420"}
              alt="placeholder"
            />
          </div>

          <div className="grid grid-cols-2 gap-[30px]">
            <div>
              <img
                className="rounded-[12px]"
                src={"https://placehold.co/600x400"}
                alt="placeholder"
              />
            </div>
            <div>
              <img
                className="rounded-[12px]"
                src={"https://placehold.co/600x400"}
                alt="placeholder"
              />
            </div>

            <div>
              <img
                className="rounded-[12px]"
                src={"https://placehold.co/600x400"}
                alt="placeholder"
              />
            </div>
            <div>
              <img
                className="rounded-[12px]"
                src={"https://placehold.co/600x400"}
                alt="placeholder"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-[30px] mt-[30px]">
          <div className="col-span-3 flex flex-col gap-[30px]">
            <div>
              <img
                className="rounded-[12px] h-full"
                src={"https://placehold.co/600x400"}
                alt="placeholder"
              />
            </div>
            <div>
              <img
                className="rounded-[12px] h-full"
                src={"https://placehold.co/600x400"}
                alt="placeholder"
              />
            </div>
          </div>

          <div className="col-span-6">
            <div>
              <img
                className="rounded-[12px] h-full"
                src={"https://placehold.co/600x420"}
                alt="placeholder"
              />
            </div>
          </div>

          <div className="col-span-3 flex flex-col gap-[30px]">
            <div>
              <img
                className="rounded-[12px] h-full"
                src={"https://placehold.co/600x400"}
                alt="placeholder"
              />
            </div>
            <div>
              <img
                className="rounded-[12px] h-full"
                src={"https://placehold.co/600x400"}
                alt="placeholder"
              />
            </div>
          </div>
        </div>
      </div>

      {/* REGISTER */}
      <div className="pb-20">
        <div className="container bg-vacancy rounded-[24px] px-[77px] py-[47px] relative z-[1] overflow-hidden">
          <>
            <span className="absolute top-[-148px] right-[-148px] -z-[1] bg-[#6A90FD0F] border-[3px] border-[#6A90FD] w-[291px] h-[291px] rounded-full" />
            <span className="absolute top-[-82px] left-[-108px] -z-[1] bg-[#FF65350F] border-[3px] border-[#FF6535] w-[291px] h-[291px] rounded-full" />
          </>

          <div className="text-center">
            <h1 className="font-bold font-dudka text-[60px]">
              Записаться на демо курс!
            </h1>
            <p className="mt-4 text-[20px] leading-[30px] max-w-[680px] mx-auto text-secondary-light">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's{" "}
            </p>
          </div>

          <form className="flex items-end mt-[44px] gap-[30px]">
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
                onAccept={(value, mask) => console.log(value)}
                placeholder="+998 97 628 28 87"
                className="border border-[#E7EAEE] bg-white py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
              />
            </div>

            <Button className="py-3 px-10">Записаться</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
