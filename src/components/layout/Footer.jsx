import React from 'react'
import Container from '../Container'
import Image from '../pages/Image'
import logo from "../../assets/logo.png";
import payment from "../../assets/payment.png";
import Flex from '../Flex';

const Footer = () => {
  return (
    <>
      <div className="bg-[#E4E4E4] py-[100px]">
        <Container>

          <Flex className="flex-col md:flex-row md:justify-between md:items-start 
              items-center text-center md:text-left gap-10">

            <div>
              <div className="w-[100px] p-2 mx-auto md:mx-0">
                <Image imgSrc={logo} imgAlt="logo" />
              </div>
              <h6 className="text-[18px] font-jost text-textC">1418 River Drive, CA 9622</h6>
              <h6 className="text-[18px] font-jost text-textC">United States</h6>
              <h6 className="text-[18px] font-jost text-textC">sale@uomo.com</h6>
              <h6 className="text-[18px] font-jost text-textC">+1 246-345-0695</h6>
            </div>

            <div className="text-[#222222]">
              <h6 className="text-[18px] font-jost font-bold">Features</h6>
              <ul className="text-[16px] font-jost text-textC">
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="text-[#222222]">
              <h6 className="text-[18px] font-jost font-bold">Products</h6>
              <ul className="text-[16px] font-jost text-textC mt-1">
                <li className="mb-3">Task Management</li>
                <li className="mb-3">Company growth</li>
                <li className="mb-3">Time tracking</li>
              </ul>
            </div>

            <div className="text-[#222222]">
              <h6 className="text-[18px] font-jost font-bold">Support</h6>
              <ul className="text-[16px] font-jost text-textC">
                <li className="mt-1">Customer service</li>
                <li className="mt-1">Accessibility</li>
                <li className="mt-1">Service</li>
                <li className="mt-1">Contact Us</li>
              </ul>
            </div>

            <div className="text-[#222222]">
              <h6 className="text-[18px] font-jost font-bold">Subscribe</h6>
              <ul className="text-[16px] font-jost text-textC mt-2">
                <li>
                  Be the first to get the latest news about trends,<br />
                  promotions, and much more!
                </li>
                <li className="mt-2">Secure Payments</li>
              </ul>
              <Image imgSrc={payment} imgAlt="payment" />
            </div>

          </Flex>

        </Container>
      </div>
    </>
  )
}

export default Footer
