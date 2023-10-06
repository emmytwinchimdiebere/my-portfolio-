
import GetAllPostByTag from "@/Components/BlogComponents/PostByTag"
import React from "react"


 const Page = async ({params}:{params: {id: any}})=>{
    const {id} = params
    
      
       
    
    return <GetAllPostByTag id = {id} />  
 
}
export default Page