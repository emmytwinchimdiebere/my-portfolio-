import { StaticImageData } from 'next/image'
import React from 'react'
import Image from "next/image"




type projectProps = {
    description :string,
    title:string,
    imageUrl:StaticImageData,
    tags:ReadonlyArray<string>,
}


const RenderProject =  ({description, title, imageUrl, tags}:projectProps)=>{
    return (
        <section className= "bg-gray-100 items-center relative max-h-screen flex md:flex-row md:m-auto p-x-8 md:pr-0 flex-col overflow-hidden w-screen md:w-[50%] border-black/50 " >
          <div className="flex flex-col justify-start ">

        <div className = "mb-3 text-3xl font-extrabold md:p-[20px] p-[10px] capitalize">

        <p>{title}</p>
        </div>

         <div  className = "">
            <span> {description}</span>
         </div>
       
        <div className='relative flex md:p-[40px] ml-[10px] leading-[1px]'>
                <ul className="flex flex-row flex-nowrap gap-[20px]"> 
            {tags?.map((tag, index)=>( 
                <li className="tracking-wider text-[14px] md:text-[1rem] bg-black/50 p-[10px] md:p-[15px] text-white leading-relaxed space-x-[10px] flex rounded-full"  key={index}>{tag}</li>
            ))}
            </ul>
                </div>
          </div>

            <div className="mt-10">
            <Image src={imageUrl} width={400} height = {400} alt="images" priority = {true} quality = {95}/>
            </div>
        </section>
    )
}


export default RenderProject