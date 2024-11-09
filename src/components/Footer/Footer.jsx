import React from "react";
import LazyImage from "@components/LazyImage";
import { IMAGES } from "@/static/images";
import { Link } from "react-router-dom";

const LINKS = [
  {
    id: 1,
    text: "Наши сертификаты",
    link: "/sertificates",
  },
  {
    id: 2,
    text: "Вакансии",
    link: "/vacancy",
  },
  {
    id: 3,
    text: "Противопоказания",
    link: "/contraindications",
  },
];

export default function Footer() {
  return (
    <div className="bg-footer overflow-hidden">
      <div className="container flex md:flex-row flex-col items-center justify-between py-4">
        <div className="w-[140px] h-[70px] relative">
          <img
            src={IMAGES.PRIMARY_LOGO}
            className="scale-[170%] absolute top-0 right-0"
            alt="logo.svg"
          />
        </div>

        <div className="flex md:flex-row flex-col items-center md:gap-10 gap-6 md:py-0 py-6">
          {LINKS.map((link) => (
            <Link to={link.link} className="text-nowrap" key={link.id}>
              {link.text}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3 text-[14px] text-secondary">
          <a href="/">revite.uz</a>
          <h1>Все права защищены!</h1>
        </div>
      </div>
    </div>
  );
}
