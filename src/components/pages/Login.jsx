import React from 'react'
import Container from '../Container'
import { MdChevronRight } from "react-icons/md";

const Login = () => {
  return (
    <>
      <div className="py-[60px] sm:py-[80px] md:py-[100px] px-4">
        <Container>

        
          <h3 className="text-[28px] sm:text-[32px] md:text-[34px] font-jost text-textC font-semibold">
            Login
          </h3>

       
          <h6 className="text-gray-400 font-jost flex items-center gap-1 text-[13px] sm:text-[14px] mt-3 font-semibold">
            Home <MdChevronRight /> Login
          </h6>

         
          <p className="text-[13px] sm:text-[14px] text-gray-400 font-jost mt-6 max-w-[500px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the.
          </p>

        </Container>

       
        <div className="flex justify-center items-center mt-14">
          <div className="p-5 bg-white shadow-md rounded-md w-full max-w-[320px] sm:max-w-[360px]">
            <h2 className="text-[20px] text-textC font-semibold mb-4">Login</h2>

            <input
              type="text"
              placeholder="Email"
              className="w-full border text-textC p-2 mb-3 rounded focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border text-textC p-2 mb-4 rounded focus:outline-none"
            />

            <button className="w-full bg-textC text-white py-2 rounded">
              Login
            </button>
          </div>
        </div>

      </div>
    </>
  );
};

export default Login;
