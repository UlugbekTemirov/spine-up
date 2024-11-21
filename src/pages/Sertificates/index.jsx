import Header from "@/components/Header";
import LazyImage from "@/components/LazyImage";
import { getCompanyCertificate, getStaffCertificate } from "@/redux/api/certificates.slice";
import { getStaff } from "@/redux/api/staff.slice";
import { IMAGES } from "@/static/images";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const {companyCertificate, staffCertificate} = useSelector(state => state.certificates)
  const {staff} = useSelector(state => state.staff)

  const [active, setActive] = useState(staff.length > 0 ? staff[0].id : 1);
  const dispatch = useDispatch()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });

    dispatch(getCompanyCertificate())
    dispatch(getStaff())
  }, []);

  useEffect(() => {
    dispatch(getStaffCertificate(active))
  }, [active])

  return (
    <div>
      <div className="md:py-[50px] py-[30px]">
        <div className="container">
          <Header
            header={"Наш Сертификат"}
            desc={
              "Сертификат Центра – скан сертификата центра"
            }
          />

          <div className="mt-10 md:max-h-[500px] overflow-y-auto">
            <LazyImage src={companyCertificate.length > 0 && companyCertificate[0].image} />
          </div>
        </div>
      </div>

      <div className="bg-sertificate md:py-[60px] py-10">
        <div className="container">
          <div className="flex md:flex-row flex-col items-center justify-between md:gap-20">
            <h1 className="font-bold md:text-[38px] text-2xl md:leading-[45px] leading-[31px] font-dudka md:min-w-[377px] md:text-left text-center">
              Сертификаты наших специалистов
            </h1>
            <p className="text-secondary md:mt-0 mt-[18px] md:text-base text-sm md:text-left text-center">
              {staffCertificate.hasOwnProperty('title') ? staffCertificate.title : ''}
            </p>
          </div>

          <div className="md:mt-10 mt-[18px] grid md:grid-cols-10 grid-cols-1 md:gap-10 gap-6">
            <div className="md:col-span-3 flex md:flex-col flex-row gap-6 md:max-h-[650px] md:overflow-y-scroll overflow-x-scroll">
              {staff.length > 0 ? staff.map((el, ind) => (
                <div
                  onClick={() => setActive(el.id)}
                  className={`rounded-[12px] flex items-center border  gap-4 bg-white md:p-[10px] p-2.5 min-w-[250px] cursor-pointer active:scale-95 duration-200 ${
                    active === el.id
                      ? "shadow-team border-primary"
                      : "border-transparent"
                  }`}
                  key={ind}
                >
                  <img
                    className="w-10 h-10 rounded-full shrink-0"
                    // src={"https://avatar.iran.liara.run/public"}
                    src={el.image}
                    alt="avatar.jpg"
                  />

                  <div>
                    <h1 className="font-bold font-dudka">{el.name}</h1>
                    <p className="text-[12px] text-secondary line-clamp-2">
                      {el.position} | {el.years_of_experience}
                    </p>
                  </div>
                </div>
              )) : 'not found'}
            </div>
            <div className="md:col-span-7">
              <LazyImage className='rounded-xl' src={staffCertificate.hasOwnProperty('image') ? staffCertificate.image : ''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
