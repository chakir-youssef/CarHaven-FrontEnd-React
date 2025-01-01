import { CarContext } from "../../context/carContext";
import ServiceCard from "../ServiceCard/ServiceCard";
import "./Services.css";
import React, { useContext } from "react";

import { MdOutlineCarRepair } from "react-icons/md";
import { GrCar } from "react-icons/gr";
import { FaCar } from "react-icons/fa";
function Services() {
  const {references} = useContext(CarContext);
  return (
    <div ref={references.services} className="mt-[300px] sm:mt-[400px] mx-10 grid grid-cols-1 md:grid-cols-2 place-items-center md:flex md:items-center md:justify-center md:space-x-5 space-y-5 md:space-y-0">
      <ServiceCard  Icon={FaCar} title="largest dealership of car" desc="Wide selection, excellent service, and complete automotive solutions."/>
      <ServiceCard Icon={MdOutlineCarRepair} title="unlimited repair warrenty" desc="Coverage for all repairs with no limits, ensuring peace of mind."/>
      <ServiceCard Icon={GrCar} title="insurence support" desc="Comprehensive assistance for all your insurance needs."/>
    </div>
  );
}

export default Services;
