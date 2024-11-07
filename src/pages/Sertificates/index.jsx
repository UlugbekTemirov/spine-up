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

  console.log(staffCertificate)

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
      <div className="py-[50px]">
        <div className="container">
          <Header
            header={"Наш Сертификат"}
            desc={
              "Сертификат Центра – скан сертификата центра"
            }
          />

          <div className="mt-10">
            <LazyImage src={companyCertificate.length > 0 && companyCertificate[0].image} />
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
              {staffCertificate.hasOwnProperty('title') ? staffCertificate.title : ''}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-10 gap-10">
            <div className="col-span-3 flex flex-col gap-6">
              {staff.length > 0 ? staff.map((el, ind) => (
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
                      {el.position} | {el.years_of_experience} лет опыта
                    </p>
                  </div>
                </div>
              )) : 'not found'}
            </div>
            <div className="col-span-7">
              <LazyImage src={staffCertificate.hasOwnProperty('image') ? staffCertificate.image : ''} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
