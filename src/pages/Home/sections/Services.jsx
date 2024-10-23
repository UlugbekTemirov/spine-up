import React from "react";

import ServiceCard from "../components/ServiceCard";
import Header from "@/components/Header";

export default function Services() {
  return (
    <div id="services" className="md:py-[80px] py-10">
      <div className="container">
        <Header
          header="Наши продукты и услуги"
          desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
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
