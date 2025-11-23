import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from './Image'
import bannercoat from "../../assets/coat2.png";
import blogbg from "../../assets/blog_title_bg.jpg";
import pc9 from "../../assets/pc9.jpeg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import pc4 from "../../assets/pc4.jpg";
import p12 from "../../assets/p12.jpeg";
import pc6 from "../../assets/pc6.jpg";
import p7 from "../../assets/p7.jpg";
import pc8 from "../../assets/pc8.jpg";


const Shop = () => {
  return (
   <>
   
    <div className="">
        <div style={{ backgroundImage: `url(${blogbg})`}} className=" bg-center bg-cover bg-no-repeat mx-[50px] pt-[50px] ">
          <div className="">
            <Container>
              <Flex className="justify-between flex-col lg:flex-row ">
                {/* left side */}
                <div className="sm:ml-[20px] md:ml-[20px]">
                  <div className="flex items-center gap-x-4 mb-6">
                   
                  </div>
                  <h1 className="text-textC font-jost font-bold text-[75px] leading-[80px]">Jackets & Coats</h1>
                  
          <div className="sm:ml-5">
            
            <ul className="flex items-center gap-5 mt-10">
              <li className="text-[14px] font-jost text-textC font-bold">ALL</li>
              <li className="text-[14px] font-jost text-textC font-bold">COMPANY</li>
              <li className="text-[14px] font-jost text-textC font-bold">FASHION</li>
              <li className="text-[14px] font-jost text-textC font-bold">STYLE</li>
              <li className="text-[14px] font-jost text-textC font-bold">TRENDS</li>
            </ul>
          </div>
        
                 
                </div>
               
                {/* right side */}
                <div className="flex items-end m-0 p-0 ">
                  <Image imgSrc={bannercoat} imgAlt={bannercoat} />
                </div>
              </Flex>

            </Container>
          </div>
        </div>
<section>
 <Container>
          
<Flex className="justify-between mt-10 py-[100px]">
    <div className="grid sm:ml-3  gap-8 grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
  <div className="relative group  sm:w-[300px]  w-[320px] overflow-hidden">
  <Image
    imgSrc={pc9}
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
    Cropped Faux Leather Jacket
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$29</p>
</div>
  <div className="relative group sm:w-[300px]  w-[320px] overflow-hidden">
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
  <div className="relative group  sm:w-[300px] w-[320px] overflow-hidden">
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
    Cropped Faux Leather Jacket
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$29</p>
</div>
  <div className="relative group sm:w-[300px]  w-[320px] overflow-hidden">
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
  <div className="relative group sm:w-[300px]  w-[320px] overflow-hidden">
  <Image
    imgSrc={p12}
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
  <div className="relative group sm:w-[300px]  w-[320px] overflow-hidden">
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
    Shirt In Botanical Cheetah Print
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$20</p>
</div>
  
  <div className="relative group  sm:w-[300px] w-[320px] overflow-hidden">
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
   <div className="relative group sm:w-[300px]  w-[320px] overflow-hidden">
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
    Cropped Faux Leather Jacket
  </h6>
  <p className="text-textC font-jost font-medium text-[14px]">$29</p>
</div>
        
    </div>
</Flex>
        </Container>
</section>
       
      </div>
   </>
  )
}

export default Shop
