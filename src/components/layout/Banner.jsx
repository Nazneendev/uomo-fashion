
import React from 'react';
import bgu from "../../assets/bgu.png";
import Container from '../Container';
import Image from '../pages/Image';
import bannerImg1 from "../../assets/blue.png";
import Flex from '../Flex';
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import NextArrow from '../pages/NextArrow';
import PrevArrow from '../pages/PrevArrow';
import bannerImg2 from "../../assets/brown.png";






const Banner = () => {

   var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
  };

  return (
    <>
    <Slider {...settings}>
 <div className="">
        <div style={{ backgroundImage: `url(${bgu})`}} className="bg-[#F5E6E0] bg-center bg-cover bg-no-repeat mx-[20px] pt-[120px] ">
          <div className="">
            <Container>
              <Flex className="justify-between flex-col lg:flex-row ">
                {/* left side */}
                <div className="sm:ml-[20px] md:ml-[20px]">
                  <div className="flex items-center gap-x-4 mb-6">
                    <div className="bg-[#C32929] h-[2px] w-[40px] font-bold sm:text-[8px] text-[14px]"></div>
                    <h3 className="font-jost text-[#C32929] font-medium leading-[24px] sm:text-[14px] lg:text-[20px] text-[18px]">SUMMER 2025</h3>
                  </div>
                  <h1 className="text-textC font-jost font-bold text-[75px] lg:text-[70px] sm:text-[45px] leading-[80px]">HELLO NEW SEASON</h1>
                  <p className="leading-[19px] text-[16px] text-textC font-medium mt-5 sm:text-[14px]">LIMITED TIME OFFER-UP TO 60% OFF & FREE SHIPPING</p>
                  <div className="mt-5 group inline-block">
                    <h3 className="text-textC mt-5 font-jost font-bold leading-[24px] text-[14px] sm:text-[14px] cursor-pointer group-hover:text-hoverC transition-all duration-300">DISCOVER MORE</h3>
                    <div className="bg-textC h-[2px] w-[80px] sm:w-[40px] group-hover:w-[110px] transition-all duration-200"></div>
                  </div>
                </div>
               
                {/* right side */}
                <div className="flex items-end m-0 p-0 ">
                  <Image imgSrc={bannerImg1} imgAlt={bannerImg1} />
                </div>
              </Flex>
            </Container>
          </div>
        </div>
      </div>

      {/* 2nd bg */}
       <div className="">
        <div style={{ backgroundImage: `url(${bgu})`}} className="bg-[#F5E6E0] bg-center bg-cover bg-no-repeat mx-[20px] pt-[120px] ">
          <div className="">
            <Container>
              <Flex className="justify-between flex-col lg:flex-row ">
                {/* left side */}
                <div className="sm:ml-[20px] md:ml-[20px]">
                  <div className="flex items-center gap-x-4 mb-6">
                    <div className="bg-[#C32929] h-[2px] w-[40px] font-bold text-[14px] sm:text-[8px]"></div>
                    <h3 className="font-jost text-[#C32929] font-medium leading-[24px] sm:text-[14px] lg:text-[20px] text-[18px]">NEW TREND</h3>
                  </div>
                  <h1 className="text-textC font-jost  text-[75px] lg:text-[70px] leading-[80px] sm:text-[45px] font-bold">SUMMER SALE STYLISH </h1>
                  <p className="leading-[19px] text-[16px] text-textC font-medium mt-5 sm:text-[14px]">LIMITED TIME OFFER-UP TO 60% OFF & FREE SHIPPING</p>
                  <div className="mt-5 group inline-block">
                    <h3 className="text-textC mt-5 font-jost font-bold leading-[24px] text-[14px] cursor-pointer group-hover:text-hoverC transition-all duration-300 sm:text-[14px]">DISCOVER MORE</h3>
                    <div className="bg-textC h-[2px] sm:w-[40px] w-[80px] group-hover:w-[110px] transition-all duration-200"></div>
                  </div>
                </div>
               
                {/* right side */}
                <div className="flex items-end m-0 p-0">
                  <Image imgSrc={bannerImg2} imgAlt={bannerImg2}/>
                </div>
              </Flex>
            </Container>
          </div>
        </div>
      </div>

     
    </Slider>
     
    </>
  )
}

export default Banner

