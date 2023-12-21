import prisma from  "@/lib/db"

export const  runtime =  "edge"


export async function GET(){
   try{
    const tags  = await prisma?.tag.findMany({
        orderBy:{
            createAt:"desc"
        }
    })

    if(tags){
        return new Response(JSON.stringify({tags: tags,  message:"Tags Fetched successfully", status:200}))
    }
   }
   catch(err){
    console.log(err);

    return new Response(JSON.stringify({message:"error fetching  tags",  status:500}))
   }
}