import React from "react";

const WHYUS = [
  {
    id: 1,
    icon: "icon icon-like",
    color: "#6A90FD",
    text: "Положительные отзывы",
    desc: "Более 8 000 человек доверили нам свое здоровье, и получили именно то, что искали -восстановление здоровья и подвижности",
  },
  {
    id: 2,
    icon: "icon icon-userstar",
    color: "#FF6535",
    text: "Профессиональная команда",
    desc: "Наш коллектив состоит из дипломированных профессионалов в медицинской, спортивной и оздоровительной сфере",
  },
  {
    id: 3,
    icon: "icon icon-usercheck",
    color: "#6A90FD",
    text: "Индивидуальные подход",
    desc: "Наши специалисты с чуткостью относятся к здоровью каждого клиента и его индивидуальным потребностям и пожеланиям",
  },
  {
    id: 4,
    icon: "icon icon-rocket",
    color: "#FF6535",
    text: "Реальные результаты",
    desc: "Вы почувствуете улучшение уже после первого занятия. И это правда-Вы убедитесь в этом сами, опробовав наши продукты",
  },
];

export default function WhyUs() {
  return (
    <div id="whyus" className="md:py-[60px] py-10 bg-whyus">
      
      <div className="container">
        <div className="flex md:items-center md:flex-row flex-col justify-between">
          <h1 className="font-dudka font-bold md:text-[38px] text-[24px] mb-3 md:mb-0">
            Почему именно мы?
          </h1>
          <p className="text-secondary xl:max-w-[555px] max-w-[450px] md:text-[16px] text-[14px]">
          Почему именно мы-заменить на Почему выбирают нас:
          </p>
        </div>

        <div className="grid md:grid-cols-4 md:gap-[30px] gap-6 mt-10">
          {WHYUS.map((whyus, index) => (
            <div
              className="flex md:flex-col flex-row md:gap-0 gap-[18px]"
              key={index}
            >
              <span>
                <span
                  style={{
                    borderColor: whyus.color + "40",
                  }}
                  className={`rounded-full md:border-2 border md:w-[100px] md:h-[100px] w-[50px] h-[50px] flex items-center justify-center`}
                >
                  <span
                    style={{
                      backgroundColor: whyus.color,
                    }}
                    className={`${whyus.icon} !w-[55px] !h-[55px] md:scale-100 scale-[60%]`}
                  />
                </span>
              </span>

              <div>
                <h1 className="font-semibold mb-3 md:mt-6 text-[20px] xl:min-h-fit md:min-h-[60px] leading-[28px]">
                  {whyus.text}
                </h1>
                <p className="text-secondary">{whyus.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
