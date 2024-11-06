import React from "react";

import ServiceCard from "../components/ServiceCard";
import Header from "@/components/Header";

export default function Services() {
  return (
    <div id="services" className="md:py-[80px] py-10">
      <div className="container">
        <Header
          header="Наши продукты и услуги"
          desc="Мы проводим групповые занятия для укрепления мышц спины и позвоночника, а также профилактики и укрепления суставов по уникальной авторской методике в основном курсе «Здоровая Спина». "
        />

        <div className="grid md:grid-cols-3 gap-[30px] mt-10">
          {Array.from({ length: 6 }).map((_, index) => (
            <ServiceCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
