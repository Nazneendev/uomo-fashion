import React from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Image from '../pages/Image';
import collection1 from "../../assets/1.png";
import collection2 from "../../assets/2.png";
import collection3 from "../../assets/3.png";
import collection4 from "../../assets/4.png";

const Collection = () => {
  return (
    <div className="py-[60px] md:py-[100px]">
      <Container>
        
        <Flex className="flex-col lg:flex-row justify-between items-center gap-2">
          
          
          <div className="w-full lg:w-1/2">
            <Image imgSrc={collection1} imgAlt={collection1} className="w-full " />
          </div>

         
          <div className="w-full lg:w-1/2 mt-4 lg:mt-0">
            <Image imgSrc={collection2} imgAlt={collection2} className="w-full " />
            
            <Flex className="justify-between gap-2 mt-2 flex-col w-[550px] sm:ml-2  sm:flex-row">
              <Image imgSrc={collection3} imgAlt={collection3} className="w-full " />
              <Image imgSrc={collection4} imgAlt={collection4} className="w-full " />
            </Flex>
          </div>

        </Flex>
      </Container>
    </div>
  );
};

export default Collection;
