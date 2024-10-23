import Button from "@/components/Button";
import React from "react";
import { IMaskInput } from "react-imask";

export default function ApplyForm() {
  return (
    <form className="flex flex-col gap-[30px]" action="">
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
          className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
        />
      </div>

      <div className="flex flex-col">
        <label
          className="font-normal text-[#5B6370] mb-2 cursor-pointer md:text-[16px] text-[14px]"
          htmlFor="name"
        >
          Ваш опыт на выбранной профессии
        </label>
        <input
          type="text"
          placeholder="Пишите..."
          id="name"
          className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
        />
      </div>

      <div className="flex flex-col">
        <label
          className="font-normal text-[#5B6370] mb-2 cursor-pointer md:text-[16px] text-[14px]"
          htmlFor="name"
        >
          Ваш резюме
        </label>
        <input
          type="file"
          placeholder="Нажмите на кнопку “Выбрать файл”"
          id="name"
          className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
        />
      </div>

      <div className="flex flex-col">
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

      <Button className={"w-full"}>Записаться</Button>
    </form>
  );
}
