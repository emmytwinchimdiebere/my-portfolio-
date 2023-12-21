import Header from '@/Components/BlogComponents/Header'
import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import React from 'react'
import "./globals.css"
import { ClerkProvider } from '@clerk/nextjs'

import { Analytics } from '@vercel/analytics/react'

export const metadata : Metadata = {
    title:"Blog Articles",
    description:"this is a blog page that cover articles in technology , developement,  etc"

}

const roboto = Roboto({subsets:["cyrillic-ext", "vietnamese"], weight:"100"})
 
export default function RootLayout({children} : {children: React.ReactNode}){
    return(
        <ClerkProvider>
        <html lang='en'>
            <body className={`${roboto} bg-white relative w-[100%] h-[100%] scroll-smooth  overflow-x-hidden `}>
         
                <Header />
              {children}
             
               
                <Analytics />
            </body>
        </html>

        </ClerkProvider>
    )
}