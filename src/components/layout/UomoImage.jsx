import React from 'react'
import Container from '../Container'
import Image from '../pages/Image'

import insta1 from "../../assets/insta1.jpg";
import insta2 from "../../assets/insta2.jpg";
import insta3 from "../../assets/insta3.jpg";
import insta4 from "../../assets/insta4.jpg";
import insta5 from "../../assets/insta5.jpg";
import insta6 from "../../assets/insta6.jpg";
import insta7 from "../../assets/insta7.jpg";
import insta8 from "../../assets/insta8.jpg";
import insta9 from "../../assets/insta9.jpg";
import insta10 from "../../assets/insta10.jpg";
import insta11 from "../../assets/insta11.jpg";
import insta12 from "../../assets/insta12.jpg";
import Flex from '../Flex';
import { ImHeadphones } from "react-icons/im";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdSecurity } from "react-icons/md";

const images = [
  insta1, insta2, insta3, insta4, insta5, insta6,
  insta7, insta8, insta9, insta10, insta11, insta12
];

const UomoImage = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <h3 className="text-textC font-jost font-medium text-center text-[40px]">@UOMO</h3>

        <div className="flex flex-wrap mt-5">
          {images.map((img, i) => (
            <div 
              key={i}
              className="w-1/6 p-2 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-xl overflow-hidden"
            >
              <Image imgSrc={img} imgAlt="product" className="w-full" />
            </div>
          ))}
        </div>

       <Flex className="flex-col sm:flex-row justify-between items-center gap-10 sm:ml-2 sm:mr-2 mt-30">


  <div className="flex flex-col items-center text-center">
    <ImHeadphones className="text-textC text-[60px] sm:text-[80px]" />
    <h3 className="text-textC font-jost font-medium text-[18px] sm:text-[20px] mt-4">
      24/7 CUSTOMER SUPPORT
    </h3>
    <h6 className="text-textC font-jost text-[14px] sm:text-[14px]">
      Friendly 24/7 customer support
    </h6>
  </div>
 
  <div className="flex flex-col items-center text-center">
    <MdOutlineLocalShipping className="text-textC text-[60px] sm:text-[80px]" />
    <h3 className="text-textC font-jost font-medium text-[18px] sm:text-[20px] mt-4">
      FAST AND FREE DELIVERY
    </h3>
    <h6 className="text-textC font-jost text-[14px] sm:text-[14px]">
      Free delivery for all orders over $140
    </h6>
  </div>
 
  <div className="flex flex-col items-center text-center">
    <MdSecurity className="text-textC text-[60px] sm:text-[80px]" />
    <h3 className="text-textC font-jost font-medium text-[18px] sm:text-[20px] mt-4">
      MONEY BACK GUARANTEE
    </h3>
    <h6 className="text-textC font-jost text-[14px] sm:text-[14px]">
      We return money within 30 days
    </h6>
  </div>

</Flex>


      </Container>
    </div>
  )
}

export default UomoImage;
