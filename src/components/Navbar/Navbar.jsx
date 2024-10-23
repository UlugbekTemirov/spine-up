import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "@/redux/slices/config.slice";

// ============= components ================= //
import LazyImage from "@components/LazyImage";
import Button from "@components/Button";
import Sidebar from "./Sidebar";

// ============= static ================= //
import { IMAGES } from "@/static/images";
import { NAVBAR_LINKS } from "@/static/navbar";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState(null);

  return (
    <div className="bg-white py-3">
      <Sidebar />

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
                className={`text-nowrap ${
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
                    className="absolute z-10 top-6 -right-[350px] bg-white shadow-lg p-[30px] rounded-[30px] w-[772px] grid grid-cols-2 gap-x-[50px] gap-y-[30px] border-2"
                  >
                    {link.children &&
                      link.children.map((child, ind) => (
                        <a
                          key={ind}
                          className="flex items-center gap-3 cursor-pointer"
                          href={child.hash}
                        >
                          <img
                            src={child.image}
                            className="w-[82px] h-[60px] rounded-[12px]"
                          />
                          <span className="font-medium">{child.name}</span>
                        </a>
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
            href="tel:+998976282882"
          >
            <span className="icon icon-phone bg-primary !h-5 !w-5 mr-3" />
            +998 97 628-28-82
          </a>
          <Button className="md:font-bold font-semibold text-[16px] md:px-6">
            Позвоните мне
          </Button>
        </div>
      </div>
    </div>
  );
}
