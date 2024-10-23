import Header from "@/components/Header";
import { IMAGES } from "@/static/images";
import React from "react";

const TEAM = Array.from({ length: 6 }).map((_) => ({
  id: 1,
  fullname: "Darlene Robertson",
  description: "Невролог, 7 лет опыта",
  image: IMAGES.HOME.DOCTOR,
}));

export default function Team() {
  return (
    <div id="team" className="md:py-[80px] py-10">
      <div className="container">
        <Header
          header="Наша профессиональная команда"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
        />

        <div className="mt-10 grid md:grid-cols-3 gap-[30px]">
          {TEAM.map((member, index) => (
            <div
              className="shadow-team border border-[#E7EAEE] md:p-[30px] p-3 md:!pb-[25px] rounded-[24px]"
              key={index}
            >
              <img
                className="w-full rounded-[20px]"
                src={member.image}
                alt="doctor"
              />

              <div className="flex items-center justify-between md:mt-5 mt-[18px]">
                <div>
                  <h1 className="font-dudka font-bold md:text-[22px] text-[18px]">
                    {member.fullname}
                  </h1>
                  <p className="text-secondary md:text-[16px] text-[14px]">
                    {member.description}
                  </p>
                </div>

                <span className="">
                  <span className="border border-primary w-10 h-10 rounded-[12px] flex items-center justify-center duration-200 cursor-pointer hover:bg-primary active:scale-90 group">
                    <span className="icon icon-clipboard bg-black !w-[22px] !h-[22px] group-hover:bg-white" />
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
