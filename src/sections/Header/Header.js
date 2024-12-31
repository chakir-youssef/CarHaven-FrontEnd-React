import React, { useContext } from "react";
import { CarContext } from "../../context/carContext";

function Header({setShowForm}) {
  
  const {references} = useContext(CarContext)

  return (
    <div>
      
      <div className="fixed top-0 left-0 w-full bg-white shadow z-50" >
        <div className="absolute top-0 left-0 w-full z-99">
          <nav className="sticky top-0 bg-light z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
              <div className="navbar-header flex items-center">
                
                <a className="text-2xl font-bold text-gray-800">
                  Car Haven<span className="text-blue-500"></span>
                </a>
              </div>

              <div id="navbar-menu" className="hidden lg:flex space-x-8">
                <ul className="flex space-x-6 text-gray-700 font-medium">
                  <li>
                    <a
                      
                      className="hover:text-blue-500 transition duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={()=>references.services.current.scrollIntoView({behavior:"smooth"})}
                      className="hover:text-blue-500 transition duration-200"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={()=>references.featuredRef.current.scrollIntoView({ behavior: 'smooth' })}
                      className="hover:text-blue-500 transition duration-200"
                    >
                      Featured Cars
                    </a>
                  </li>
                  <li>
                    <button
                       onClick={() => setShowForm(true)}
                      className="hover:text-blue-500 transition duration-200"
                    >
                      New Cars
                    </button>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-blue-500 transition duration-200"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
