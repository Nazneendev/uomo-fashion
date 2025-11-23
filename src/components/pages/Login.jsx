import React from 'react'
import Container from '../Container'
import { MdChevronRight } from "react-icons/md";

const Login = () => {
  return (
    <>
    <div className="py-[100px]">
    <Container>
        <h3 className="text-[34px] font-jost text-textC font-semibold sm:ml-3">Login</h3>
       
             <h6 className="text-gray-400 font-jost flex gap-1 sm:ml-3 items-center text-[14px] mt-5 font-semibold">Home <MdChevronRight /> Login</h6>
             <p className="text-[14px] text-gray-400 font-jost sm:ml-3 mt-10 w-[500px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
       
       
    </Container>
  <div className=" flex justify-center items-center">
      <div className="p-5 mt-20 bg-white shadow-md rounded-md w-[300px]">
        <h2 className="text-[20px] text-textC font-semibold mb-4">Login</h2>

        <input
          type="text"
          placeholder="Email"
          className="w-full border text-textC p-2 mb-3 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border text-textC p-2 mb-4 rounded"
        />

        <button className="w-full bg-textC text-white py-2 rounded">
          Login
        </button>
      </div>
    </div>
    </div>
      
    </>
  )
}

export default Login