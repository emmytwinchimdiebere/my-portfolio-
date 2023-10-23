import Header from '@/Components/BlogComponents/Header'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from 'react'
import "./globals.css"


export const metadata : Metadata = {
    title:"Blog Articles",
    keywords:"Internet of Things (IoT),Front-End Development, Back-End Development,Full-Stack Development, Web Design Principles,User Interface (UI),User Experience (UX), DevOps Practices, Agile DevelopmentCloud Computing, Cybersecurity, Artificial Intelligence,Machine Learning,Data Science, Mobile App Development, Technology Trends, Web Development Tools, Programming Languages, Programming Languages, Coding Tutorials, Software Development ",
    description:"Explore the ever-evolving world of technology, web development, and programming with rockycodes.vercel.app. Uncover the latest insights, trends, and tutorials on cutting-edge technologies, from web and mobile development to data science and cybersecurity. Whether you're a beginner or a seasoned pro, our platform offers a vast repository of articles, guides, and resources to enhance your skills and stay ahead in the digital landscape. Join our thriving community of tech enthusiasts, and embark on a journey of continuous learning and innovation. Start your exploration today!"

}

const roboto = Roboto({subsets:["cyrillic-ext", "vietnamese"], weight:"100"})
 
export default async function Layout({children} : {children: React.ReactNode}){
  
    return(
        <html lang='en'>
            <body className={`${roboto} bg-white relative w-[100%] h-screen  overflow-x-hidden `}>
                <Header  />
                {children}
            </body>
        </html>
    )
}