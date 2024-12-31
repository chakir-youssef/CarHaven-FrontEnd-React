import React from "react";
import "./ServiceCard.css";
function ServiceCard({Icon , title , desc}) {
  return (
    
      <div className="group flex flex-col justify-center items-center space-y-5 bg-white rounded-lg shadow-lg  pt-[50px] pb-[60px] pl-[30px] pr-[30px] w-[500px] h-[450px]  border hover:bg-primary hover:text-light">
        <div className="flex justify-center items-center mb-4">
          <Icon size="150" className="text-[#50616c] group-hover:text-light"/>
          
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
