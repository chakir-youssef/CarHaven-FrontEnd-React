import { useContext } from "react";
import CarCard from "./CarCard";
import { CarContext } from "../context/carContext";

function FeaturedCars() {

const {cars,references} = useContext(CarContext);
  return (
    <div ref={references.featuredRef} id="featuredCars" className="py-[112px] pb-[120px] mt-[100px]">
      <div className="container mx-auto px-4">
        <div className="section-header">
          <p className="text-[#444a57] capitalize mb-[10px]">
            checkout <span>the</span> featured cars
          </p>
          <h2 className="relative text-[36px] font-medium pb-[35px]">featured cars</h2>
        </div>
        <div className="transition-all duration-2000 grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
