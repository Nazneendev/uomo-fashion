import React from 'react'
import Banner from '../layout/Banner'
import Collection from '../layout/Collection'
import Products from '../layout/Products'
import Spring from '../layout/Spring'
import LimitedEdition from '../layout/LimitedEdition'
import UomoImage from '../layout/UomoImage'

const Home = () => {
  return (
    <>
      <Banner/>
      <Collection/>
      <Products/>
      <Spring/>
      <LimitedEdition/>
      <UomoImage/>
    </>
  )
}

export default Home