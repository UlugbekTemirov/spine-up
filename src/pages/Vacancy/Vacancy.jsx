import Button from "@/components/Button";
import Header from "@/components/Header";
import BasicModal from "@/components/Modal/BasicModal";
import React, { useEffect, useState } from "react";
import ApplyForm from "./components/ApplyForm";
import { useDispatch, useSelector } from "react-redux";
import { getVacancy } from "@/redux/api/vacancy.slice";

export default function () {
  const {vacancy, status} = useSelector(state => state.vacancy)
  const [modal, setModal] = useState(false);
  const [vacancyId, setVacancyId] = useState("")

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    dispatch(getVacancy());
  }, [])

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

        <ApplyForm close={() => setModal(false)} vacancyId={vacancyId} />
      </BasicModal>

      <div className="bg-vacancy py-[50px]">
        <Header
          header={"Вакансии"}
          desc={
            "Наш коллектив всегда рад видеть в своей команде молодых и амбициозных специалистов, готовых учиться и развиваться вместе с нами! Если Вам интересен опыт работы в администрировании и возможности овладеть навыками наших оздоровительных методик и массажа-свяжитесь с нами по телефону обратной связи!"
          }
        />
      </div>

      <div className="py-10 container">
        { status === "loading" ? "" :  vacancy.length > 0 ? vacancy.map((vac) => (
          <div className="p-10 border border-[#E7EAEE] rounded-[24px]">
            <div>
              <h1 className="font-dudka font-bold md:text-[32px] text-[18px]">
                {vac?.title}
              </h1>
              <p className="text-secondary">{Number(vac?.salary_from).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + "сум"} - {Number(vac?.salary_ro).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " " + "сум"}</p>
              <p className="mt-4 text-secondary text-[18px] leading-[27px]">
                {vac.description}
              </p>
            </div>

            <div className="py-[30px]">
              <h1 className="mb-6 font-normal text-[24px] font-dudka">
                Требование к профессии
              </h1>

              <div className="grid grid-cols-2 gap-6">
                {vac?.requirements?.length > 0 && vac.requirements.map(({requirement}) => (
                  <div className="flex items-center gap-3">
                    <span>
                      <span className="w-5 h-5 flex items-center justify-center bg-[#FF6535] rounded-full">
                        <span className="w-3 h-3 bg-white rounded-full"></span>
                      </span>
                    </span>
                    <h1 dangerouslySetInnerHTML={{__html: requirement}} />
                  </div>
                ))}
              </div>
            </div>

            <Button onClick={() => {setModal(true); setVacancyId(vac.id)}} className={"min-w-[220px]"}>
              Подать заяку
            </Button>
          </div>
        )) : <div className="flex items-center justify-center text-4xl font-medium font-dudka min-h-40">
          <h1>Здесь пока пусто</h1></div>}
      </div>
    </div>
  );
}
