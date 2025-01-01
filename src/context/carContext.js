import { getData } from "../service/service";

const { createContext,  default: React, useState, useEffect, useRef } = require("react");

export const CarContext=createContext();


export const CarProvider =({children}) =>{
    const featuredRef=useRef();
    const services  = useRef();
    const home  = useRef();
    const references ={"featuredRef":featuredRef ,"services":services ,"home":home}
    
    const [reset, setReset] = useState(false);
    const [cars, setCars] = useState([]);
    const [filtredCars, setFilteredCars] = useState();



    useEffect(() => {
      const fetchCars = async () => {
        try {
          const result = await getData();
          setCars(result);
          setFilteredCars(result);
        } catch (error) {
          console.error("Error:", error);
        }
      };
  
      fetchCars();
    }, [reset]);

    const values={cars,setCars,reset,setReset,references}

    return (
        <CarContext.Provider  value={values}>
            {children}
        </CarContext.Provider>
    );
}

