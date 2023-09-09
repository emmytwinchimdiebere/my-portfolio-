import React from 'react'
import Image from  "next/image"
type Props = {}

const TopLeftImg = (props: Props) => {
  return (
    <div className = "hidden lg:flex  hover:mix-blend-screen lg:mix-blend-color-burn  absolute top-0 right-0 z-[200px] md:w-[400px] opacity-50">
      <Image src = "/photo-.webp " width={400} height = {400} quality = {95} alt ="designer" />
    </div>
  )
}
export default TopLeftImg