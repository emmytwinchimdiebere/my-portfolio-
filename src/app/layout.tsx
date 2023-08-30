import './globals.css'
import type { Metadata } from 'next'
import { Inter,Poppins,Roboto } from 'next/font/google';
import Header from '@/Components/header';




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
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-stone-50 text-gray-950 relative h-screen overflow-x-hidden`}>

        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[68.75rem] md:w-[31.25rem] rounded-full blur-[10rem] -z-[999]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] md:left-[-33rem] lg:left-[-28rem] h-[31.25rem] w-[68.75rem] md:w-[31.25] rounded-full blur-[10rem] -z-[999]]"></div>
        <Header />
   
        {children}
        
        </body>
    </html>
  )
}
