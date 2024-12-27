import { useEffect, useState } from "react";
import "./App.css";

import FeaturedCars from "./components/FeaturedCars";
import Nav from "./components/Nav";
import Search from "./components/Search";
import { getData } from "./service/service";
import NewCar from "./components/NewCar";



function App() {
  const [filter,setFilter]=useState();
  const [cars,setCars]=useState([]);
  const [filtredCars,setFilteredCars]=useState();
  const [firstTime,setFirstTime]=useState(true);
  const [showForm, setShowForm] = useState(false);

  const [reset,setReset]=useState();
  useEffect(() => {
    const fetchCars = async () => {
        try {
            const result = await getData();
            setCars(result);  
            setFilteredCars(result);
            
        } catch (error) {
            console.error('Error:', error);
        }
    };

    fetchCars();
    
}, [reset]);


function getFiltredData(value){
setFilter(value);
};

const getReset=(value)=>{
  setReset(value)
}


useEffect(()=>{
  if(filter != null){
    const filterExact = Object.fromEntries(
      Object.entries(filter).filter(([key, value]) => value != '')
    );
    

    if(filterExact!=null){
      
    for (const key of Object.keys(filterExact)) {
    
          const newCars=cars.filter((car)=>{
            return car[key] == filterExact[key]
          })
          setFilteredCars(newCars);
          setFirstTime(false);   
    }
    
    }

  }
},[filter])

  return (
    <div className="App">
      <section id="home" className="welcome-hero">
        <Nav setShowForm={setShowForm}/>
        <div className="container mx-auto px-4">
          <div className="text-center py-[290px] pb-[372px] ">
            <h2 className="text-[42px] text-white  uppercase mb-[45px] text-2xl ">
              Get your desired car at a reasonable price
            </h2>
            <p className="text-[18px] normal-case text-white font-medium max-w-[735px] mx-auto">
            Explore Your Dream Ride – Premium Cars at Your Fingertips
            </p>
            <button className="inline-block w-[230px] h-[60px] bg-[#4e4ffa] text-white rounded-[3px] mt-[55px] transition duration-300 ease-linear hover:bg-[#0102fa]">
              Contact Us
            </button>
          </div>
        </div>

        <Search onFilterChange={getFiltredData} cars={filtredCars} toReset={getReset}/>
      </section>

   <FeaturedCars id="featured-cars" cars={filtredCars}/>

   {showForm && <NewCar setShowForm={setShowForm}/>}
    </div>
  );
}

export default App;
