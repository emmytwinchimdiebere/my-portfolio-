import React from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



export const SkeletonCard = ({count}:{count:number})=>(
    <div className="relative bg-white px-5 py-10 hidden lg:flex">
          
        <div className="group flex flex-col justify-start w-full">
        
        {Array(count).fill(0).map((item, index)=> 

<div key={index} className="relative flex flex-col ">

    <div className = "relative flex-col flex mt-[10px]  w-[100%] ">
       
        <div className = "flex flex-row relative">
        <div className="rounded-full w-[48px] h-[48px] ">
                <Skeleton circle height = {38} width={38} />
        </div>
        <div className="lg:w-[50%] lg:right-0 relative top-4 ml-4">
                <Skeleton count = {1} width={200} />
        </div>
        </div>
       
       <div className = "flex flex-row">

       <div className="lg:w-[75%] lg:right-0 relative ml-4 flex flex-col">
                <Skeleton count = {3} width={600} />

            <div className  = "flex flex-row gap-4 top-5">
            <div className=" animate-pulse">
        <Skeleton width={150} count={1} />
            </div>

            <div className=" animate-pulse">
        <Skeleton width={150} count={1} />
            </div>
           
            <div className=" animate-pulse rounded-full bg-black/10">
            <Skeleton width={150} count={1} />
            </div>
            </div>
        </div>

        <div className="lg:w-[25%] lg:right-0 relative ml-4">
                <Skeleton count = {1} width={200} height={200} />
        </div>

       
       </div>
      
    </div>


    </div>
        )}
         
        </div>

      
</div>
)
       
    