import React, { useEffect, useState } from "react";
import { addCars } from "../service/service";

function NewCar({setShowForm}) {
  

  const [formData, setFormData] = useState({
    year: "",
    make: "",
    body_style: "",
    state: "",
    price: "",
    model:"",
    description:"",
    horsepower:"",
    miles:"",
    transmission:"",
    image_url:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData,[name]: value });
  };
  
  const handleSubmit = async (e) => {
    console.log(formData)
    e.preventDefault(); 
    try {
      const result = addCars(formData);
    } catch (error) {
      console.error("Error adding car:", error);
    }finally{
      setShowForm(false);
       window.location.reload();
    }
  };



  return (
    <div className="relative">
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center">
        <div id="default-modal"  >
          <div className="relative p-4 w-full max-w-2xl max-h-full flex items-center justify-center">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Add New Car
                </h3>
               
              </div>

              <div className="p-4 md:p-5 space-y-4">
                <form method="POST" onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-5">
             
                  <div className="grid md:grid-cols-3 md:gap-6">

                  <div>
                    <label
                      htmlFor="make"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Make
                    </label>
                    <input
                    onChange={handleChange}
                      type="text"
                      id="make"
                      name="make"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="year"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Year
                    </label>
                    <input
                    onChange={handleChange}
                      type="number"
                      id="year"
                      name="year"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                    <div>
                      <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                      <select
                      onChange={handleChange}
                        id="state"
                        name="state"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option defaultValue=""></option>
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                      </select>
                    </div>

                   

                  </div>

                  <div className="grid md:grid-cols-3 md:gap-6">
                    <div>
                    <label
                      htmlFor="model"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Model
                    </label>
                    <input
                    onChange={handleChange}
                      type="text"
                      id="model"
                      name="model"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="body_style"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Body Style
                    </label>
                    <input
                    onChange={handleChange}
                      type="text"
                      id="body_style"
                      name="body_style"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="price"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Price
                    </label>
                    <input
                    onChange={handleChange}
                      type="number"
                      id="price"
                      name="price"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  
                  </div>

                  <div className="grid md:grid-cols-3 md:gap-6">
                    <div>
                    <label
                      htmlFor="horsePower"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Horse Power
                    </label>
                    <input
                    onChange={handleChange}
                      type="number"
                      id="horsePower"
                      name="horsepower"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="miles"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Miles
                    </label>
                    <input
                    onChange={handleChange}
                      type="number"
                      id="miles"
                      name="miles"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                  <div>
                      <label htmlFor="transmission" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transmission </label>
                      <select
                      onChange={handleChange}
                        id="transmission"
                        name="transmission"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option defaultValue=""></option>
                        <option value="Automatic">Automatic</option>
                        <option value="Manual">Manual</option>
                      </select>
                    </div>
                  
                  </div>

                  <div className="grid md:grid-cols-3 md:gap-6">
                    <div>
                    <label
                      htmlFor="description"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Description 
                    </label>
                    <input
                    onChange={handleChange}
                      type="text"
                      id="description"
                      name="description"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>


                  <div>
                    <label
                      htmlFor="image_url"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Image Url
                    </label>
                    <input
                    onChange={handleChange}
                      type="text"
                      id="image_url"
                      name="image_url"
                      className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>

                 
                  
                  </div>

                  <div className="flex justify-center items-center space-x-8 p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </button>

                <button type="button" onClick={()=>setShowForm(false)} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ">Cancel</button>


              </div>
                </form>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCar;
