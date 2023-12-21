import { NextFetchEvent } from "next/server";
import prisma from  "@/lib/db"



export const  runtime =  "edge"

export  async function POST(req:Request, res:NextFetchEvent){
   try{
    const  body = await req.json();

    const { description, role,createdAt}  = body;

   const roles = await prisma?.roles.create({
    data:{
        role: role,
        description: description,
        createdAt:createdAt
    }
   })

    if(roles) return new Response(JSON.stringify({roles:roles, status:200, message:"roles successfully created "}))
   }
   catch(err){
        console.log(err)
        return new Response(JSON.stringify({
            
            errror:"something went wrong pleases try again  in a short time",
            statusCode: 500

        }))
   }
}