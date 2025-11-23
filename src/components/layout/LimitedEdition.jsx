import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../pages/Image'
import breslet from "../../assets/breslet.jpg";
import cap from "../../assets/cap.jpg";
import bag from "../../assets/bag.jpg";
import belt from "../../assets/belt.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../pages/NextArrow';
import PrevArrow from '../pages/PrevArrow';



const LimitedEdition = () => {

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };





  return (
   <>
    <div className="py-[100px]">
        <Container>
        
      
           
                <h2 className="text-textC text-center font-bold text-[35px]  font-jost">LIMITED EDITION</h2>
<div className="-mx-4">
  <Slider {...settings} className="mt-10 ">
  <div className="relative group overflow-hidden   px-4">
    <Image
      imgSrc={cap}
      imgAlt="Product"
      className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"
    />
    <button
      className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 bg-white h-12 left-0 top-[300px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
    >
      ADD TO CART
    </button>
    <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">Dresses</h6>
    <h6 className="text-textC font-jost font-medium text-[14px]">Hosking Blue Area Rug</h6>
    <p className="text-textC font-jost font-medium text-[14px]">$35</p>
  </div>

  <div className="relative group overflow-hidden  px-4">
    <Image
      imgSrc={breslet}
      imgAlt="Product"
      className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"
    />
    <button
      className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 bg-white h-12 left-0 top-[300px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
    >
      ADD TO CART
    </button>
    <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">Dresses</h6>
    <h6 className="text-textC font-jost font-medium text-[14px]">Hub Accent Mirror</h6>
    <div className="flex gap-x-1 items-center">
      <del className="text-red-500 font-jost font-medium text-[14px]">$70</del>
      <h6 className="text-textC font-jost font-medium text-[14px]">$62</h6>
    </div>
  </div>

  
  <div className="relative group overflow-hidden  px-4">
    <Image
      imgSrc={bag}
      imgAlt="Product"
      className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"
    />
    <button
      className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 bg-white h-12 left-0 top-[300px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
    >
      ADD TO CART
    </button>
    <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">Dresses</h6>
    <h6 className="text-textC font-jost font-medium text-[14px]">Hanneman Pouf</h6>
    <p className="text-textC font-jost font-medium text-[14px]">$79</p>
  </div>


  <div className="relative group overflow-hidden  px-4">
    <Image
      imgSrc={belt}
      imgAlt="Product"
      className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"
    />
    <button
      className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 bg-white h-12 left-0 top-[300px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
    >
      ADD TO CART
    </button>
    <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">Dresses</h6>
    <h6 className="text-textC font-jost font-medium text-[14px]">Cushion Futon Slipcover</h6>
    <div className="flex gap-x-1 items-center">
      <del className="text-red-500 font-jost font-medium text-[14px]">$40</del>
      <h6 className="text-textC font-jost font-medium text-[14px]">$32</h6>
    </div>
  </div>
   <div className="relative group overflow-hidden  px-4">
    <Image
      imgSrc={breslet}
      imgAlt="Product"
      className="w-full h-auto transition-transform duration-300 group-hover:-translate-y-2"
    />
    <button
      className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                 bg-white h-12 left-0 top-[300px] w-full flex items-center justify-center text-black font-medium px-6 py-2"
    >
      ADD TO CART
    </button>
    <h6 className="text-gray-400 pt-2 font-jost font-medium text-[14px]">Dresses</h6>
    <h6 className="text-textC font-jost font-medium text-[14px]">Hub Accent Mirror</h6>
    <div className="flex gap-x-1 items-center">
      <del className="text-red-500 font-jost font-medium text-[14px]">$70</del>
      <h6 className="text-textC font-jost font-medium text-[14px]">$62</h6>
    </div>
  </div>

 
</Slider>

        </div>
               
           
        </Container>
    </div>
   </>
  )
}

export default LimitedEdition
