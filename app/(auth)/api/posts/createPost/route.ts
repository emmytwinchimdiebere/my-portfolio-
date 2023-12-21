import prisma from  "@/lib/db";


export const  runtime =  "edge"

export async function POST(request:Request){
        try{
            const  post  = await  request.json();

            const {email}  = post;

           
            const  createPost  =  await prisma?.post?.create({
                data:{
                    slug:post?.slug,
                    body:post?.body,
                    title:post?.title,
                    image:post?.image,
                    description:post?.description,
                   
                    category:{
                        connect:{id:post?.categoryId}
                    },
                    
                    author:{
                        connect:{email:email}
                    },

                    tags:{
                        create:post?.tags?.map((tagId:number)=>({tagId}))
                    },
                    videoUrl:post?.videoUrl

                }
            })

            if(createPost) return  new Response(JSON.stringify({
                message:"post added successfully",
                status:200
            }))


        }catch(err){
           console.log(err);
           return  new Response(JSON.stringify({
            error:"something went wrong could not create post",
            status:500
           }))    
        }
}