import prisma  from  "@/lib/db"




export async function  GET(){

    try{
        const users  = await prisma?.user.findMany()

        if(users){
            return new Response(JSON.stringify({
                message:"Operation  completed",
                status:200,
                users:users
            }))
        }

    }catch(err){
        console.log(err);
        return  new Response(JSON.stringify({
            message:"cannot fetch all users at this momment",
            status:500
        }))

    }
}