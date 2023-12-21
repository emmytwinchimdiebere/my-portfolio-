import prisma from "@/lib/db";

export const  config  =  {
 run:"edge"   
}

export  async  function  GET(){
    try {
        const  posts  =  await prisma?.post.findMany({
           take:10,
           orderBy:{
            created_at:"desc"
           },
           include:{
               author:true,
              
               tags:{
                
                select:{
                    tagId:true,
                    
                    tag:{
                        select:{
                            name:true
                        }
                    }
                    
                }
               }
           }
        });

        if(posts){
            return  new Response(JSON.stringify({
                message: "Post fetched Successfully",
                status:200,
                posts:posts

            }))
        }
        
    } catch (error) {
      console.log(error)  ;

      return  new Response(JSON.stringify({
        message:"Something went wrong",
        status:500
      }))
    }
}
