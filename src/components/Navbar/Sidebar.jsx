import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "@/redux/slices/config.slice";

import { IMAGES } from "@/static/images";
import LazyImage from "@components/LazyImage";
import { NAVBAR_LINKS } from "@/static/navbar";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const dispatch = useDispatch();
  const [menuItems, setMenuItems] = useState(null);
  const { products } = useSelector((state) => state.product);

  const { sidebar } = useSelector((state) => state.config);

  const handleLinkAction = (children) => {
    if (children) setMenuItems(children);
    else dispatch(toggleSidebar());
  };

  useEffect(() => {
    if (sidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebar]);

  return (
    <AnimatePresence>
      {sidebar && (
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: "-100%",
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-screen bg-white py-[14px] fixed top-0 left-0 z-10 overflow-hidden"
        >
          <span
            onClick={() => {
              dispatch(toggleSidebar()), setMenuItems(null);
            }}
            className="icon icon-exit bg-[#F52929] absolute top-5 right-5 active:scale-90"
          />

          <div className="w-[140px] h-[70px] ml-2 relative z-[1] overflow-hidden">
            <img
              src={IMAGES.PRIMARY_LOGO}
              className="scale-[170%] absolute top-0 right-0 -z-[1]"
              alt="logo.svg"
            />
          </div>

          <div className="flex w-[200%]">
            <div
              className={`w-full flex flex-col duration-300 ${
                menuItems ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              {NAVBAR_LINKS.map((link) => (
                <a
                  onClick={() => handleLinkAction(link.children)}
                  key={link.code}
                  className={`py-4 px-[18px] text-lg text-secondary border-b border-[#F2F6FB] flex items-center justify-between`}
                  href={!link.children && link.hash}
                >
                  <span>{link.name}</span>
                  {link.children && (
                    <span className="icon icon-arrow bg-secondary-icon !w-2 !h-3 mr-2" />
                  )}
                </a>
              ))}
            </div>

            <div
              className={`bg-white duration-300 h-[500px] w-full ${
                menuItems ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <div
                className="text-[20px] font-semibold ml-4 my-3"
                onClick={() => setMenuItems(null)}
              >
                <span className="icon icon-arrow bg-black !w-2 !h-[14px] rotate-180 mr-5" />
                Наши Продукты
              </div>

              <div className="overflow-y-auto h-full">
                {products.length > 0 &&
                  products.map((item) => (
                    <Link
                      key={item.id}
                      className="py-4 px-[18px] text-lg text-secondary flex items-center gap-4"
                      onClick={() => {
                        dispatch(toggleSidebar());
                        setMenuItems(null);
                      }}
                      to={'/service/' + item.id}
                    >
                      <span className="w-[90px] h-[50px] rounded-lg overflow-hidden shrink-0">
                      <LazyImage
                      width={"100%"}
                      height={"100%"}
                        src={item.image}
                      />
                      </span>
                      <div>
                      <h1 className="font-medium text-black">{item.title}</h1>
                      <p className="line-clamp-1 text-sm">{item.description}</p>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
