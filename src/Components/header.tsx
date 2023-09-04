"use client"
import { links } from '../../lib/data';
import React, { useState } from 'react'
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname} from  'next/navigation'
import clsx from 'clsx';


export default function Header() {
   

       const [activeLink, setActiveLink] = useState("Home")
    

  return (
    <header className='w-full flex-wrap z-[999] m-auto flex flex-row relative md:rounded-none  pb-6 px-4  md:pb-0 md:top-0 top-[2rem] left-5 md:w-full md:bg-white md:left-0'>
     
            <motion.div initial = {{opacity:0 , scale:0}} animate={{opacity:1, scale:1}} transition={{type:"spring", damping:10}} className = "justify-start logo hidden md:flex text-2xl font-bold px-4 p-5 ml-10 hover:text-stone-700">
              <span>rockycodes</span>
            </motion.div>

            <motion.div initial = {{opacity:0 , scale:0}} animate={{opacity:1, scale:1}} transition={{type:"spring", damping:10}} className = " md:p-6  md:absolute md:right-1 md:left-[70%]  bg-white shadow-black/[0.5] pb-6 md:pb-0 px-5   rounded-full md:rounded-none md:w-full md:px-0 ">
                  
        <ul  className="flex flex-row flex-nowrap">
       
       {links.map((link)=>{
         
          return (
          <li  onClick = {()=>setActiveLink(link.name)} className='relative' key={link.path}>
          
            <Link  className = {clsx(" relative link py-4  px-4 mt-0  font-medium  hover:text-blue-800", {
                "text-lime-500 md:bg-gray-100 ring-offset-neutral-400 md:rounded-full ring-fuchsia-500 p-5": activeLink === link.name
            })} 
            
            href = {link.path}
           
            >
            
            {link.name}
            
            {
                   activeLink === link.name && (  <span className = "hidden md:flex bg-gray-100 -z-10 rounded-full text-black font-medium absolute inset-0 "></span>
       )}
      
            </Link>
          </li>
        )})}
       
       
   </ul>
            </motion.div>

   

 </header>
  )
}
