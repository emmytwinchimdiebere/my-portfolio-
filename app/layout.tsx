"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Poppins,Roboto } from 'next/font/google';
import Header from '@/Components/header';
import SetActiveLinkContextProvider from '@/context/setActiveLinkContext';
import { motion, useAnimation, useInView } from "framer-motion"
import { useRef, useEffect } from "react"
import { ThemeProvider } from '@/context/ThemePovider';



const poppins = Poppins({ subsets: ['latin'], weight:"200" });


export const metadata: Metadata = {
  title: 'Potofolio | Chukwuemeka Peter Aggiah',
  description: 'Chukwuemeka Peter Aggiah is a Full stack developer with hands on years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const ref = useRef(null)
  const controls = useAnimation()
    const isInView = useInView(ref,{once:true});
    useEffect(()=>{
      if(isInView){
        console.log(isInView)
        controls.start("visible")    
      }
    }, [isInView, controls])
  
  
    return (
    <html lang="en" className=' !scroll-smooth'>
      <body  className={`${poppins.className}  relative  overflow-x-hidden h-screen `}>

        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[68.75rem] md:w-[31.25rem] rounded-full blur-[10rem] -z-[999]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] h-[31.25rem] w-[68.75rem] md:w-[31.25] rounded-full blur-[10rem] -z-[999]]"></div>
      
      
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
     
        <SetActiveLinkContextProvider>

      <motion.main variants={{hidden: {opacity:0, y:100}, visible:{opacity: 1, y:0, }}} initial="hidden" transition={{duration:0.5, delay:0.25}} animate={controls} ref = {ref}>
  
      <Header />
   
      {children}
   
      
      </motion.main>

      </SetActiveLinkContextProvider>
      </ThemeProvider >
        
        </body>
    </html>
  )
}
