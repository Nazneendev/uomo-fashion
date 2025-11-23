import React from 'react'
import blogbg from "../../assets/blog_title_bg.jpg";
import Container from '../Container';
import Image from './Image';
import blog1 from "../../assets/blog-1.jpg";
import blog2 from "../../assets/blog-2.jpg";
import blog3 from "../../assets/blog-3.jpg";
import blog4 from "../../assets/blog-4.jpg";
import Flex from '../Flex';

const Blog = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${blogbg})`}} className=" bg-center bg-cover bg-no-repeat  py-[100px]">
        <Container>
          <div className="sm:ml-5">
            <h3 className="text-textC font-jost font-bold text-[46px] leading-[34px] mt-20">THE BLOG</h3>
            <ul className="flex items-center gap-3 mt-10">
              <li className="text-[14px] font-jost text-textC font-bold">ALL</li>
              <li className="text-[14px] font-jost text-textC font-bold">COMPANY</li>
              <li className="text-[14px] font-jost text-textC font-bold">FASHION</li>
              <li className="text-[14px] font-jost text-textC font-bold">STYLE</li>
             
            </ul>
          </div>
        
        </Container>
      </div>
      <Container>
      <Flex className="grid grid-cols-2 gap-8 sm:ml-2 py-[50px]">
<div className="sm:ml-[5px]">
            <Image imgSrc={blog1} imgAlt="blogImg"/>
            <h6 className="text-[14px] font-jost text-textC font-medium mt-5 ">By Admin:Aprial 05, 2023</h6>
            <h3 className="text-[18px] font-jost text-textC font-medium ">Woman with good shoes is never be ugly place</h3>
            <p className="text-[14px] font-jost text-textC  ">Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.</p>
            <div className="relative group text-[14px] font-jost text-textC font-bold">
<h3 className=" hover:text-hoverC  transition-colors mt-10 duration-300 ">DISCOVER ALL</h3>
 <span className="absolute   bottom-0  h-[2px] bg-hoverC transition-all duration-300  w-[80px] group-hover:w-[110px]"></span>
</div>
          </div>
          <div className="">
            <Image imgSrc={blog2} imgAlt="blogImg"/>
            <h6 className="text-[14px] font-jost text-textC font-medium mt-5">By Admin:Aprial 05, 2023</h6>
            <h3 className="text-[18px] font-jost text-textC font-medium">Woman with good shoes is never be ugly place</h3>
            <p className="text-[14px] font-jost text-textC ">Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.</p>
            <div className="relative group text-[14px] font-jost text-textC font-bold">
<h3 className=" hover:text-hoverC  transition-colors mt-10 duration-300">DISCOVER ALL</h3>
 <span className="absolute   bottom-0  h-[2px] bg-hoverC transition-all duration-300  w-[80px] group-hover:w-[110px]"></span>
</div>
          </div>
           <div className="">
            <Image imgSrc={blog3} imgAlt="blogImg"/>
            <h6 className="text-[14px] font-jost text-textC font-medium mt-5">By Admin:Aprial 05, 2023</h6>
            <h3 className="text-[18px] font-jost text-textC font-medium">Woman with good shoes is never be ugly place</h3>
            <p className="text-[14px] font-jost text-textC ">Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.</p>
            <div className="relative group text-[14px] font-jost text-textC font-bold">
<h3 className=" hover:text-hoverC  transition-colors mt-10 duration-300">DISCOVER ALL</h3>
 <span className="absolute   bottom-0  h-[2px] bg-hoverC transition-all duration-300  w-[80px] group-hover:w-[110px]"></span>
</div>
          </div>
          <div className="sm:ml-[5px]">
            <Image imgSrc={blog4} imgAlt="blogImg"/>
            <h6 className="text-[14px] font-jost text-textC font-medium mt-5 ">By Admin:Aprial 05, 2023</h6>
            <h3 className="text-[18px] font-jost text-textC font-medium ">Woman with good shoes is never be ugly place</h3>
            <p className="text-[14px] font-jost text-textC  ">Midst one brought greater also morning green saying had good. Open stars day let over gathered, grass face one every light of under.</p>
            <div className="relative group text-[14px] font-jost text-textC font-bold ">
<h3 className=" hover:text-hoverC  transition-colors mt-10 duration-300 ">DISCOVER ALL</h3>
 <span className="absolute   bottom-0  h-[2px] bg-hoverC transition-all duration-300  w-[80px] group-hover:w-[110px] "></span>
</div>
          </div>
      </Flex>
 
      </Container>
       
    </>
  )
}

export default Blog