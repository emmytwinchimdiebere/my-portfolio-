/* eslint-disable react/no-unescaped-entities */
"use client"
import { useSectionInview } from '@/hooks/hooks'
import React from 'react'
import SectionPage from './sectionPage'
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

type Props = {}

const Aboutme = (props: Props) => {

    const {ref} = useSectionInview("About");


    return (

    <motion.section whileInView = "visible"  variants={{hidden: {opacity:0, y:100}, visible:{opacity: 1, y:0, }}} initial="hidden" transition={{duration:0.5, type:"tween"}}  id = "about" className = "justify-center items-center lg:max-w-[45rem] m-auto tracking-wider w-[100%] !leading-[45px] px-[25px] text-justify py-[20px]"  ref = {ref}>
<SectionPage className="text-3xl lg:4xl font-extrabold capitalize lg:mt-[18rem] mt-[11rem]  justify-center items-center flex ">About me</SectionPage>
   <span className = " mt-[20px]"> Hello! I'm  <span className='font-extrabold'>Peter ,</span> a passionate software developer with a primary focus on creating innovative web applications. With a strong background in modern technologies, I bring a wealth of experience to every project I undertake.

    <span className='font-bold'>My favourite part  of programing is the problem solving aspect, i usually enjoy that feel when you finally  solved the problem. </span>
    <span className='font-bold'> my core stack includs React, Next js, Node Js , and Backend with Laravel.</span>
    <span className='font-bold'> My passion for technology goes beyond the code. I'm driven by the opportunity to build applications that make a positive impact on people's lives. Whether it's streamlining business operations, enhancing user engagement, or solving real-world problems, I believe in the transformative power of software. </span>
    <span className='font-bold'>I'm currently looking for a full time position as a <span>software developer</span> please feel free to contact me. </span>
    <span className='font-bold'>Thank you for visiting my portfolio, and I look forward to connecting with you.</span>

    </span>
    </motion.section>
  )
}

export default Aboutme