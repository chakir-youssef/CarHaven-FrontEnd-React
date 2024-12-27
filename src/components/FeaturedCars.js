import React, { useEffect, useState } from "react";
import CarCard from "./CarCard";
import { getData } from '../service/service';
function FeaturedCars({cars}) {


  return (
    <div className="py-[112px] pb-[120px] mt-[100px]">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <p className="text-[#444a57] capitalize mb-[10px]">
            checkout <span>the</span> featured cars
          </p>
          <h2 className="relative text-[36px] font-medium pb-[35px]">featured cars</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
         {
          cars != null && cars.map((car)=>{
             return <CarCard key={car.id} car={car}/>
          })
         }
        </div>
      </div>
    </div>
  );
}

export default FeaturedCars;