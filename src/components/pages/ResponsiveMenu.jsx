import React, { useState } from "react";
import { Link } from "react-router-dom";

const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative lg:hidden">
     
      <button
        onClick={() => setOpen(true)}
        className="btn btn-ghost  text-black"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

     
      {open && (
        <div className="fixed top-0 right-0 w-64 h-full bg-red-800 text-white shadow-lg z-50 p-6 flex flex-col space-y-4 animate-slide-in">
         
          <button
            onClick={() => setOpen(false)}
            className="self-end mb-6 text-gray-300 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          
          <ul className="flex flex-col gap-4">
  <li className="font-jost font-medium text-[18px]"><Link to="/">Home</Link></li>

  <li className="font-jost font-medium text-[18px]"><Link to="/shop">Shop</Link></li>

  <li className="font-jost font-medium text-[18px]"><Link to="/blog">Blog</Link></li>
  <li className="font-jost font-medium text-[18px]">
  <details>
<summary className="cursor-pointer">Pages</summary>
      <ul className="pl-5 mt-2 flex flex-col gap-2">
        <li className="font-jost font-medium text-[18px]"><Link to="/login">Login/Register</Link> </li>
        <li className="font-jost font-medium text-[18px]"><Link to="/notfound">404 Error</Link></li>
      </ul>
  </details>
  </li>
  <li className="font-jost font-medium text-[18px]"><Link to="/about">About</Link></li>

  <li className="font-jost font-medium text-[18px]"><Link to="/contact">Contact</Link></li>
</ul>

        </div>
      )}
    </div>
  );
};

export default ResponsiveMenu;
