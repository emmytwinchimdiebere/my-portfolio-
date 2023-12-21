import React from  "react";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'


export const  TagSkeleton = ({count}: {count:number})=>{
    return (
        <div className="relative   px-5 flex flex-row w-full flex-wrap gap-8  top-5">
            {Array(count).fill(0).map((item,index:number)=>(
                <div key={index} className =" flex flex-row  gap-5 pl-3">
                        <span className=" animate-pulse w-[40px] h-[30px] bg-black/10 rounded-full px-[12px] ">
                          
                        </span>
                </div>    
            ))}
        </div>
    )
}