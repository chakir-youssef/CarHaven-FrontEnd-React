import React, { useEffect, useState } from "react";

function Search({ onFilterChange, cars ,toReset }) {
  const [options, setOptions] = useState();
  const [reset,setReset]=useState(false);
  const [formData, setFormData] = useState({
    year: "",
    make: "",
    body_style: "",
    state: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ [name]: value });
  };

  useEffect(() => {
    onFilterChange(formData);
  }, [formData]);

  useEffect(() => {
   
      if(cars != null){
        const result = Object.keys(cars[0]).reduce((acc, key) => {
            acc[key] = [...new Set(cars.map((item) => item[key]))]; 
            return acc;
          }, {});
          
          setOptions(result);
      }
      
  }, [cars]);

 useEffect(()=>{
toReset(reset);

 },[reset]) 

  return (
    <div>
      <div className="container mx-auto  px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="col-span-12 flex justify-center items-center w-full">
            <div className="absolute bottom-[-150px] w-full bg-white max-w-[70%]  p-10 shadow-lg rounded-lg">
              <div className="grid  grid-cols-5 gap-8">
                <div className="single-model-search mb-4">
                  <h2 className="text-lg font-semibold mb-2">Select Year</h2>
                  <div className="relative">
                    <select
                      name="year_"
                      onChange={handleChange}
                      value={formData.year}
                      className="form-control border border-gray-300 rounded-md w-full px-3 py-2"
                    >
                      <option value="" key="year">Year</option>
                     {
                        options?.year  !== undefined && options.year.map((year)=>{
                            return <option key={year} value={year}>{year}</option>
                        })
                     }
                    </select>
                  </div>
                </div>
                <div className="single-model-search mb-4">
                  <h2 className="text-lg font-semibold mb-2">Body Style</h2>
                  <div className="relative">
                    <select
                      value={formData.body_style}
                      name="bodyStyle"
                      onChange={handleChange}
                      className="form-control border border-gray-300 rounded-md w-full px-3 py-2"
                    >
                      <option value="" key="style">Style</option>
                      {
                        options?.body_style  !== undefined && options.body_style.map((style)=>{
                            return <option key={style} value={style}>{style}</option>
                        })
                     }
                    </select>
                  </div>
                </div>
                <div className="single-model-search mb-4">
                  <h2 className="text-lg font-semibold mb-2">Select Make</h2>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={formData.make}
                      name="make"
                      className="form-control border border-gray-300 rounded-md w-full px-3 py-2"
                    >
                      <option value="" key="make">Make</option>
                      {
                        options?.make  !== undefined && options.make.map((make)=>{
                            return <option key={make} value={make}>{make}</option>
                        })
                     }
                      
                    </select>
                  </div>
                </div>

                <div className="single-model-search mb-4">
                  <h2 className="text-lg font-semibold mb-2">Select Price</h2>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      name="price"
                      value={formData.price}
                      className="form-control border border-gray-300 rounded-md w-full px-3 py-2"
                    >
                      <option value="" key="price">Price</option>
                      {
                        options?.price  !== undefined && options.price.map((price)=>{
                            return <option key={price} value={price}>{price}</option>
                        })
                     }
                     
                    </select>
                  </div>
                </div>
                <div className="single-model-search mb-4">
                  <h2 className="text-lg font-semibold mb-2">Car Condition</h2>
                  <div className="relative">
                    <select
                      onChange={handleChange}
                      value={formData.state}
                      name="state"
                      className="form-control border border-gray-300 rounded-md w-full px-3 py-2"
                    >
                      <option value="default">Condition</option>
                      <option value="Used">used</option>
                      <option value="New">new</option>
                    </select>
                  </div>
                </div>
              </div>
              <button onClick={()=>setReset(!reset)} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Reset</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
