import Button from "@/components/Button";
import { applyVacancy, resetStatus } from "@/redux/api/client.slice";
import React, { useEffect, useState } from "react";
import { IMaskInput } from "react-imask";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const initData = {
  name: '',
  experience: "",
  phone_number: '',
  resume: null
}

export default function ApplyForm({vacancyId, close}) {
  const { vacancyStatus } = useSelector(state => state.client)
const [details, setDetails] = useState(initData)

const dispatch = useDispatch()

const handleChange = (e) => {
  setDetails(prev => ({...prev, [e.target.name]: e.target.value}))
}

const handleSubmit = () => {
  const formData = new FormData()

  formData.append("name", details.name)
  formData.append("experience", details.experience)
  formData.append("phone_number", "+" + details.phone_number)
  formData.append("resume", details.resume)
  formData.append("vacancy", vacancyId)
  
  dispatch(applyVacancy(formData))
}

useEffect(() => {
  if (vacancyStatus === "succeeded") {
    setDetails(initData)
    toast.success("Ваша заявка успешно отправлена")
    dispatch(resetStatus())
    close()
  }
}, [vacancyStatus])

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
          name="name"
          value={details.name}
          onChange={handleChange}
          className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
        />
      </div>

      <div className="flex flex-col">
        <label
          className="font-normal text-[#5B6370] mb-2 cursor-pointer md:text-[16px] text-[14px]"
          htmlFor="exp"
        >
          Ваш опыт на выбранной профессии
        </label>
        <input
          type="text"
          placeholder="Пишите..."
          id="exp"
          name="experience"
          value={details.experience}
          onChange={handleChange}
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
          
          onChange={(e) => setDetails(prev => ({...prev, resume: e.target.files[0]}))}
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
          value={details.phone_number}
          onAccept={(value, mask) => setDetails(prev => ({...prev, phone_number: value}))}
          placeholder="+998 97 628 28 87"
          className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
        />
      </div>

      <Button  disabled={vacancyStatus === "loading"} onClick={handleSubmit} type="button" className={`w-full ${vacancyStatus === "loading" ? "opacity-50 pointer-events-none" : ""}`}>{vacancyStatus === "loading" ? "Отправка..." : "Записаться"}</Button>
    </form>
  );
}
