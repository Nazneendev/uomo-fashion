import React from 'react'
import Container from '../Container'
import Flex from '../Flex'

const Contact = () => {
  return (
   <>
    <div className="py-[100px]">
      <Container>
        <h3 className="font-bold font-jost text-[40px] sm:ml-2 text-hoverC">Contact Us</h3>
         <div className="mt-10">
            <iframe width="100%" height="600" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=new%20market,dhaka+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.mapsdirections.info/fr/calculer-la-population-sur-une-carte">Calculateur de carte de population</a></iframe>
          </div>
          <Flex className="gap-20 sm:ml-2 mt-20 items-center">
 <div className="text-textC">
            <h3 className="text-[28px] font-jost">Store in London</h3>
            <h6 className="text-[14px]  mt-2 font-jost ">1418 River Drive, Suite 35 Cottonhall, CA 9622</h6>
            <h6 className="text-[18px]  mt-2 font-jost ">United Kingdom</h6>
            <h6 className="text-[14px]  mt-2 font-jost ">sale@uomo.com</h6>
            <h6 className="text-[14px]  mt-2 font-jost ">+44 20 7123 4567</h6>
          </div>
 <div className="text-textC">
            <h3 className="text-[28px] font-jost">Store in Istambul</h3>
            <h6 className="text-[14px]  mt-2 font-jost ">1418 River Drive, Suite 35 Cottonhall, CA 9622</h6>
            <h6 className="text-[18px]  mt-2 font-jost ">United Kingdom</h6>
            <h6 className="text-[14px]  mt-2 font-jost ">sale@uomo.com</h6>
            <h6 className="text-[14px] mt-2  font-jost ">+44 20 7123 4567</h6>
          </div>
          </Flex>
         
           <h5 className="font-medium font-jost text-[30px] text-hoverC sm:ml-2 mt-15">Get In Touch</h5>
           <form className="sm:ml-2 sm:mr-2 mt-10">
            <div className=" gap-10">
              <input
                type="text"
                placeholder="Your Name"
                className="border w-full mt-4 text-textC border-[#E0E0E0] px-4 py-3 "
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border w-full mt-4 text-textC border-[#E0E0E0] px-4 py-3 "
              />
              
              <textarea
                placeholder="Message"
                className="border w-full mt-4 text-textC border-[#E0E0E0] px-4 py-3  h-[150px]"
              ></textarea>
            </div>
            <button className="mt-5 bg-hoverC text-white font-dm font-bold text-[14px] py-3 px-8">
              Send Message
            </button>

          </form>

      </Container>
    </div>
   </>
  )
}

export default Contact
