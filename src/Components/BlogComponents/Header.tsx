/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import Link from  "next/link"
import { FaArrowCircleRight, FaInfoCircle } from 'react-icons/fa'
import React, { useEffect, useState } from  "react"
import { client } from "../../../sanity/lib/client"
import { SanityDocument } from "next-sanity"
import { QueryByCatgory } from "../../../lib/query"

function Header() {
  const [category, setCategory] = useState<SanityDocument[]>();
  const [loader, setLoader] = useState<boolean>()

 

  const fetchCategories = async ()=>{
      setLoader(!loader)
      const fetch = await client.fetch<SanityDocument[]>(QueryByCatgory);
      if(fetch){
          setLoader(false)
          setCategory(fetch);
      }
  }
  useEffect(()=>{
      fetchCategories()
  },[])
  
  console.log(category)
  return (
      <>

<div className=' flex flex-row flex-nowrap  justify-between relative w-full h-auto px-5 py-4 bg-gray-100 '>
            <div className='flex-start flex-row flex gap-[20px]  mt-[5px] text-[1.2rem] text-black'>
             <Link href={"/"} as={"/"}>

             <Image className='rounded-full w-[40px] h-[40px] ' alt='myImage' height={50} width={50} src={ "/me.png"} objectFit='center' priority = {true} quality={95}/>
             </Link>
             <Link as = {"/articles"} href={"/articles"}><h1 className='leading-[50px] font-bold'>rockycodes</h1></Link>
               
            </div>
            <div className='flex flex-row text-black gap-[10px] relative overflow-x-auto whitespace-nowrap inlineelement  '>
                {category && category?.map((link)=>(
                 <div key={link._id} className=' text-[1.2rem] transition md:text-[.1.4rem] mt-[10px] hover:bg-black/10 hover:rounded-full px-[15px]  pt-[5px] ' >
                     <Link   href={`/categories/${link._id}`}>{link.title}</Link>
                 </div>
                ))}

              <div className='leading-[50px]'>
              <span className='group flex w-[100%] gap-[5px] flex-row text-blue-700 border-2 border-black/50 bg-transparent  px-[10px] py-[4px] rounded-full relative hover:bg-white hover:text-black transition md:right[20%] right-[1%]'> Subscribe to our Daily News Letter <FaArrowCircleRight className='relative top-[15px]  group-hover:translate-x-1 transition-all' /></span>
            </div>
            </div>

          
    </div>
   
    <div className='flex flex-col md:flex-row md:justify-between relative  py-5 rounded-md mt-[10px]  '>
            <div className='flex flex-col mt-[15px]'>
            <span className='lg:text-4xl text-[1.5rem] w-screen font-extrabold leading-[5px] tracking-tight bg-gray-100 lg:p-10  py-10 px-5 '>
                RockyCodes's Daily Blog
             </span>
             <span className='text-bold lg:-mt-[42px] -mt-[35px] px-[10px] ml-5  lg:ml-8 relative'>deveosphere for every developer.</span>
            </div>

             <div className='mt-[20px] flex flex-row  px-10 py-5 bg-gray-50'>
              <FaInfoCircle className='text-3xl relative mt-5 animate-ping h-5 w-5 rounded-full text-purple-800 '  />
             <span className='text-gray-300 bg-gray-50 p-4'>News in product features,tutotrials on latest tech, Weekly News letter to keep you Updated & much more.</span>
             </div>
            </div>
      </>
  )
}

export default Header