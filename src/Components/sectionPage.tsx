import React from 'react'

export default function SectionPage({children} : {children: React.ReactNode }) {
  return <h2 className = "text-3xl font-bold capitalize lg:mt-[16rem] mt-[10rem]  justify-center items-center flex ">{children}</h2>

}

