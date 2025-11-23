import React from 'react'
import Container from '../Container'
import  bg2nd from "../../assets/2ndbg.png";
import Flex from '../Flex';
import Image from '../pages/Image';
import red from "../../assets/red.png";
import men from "../../assets/men.png";

const Spring = () => {
  return (
    <>

        <div style={{ backgroundImage: `url(${bg2nd})`}} className=" bg-center bg-cover bg-no-repeat mx-[20px] py-[150px] ">
           <Container>
             <div className="sm:ml-[20px] md:ml-[20px]">
                  <div className="flex items-center gap-x-4 mb-6">
                    <div className="bg-[#C32929] h-[2px] sm:w-[20px] w-[40px] font-bold text-[14px]"></div>
                    <h3 className="font-jost text-[#C32929] font-medium lg:text-[24px] text-[24px] sm:text-[14px]">Deal of the week</h3>
                  </div>
                  <h1 className="text-textC font-jost font-medium lg:text-[65px] text-[65px] sm:text-[40px] leading-[80px] "><span className="text-textC font-jost lg:text-[65px] font-bold sm:text-[40px] text-[70px]">Spring </span> Collection</h1>
                  <p className="leading-[19px] text-[20px] lg:text-[18px] sm:text-[10px] text-textC font-medium mt-5">LIMITED TIME OFFER-UP TO 60% OFF & FREE SHIPPING</p>
                  <div className="mt-5 group inline-block">
                    <h3 className="text-textC mt-5 font-jost font-bold leading-[24px] text-[14px] cursor-pointer group-hover:text-hoverC transition-all duration-300">SHOP NOW</h3>
                    <div className="bg-textC h-[2px] w-[80px] group-hover:w-[110px] transition-all duration-200"></div>
                  </div>
                </div>
           </Container> 
        </div>
        <div className="py-[100px]">
        <Container>
            <Flex className="justify-between  items-center gap-2">
            <div className="lg:w-[650px] relative">
 <Image imgSrc={red} imgAlt={red}/>
 <div className="">
     <h4 className="text-white absolute font-medium text-[18px] left-[45px] top-[220px] font-jost">STARTING AT $19</h4>
     <h3 className="text-white absolute font-medium text-[24px] left-[45px] top-[250px] font-jost">Women's T-Shirts</h3>
     <h6 className="text-white absolute font-medium text-[14px] left-[45px] top-[300px] font-jost">SHOP NOW</h6>
    <div className=" absolute left-[45px] top-[320px] h-[2px] w-[50px] bg-white hover:w-[80px] transition-all duration-300"></div>
 </div>

            </div>
               <div className="lg:w-[650px]">
                 <Image imgSrc={men} imgAlt={men}/>
               </div>
               
                
            </Flex>
        </Container>

        </div>
    </>
  )
}

export default Spring