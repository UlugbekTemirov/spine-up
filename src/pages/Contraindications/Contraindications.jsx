import Header from "@/components/Header";
import React, { useEffect } from "react";
import ContraCard from "./components/ContraCard";

export default function Contraindications() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <div>
      <div className="bg-vacancy py-[50px]">
        <Header
          header={"Противопоказания"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          }
        />
      </div>

      <div className="py-10 grid grid-cols-2 gap-[30px] container">
        <ContraCard />
        <ContraCard reverse />
      </div>
    </div>
  );
}
