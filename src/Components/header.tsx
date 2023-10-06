"use client"
import { links } from '../../lib/data';
import React, { useState} from 'react'
import {motion} from "framer-motion";
import Link from "next/link";
import clsx from 'clsx';
import {useActiveSectionProvider } from '@/context/setActiveLinkContext';
import { ThemeToggle } from './toggleTheme';


export default function Header() {
  const {activeLink, setActiveLink, setLastTimeLinkClicked} = useActiveSectionProvider()



      
    

  return (
    <header className='fixed flex-wrap z-[999] w-screen   flex flex-row  md:rounded-none  py-[10px]  px-4  lg:py-[20px] top-0  bg-white left-0'>
     
            <motion.div  className = "text-black scroll:mt-[10px] md:scroll-mt-[2px] justify-start logo  flex text-2xl font-bold relative left-[10px] py-[10px]  lg:py-[20px] hover:text-stone-700">
              <span>rockycodes</span>
            </motion.div>
              <div className="px-[16px] absolute right-0 py-[10px] lg:py-[20px] lg:absolute lg:right-10 md:right-5   z-[999]">
              <ThemeToggle />
              </div>
            <motion.div  className = " md:p-6  absolute right-1 md:left-[50%]  bg-white shadow-black/[0.5]  md:pb-0   md:rounded-none w-full md:px-0 ">
                  
        <ul  className="flex-row flex-nowrap hidden lg:flex">
     
       {links.map((link)=>{
         
          return (
          <li  onClick = {()=>{setActiveLink(link.name); setLastTimeLinkClicked(Date.now())}} className='relative ' key={link.path}>

            
             
            <Link  className = {clsx("text-black relative link py-4  px-4 mt-0  font-medium  hover:text-blue-800 right-12", {
                "text-lime-500 md:bg-gray-100 ring-offset-neutral-400 md:rounded-full ring-fuchsia-500 p-5": activeLink === link.name
            })} 
            
            href = {link.path}
           
            >
            
            {link.name}
            
            {
                   activeLink === link.name && (  <motion.span transition={{stiffness:200, damping:20,  type:"spring"}} className = "hidden md:flex bg-gray-100 -z-10 rounded-full text-black font-medium absolute inset-0 "></motion.span>
       )}
      
            </Link>
          </li>
        )})}
       
       
   </ul>
            </motion.div>

   

 </header>
  )
}
