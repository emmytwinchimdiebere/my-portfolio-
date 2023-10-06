import Header from '@/Components/BlogComponents/Header'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from 'react'
import "./globals.css"


export const metadata : Metadata = {
    title:"Blog Articles",
    description:"this is a blog page that cover articles in technology , developement,  etc"

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