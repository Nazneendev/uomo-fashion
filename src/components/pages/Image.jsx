import React from 'react'

const Image = ({imgSrc,imgAlt}) => {
  return (
     <img src={imgSrc} alt={imgAlt} className="block w-full h-auto" />
  )
}

export default Image