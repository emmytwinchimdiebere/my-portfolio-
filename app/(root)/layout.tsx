"use client"
import './globals.css'
import type { Metadata } from 'next'
import { Inter,Poppins,Roboto } from 'next/font/google';
import Header from '@/Components/header';
import SetActiveLinkContextProvider from '@/context/setActiveLinkContext';
import { ThemeProvider } from '@/context/ThemePovider';
import MobileLinks from "@/Components/mobileLinks"



const poppins = Poppins({ subsets: ['latin'], weight:"200" });
const inter =  Inter({subsets: ['latin'], weight:"300"});


 const metadata: Metadata = {
  title: 'Potofolio | Chukwuemeka Peter Aggiah',
  description: 'Chukwuemeka Peter Aggiah is a Full stack developer with hands on years of experience',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

 
  
    return (
    <html lang="en" >
      <body  className={`${poppins.className} overflow-x-hidden dark:text-white`}>

        <div className="bg-[#fbe2e3] hidden lg:flex absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[68.75rem] md:w-[31.25rem] rounded-full blur-[10rem] -z-[999]"></div>
        <div className="bg-[#dbd7fb] absolute hidden lg:flex top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] h-[31.25rem] w-[40rem] lg:w-[60rem] md:w-[31.25] rounded-full blur-[10rem] -z-[999]]"></div>
      
      
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
     
        <SetActiveLinkContextProvider>

      <main>
  
      <Header />
      <MobileLinks />
      {children}
   
      
      </main>

      </SetActiveLinkContextProvider>
      </ThemeProvider >
        
        </body>
    </html>
  )
}
