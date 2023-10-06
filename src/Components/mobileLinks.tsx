"use client"
import React from 'react'
import { links } from '../../lib/data'
import { useActiveSectionProvider } from '@/context/setActiveLinkContext';
import Link from 'next/link';
import clsx from 'clsx';
import {motion } from  "framer-motion"


function MobileLinks() {
    const {activeLink, setActiveLink, setLastTimeLinkClicked} = useActiveSectionProvider()
  return (
    <header className='fixed mobile flex bg-blue-700 w-screen lg:hidden h-auto justify-end items-end  flex-wrap px-4 -mt-[30px]  '>
        <div className = "overflow-x-auto whitespace-nowrap w-[100%] p-5 top-0 inlineelement">
          
<ul  className=" lg:hidden inline flex-row flex-nowrap  m-0  ">
     
     {links.map((link)=>{
       
        return (
        <li  onClick = {()=>{setActiveLink(link.name); setLastTimeLinkClicked(Date.now())}} className='relative inline-flex ' key={link.path}>

          
           
          <Link  className = {clsx("text-white relative link   px-4 mt-0  font-medium  hover:text-black", {
              "text-lime-500  ring-offset-neutral-400 px-[15px] py-[10px] ": activeLink === link.name
          })} 
          
          href = {link.path}
         
          >
          
          {link.name}
          
          {
                 activeLink === link.name && (  <motion.span transition={{stiffness:200, damping:20,  type:"spring"}} className = "flex text-white bg-black/10 rounded-full -z-10  font-light absolute inset-0 "></motion.span>
     )}
    
          </Link>
        </li>
      )})}
     
     
 </ul>
        </div>
    </header>
  )
}

export default MobileLinks