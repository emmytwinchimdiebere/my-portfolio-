"use client"
import React,{useState, useEffect} from "react"
import { TagSkeleton } from "./TagSkeletonLoader";


interface  props {
    name:string,  
    descritpion: string,
    id:number
}
interface  TagsProps {
   tags: Array<props>

}
export  const  Tags  =  ()=>{
    const  [tag, setTags] =  useState<TagsProps>();
    const  [loader, setLoader] =  useState<boolean>(false)
console.log(tag)
    const fetchTags  =  async ()=>{
        setLoader(!loader)
            await  fetch("http://localhost:3000/api/tags/getTags", {
               
            method:"GET",
           
            headers:{
                   
                "Content-Type" : "application/json",
                "Accept":"application/json"
               
            }

            })
            .then((response)=>{
                if(response.ok){
                    return response.json()
                }
                throw  new Error("cannot  fetch  the tags  server  error")
            })
            .then((data)=>{
                if(data?.status === 200){
                    setLoader(false);
                    setTags(data);
                }
            })

    }
    useEffect(()=>{
        fetchTags();
    }, [])

    return(
        <div className="relative px-3 top-5 flex  justify-start w-full ">
            { loader  ?  <TagSkeleton count = {18} /> : (
                <div className = "flex flex-row gap-5 flex-wrap ">

                  {tag && tag?.tags?.slice(0, 18).map((tag)=>(
                    <span key={tag?.id} className="hover:bg-black/20 hover:scale-105 transition rounded-full  px-3 font-light relative bg-black/10 text-black">{tag?.name}</span>
                  ))} 
                  
                </div>
            )}
        </div>
    )
}