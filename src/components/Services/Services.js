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
    <div ref={references.services} id="services" className="mx-16 mt-[400px] flex justify-center items-center space-x-16 ">
      <ServiceCard  Icon={FaCar} title="largest dealership of car" desc="Wide selection, excellent service, and complete automotive solutions."/>
      <ServiceCard Icon={MdOutlineCarRepair} title="unlimited repair warrenty" desc="Coverage for all repairs with no limits, ensuring peace of mind."/>
      <ServiceCard Icon={GrCar} title="insurence support" desc="Comprehensive assistance for all your insurance needs."/>
    </div>
  );
}

export default Services;
