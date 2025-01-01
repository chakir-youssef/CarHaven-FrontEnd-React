import React from "react";
import "./ServiceCard.css";
function ServiceCard({Icon , title , desc}) {
  return (
    
      <div className="group flex flex-col justify-center items-center space-y-5 bg-white rounded-lg shadow-lg md:pt-[50px] pb-[60px]  px-[30px] w-[450px] h-[350px] md:w-[500px] md:h-[450px]  border hover:bg-primary hover:text-light">
        <div className="flex justify-center items-center mb-4 ">
          <Icon  className="text-[#50616c]  text-[100px] md:text-[150px] group-hover:text-light"/>
        </div>
        <h2 className="text-lg font-bold text-center mb-2">
          <a href="#" className="hover:underline  group-hover:text-light">
            {title}
          </a>
        </h2>
        <p className="text-gray-600 text-center group-hover:text-light">
        {desc}
        </p>
        <div className="w-10 h-1 bg-primary group-hover:bg-light" ></div>
      </div>
    
  );
}

export default ServiceCard;
