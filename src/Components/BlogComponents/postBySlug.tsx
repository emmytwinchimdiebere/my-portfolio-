/* eslint-disable react/no-unescaped-entities */
"use client";

import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "@sanity/client";
import { PortableText,  } from "@portabletext/react";
import { client } from "../../../lib/sanity-client";
import SyntaxHighlighter from "react-syntax-highlighter"
import {dark} from "react-syntax-highlighter/dist/esm/styles/hljs"
import React, {Fragment, useEffect, useState} from "react";
import { Avatar, Backdrop, Chip } from "@mui/material";
import Link from "next/link";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { postQuery } from "../../../lib/query";
import CircleLoader from "./BackDropLoader";
import CommentForm from "./CommentForn";



// Load any languages you want to use from `refractor`





    const builder = imageUrlBuilder(client);



    export default function Post({slug }: { slug:string}) {
      const [posts, setPost] = useState<SanityDocument[]>();
      const [loader, setLoader] = useState<boolean>(false);
      const delay = (ms:number)=>new Promise((resolve)=>setTimeout(resolve, ms));
      const [open, setOpen] = useState<boolean>(false);
      const [expanded,setExpanded] = useState<boolean>(true)
      const [filteredPost , setFilteredPost ] = useState([])

      
     
      const fetchSinglePost = async ()=>{
        setLoader(!loader);
        setOpen(!open);
        delay(10000);
          const fetchPost = await client.fetch<SanityDocument[]>(postQuery, {slug})
          
          if(fetchPost){
            setLoader(false);
            setOpen(false);
            setPost(fetchPost);

          }
      };

      
      useEffect(()=>{
        fetchSinglePost();

        {posts && posts?.map((item:any)=> { const filter =  item.related.filter((filteredPost:any)=> filteredPost._id !==  item._id)
          setFilteredPost(filter);
        })}
      }, [])

    
        


        const components = {
            types: {
              code:(props:any) => (
              <SyntaxHighlighter className = "mt-10 py-[40px]" style={dark} wrapLines showLineNumbers language={props.value.language}>{props.value.code}</SyntaxHighlighter>
              )
              , 
              image: (props:any) =>  <div> 
                <Image className = "w-screen lg:w-[100%] transition object-center py-[30px] hover:scale-105  " src={builder.image(props.value.asset).width(300).height(300).url()}
                 alt={props.value} width={200} height={200} priority quality = {95} />
               </div>},

               
      marks: {
  // Ex. 1: custom{} renderer for the em / italics decorator
  em: ({children}:{children:React.ReactNode}) => <em className="text-gray-600 font-semibold">{children}</em>,

  // Ex. 2: rendering a custom `link` annotation
  link: (props:any) => {
    const target = (props.value?.href || '').startsWith('http') ? '_blank' : undefined
    return (
      <a className=" underline text-gray-600 font-bold decoration-slate-400" href={props.value?.href} target={target} >
        {props.children}
      </a>
    )
  },
},
block: {
  // Ex. 1: customizing common block types
  h1: (props:any) => <h1 className="text-2xl">{props.children}</h1>,
  blockquote: (props:any) => <blockquote className="border-l-purple-500">{props.children}</blockquote>,

  // Ex. 2: rendering custom styles
  customHeading: (props:any) => (
    <h2 className="text-lg text-primary text-purple-700">{props.children}</h2>
  ),
},   
list: {
  // Ex. 1: customizing common list types
  bullet: (props:any) => <ul className="mt-xl">{props.children}</ul>,
  number: (props:any) => <ol className="mt-lg">{props.children}</ol>,

  // Ex. 2: rendering custom lists
  checkmarks: (props:any) => <ol className="m-auto text-lg">{props.children}</ol>,
},

listItem: {
  // Ex. 1: customizing common list types
  bullet: (props:any) => <li style={{listStyleType: 'disclosure-closed'}}>{props.children}</li>,

  // Ex. 2: rendering custom list items
  checkmarks: (props:any) => <li>✅ {props.children}</li>,

  number: (props:any) => <li  className=" list-decimal">{props.children}</li>,

},
}
    
        
                   
  
        return (
          <main className="grid text-justify overflow-x-hidden lg:grid-cols-3 grid-cols-1 gap-5 relative w-[100%]  lg:px-[50px] px-[40px] mt-[60px] ">
            
            <div className=" sm:col-span-2 col-span-1 flex flex-col ">
            
            {posts?.map((items:any)=>(
            <div key = {items._id} className="">
            <Image className="w-screen px-[40px]  object-center py-[15px] " src={builder.image(items.mainImage).width(600).height(200).url()}
            alt= {items.title} width={ 600} height={300} priority quality={95}
            /> 
 
             <div className="relative px-[20px] py-[20px] flex flex-row  ">
             <Image className="hover:scale-105 transition hover:bg-transparent border-2 border-x-yellow-500 border-y-blue-600 border-x- hover:translate-y-1 object-center rounded-full w-[40px] h-[40px] bg-blue-600" src={builder.image(items?.author.image).width(40).height(40).url()}
                    width={40} height={40}
                     alt={items.author.name} />

                    <div className="flex flex-col">
                      <span className="text-gray-900 font-bold tracking-wide px-[15px]">{items.author.name}</span>
                    <div className="flex flex-row justify-between gap[5px] ">
                    <span className="text-gray-300 pl-[15px] leading-5 py-[15px] -mt-[20px] ">Posted on  {new Date(items.publishedAt).toLocaleDateString("en-us",  {year:"numeric", month:"short", day:"numeric"})}</span>
                    <span className="text-gray-300 pl-[15px] leading-5 py-[15px] -mt-[20px] ">Updated at  {new Date(items._updatedAt).toLocaleDateString("en-us",  {year:"numeric", month:"short", day:"numeric"})}</span>
                    </div>
                    </div>
    
             </div>

             <div className=" flex font-extrabold  text-4xl relative py-[30px] leading-8 lg:text-6xl w-screen  tracking-wide capitalize">
                      <span>{items.title}</span>
                    </div>

                    <div className="flex flex-row  gap-[20px] relative pb-[40px]">
                      {items.tags.map((tag:any)=><Chip className = "hover:bg-gray-100 hover:cursor-pointer active:scale-105 active:bg-slate-300 active:outline-none transition-all " variant = "outlined" label ={tag.tag} key= {tag._id} />)}
                    </div>
              { <PortableText  value={items.body} components={components} /> }
            </div>
           ))}
            {posts?.map((id, index)=>(
              <div key= {index}>
                 {<CommentForm id = {id._id} />}
              </div>
            ))}

              <div className="relative w-full px-5 py-10 flex flex-col bg-white shadow-2xl">
                <span className="px-5 text-bold text-2xl "> Comments:</span>
              {posts?.map((id)=>(
              <div className = " " key= {id._id}>
                  <div className="flex flex-col ">
                        {id.comments.map((comment:any, index:number)=>(
                          <div key={index} className="flex flex-col" >
                              <span className="flex flex-shrink-0 flex-row gap-5 py-10"> <Avatar sx = {{backgroundColor:"deeppink"}}>{comment.name.charAt(0).toUpperCase()}</Avatar>{comment.name}
                              <Chip className="px-5 -mt-[5px] w-auto" variant= "outlined" label = {new Date(comment._createdAt).toLocaleString("en-us", {year:"numeric", month:"short", day:"numeric"})} />
                              </span>
                            <div className={`${expanded ? " line-clamp-5" : " line-clamp-none"}`}>
                              
                              <div dangerouslySetInnerHTML={{__html:comment.text}} />
              
                            </div>
                         
                                    <span onClick={()=>setExpanded(!expanded)}>{ expanded ? "show More" : "show Less"}</span>
                                
                              
                          </div>
                        ))}
                  </div>
              </div>
            ))}
         </div>
           
           <div className = "flex relative flex-col bg-white shadow-xl px-5 py-[25px]" >
                <span className ="text-2xl text-black font-bold tracking-wider hover:text-slate-700">Related Posts:</span> 

                <ol className="relative list-decimal pl-2 ">
                              
                              {filteredPost && filteredPost?.map((posts:any)=>(
                                <li key = {posts._id}  className = "flex li flex-col md:justify-between py-[20px]  md:flex-row px-[30px]">
                                 
                              
                                     <div className=" line-clamp-5 font-bold -mt-[48px] md:-mt-[17px]  capitalize text-black pt-[15px]" >
                                   
                                     <Link href= {`/articles/${posts._id}`}> <span className = "md:pl-5 text-2xl pl-[30px]  ">
                                        
                                        {posts.title}
                                      
                                      
                                      </span>
                                      <div className = "pr-[20px] pt-[20px]">
                                        <span className = "text-gray-500 py-[15px]">{posts.description}</span>
                                      </div>
                                      </Link>
                                    
                                     </div>

                                     <Image className="pt-[30px] w-screen" src={builder.image(posts.mainImage).height(200).width(300).url()} alt={posts.mainImage.alt} height={200} width={300} />
                              
                            
                          </li>
                              ))}
                         
                           
                        
                          
                  </ol>         
           </div>
           
           
            </div>
         
         
       <div className="lg:col-span-1 lg:relative  px-[20px]">

             <div className="flex bg-gray-50 flex-col relative h-[auto] rounded-lg " >
                {posts?.map((postItem:any)=>(
                  
                  <div key = {postItem._id}  className ="flex flex-row pl-[30px] py-[40px] " >
                    <Link href = {"/"} as ={"/"}>
                    
                    <Image className="hover:scale-105 transition hover:bg-transparent border-2 border-x-yellow-500 border-y-blue-600 border-x- hover:translate-y-1 object-center rounded-full w-[40px] h-[40px] bg-blue-600" src={builder.image(postItem?.author.image).width(40).height(40).url()}
                     width={40} height={40}
                      alt={postItem.author.name} />
                    </Link>

                      <span className = "uppercase text-2xl px-[20px]">{postItem.author.name}</span>

                    
                   </div>
                   
              
                ))}

                  <div className="flex flex-col px-[10px] justify-start lg:px-[15px] tracking-wider pb-[15px]">
                     {posts?.map((bio:any)=><span key={bio.author._id}>{bio.author.bio.map((text:any)=>(<h1 key={text._key}>{text.children.map((text:any)=><span key={text._key}>{text.text}</span>)}</h1>))}</span>) || <Skeleton count={10} /> }
                   </div>
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
        );
      }
  