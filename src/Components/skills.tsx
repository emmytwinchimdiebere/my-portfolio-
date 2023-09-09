"use client"
import React from 'react'
import { useSectionInview } from '@/hooks/hooks';
import { skills } from '../../lib/data';
import {animate, motion} from "framer-motion"

function Skills() {
    const {ref} = useSectionInview("Skills")

    const  fadeInEffectsVariant = {
      initial: {opacity:0, y:100},
      animate: (index:number)=>({opacity:1 , y:0,   transition: {delay: 0.05 * index}})
    }
  return (
    <section id = "Skills" ref = {ref} className = "group justify-center relative  m-auto pb-[20px] shadow-md items-center bg-white lg:w-[50%] rounded-md ">
        <h1 className = "text-black flex justify-center items-center text-3xl md:text-4xl font-extrabold top-[40px] tracking-wider relative  ">Skills</h1>
      <ul className= " p-[10px] translate-x-[5%] before:relative flex flex-row  lg:flex lg:flex-row flex-wrap decoration-inherit mt-[40px] lg:p-[20px]">
          {skills.map((items, index) => {
            return (
              <motion.li variants={fadeInEffectsVariant}  animate= "animate" initial = "initial" whileInView="animate" custom={index} viewport={{once:true}} className=' hover:bg-gray-100 shadow-2xl rounded-lg text-[1rem] bg-white text-black gap-[20px] p-[20px] lg:m-[20px] m-[10px] ' key={index}>{items}</motion.li>
            )
          })}
      </ul>
    
    </section>
  )
}

export default Skills;