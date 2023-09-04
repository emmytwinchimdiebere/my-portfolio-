"use client"
import React from  "react";
import Image from "next/image"
import {motion} from "framer-motion"
import Link from 'next/link'
import {BsArrowRight, BsArrowDown,BsLinkedin } from 'react-icons/bs'
import {FaGithubSquare} from  'react-icons/fa'
import {useState, useEffect} from  "react";
import TextTransition, {presets} from  "react-text-transition"



export default function Intro() {
  const  [index, setIndex] = useState<number>(0)

  const Texts  = ["React.", "Laravel.", "Docker.", "Javascript.", "NextJs.", "Kubernetes."]
  useEffect(()=>{
    const setTime  = setInterval(()=>setIndex((index)=>index + 1 )
    , 3000)

    return  ()=>clearTimeout(setTime);

  }, [])
  return (
   
    <div className="flex flex-col  lg:flex-row  relative w-[100%] z-[999]" id  = "Home">
       
      <motion.div initial = {{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition = {{type:"tween", duration:0.5}} className="about_me top-[50px] relative px-10 lg:w-[50%] lg:top-[10rem] flex flex-col  left-[0] lg:left-0 ">

       <div className="justify-center items-center ">
       <span className="justify-center  items-center text-3xl  lg:text-4xl "><span className="relative lg:text-4xl uppercase lg:text-blue-800 font-extrabold trans">Transforming</span> Ideas into a Digital <em className="text-6xl leading-[70px] text-red-600 font-extrabold uppercase">reality...</em></span>
       </div>

      <div className="mt-[40px] flex lg:flex-row flex-col gap-2 ">
        <Link className=" outline-none group flex active:scale-105 hover:scale-105  w-auto bg-black text-white rounded-full px-5 h-[40px] lg:text-[1rem] text-[14px] font-bold py-2 hover:bg-transparent hover:border-2 hover:border-black hover:text-black transition" href={"/contact"} >Contact me<BsArrowRight className=" group-hover:translate-x-1 transition px-[2px] mt-[5px] ml-[10px] opacity-70" /></Link>
        <a href={"/cv.pdf"} download ={true} className=" outline-none group active:scale-105 hover:scale-105 flex w-auto bg-white text-stone-900 rounded-full px-5 h-[40px] text-[1rem] font-bold py-2 hover:bg-transparent hover:border-2 hover:border-black hover:text-black ml-[10px] transition-all " >Download Cv<BsArrowDown className="group-hover:translate-x-1 transition px-[2px] mt-[5px] ml-[10px]"/>  </a>
       
        <div className = "flex flex-row gap-2 ">
       
        <a className="active:scale-105 hover:scale-105 w-1/2 ml-[10px] bg-white text-stone-800 rounded-full px-[10px] h-[40px] text-[1rem] font-bold py-[5px] hover:bg-transparent hover:border-2 hover:border-black hover:text-black transition-all  "><BsLinkedin className="mt-[6px] items-center ml-[50%] lg:ml-[5%] " /></a>
       
        <a className="active:scale-105 hover:scale-105 w-1/2  ml-[10px] bg-white text-stone-800 rounded-full px-[10px] h-[40px] text-[1rem] font-bold py-[5px] hover:bg-transparent hover:border-2 hover:border-black hover:text-black transition-all  "><FaGithubSquare className="mt-[6px] items-center ml-[50%] lg:ml-[5%]" /></a>
        </div>
      </div>
      
      
      </motion.div>





       <motion.div className="relative top-[6rem] flex px-10  lg:flex-row flex-col-reverse gap-y-12  " initial={{opacity:0,scale:0}} animate={{scale:1, opacity:1}} transition={{type:"tween", duration:0.5}}>
       
       <div className="flex  relative left-[20px] ">
       <Image quality={95} priority={true} width={300} height={300}  className="bg-gray-200 profile_img object-center grayscale-0 hover:grayscale-0 object-cover w-[400px] md:w-[300px] h-[300px]" alt= "profileImage" src = "/me.png" /> 
       </div>
      
          <div className="w-full max-w-screen-sm lg:max-w-screen relative lg:absolute right-0 top-[2rem] lg:top-[3rem] lg:translate-x-[120%]">
            <span className="text-2xl lg:text-3xl text-stone-900 text-justify !leading-[50px]  ">Hello I am <span className="font-extrabold">Peter</span>, I am  a <span className="font-extrabold">Full-stack</span> Developer with years of <span className="font-extrabold">experience</span> , i enjoy building sites & apps my focus is <TextTransition inline = {true} springConfig={presets.gentle} className="text-red-900 font-extrabold">{Texts[index %Texts.length]}</TextTransition>.</span>
          </div>
       </motion.div>
       
      
       
   
   
     

      </div>



  )
}
