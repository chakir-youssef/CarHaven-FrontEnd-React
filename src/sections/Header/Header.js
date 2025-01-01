import React, {useContext, useState} from "react";
import { CarContext } from "../../context/carContext";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
function Header() {
  
  const {references} = useContext(CarContext)
  const [mobileNav,setMobileNav]=useState(false);
  return (
    <div>
      
      <div  className="fixed top-0 left-0 w-full bg-white shadow z-50" >
        <div className="absolute top-0 left-0 w-full z-99">
          <nav className="sticky top-0 bg-light z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">

              <div className="navbar-header flex items-center">
                <p className="text-2xl font-bold text-gray-800">
                  Car Haven<span className="text-blue-500"></span>
                </p>
              </div>

              <div id="navbar-menu" className="hidden sm:flex space-x-8">
                <ul className="flex space-x-6 text-gray-700 font-medium">
                  <li>
                    <p onClick={() => references.home.current.scrollIntoView({behavior: "smooth"})} className="hover:text-blue-500 transition duration-200 cursor-pointer">Home</p>
                  </li>
                  <li>
                    <p onClick={() => references.services.current.scrollIntoView({behavior: "smooth"})}
                       className="hover:text-blue-500 transition duration-200 cursor-pointer">Services</p>
                  </li>
                  <li>
                    <p onClick={() => references.featuredRef.current.scrollIntoView({behavior: 'smooth'})}
                       className="hover:text-blue-500 transition duration-200 cursor-pointer">Featured Cars</p>
                  </li>
                  <li>
                    <p className="hover:text-blue-500 transition duration-200 cursor-pointer">New Cars</p>
                  </li>
                  <li>
                    <p className="hover:text-blue-500 transition duration-200 cursor-pointer">Contact</p>
                  </li>
                </ul>
              </div>


                <IoMenu className="text-xl cursor-pointer flex sm:hidden" onClick={()=>setMobileNav(!mobileNav)}/>

            </div>

            {
                mobileNav &&
                <div className="w-full bg-[#50616c] font-bold fixed top-0 lef-0 right-0 text-light ">
                  <IoMdClose onClick={()=>setMobileNav(!mobileNav)} className="cursor-pointer absolute right-3 top-2 text-xl "/>
                  <ul className="space-y-5 my-5 ">
                    <li className="cursor-pointer"
                        onClick={() => {references.home.current.scrollIntoView({behavior: "smooth"});setMobileNav(!mobileNav)}}>
                      Home
                    </li>
                    <li className="cursor-pointer"
                        onClick={() => {references.services.current.scrollIntoView({behavior: "smooth"});setMobileNav(!mobileNav)}}>
                        Services
                    </li>
                    <li className="cursor-pointer"
                        onClick={() => {references.featuredRef.current.scrollIntoView({behavior: "smooth"});setMobileNav(!mobileNav)}}>
                        Featured Cars
                    </li>
                    <li className="cursor-pointer">New Car</li>
                    <li className="cursor-pointer">Brand</li>
                    <li className="cursor-pointer">Contact</li>
                  </ul>
                </div>
            }

          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
