import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
   <>
   <Container>
<div className='py-[100px]'>
      <h3 className='text-[120px] mt-10 text-center text-textC font-bold '>404</h3>
      <h4 className='text-[25px] text-center text-hoverC font-bold '>Page Not Found</h4>
    
     <Link to={"/"}>
      <button className='bg-hoverC justify-center text-white px-6 py-3 mt-30 hover:bg-textC font-jost font-semibold sm:ml-5 '>Go to Home</button>
     </Link>
    </div>
   </Container>
    
   </>
  )
}

export default Notfound
