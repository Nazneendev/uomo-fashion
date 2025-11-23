import React from 'react'
import Flex from '../Flex'
import Container from '../Container'
import Image from '../pages/Image'
import pc1 from "../../assets/pc1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import pc4 from "../../assets/pc4.jpg";
import pc5 from "../../assets/pc5.jpg";
import pc6 from "../../assets/pc6.jpg";
import p7 from "../../assets/p7.jpg";
import pc8 from "../../assets/pc8.jpg";
import { Link } from 'react-router-dom';



const Products = () => {
  return (
    <>
<div className="py-[100px]">
<Container>
<h3 className="text-textC text-center font-jost font-medium sm:text-[25px] text-[35px]">OUR TRENDY <span className="font-bold sm:text-[25px]">PRODUCTS</span></h3>
    <Flex className="items-center justify-center gap-5 mt-5 ">
  <h6 className=" text-textC text-center font-jost font-medium text-[16px] sm:text-[14px]">ALL</h6>
  <h6 className="text-textC text-center font-jost font-medium text-[16px] sm:text-[14px]">NEW ARRIVALS</h6>
  <h6 className="text-textC text-center font-jost font-medium text-[16px] sm:text-[14px]">BEST SELLER</h6>
  <h6 className="text-textC text-center font-jost font-medium text-[16px] sm:text-[14px]">TOP RATING</h6>
</Flex>


    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 gap-8 ">
  <div className="relative group w-full sm:w-[300px] overflow-hidden">
  <Image
    imgSrc={pc1}
    imgAlt="Product"className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"/>

 
  <button
    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               bg-gray-50 h-12 left-0 top-[200px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
  >
    ADD TO CART
  </button>
  <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">
    Dresses
  </h6>
  <h6 className="text-textC font-jost font-medium text-[14px]">
    Leather Jacket
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$29</p>
</div>
  <div className="relative group w-full sm:w-[300px] overflow-hidden">
  <Image
    imgSrc={p2}
    imgAlt="Product"className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"/>

  
  <button
    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               bg-gray-50 h-12 left-0 top-[200px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
  >
    ADD TO CART
  </button>
  <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">
    Dresses
  </h6>
  <h6 className="text-textC font-jost font-medium text-[14px]">
   Calvin Shorts
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$39</p>
</div>
  <div className="relative group w-full sm:w-[300px] overflow-hidden">
  <Image
    imgSrc={p3}
    imgAlt="Product"className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"/>

  
  <button
    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               bg-gray-50 h-12 left-0 top-[200px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
  >
    ADD TO CART
  </button>
  <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">
    Dresses
  </h6>
  <h6 className="text-textC font-jost font-medium text-[14px]">
    Faux Jacket
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$29</p>
</div>
  <div className="relative group w-full sm:w-[300px] overflow-hidden">
  <Image
    imgSrc={pc4}
    imgAlt="Product"className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"/>

 
  <button
    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               bg-gray-50 h-12 left-0 top-[200px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
  >
    ADD TO CART
  </button>
  <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">
    Dresses
  </h6>
  <h6 className="text-textC font-jost font-medium text-[14px]">
   Cableknit Shawl
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$40</p>
</div>
  <div className="relative group w-full sm:w-[300px] overflow-hidden">
  <Image
    imgSrc={pc5}
    imgAlt="Product"className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"/>

  
  <button
    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               bg-gray-50 h-12 left-0 top-[200px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
  >
    ADD TO CART
  </button>
  <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">
    Dresses
  </h6>
  <h6 className="text-textC font-jost font-medium text-[14px]">
   Kirby T-Shirt
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$69</p>
</div>
  <div className="relative group w-full sm:w-[300px] overflow-hidden">
  <Image
    imgSrc={pc6}
    imgAlt="Product"className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"/>

  
  <button
    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               bg-gray-50 h-12 left-0 top-[200px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
  >
    ADD TO CART
  </button>
  <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">
    Dresses
  </h6>
  <h6 className="text-textC font-jost font-medium text-[14px]">
    Cheetah Print
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$20</p>
</div>
  
  <div className="relative group w-full sm:w-[300px] overflow-hidden">
  <Image
    imgSrc={p7}
    imgAlt="Product"className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"/>

  
  <button
    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               bg-gray-50 h-12 left-0 top-[200px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
  >
    ADD TO CART
  </button>
  <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">
    Dresses
  </h6>
  <h6 className="text-textC font-jost font-medium text-[14px]">
    Cableknit Shawl
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$37</p>
</div> 
   <div className="relative group w-full sm:w-[300px] overflow-hidden">
  <Image
    imgSrc={pc8}
    imgAlt="Product"className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"/>

  
  <button
    className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
               bg-gray-50 h-12 left-0 top-[200px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
  >
    ADD TO CART
  </button>
  <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">
    Dresses
  </h6>
  <h6 className="text-textC font-jost font-medium text-[14px]">
    Cropped Jacket
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$29</p>
</div>
        
    </div>

<Link to="/shop">
<div className="relative group text-[14px] font-jost text-textC font-bold">
<h3 className=" hover:text-hoverC text-center transition-colors mt-10 duration-300">DISCOVER ALL</h3>
 <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-hoverC transition-all duration-300 w-[80px] group-hover:w-[110px]"></span>
</div>
</Link>



</Container>
    
</div>
    </>
    
  )
}

export default Products
