// ./nextjs-app/app/_components/Posts.tsx
"use client"
import Link from "next/link";
import Image from "next/image"
import {Chip, Tooltip} from  "@mui/material"
import { useEffect, useState } from "react";
import { SkeletonCard } from "./SkeketonCard";
import { MdSave } from "react-icons/md";



interface  ObjectTypes {
  avater:string,
  lastname:string,
  username:string
}

interface tag{
  name:string
}
interface TagsProps {
  tag:tag
}

interface  postType {
  title:string, 
  description:string,
  id:number, 
  slug:string,
  body:string,
  image:string,
  created_at:string,
  author: ObjectTypes, 
  tags: Array<TagsProps>


}

interface postsProps  {
  posts: Array<postType>
}
export default function Posts(){
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState<postsProps>()
  const delay = (ms:number)=>new Promise((resolve)=>setTimeout(resolve, ms))
  const base_url  =  process.env.base_url;

  const  calculateTimeRead = (text:string)=>{
    const wordPerMinute = 200;
    const TotalWords  =  text.trim().split(/\s+/).length;

    const  timeToRead =  Math.ceil(TotalWords / wordPerMinute);

    return  timeToRead;
}

  const fetchPosts = async ()=>{
    setLoading(!loading)
     delay(5000);
   await fetch("http://localhost:3000/api/posts",  {
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      },
      cache:"no-cache",
 
    })
    .then((response)=>{
      if(!response?.ok){
        throw new Error("error occured could not fetch  posts")
      }
      return  response.json();
    })
    .then((res)=>{
      console.log(res)
      if(res?.status === 200){
        setLoading(false);
        setData(res)
      }
    }).catch((err)=>console.log(err))

  }
  

useEffect(()=>{
  fetchPosts();
},[])

    

  
  return (
    <main className="grid grid-cols-1 w-full pb-[20px] relative bg-white px-5 py-10 ">
     
    
      <div className ="relative">
            <div className = "flex flex-col relative ">
                 { loading ?  <SkeletonCard count = {8} /> : 
                 (
                  data?.posts.map((post)=>{
                    const  read  =  calculateTimeRead(post?.body)
                    const tagId = post?.tags?.slice(0, 1).map((tag:any)=>tag?.tagId)
                    return(
                      <div key =  {post?.id} className = "flex flex-col">
                        <div className =  "flex flex-row gap-5">
                       
                         <Image className="w-[30px] h-[30px] rounded-lg  hover:grayscale hover:scale-105 transition pl-5" src={post.author.avater} alt = {post.author.lastname} width={30} height ={30} quality={95} />
                   
                          <span className="text-[16px] font-light">{post.author.username}</span>
                        </div>
  
                        <div className ='relative font-bold lg:text-[1.5rem] text-[1rem] tracking-wider pb-4'>
                          <Link href  =  {`/articles/${post?.slug}`}><span>{post.title}</span></Link>
                        </div>
  
                        <div className="relative flex flex-row  gap-5">
                          <div className="font-light basis-3/4">
                          <Link href = {`/articles/${post?.slug}`}> <div    dangerouslySetInnerHTML={{__html: post?.body}} className=" line-clamp-2" /></Link>

                          <div className = "flex flex-row justify-between relative gap-3 top-4 text-black/70">
                          
                           <div className = "relative flex justify-around">
                           <span className= "lg:text[16px] text-[12px]">
                              {new Date(post?.created_at).toLocaleDateString("en-us", {month:"short", day:"2-digit", })} .
                            </span>

                              <span className="lg:text[16px] text-[12px]">{`${read} min${read !== 1  ?  "s" : " "} read ${"  "}`}   </span>

                              <span className="rounded-full hidden  lg:flex ml-[15px]  px-3 bg-black/10  relative">
                             <Link href={`/tags/${tagId}`}>{post?.tags?.slice(0, 1).map((tag:any)=>tag?.tag.name)}</Link>
                              </span>
                           </div>

                            <span className="flex justify-end items-end"><MdSave/></span>
                        </div>
                          </div>

                          <div className="basis-3/12 relative">
                          <Image className="w-[100px] h-[100px] lg:w-[180px] lg:h-[180px] hover:grayscale hover:scale-105 transition " src={post.image} alt = {post.title} width={200} height ={200} quality={95} />
                          </div>
                        </div>

                       
                      </div>
                    )
                   }))
                 
                 }
            </div>
      </div>
    </main>
  );
}