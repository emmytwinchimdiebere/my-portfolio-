"use client"
import { SanityDocument } from "next-sanity"
import React, { useEffect, useState } from "react"
import { client } from "../../../sanity/lib/client";
import { AllPostTagsQuery, PostByCategory, PostTag} from "../../../lib/query";
import Backdrop from '@mui/material/Backdrop';
import CircleLoader from "./BackDropLoader";
import Link from "next/link"
import { Chip } from "@mui/material";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";




const builder = imageUrlBuilder(client)

export const FetchPostsByCategoryId=({id}:{id:string})=>{
              const [tags, setTags] = useState<SanityDocument[]>();
            const [posts, setPosts] = useState<SanityDocument[]>();
            const [loader, setLoader] = useState<boolean>(false);
            const delay = (ms:number)=>new Promise((resolve)=>setTimeout(resolve, ms));
            const [open, setOpen] = useState<boolean>(false);

           
   

                //fetch all tags 

                const fetchTags = async ()=>{
                
                    const tag = await client.fetch<SanityDocument[]>(AllPostTagsQuery);
                    if(tag){
                        setTags(tag)
                        
                    }
                

                }


            //create a function to fetch all post by category;

            
            const fetchPosts = async ()=>{
                  
//set loader to true;
          setLoader(!loader);
          setOpen(!open)
          delay(10000);
          const posts = await client.fetch(PostByCategory, {id});

          //store the retrived posts in the posts array;

          if(posts){
              setLoader(false);
              setOpen(false)
              setPosts(posts)
          }
        

        }


        //call useEffect to call the fecth function on page loads/mounts

        useEffect(()=>{
            fetchPosts(),fetchTags()
        }, [])

        


        return(
            <main className="relative grid grid-cols-1 lg:grid-cols-3 w-[100%] bg-[bg-gray-50] pl-[5px] py-[30px]  ">
            
            <div className=" col-span-1 lg:col-span-2 relative flex flex-row justify-between w-[100%] flex-wrap">
            
            <div className="flex flex-col relative h-[auto] rounded-lg w-[100%]" >
                
                {posts?.map((postItem:any)=>(

                    <React.Fragment key={postItem._id}>
                        
                         
                    
                    <div  className ="flex flex-col pl-[30px] py-[40px]  " >

                   
<div className="flex flex-row relative">

<div className="flex">
<Link href = {"/"} as ={"/"}>
 <Image className="hover:scale-105 transition hover:bg-transparent border-2 border-x-yellow-500 border-y-blue-600 border-x- hover:translate-y-1 object-center rounded-lg w-[30px] h-[30px] bg-blue-600" src={builder.image(postItem?.author.image).width(30).height(30).url()}
  width={30} height={30} quality={95}
   alt={postItem.author.name} />
 </Link>

 <span className = "lowercase text-[0.8rem] lg:text-[0.9rem] px-[10px]  ">{postItem.author.name}</span>
</div>
</div>

<div className="flex flex-row justify-between pr-[20px]">

<div className="relative flex flex-col">
 
 <Link href={`/articles/${postItem._id}`}> <span className="text-2xl lg:text-3xl pt-[5px] capitalize font-bold ">{postItem.title}</span></Link>
 
 <span className=" line-clamp-1 text-black/50 ">{postItem.description}</span>

 <div className="flex flex-row relative gap-2">
 <span>{new Date(postItem._createdAt).toLocaleDateString("en-us" ,{month:"short", day:"numeric"})}.</span>

 <span>{postItem.estimatedReadingTime} min read.</span>

 <span>{postItem.tags.slice(0,1).map((item:any, index:number)=>(<span className="bg-black/10 rounded-full px-[10px] pb-[3px]  text-black" key={index}>{item.tag}</span>))}</span>
 </div>

</div>


 
 <div className="relative right-[3px]">
 <span >
 <Image src={builder.image(postItem.mainImage).height(200).width(300).url()} alt={postItem.mainImage.alt} height={200} width={300} />
  </span>
 </div>



</div>



</div>
                    
                   
</React.Fragment>
                       
                 ))}
                  


                     
             </div>  

           

        </div>
        <div className="cols-span-1 relative flex-col flex  py-5 bg-gray-50">

                   <div className="flex font-bold px-5 text-2xl sm:text-3xl">
                        <span>Popular Tags</span>
                    </div> 
                    
             <div className="flex flex-row flex-wrap gap-[18px] mt-5 pl-5">
                                    
            {tags?.map((items:any)=>(
            <div key={items._id} >
             <Link href = {`/tags/${items._id}`}> <Chip className=" flex flex-row  hover:bg-black/5 hover:scale-105 active:outline-blue-500 hover:cursor-pointer transition"  label={items.tag} variant="outlined" /></Link>
                </div>)
           
            )}   
        </div>
        </div>

       {loader && (
    <div>
       <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
      <CircleLoader />
      </Backdrop>
    </div>
   )}
</main>
        )
        }
