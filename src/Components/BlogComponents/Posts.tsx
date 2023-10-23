// ./nextjs-app/app/_components/Posts.tsx
"use client"
import Link from "next/link";
import type { SanityDocument } from "@sanity/client";
import Image from "next/image"
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../../lib/sanity-client";
import { FaArrowUp } from "react-icons/fa";
import { ArrowUpRightIcon } from "lucide-react";
import {Chip, Tooltip} from  "@mui/material"
import { useEffect, useState } from "react";
import { postsQuery } from "../../../lib/query";
import { sanityFetch } from "../../../lib/client";
import { SkeletonCard } from "./SkeketonCard";


export default function Posts({ posts = [] }: { posts: SanityDocument[] }) {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<SanityDocument[]>()
  const delay = (ms:number)=>new Promise((resolve)=>setTimeout(resolve, ms))
  const builder = imageUrlBuilder(client)


  const fetchPosts = async ()=>{
    setLoading(!loading)
     delay(5000);
    const posts = await client.fetch(postsQuery, "", {next:{revalidate:3000}});

    if(posts){
      setLoading(false);
      setData(posts)
     

    }
  }
  

useEffect(()=>{
  fetchPosts();
},[])

    

  
  return (
    <main className="relative bg-white px-5 py-10 lg:border-t-1 border-t-2 border-black">
     {loading && <SkeletonCard count = {8} />}
    {data && (
       <div className="group  pb-6  grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 relative gap-[3.3rem] lg:gap-10 w-[100%]">
      {data.map((post) => 
      
      
          <div key={post._id} className="relative w-full ">
          <Image className="relative object-fill lg:object-center w-screen group-hover:scale-105 translate-y-1 transition-all duration-200 ease-out " priority quality={95} src={builder.image(post?.mainImage).width(500).height(300).url()} alt={post.author.name} width={500} height={300}/>

        

          <div className="absolute  left-0 top-[30%] mt-[1rem]  lg:mt-[2rem]  py-5 w-[inherit] justify-between text-white drop-shadow-md rounded-b-md bg-gray-900 backdrop-opacity-10 opacity-70 flex-col flex flex-nowrap gap-5 lg:flex-row">
      
            <span className="pl-[20px] pb-[10px] capitalize tracking-wide font-bold">{post?.title}</span>

         
            <span className="mr-5 hover:border-2 border-2 transition-all border-y-white border-x-yellow-500 backdrop-opacity-10 hover:bg-transparent hover:text-gray-50  shadow-lg rounded-full px-3 bg-transparent text-white p-2">  {new Date(post?._createdAt).toLocaleDateString("en-us", {day:"numeric", month:"long", year:"numeric"})}</span>
            
          
          </div>
          
          <div className="flex flex-col gap-[10px] relative top-2  lg:top-5 w-[inherit] px-[10px] pb-3">

          <div className=" flex flex-row h-auto relative mt-[7rem] lg:mt-[3rem] gap-[20px] lg:gap-[10px] w-[inherit]  ">
         
             {post.tags.map((tag:any)=><Tooltip title = {tag.description} arrow placement="top-end"  key ={tag._id} ><Link href={`/tags/${tag._id}`}><Chip  className="hover:bg-gray-100 transition hover:backdrop-opacity-10 hover:text-black/50 hover:cursor-pointer" label = {`${tag.tag}`} variant = "outlined" /></Link></Tooltip> )}
              
            </div>
            
            <span className=" tracking-wider  leading-6 mt-[20px] line-clamp-2">{post?.description}</span>

            <div className="bg-gray-100 flex flex-row justify-between relative px-5 py-[10px] w-[inherite] backdrop-opacity-10 rounded-lg ">
                  <div className="relative">
                    <Image className="hover:scale-105 transition hover:bg-transparent border-2 border-x-yellow-500 border-y-blue-600 border-x- hover:translate-y-1 object-center rounded-full w-[40px] h-[40px] bg-blue-600" src={builder.image(post?.author.image).width(40).height(40).url()}
                    width={40} height={40}
                     alt={post.author.name} />
                  </div>

                  <Link href={`/articles/${post._id}`} >
                  <div className="group border-x-white transition hover:text-black border-y-slate-600 py-[10px] backdrop-opacity-10 opacity-70 border-2 hover:bg-transparent bg-black px-[10px] rounded-full  flex flex-row relative gap-[5px] text-white">
                    <span>Read Post</span>
                    <span className="group-hover:scale-105 group-hover:translate-x-1 transition-all animate-bounce"><ArrowUpRightIcon /></span>
                    
                  </div>
                  </Link>
            </div>
          </div>
       </div>
       
      )}
   
    </div>
    )}
    </main>
  );
}