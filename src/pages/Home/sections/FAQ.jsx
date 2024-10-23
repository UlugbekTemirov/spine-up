import Button from "@/components/Button";
import Header from "@/components/Header";
import React from "react";

const FAQ = [
  {
    id: 1,
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem ?",
  },
  {
    id: 2,
    text: "Lorem Ipsum is simply dummy text of the printing ",
  },
  {
    id: 3,
    text: "the printing and typesetting industry. Lorem ?",
  },
  {
    id: 4,
    text: "simply dummy text of the printing and typesetting industry. Lorem ?",
  },
];

export default function Faq() {
  return (
    <div id="faq" className="md:pt-20 py-10">
      <div className="container">
        <Header
          header={"Часто задаваемые вопросы"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's "
          }
        />

        <div className="grid md:grid-cols-4 mt-10 gap-[30px] ">
          {FAQ.map((faq) => (
            <div
              className="p-[18px] border border-[#EAEEDC] shadow-faq rounded-[18px]"
              key={faq.id}
            >
              <h1 className="font-dudka text-[18px] font-normal line-clamp-3 h-20">
                {faq.text}
              </h1>

              <Button
                className={"mt-[18px] w-full font-semibold"}
                variant="outlined"
              >
                Подробнее
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
