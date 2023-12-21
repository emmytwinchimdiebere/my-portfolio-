"use client"
import React, { useEffect, useState } from  "react"
import {InfinitySpin} from "react-loader-spinner";
import {useUser} from "@clerk/nextjs";
import {useRouter} from  "next/navigation";



export default function Welcome(){
    const  [loader, setLoader] = useState<boolean>(false);
    const {user} = useUser();
    console.log(user)
    const  delay = (ms:number)=> new Promise((resolve)=>setTimeout(()=>resolve,  ms));
    const router  = useRouter()

    

    useEffect(()=>{
        setLoader(!loader);

     delay(20000)
       
     router.push("/articles")
       

     
    }, [])
    return(
        <div className="flex relative h-screen  w-full m-auto justify-center items-center ">
        <div className="relative  flex  flex-col ">
            <span className="font-semibold  text-black">{`Welcome ${user ? user.username : "User"} ✌ wait while your setup finalizes..`} </span>

            <div className="relative flex justify-center items-center  ">
                {loader ? <InfinitySpin width='200' color="#4fa94d"/> : " "}
            </div>
        </div>

       
</div>
    )
}