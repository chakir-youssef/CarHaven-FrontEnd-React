import React, { useEffect, useState } from "react";

function Nav({setShowForm}) {
  

  return (
    <div>
      <div className="top-area">
        <div className="absolute top-0 left-0 w-full z-99">
          <nav className="sticky top-0 bg-white z-50 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
              <div className="navbar-header flex items-center">
                
                <a className="text-2xl font-bold text-gray-800">
                  Car<span className="text-blue-500"></span>
                </a>
              </div>

              <div id="navbar-menu" className="hidden lg:flex space-x-8">
                <ul className="flex space-x-6 text-gray-700 font-medium">
                  <li>
                    <a
                      href="#home"
                      className="hover:text-blue-500 transition duration-200"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#featured-cars"
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

export default Nav;
