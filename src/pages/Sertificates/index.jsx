import Header from "@/components/Header";
import LazyImage from "@/components/LazyImage";
import { IMAGES } from "@/static/images";
import React, { useEffect, useState } from "react";

const DUMMY_DATA = [
  {
    id: 1,
    name: "Jacob Jones",
    description: "Невролог, 7 лет опыта",
  },
  {
    id: 2,
    name: "Guy Hawkins",
    description: "Невролог, 7 лет опыта",
  },
  {
    id: 3,
    name: "Savannah Nguyen",
    description: "Невролог, 7 лет опыта",
  },
];

export default function index() {
  const [active, setActive] = useState(DUMMY_DATA[0].id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div>
      <div className="py-[50px]">
        <div className="container">
          <Header
            header={"Наш Сертификат"}
            desc={
              "Сертификат Центра – скан сертификата центра"
            }
          />

          <div className="mt-10">
            <LazyImage src={IMAGES.TEMPORARY.SERTIFICATE} />
          </div>
        </div>
      </div>

      <div className="bg-sertificate py-[60px]">
        <div className="container">
          <div className="flex items-center justify-between gap-20">
            <h1 className="font-bold text-[38px] leading-[45px] font-dudka min-w-[377px]">
              Сертификаты наших специалистов
            </h1>
            <p className="text-secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>

          <div className="mt-10 grid grid-cols-10 gap-10">
            <div className="col-span-3 flex flex-col gap-6">
              {DUMMY_DATA.map((el, ind) => (
                <div
                  onClick={() => setActive(el.id)}
                  className={`rounded-[12px] flex items-center border  gap-4 bg-white p-[10px] cursor-pointer active:scale-95 duration-200 ${
                    active === el.id
                      ? "shadow-team border-primary"
                      : "border-transparent"
                  }`}
                  key={ind}
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={"https://avatar.iran.liara.run/public"}
                    alt="avatar.jpg"
                  />

                  <div>
                    <h1 className="font-bold font-dudka">{el.name}</h1>
                    <p className="text-[12px] text-secondary">
                      {el.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-span-7">
              <LazyImage src={IMAGES.TEMPORARY.ADAM_RAMZY} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
