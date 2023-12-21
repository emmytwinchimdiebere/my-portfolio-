import prisma from "@/lib/db"



export const  runtime ="edge"


export async function POST(req:Request){ 
try{
    const  body  = await  req.json();
    const  {name, description} = body ;

    const category  = await prisma?.category.create({
       
        data:{
        name : name, 
        description: description,
       }
    })

        if(category) return  new Response(JSON.stringify({message:"Category created successfully", status: 200}))

  }
  catch(err){
        console.log(err)
        return  new Response(JSON.stringify({error:"something went wrong  try again in a short while", statuscode:500}))
  }
    


}