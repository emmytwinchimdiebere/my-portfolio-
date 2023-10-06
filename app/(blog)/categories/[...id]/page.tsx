import { FetchPostsByCategoryId } from "@/Components/BlogComponents/PostByCategory"
import React from  "react"



export default function  Page({params}:{params:{id:string}}){
    const {id} = params
        

    return(
        <>
        <FetchPostsByCategoryId id ={id} />
        </>
    )
}