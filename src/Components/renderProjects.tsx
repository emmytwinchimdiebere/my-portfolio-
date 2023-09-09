"use client"
import { StaticImageData } from 'next/image'
import React, {useRef,useCallback, useEffect} from 'react'
import Image from "next/image"
import {motion, useScroll, useTransform} from "framer-motion"






type projectProps = {
    description :string,
    title:string,
    imageUrl:StaticImageData,
    tags:ReadonlyArray<string>,
}


const RenderProject:React.FC<projectProps> =  ({description, title, imageUrl, tags})=>{
  
    const ref =  useRef<HTMLDivElement | null>(null);
  
     const {scrollYProgress} = useScroll({target:ref, offset:["0 1", "1.33 1"]})
    const scrollYScale = useTransform(scrollYProgress, [0, 1], [0.5, 1])
    const scrollYOpacity = useTransform(scrollYProgress, [0, 1],  [0.6,  1 ]);
                                            
         return (
        
        <motion.div ref = {ref} style={{opacity:scrollYOpacity, scale:scrollYScale}} className = "mb-3 last:mb-3 w-[100%]">

        <section  className= "group hover:bg-gray-200 transition rounded-lg w-100 md:w-1/2 mb-[10px] bg-gray-100 relative flex-col max-h-screen flex lg:flex-row md:m-auto overflow-hidden space-y-4   border-black/50 " >
         
         
         
         <div className="flex flex-col justify-start lg:w-1/2 w-[100%]  right-8 h-full">

       <div className = "text-black mb-3 text-3xl font-extrabold md:p-[20px] capitalize p-[20px] lg:items-start items-center justify-center m-auto lg:m-0">

       <p>{title}</p>
       </div>

        <div  className = "relative text-gray-800 px-[20px] ">
           <span> {description}</span>
        </div>
      
       <div className='relative flex md:p-[40px] leading-[1px] py-[20px] px-[20px] ml-[20px]'>
               <ul className="flex flex-wrap gap-[20px] "> 
           {tags?.map((tag, index)=>( 
               <li className="tracking-wider text-[14px] md:text-[1rem]  bg-black/50 p-[10px] md:p-[10px] text-white leading-relaxed flex rounded-full"  key={index}>{tag}</li>
           ))}
           </ul>
               </div>
         </div>

           <div className="lg:absolute  w-[100%] md:w-full lg:right-0 lg:left-[25%] pl-[20px] right-0 lg:pr-[20px] top-10 shadow-2xl transition">
           <Image className='m-auto  object-center object-cover w-[28.25rem] h-full group-hover:-translate-x-[30px] group-hover:-translate-y-[30px] group-hover:scale-[1.04]
            group-even:right-[initial] group-even:-left-40' src={imageUrl}  alt="images" priority = {true} quality = {95}/>
           </div>
       </section>
           
        </motion.div>
    )
}


export default RenderProject