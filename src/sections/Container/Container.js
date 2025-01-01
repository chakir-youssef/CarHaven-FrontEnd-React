import './Container.css';
import React from 'react'
import Filter from '../../components/Filter';
import Services from '../../components/Services/Services';
import FeaturedCars from '../../components/FeaturedCars';
import Hero from "../../components/Hero/Hero";
function Container() {
  return (
    <div>
        <section className="welcome-hero">
            <Hero />
            <Filter />
        </section>
        <Services />
        <FeaturedCars  />
      </div>
  )
}

export default Container