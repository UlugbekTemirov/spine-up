import React, { useEffect } from "react";

import ServiceCard from "../components/ServiceCard";
import Header from "@/components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "@/redux/api/products.slice";

export default function Services({openModal}) {
  const {products} = useSelector(state => state.product)
const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, []);
  console.log(products)
  return (
    <div id="services" className="md:py-[80px] py-10">
      <div className="container">
        <Header
          header="Наши продукты и услуги"
          desc="Мы проводим групповые занятия для укрепления мышц спины и позвоночника, а также профилактики и укрепления суставов по уникальной авторской методике в основном курсе «Здоровая Спина». "
        />

        <div className="grid md:grid-cols-3 gap-[30px] mt-10">
          {products.length > 0 && products.map((product, index) => (
            <ServiceCard openModal={openModal} {...product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
