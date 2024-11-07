import Button from "@/components/Button";
import React from "react";
import { IMaskInput } from "react-imask";

const BRANCHES = [
  {
    id: 1,
    branch_name: "Lorem Ipsum",
    address:
      "150100, Farg’ona viloyati, Farg’ona shahri, Sayilgoh ko’chasi 18/2,2",
    phone_numbers: ["+998 97 628 28 82", "+998 95 315 84 96"],
    email: "isoftware@gmail.com",
  },
  {
    id: 2,
    branch_name: "Lorem Ipsum",
    address:
      "150100, Farg’ona viloyati, Farg’ona shahri, Sayilgoh ko’chasi 18/2,2",
    phone_numbers: ["+998 97 628 28 82", "+998 95 315 84 96"],
    email: "isoftware@gmail.com",
  },
];

export default function Contact({userData, setUserData, handleSubmit, handleDataChange, status}) {
  return (
    <div id="contact" className="md:py-20 py-10">
      <div className="container grid md:grid-cols-2 md:gap-[57px] gap-10">
        <div className="border border-[#E7EAEE] rounded-[24px] md:p-10 p-6 bg-contact">
          <h1 className="font-dudka md:mb-[30px] mb-6 md:text-[32px] text-[24px] font-bold">
            Наши контакты
          </h1>

          <div>
            <h1 className="font-semibold md:text-[20px] text-[18px] md:mb-6 mb-4">
              Филиал “Lorem ipsum”
            </h1>

            <div className="flex items-start gap-5">
              <span>
                <span className="border-2 border-[#6A90FD] rounded-full md:w-[60px] md:h-[60px] w-10 h-10 flex items-center justify-center">
                  <span className="icon icon-contact-location bg-black !w-[28px] !h-[28px] md:scale-100 scale-75" />
                </span>
              </span>

              <div>
                <h1 className="text-[#272B31] font-semibold md:text-[18px] text-[14px] mb-1">
                  Наш адрес
                </h1>
                <p className="text-secondary md:text-[18px] text-[14px] md:leading-[27px] leading-[21px] font-normal">
                  150100, Farg’ona viloyati, Farg’ona shahri, Sayilgoh ko’chasi
                  18/2,2
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 md:mt-[30px] mt-[18px]">
              <span>
                <span className="border-2 border-[#FF6535] rounded-full md:w-[60px] md:h-[60px] w-10 h-10 flex items-center justify-center">
                  <span className="icon icon-contact-phone bg-black !w-[28px] !h-[28px] md:scale-100 scale-75" />
                </span>
              </span>

              <div>
                <h1 className="text-[#272B31] font-semibold md:text-[18px] text-[14px] mb-1">
                  Наш номер телефона
                </h1>
                <p className="text-secondary md:text-[18px] text-[14px] md:leading-[27px] leading-[21px] font-normal">
                  +998 97 628 28 82, +998 95 315 84 96
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5 md:mt-[30px] mt-[18px]">
              <span>
                <span className="border-2 border-[#81A709] rounded-full md:w-[60px] md:h-[60px] w-10 h-10 flex items-center justify-center">
                  <span className="icon icon-contact-email bg-black !w-[28px] !h-[28px] md:scale-100 scale-75" />
                </span>
              </span>

              <div>
                <h1 className="text-[#272B31] font-semibold md:text-[18px] text-[14px] mb-1">
                  Электронный адрес
                </h1>
                <p className="text-secondary md:text-[18px] text-[14px] md:leading-[27px] leading-[21px] font-normal">
                  isoftware@gmail.com
                </p>
              </div>
            </div>

            <div className="md:mt-[30px] mt-6 flex md:flex-row flex-col md:items-center justify-between">
              <h1 className="font-dudka font-bold md:text-[24px] text-[16px] md:mb-0 mb-4">
                Мы в соцсетях
              </h1>

              <div className="flex items-center gap-4">
                <span className="hover:scale-105 active:scale-95 duration-200 cursor-pointer">
                  <span className="icon icon-instagram !w-10 !h-10 md:scale-100 scale-90" />
                </span>

                <span className="hover:scale-105 active:scale-95 duration-200 cursor-pointer">
                  <span className="icon icon-facebook !w-10 !h-10  md:scale-100 scale-90" />
                </span>

                <span className="hover:scale-105 active:scale-95 duration-200 cursor-pointer">
                  <span className="icon icon-telegram !w-10 !h-10  md:scale-100 scale-90" />
                </span>

                <span className="hover:scale-105 active:scale-95 duration-200 cursor-pointer">
                  <span className="icon icon-youtube !w-10 !h-10  md:scale-100 scale-90" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-team border border-[#E7EAEE] rounded-[24px] md:px-[58px] p-[18px] flex items-center">
          <div>
            <div className="text-center md:mb-[30px] mb-6">
              <h1 className="font-dudka md:text-[32px] text-[24px] text-[#272B31] mb-[10px] font-bold leading-[35px]">
                Остались у вас вопросы?
              </h1>
              <p className="text-[#676C74] md:text-[16px] text-[14px]">
                Оставьте свое имя и номер телефона, наш оператор обязательно
                свяжется с вами!
              </p>
            </div>

            <form action="">
              <div className="flex flex-col">
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
                  onChange={handleDataChange}
                  value={userData.name}
                  className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
                />
              </div>

              <div className="flex flex-col mt-[30px]">
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
            </form>

            <Button disabled={status === 'loading'} onClick={handleSubmit} type='button' className={`w-full md:mt-[30px] mt-6 ${status === 'loading' ? 'opacity-50 pointer-events-none' : ''}`}>{status === 'loading' ? 'Загрузка...' : 'Отправить'}</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
