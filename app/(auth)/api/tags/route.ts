import prisma from  "@/lib/db"


export async function POST(request:Request){
  
  try{
    const  body  = await  request.json();
    const  {name, description} = body

    const  tag =  await prisma?.tag.create({
        data:{
            name:name,
            description:description
        }


    })

    if(tag) return new Response(JSON.stringify({
        message:"tag successfully created",
        status: 200
    }))
  }

  catch(err){
    console.log(err)

    return new Response(JSON.stringify({
        message:"something went wrong please try again in a short while",
        statuscode:500
    }))
  }
} 