"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); 

 
  const handleMouseEnter = () => {
    setClick(true);
  };

 
  const handleMouseLeave = () => {
    setClick(false);
  };

  
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section id="navbar">
        <nav className="navbar navbar-expand-lg navbar-light bg-gray-200 flex justify-between items-center h-[70px] px-4 lg:px-10">
         
          <div
            className="flex items-center gap-2 cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave} 
          >
            <h1 className="font-bold text-[#2C404C]">Call Center Hours</h1>
            <p className="text-[13px] ">
              <FontAwesomeIcon icon={faAngleDown} />
            </p>
            {click && (
              <div
                className="text-[13px] text-black absolute top-5 bg-white p-2 border border-t-4 border-gray-200 leading-7 w-[350px]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span className="font-bold text-black">Already Ordered?</span>{" "}
                <br />
                File a Return or Replacement{" "}
                <span className="font-bold text-black">here</span>. <br />
                View Your Order Status{" "}
                <span className="font-bold text-black">here</span>. <br />
                For anything else, visit us at our{" "}
                <span className="font-bold text-black">HelpDesk</span>.
                <br />
                <div className="leading-6 mt-2">
                  <span className="font-bold text-black">
                    {" "}
                    Ready to Order?{" "}
                  </span>
                  <br />
                  Talk with our Sales Associate
                  <br />
                  Monday - Friday: 6:00 a.m. to 4:00 p.m. PST Saturday & Sunday:
                  Online Chat 6:00 a.m. to 3:00 p.m. PST
                </div>
              </div>
            )}
          </div>

        
          <div className="lg:hidden">
            <button
              className="text-[#2C404C] text-2xl"
              onClick={handleMenuToggle}
            >
              &#9776; 
            </button>
          </div>

        
          <div
            className={`lg:flex gap-5 items-center ${
              menuOpen
                ? "flex-col justify-center items-center bg-white absolute top-[60px] left-0 w-full overflow-y-hidden p-4 shadow-lg text-center"
                : "hidden"
            } lg:flex`}
          >
            <ul className="flex flex-col gap-4 items-center text-center lg:flex-row lg:gap-5">
              <li>
                <button className="bg-[#0B6B59] p-3 text-white rounded-[15px] font-bold hover:bg-[#084d3b] transition-colors">
                  Save Upto 10%
                </button>
              </li>
              <li className="p-3 text-[14px] text-primary hover:bg-[#f5f5f5] rounded-md">
                <a href="#">Are you a Pro?</a>
              </li>
              <li className="p-3 text-[14px] text-primary hover:bg-[#f5f5f5] rounded-md">
                <a href="#">Login/Signup</a>
              </li>
              <li className="p-3 text-[14px] text-primary hover:bg-[#f5f5f5] rounded-md">
                <a href="#">Order Status</a>
              </li>
              <li className="p-3 text-[14px] text-primary hover:bg-[#f5f5f5] rounded-md">
                <a href="#">My Favourites</a>
              </li>
              <li className="bg-[#2c404c] p-3 text-[14px] text-white hover:bg-[#1f2b33] rounded-md">
                <a href="#">Cart(0)</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
