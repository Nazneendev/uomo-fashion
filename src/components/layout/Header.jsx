import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "../Container";
import Image from "../pages/Image";
import logo from "../../assets/logo.png";
import { BsSearch } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { FaCartFlatbedSuitcase } from "react-icons/fa6";
import ResponsiveMenu from "../pages/ResponsiveMenu";
import { FaCaretDown } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-white">
        <Container className="px-4 sm:px-6 lg:px-0">
          <div className="navbar justify-between py-3 lg:py-5">
            <div className="navbar-start">
              <Link to="/">
                <Image imgSrc={logo} imgAlt="website logo" className="w-[90px] sm:w-[120px]"/>
              </Link>
            </div>

           
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 flex gap-x-12">

              
                <li className="relative group text-[14px] font-jost text-textC font-bold">
                  <Link to="/" className="hover:text-hoverC transition-colors duration-300">
                    Home
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-hoverC transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

               
                <li className="relative group text-[14px] font-jost text-textC font-bold">
                  <Link to="/shop" className="hover:text-hoverC transition-colors duration-300">
                    Shop
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-hoverC transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

               
                <li className="relative group text-[14px] font-jost text-textC font-bold">
                  <Link to="/blog" className="hover:text-hoverC transition-colors duration-300">
                    Blog
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-hoverC transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

               
                <li className="relative text-[14px] font-jost text-textC font-bold">
                  <button
                    onClick={() => setOpen(!open)}
                    className=" flex items-center gap-1"
                  >
                    Pages <FaCaretDown />
                  </button>

                  
                  {open && (
                    <div className="absolute top-full left-0 mt-2 bg-gray-100  w-[150px] z-30">
                      <ul className="py-2 text-textC">
                        <li className="ml-[-15px] py-1 ">
                          <Link to="/login">Login/Register</Link>
                        </li>
                        <div className=" absolute h-[2px] w-[150px] left-[-28px] top-[47px] bg-gray-400"></div>

                        <li className=" py-1 ">
                          <Link to="/notfound">404 Error </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>

                
                <li className="relative group text-[14px] font-jost text-textC font-bold">
                  <Link to="/about" className="hover:text-hoverC transition-colors duration-300">
                    About
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-hoverC transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

               
                <li className="relative group text-[14px] font-jost text-textC font-bold">
                  <Link to="/contact" className="hover:text-hoverC transition-colors duration-300">
                    Contact
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-hoverC transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>

              </ul>
            </div>

            
             <div className="navbar-end flex items-center gap-x-3 sm:gap-x-4">
        <BsSearch className="text-[18px] sm:text-xl text-textC"/>
        <GoPeople className="text-[18px] sm:text-xl text-textC"/>
        <FaRegHeart className="text-[18px] sm:text-xl text-textC"/>
        <FaCartFlatbedSuitcase className="text-[18px] sm:text-xl text-textC"/>
      </div>

            <ResponsiveMenu />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
