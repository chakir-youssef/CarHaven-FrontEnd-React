import './Container.css';
import React, { useContext } from 'react'
import Filter from '../../components/Filter';
import Services from '../../components/Services/Services';
import FeaturedCars from '../../components/FeaturedCars';
import { CarContext } from '../../context/carContext';
function Container() {
  const {references} = useContext(CarContext);
  return (
    <div>
      
      <section id="home" className="welcome-hero">
            <div className="container mx-auto px-4">
              <div className="text-center py-[290px] pb-[372px] ">
                <h2 className="text-[42px] text-light  uppercase mb-[45px] text-2xl ">
                  Get your desired car at a reasonable price
                </h2>
                <p className="text-[18px] normal-case text-light font-medium max-w-[735px] mx-auto">
                  Explore Your Dream Ride – Premium Cars at Your Fingertips
                </p>
                <button className="inline-block w-[230px] h-[60px] bg-[#4e4ffa] text-light rounded-[3px] mt-[55px] transition duration-300 ease-linear hover:bg-[#0102fa]">
                  Contact Us
                </button>
              </div>
            </div>

            <Filter />
          </section>

          <Services />
          <FeaturedCars  />
      </div>
  )
}

export default Container