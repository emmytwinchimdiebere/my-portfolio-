import React from  "react"
import CreatePage from "@/Components/BlogComponents/createPost";
import {currentUser} from "@clerk/nextjs"

export const FetchCategories = async ()=>{
    const res = await fetch("http://localhost:3000/api/categories/getCategories",  {
      cache:"no-cache",
      method:"GET",
      headers:{
        "Content-Type": "application/json",
        "Accept" : "application/json"
      }
    })
    const toJSon  = await res.json()

    if(res.ok) return toJSon;
}

const FetchTags = async()=>{
  const res =  await  fetch("http://localhost:3000/api/tags/getTags",  {
    method:"GET", 
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    cache:'no-cache'
  })
  const  tags  = await res.json();

    if(res.ok) return tags 
}

export default async function Page(){
  const  categories  =  await FetchCategories()
  const tags =  await FetchTags();
  const user = await currentUser();
   const  email  =  user?.emailAddresses?.map((mail)=>mail.emailAddress) ;
   const  mail  = Array.isArray(email) ?  email[0] : email;

 
  
  return <CreatePage category = {categories} tag = {tags} email = {mail} />
}