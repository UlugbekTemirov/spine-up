import Button from "@/components/Button";
import Header from "@/components/Header";
import BasicModal from "@/components/Modal/BasicModal";
import React, { useEffect, useState } from "react";
import ApplyForm from "./components/ApplyForm";

export default function () {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div>
      <BasicModal
        className={"max-h-[90vh] overflow-y-auto"}
        isOpen={modal}
        onClose={() => setModal(false)}
      >
        <h1 className="font-bold text-[24px] font-dudka">Подать заявку</h1>
        <p className="mt-1 text-secondary">
          Оставьте свое имя и номер телефона, наш оператор обязательно свяжется
          с вами!
        </p>

        <ApplyForm />
      </BasicModal>

      <div className="bg-vacancy py-[50px]">
        <Header
          header={"Вакансии"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        />
      </div>

      <div className="py-10 container">
        {[1].map((_) => (
          <div className="p-10 border border-[#E7EAEE] rounded-[24px]">
            <div>
              <h1 className="font-dudka font-bold text-[32px] text-[18px]">
                Десткий психолог
              </h1>
              <p className="text-secondary">8 000 000 - 12 000 000 сум</p>
              <p className="mt-4 text-secondary text-[18px] leading-[27px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make
              </p>
            </div>

            <div className="py-[30px]">
              <h1 className="mb-6 font-normal text-[24px] font-dudka">
                Требование к профессии
              </h1>

              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4, 5, 6].map((requirement) => (
                  <div className="flex items-center gap-3">
                    <span>
                      <span className="w-5 h-5 flex items-center justify-center bg-[#FF6535] rounded-full">
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                      </span>
                    </span>
                    <h1>lorem ipsum dolor</h1>
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={() => setModal(true)} className={"min-w-[220px]"}>
              Подать заяку
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
