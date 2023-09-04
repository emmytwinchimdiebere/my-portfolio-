"use client"
import { StaticImageData } from 'next/image'
import React, {useRef} from 'react'
import Image from "next/image"
import {motion, useScroll, useTransform} from "framer-motion"




type projectProps = {
    description :string,
    title:string,
    imageUrl:StaticImageData,
    tags:ReadonlyArray<string>,
}


const RenderProject:React.FC<projectProps> =  ({description, title, imageUrl, tags})=>{
         const ref =  useRef<HTMLDivElement>(null);
         const {scrollYProgress} = useScroll({
            target:ref,
            offset:["0 1", "1.33 1"]

         })

         const scrollYScale = useTransform(scrollYProgress, [0, 1], [0.5, 1])
         const scrollYOpacity = useTransform(scrollYProgress, [0, 1],  [0.6,  1 ])
    return (
        
        <motion.div ref = {ref} style={{opacity:scrollYOpacity, scale:scrollYScale}} className = "mb-3 last:mb-3">

        <section  className= "group hover:bg-gray-200 transition rounded-lg w-100 md:w-1/2 mb-10 bg-gray-100 relative max-h-screen flex md:flex-row md:m-auto overflow-hidden space-y-4   border-black/50 " >
         
         
         
         <div className="flex flex-col justify-start w-1/2  right-8 h-full">

       <div className = "mb-3 text-3xl font-extrabold md:p-[20px] capitalize p-[20px]">

       <p>{title}</p>
       </div>

        <div  className = "relative text-gray-800 px-[20px] ">
           <span> {description}</span>
        </div>
      
       <div className='relative flex md:p-[40px] leading-[1px] py-[20px] px-[20px]'>
               <ul className="flex flex-wrap gap-[20px] "> 
           {tags?.map((tag, index)=>( 
               <li className="tracking-wider text-[14px] md:text-[1rem]  bg-black/50 p-[10px] md:p-[10px] text-white leading-relaxed flex rounded-full"  key={index}>{tag}</li>
           ))}
           </ul>
               </div>
         </div>

           <div className=" absolute w-[50%]  md:w-full lg:-right-[55%] pl-[20px] right-0 lg:pr-[40px] top-10 shadow-2xl transition">
           <Image className='w-[28.25rem] h-full group-hover:-translate-x-[30px] group-hover:-translate-y-[30px] group-hover:scale-[1.04]
            group-even:right-[initial] group-even:-left-40' src={imageUrl}  alt="images" priority = {true} quality = {95}/>
           </div>
       </section>

        </motion.div>
    )
}


export default RenderProject