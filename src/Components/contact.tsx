"use client"
import React, { useState } from 'react'
import SectionPage from './sectionPage'
import {SendMails} from './sendMails'
import { useSectionInview } from '@/hooks/hooks'
import FormSubmitButton from './formSubmitButton'
import { motion } from 'framer-motion'
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Contact = () => {
  const [message, setMessage] = useState<string>("")
const  {ref} = useSectionInview("Contact");


const revealOnScrollVariants = {
  hidden : {opacity:0, scale:0},
  visibility: {opacity:1, scale:1}
}
const messageSender  = async ( formData : FormData) =>{
        const res = await SendMails(formData);
      
if (typeof res  === 'string') {
  // Handle the case when response is a string
      setMessage(res)
      {message ? toast(message, {type:"success", position:"bottom-right"}) : ""}
} else {
  // Handle the case when response is an object
  if (res.message) {
    // Access the 'message' property safely
    setMessage(res.message)

    {message ? toast(message, {type:"success", position:"bottom-left"}) : ""}
  } else if (res.error) {
    // Handle the 'error' property if needed
    setMessage(res.error)
    {message ? toast(message, {type:"error", position:"bottom-left"}) : ""}
  }
}
}

  return (

    <section   id = "contact" ref = {ref} className='bg-white text-black flex flex-col relative w-[min(100%, 42rem)] justify-center  px-[40px] lg:w-[50%] lg:translate-x-[50%] mt-[10px] gap-5 mb-5 pb-5'>
                <SectionPage className = "text-3xl font-bold capitalize lg:mt-[12rem] mt-[10rem]  justify-center items-center flex ">Contact</SectionPage>
           <span className="text-center text-gray-500">Please you can reach to me on this email <a className = "underline font-bold" href='mailto:emmytwinchimdiebere@gmail.com'>emmytwinchimdiebere@gmail.com</a> or use the contact form below to send a message with your email address</span>
    <motion.form variants={revealOnScrollVariants} initial = "hidden" whileInView =  {"visibility"} animate = {{transition:{duration:0.05}}} action={messageSender} className='relative flex flex-col w-full gap-10 py-[10px] pb-[20px]' >
     
     <input className='h-[48px]  border-blue-300 border-[1px] relative' type='email' placeholder='please enter your email address' maxLength={50} required name = "senderEmail"/>
     <textarea className = "h-[300px] border-blue-300 border-[1px] relative" placeholder='Enter Message  ' name = "message" maxLength={5000}  required/>

    <FormSubmitButton />
        
 </motion.form>
 <ToastContainer />
    </section>
  
  )
}

export default Contact