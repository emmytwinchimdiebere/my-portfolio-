



export const  runtime =  "edge"

export  async function  GET(){

    try{
        const  categories = await prisma?.category.findMany();

        if(categories){
            return new  Response(JSON.stringify({
                
                categories:categories,
                 staus:200
            }))
            }
        }
    
    catch(err){
        console.log(err)
        return new Response(JSON.stringify({
            error:err,
            message:"failed to fetch resource",
            status:500
        }))
    }
}