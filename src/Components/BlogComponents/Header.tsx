/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import Link from  "next/link"
import React, { useEffect, useState } from  "react"
import { SignInButton, UserButton, useAuth} from '@clerk/nextjs'
import { ArrowRightCircle, PenSquare } from 'lucide-react'



function Header() {
  const {userId, isLoaded, isSignedIn} = useAuth();

  




  return (
      <>

<div className=' flex flex-row flex-nowrap justify-between  relative w-full h-auto px-5 py-4 bg-gray-100 '>
            <div className='flex-start flex-row flex gap-[20px]  mt-[5px] text-[1.2rem] text-black '>
             <Link href={"/"} as={"/"}>

             <Image className='rounded-full w-[40px] h-[40px] ' alt='myImage' height={50} width={50} src={ "/me.png"} objectFit='center' priority = {true} quality={95}/>
             </Link>
             <Link as = {"/articles"} href={"/articles"}><h1 className='leading-[50px] font-bold'>rockycodes</h1></Link>
            
            </div>
            <div className='flex flex-row text-black gap-[10px] relative  px-8 mt-[5px] pt-[15px] '>
               {!userId || !isSignedIn ? (
                <div className = "flex flex-row rounded-lg group transition bg-green-600 text-white p-4">
                    <span className='flex flex-row gap-2  group-hover:scale-105'><SignInButton /><ArrowRightCircle className='group-hover:translate-x-2 transition cursor-pointer' /></span>
                    
                </div>
               ) : (
                    <div className='flex flex-row gap-10 text-black '>

                        <div className="font-bond text-start tracking-wide text-[1rem]">
                        <Link className="flex flex-row " href={"/createPost"} >Write <PenSquare /></Link>
                        </div>

                        <div className ="rounded-full hover:scale-105 transition">
                        <UserButton afterSignOutUrl='/articles' />
                        </div>
                       

                    </div>
               )}
           
          
            </div>

          
    </div>
   
    <div className='flex flex-col md:flex-row md:justify-between relative  pb-5 rounded-md  '>
            <div className='flex flex-col '>
            <span className='lg:text-4xl text-[1.5rem] w-screen font-extrabold leading-[5px] tracking-tight bg-gray-100 lg:p-10  py-10 px-5 '>
                RockyCodes's Daily Blog
             </span>
             <span className='text-bold lg:-mt-[42px] -mt-[35px] px-[10px] ml-5  lg:ml-8 relative'>deveosphere for every developer.</span>
            </div>

             
            </div>
      </>
  )
}

export default Header