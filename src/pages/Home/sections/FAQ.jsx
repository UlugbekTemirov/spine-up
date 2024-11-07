import Button from "@/components/Button";
import Header from "@/components/Header";
import BasicModal from "@/components/Modal/BasicModal";
import React from "react";

const FAQ = [
  {
    id: 1,
    question: "Сколько занятий нам будет нужно?",
    answer: "Поскольку каждый организм уникален, реакции на занятия и их результативность могут отличаться. Наши специалисты помогут определить оптимальный курс, исходя из общего состояния. Обычно один курс включает от 20 занятий и более."
  },
  {
    id: 2,
    question: "Сколько длится одно занятие?",
    answer: "Одно занятие занимает от 45 до 50 минут."
  },
  {
    id: 3,
    question: "Как часто нам надо ходить на занятия?",
    answer: "Позвоночник ежедневно подвергается различным нагрузкам, что требует регулярной поддержки мышечного и связочного аппарата. Для лучшего эффекта рекомендуется посещать основной курс занятий ежедневно. В отдельных случаях возможны исключения, которые подскажет тренер."
  },
  {
    id: 4,
    question: "Сколько стоит пробное занятие?",
    answer:`Первый визит в наш центр — это важный этап, и для знакомства с нами первое занятие проводится бесплатно. В него включены:
   - устная консультация;
   - визуальный осмотр;
   - полноценная тренировка, результаты которой ощущаются сразу.
`
  },
];

export default function Faq() {
  const [answer, setAnswer] = React.useState(false);
  return (
    <div id="faq" className="md:pt-20 py-10">
      <BasicModal isOpen={answer} onClose={() => setAnswer(false)}>
        <p>{answer}</p>
      </BasicModal>
      <div className="container">
        <Header
          header={"Часто задаваемые вопросы"}
          desc={
            "Мы всегда готовы ответить на любой интересующий Вас вопрос!"
          }
        />

        <div className="grid md:grid-cols-4 mt-10 gap-[30px] ">
          {FAQ.map((faq) => (
            <div
              className="p-[18px] border border-[#EAEEDC] shadow-faq rounded-[18px]"
              key={faq.id}
            >
              <h1 className="font-dudka text-[18px] font-normal line-clamp-3 h-14">
                {faq.question}
              </h1>

              <Button
              onClick={() => setAnswer(faq.answer)}
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
