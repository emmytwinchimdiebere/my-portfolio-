import prisma from  "@/lib/db"
import {headers} from  "next/headers";
import {Webhook} from  "svix";
import { WebhookEvent } from '@clerk/nextjs/server'




export const config = {
    run : "edge"
}




export  async function POST(request:Request){
  const data = await request.json()
  const roles =  [3]



    const  secret  =  process.env.WEBHOOK_SECRET;

    if(!secret) throw new Error("Webhook  secret missing")

  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");
 
  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    })
  }

    const  wh =  new  Webhook(secret)
    let  evt:WebhookEvent;



    try {
      evt = wh.verify(JSON.stringify(data), {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent
    } catch (err) {
      console.error('Error verifying webhook:', err);
      return new Response('Error occured', {
        status: 400
      })

    }
    const  eventType  =  evt.type;
      
    
    try{

   if( eventType === "user.created" || eventType === "user.updated"){
    let {id, ...attribute} = evt.data
    
    
    const  email  = attribute.email_addresses.map((mail)=>(mail.email_address));
    const  userMail = Array.isArray(email)  ? email[0] : email
    
    const  createUser = await prisma.user.upsert({
      where:{
        email:userMail
      },

      update:{
        firstname:attribute?.first_name,
        lastname:attribute?.last_name,
        username:attribute?.username || "",
        avater:attribute?.image_url,
        
      },
     
      create:{
          email:userMail,
          email_Verify:true,
          onboadring:true,
          firstname:attribute?.first_name,
          lastname:attribute?.last_name,
          username:attribute?.username || "",
          clerkUserId:id,
          avater:attribute?.image_url,
          roles: {
            create:roles?.map((roleId:number)=>({roleId}))
          }


      },
  })

      if(createUser) return new Response(JSON.stringify({Message:"user successfully created", status:200}))
      console.log(createUser)
   }

   
 

  }catch(err){

    console.log(err)
    return new Response(JSON.stringify({
        message:"error occured could not update the user",
        status:500,
        err:err
    }))
  }
}

