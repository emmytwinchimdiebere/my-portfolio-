import prisma from  "@/lib/db";




export const  config = {
    run:"edge"
}

export async  function  POST(request:Request){
    try{
        const  userData  =await request.json();
        const  {bio,  roles, email } =  userData;
      
      
      

        const updateUser =  await prisma?.user?.update({
            where:{
                email: email
            },

            data:{
             bioInfo:bio,
            },
        })

        if(updateUser) return  new Response(JSON.stringify({
            Message:"User account created successfully",
            status:200
        }))
    }catch(err){
        console.log(err);
        return new Response(JSON.stringify({
            message:"Could not update the User",
            status:500
        }))
    }
}