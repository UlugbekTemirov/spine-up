import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/slices/config.slice";

// ============= components ================= //
import LazyImage from "@components/LazyImage";
import Button from "@components/Button";
import Sidebar from "./Sidebar";

// ============= static ================= //
import { IMAGES } from "@/static/images";
import { NAVBAR_LINKS } from "@/static/navbar";
import { AnimatePresence, motion } from "framer-motion";
import BasicModal from "../Modal/BasicModal";
import { IMaskInput } from "react-imask";
import { postClientData, resetStatus } from "@/redux/api/client.slice";
import { getProducts } from "@/redux/api/products.slice";
import { Link } from "react-router-dom";

const initData = {
  phone: "",
  name: "",
  service: "test",
  platform: "website"
}

export default function Navbar() {
  const {status} = useSelector(state => state.client)
  const {products} = useSelector(state => state.product)
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState(null);
  const [userData, setUserData] = useState(initData);

  const handleDataChange = (e) => {
    setUserData(prev => ({...prev, [e.target.name]: e.target.value}))
  }

  const [modal, setModal] = useState(false);
  const [endModal, setEndModal] = useState(false);

  const handleSubmit = () => {
    dispatch(postClientData({...userData, phone: "+" + userData.phone}))
  }

useEffect(() => {
  dispatch(getProducts())
}, [])
    
  useEffect(() => {
    if (status === "succeeded") {
setModal(false)
setUserData(initData)
    setEndModal(true);
      dispatch(resetStatus())
    }
  }, [status])

  return (
    <div className="bg-white py-3">
      <Sidebar />

      <BasicModal isOpen={modal} onClose={() => setModal(false)}>
        <h1 className="font-dudka text-[24px] font-bold">
          Записаться на демо курс!
        </h1>
        <p className="text-secondary leading-[22px] mt-2">
          Оставьте свое имя и номер телефона, наш оператор обязательно свяжется
          с вами!
        </p>

        <form className="flex flex-col mt-[30px] gap-[30px]">
          <div className="flex flex-col w-full">
            <label
              className="font-normal text-[#5B6370] mb-2 cursor-pointer md:text-[16px] text-[14px]"
              htmlFor="name"
            >
              ФИО
            </label>
            <input
              type="text"
              placeholder="ФИО"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleDataChange}
              className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
            />
          </div>

          <div className="flex flex-col w-full">
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
              value={userData.phone}
              onAccept={(value, mask) => setUserData(prev => ({...prev, phone: value}))}
              placeholder="+998 97 628 28 87"
              className="border border-[#E7EAEE] bg-[#F9FAFD] py-3 px-4 rounded-[12px] outline-none md:text-[16px] text-[14px]"
            />
          </div>

          <Button disabled={status === "loading"} type="button" onClick={handleSubmit} className={` ${status === 'loading' && "bg-gray-400 pointer-events-none"} py-3`}>
            { status === "loading" ? "Loading..." : "Записаться"}
          </Button>
        </form>
      </BasicModal>

      <BasicModal
        className="w-[450px]"
        isOpen={endModal}
        onClose={() => setEndModal(false)}
      >
        <div className="flex flex-col items-center">
          <img src={IMAGES.ICONS.GOOD} />
          <h1 className="font-dudka font-bold text-[24px]">
            Успешно отправлено!
          </h1>
          <p className="mt-2 text-secondary">
            Оставьте свое имя и номер телефона, наш оператор обязательно
            свяжется с вами!
          </p>
          <Button
            onClick={() => setEndModal(false)}
            className="mt-[30px] w-full"
          >
            Понятно!
          </Button>
        </div>
      </BasicModal>

      <div className="container flex items-center justify-between md:gap-10">
        <div className="flex items-center md:gap-0 gap-2">
          <span
            onClick={() => {
              window.scrollTo({
                top: 0,
              });
              dispatch(toggleSidebar());
            }}
            className="icon icon-menu bg-black !w-9 active:scale-90 duration-200 lg:hidden"
          />
          <div className="md:w-[140px] md:h-[70px] w-[100px] h-[50px] relative overflow-hidden">
            <img
              src={IMAGES.PRIMARY_LOGO}
              className="scale-[170%] absolute top-0 right-0"
              alt="logo.svg"
            />
          </div>
        </div>

        <div className="lg:flex items-center lg:gap-10 hidden">
          {NAVBAR_LINKS.map((link) => (
            <div
              onMouseLeave={() => {
                if (link.children) setMenuItems(null);
              }}
              className="relative"
              key={link.code}
            >
              <a
                href={link.hash}
                onMouseEnter={() => {
                  if (link.children) setMenuItems(link.code);
                }}
                className={`text-nowrap py-3 ${
                  false ? "font-bold text-black" : "font-normal text-secondary"
                }`}
              >
                <span>{link.name}</span>
                {link?.children && (
                  <span className="icon icon-arrow rotate-90 bg-secondary !w-[6px] !h-[10px] ml-4" />
                )}
              </a>

              <AnimatePresence>
                {menuItems === link.code && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 50,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: 50,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="absolute z-10 top-6 -right-[350px] bg-white shadow-lg p-[30px] rounded-[30px] w-[772px] grid grid-cols-2 gap-1 border-2"
                  >
                    {products.length > 0 &&
                      products.map((product, ind) => (
                        <Link
                          key={ind}
                          className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2"
                          to={"/service/" + product.id}
                        >
                          <img
                            src={product.image}
                            className="w-[80px] h-[65px] rounded-[12px]"
                          />
                          <div className="">
                          <h1 className="font-medium text-lg">{product.title}</h1>
                          <p className="line-clamp-2 text-[12px] text-gray-500 leading-4">{product.description}</p>
                          </div>
                        </Link>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center lg:gap-[38px]">
          <a
            className="font-semibold xl:inline text-nowrap hidden"
            href="tel:+998330088434"
          >
            <span className="icon icon-phone bg-primary !h-5 !w-5 mr-3" />
            +998 33 008-84-34
          </a>
          <Button onClick={() => setModal(true)} className="md:font-bold font-semibold text-[16px] md:px-6">
            Позвоните мне
          </Button>
        </div>
      </div>
    </div>
  );
}
