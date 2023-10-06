import React from "react"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'



export const SkeletonCard = ({count}:{count:number})=>(
    <div className="relative bg-white px-5 py-10 ">
             <h1>Fetching posts...</h1>
        <div className="group  pb-6  grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 relative gap-[3.3rem] w-[100%]">
        
        {Array(count).fill(0).map((item, index)=> 

<div key={index} className="relative flex flex-col  gap-[40px]">
<Skeleton className="bg-black/50" height={300} width={400} />


    <div className = "relative flex-row flex mt-[10px] gap-[10px] w-[100%] ">
       
        <div className="lg:w-[50%] relative lg:left-0 ">
                <Skeleton count={1} width={170} />
        </div>
       
        <div className="lg:w-[50%] lg:right-0 relative ml-4">
                <Skeleton count = {1} width={170} />
        </div>
      
    </div>

    <div className="">
        <Skeleton width={400} count={2} />
    </div>


        <div className="bg-black/10 h-[100px] py-[25px] animate-pulse w-[400px] relative flex flex-row justify-between px-[20px]">
              <Skeleton circle width={50}  height={50}/>  

              <div className="w-[100px] h-12 rounded-lg animate-pulse bg-slate-400/10">

              </div>
        </div>
    </div>
        )}
         
        </div>

      
</div>
)
       
    