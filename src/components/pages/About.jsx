import React from 'react'
import Container from '../Container'
import Image from './Image'
import about from "../../assets/about-1.jpg";
import Flex from '../Flex';
import about2 from "../../assets/about-2.jpg";
import { ImHeadphones } from "react-icons/im";
import { MdOutlineLocalShipping } from "react-icons/md";
import { MdSecurity } from "react-icons/md";

const About = () => {
  return (
   <>
    <div className="py-[150px]">
      <Container>
        <h3 className="text-textC font-jost font-bold text-[40px] leading-[34px] mb-15 mt-20 sm:ml-2">ABOUT UOMO</h3>
        <Image imgSrc={about} imgAlt="aboutBg" className="w-full "/>
        <h3 className="text-textC font-jost font-bold text-[24px] leading-[34px] mt-20 sm:ml-2">OUR STORY</h3>
        <h6 className="text-textC font-jost font-medium text-[18px] mt-10  sm:ml-2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h6>
        <p className="text-textC font-jost  text-[14px] mt-10 sm:ml-2">Saw wherein fruitful good days image them, midst, waters upon, saw. Seas lights seasons. Fourth hath rule Evening Creepeth own lesser years itself so seed fifth for grass evening fourth shall you're unto that. Had. Female replenish for yielding so saw all one to yielding grass you'll air sea it, open waters subdue, hath. Brought second Made. Be. Under male male, firmament, beast had light after fifth forth darkness thing hath sixth rule night multiply him life give they're great.</p>
         
        <div className="flex flex-col mt-10 md:flex-row gap-10 md:gap-20">
       
<Image imgSrc={about2} imgAlt="companymodel"/>
       

<div>
 <h3 className="text-textC font-jost font-bold text-[24px] leading-[34px] sm:ml-2 sm:mr-2">Our Company</h3>
        <p className="text-textC font-jost  text-[14px] mt-5 sm:ml-2 sm:mr-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet sapien dignissim a elementum. Sociis metus, hendrerit mauris id in. Quis sit sit ultrices tincidunt euismod luctus diam. Turpis sodales orci etiam phasellus lacus id leo. Amet turpis nunc, nulla massa est viverra interdum. Praesent auctor nulla morbi non posuere mattis. Arcu eu id maecenas cras.</p>
</div>
       
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
   </>
  )
}

export default About
