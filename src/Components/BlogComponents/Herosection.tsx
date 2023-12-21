    import React from "react"
    import elon from "../../../public/elon.jpg"
    import Image from "next/image"




export const HeroSection = async()=>{
  

    return(
        <div className = "lg:border-b-1 border-b-2 border-black w-[100%] h-auto py-[30px] backdrop-blur-lg bg-white relative grid grid-cols-1 md:grid-cols-2  gap-[20px] sm:gap-2 ">
                <div className="text-lg font-bold flex flex-col pb-[20px] text-center justify-center ">
                        <h1 className="text-3xl lg:text-5xl font-extrabold pt-[5px] ">
                            Hey✌ is rockycodes!
                        </h1>
                        <h1 className=" text-gray-600">
                         discover your stories & creative ideas...
                        </h1>
                </div>

                
        <blockquote className="text-xl pl-[30px]  md:pl-1 italic font-semibold text-gray-900 dark:text-white">
    <svg className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
    </svg>
         <p>I taught myself how to program computers when I was a kid, bought my first computer when I was 10, and sold my first commercial program when I was 12. </p>
         <span className=" mt-[20px] flex-row gap-[18px] divide-y italic font-light text-sm text-gray flex justify-center text-center">
         
         <Image className=" w-[30px] h-[30px] rounded-full hover:scale-105 hover:grayscale border-2 border-emerald-500" src={elon} width={30} height={30} alt="elon" /> Elon Musk.</span>
</blockquote>

        </div>
    )
}