"use client"
import { links } from '../../lib/data';
import React from 'react'
import {motion} from "framer-motion";
import Link from "next/link";
import {usePathname} from  'next/navigation'


export default function Header() {
       const path = usePathname();
       console.log(path);


  return (
    <header className='w-full flex-wrap z-[999] m-auto flex flex-row relative md:rounded-none  pb-6 px-4  md:pb-0 md:top-0 top-[2rem] left-5 md:w-full md:bg-white md:left-0'>
     
            <motion.div initial = {{opacity:0 , scale:0}} animate={{opacity:1, scale:1}} transition={{type:"spring", damping:10}} className = "justify-start logo hidden md:flex text-2xl font-bold px-4 p-5 ml-10 hover:text-stone-700">
              <span>rockycodes</span>
            </motion.div>

            <motion.div initial = {{opacity:0 , scale:0}} animate={{opacity:1, scale:1}} transition={{type:"spring", damping:10}} className = " md:p-6  md:absolute md:right-1 md:left-[70%]  bg-white shadow-black/[0.5] pb-6 md:pb-0 px-5   rounded-full md:rounded-none md:w-full md:px-0 ">
                  
        <ul  className="flex flex-row flex-nowrap">
       
       {links.map((link)=>(
         <li key={link.path}>
          
           <Link  className = {`${link.path === path && "text-red-800 font-extrabold"} link py-4  px-4 mt-0  relative font-medium  hover:text-blue-800`} href = {link.path}>{link.name}</Link>
         </li>
       ))}
   </ul>
            </motion.div>

   

 </header>
  )
}
