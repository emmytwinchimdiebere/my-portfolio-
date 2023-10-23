"use server"
import {Resend} from "resend"
import { validateString } from '@/lib/utils';
import { getErrorMessage } from '@/lib/utils';
import { ContactForm } from "../../email/ContactForm";

import 'react-toastify/dist/ReactToastify.css';



export async function SendMails(formData:FormData) {
  const message  = formData.get("message");
  const SenderEmail = formData.get("senderEmail");
  const ApiKey = process.env.Resend_Api_Key

   
  if(!validateString(SenderEmail, 50)){
  
    return {
      error:"invalid email"
    }

  }
  
  if(!validateString(message, 5000)){
      return {
        error:"invalid message"
      }
   }

 
  const  resend = new Resend(ApiKey);

  try{
  
   await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to:"emmytwinchimdiebere@gmail.com",
      subject:"From Contact Form on  my Potofolio",
      text:message as string,
      reply_to:SenderEmail as string,
     react:<ContactForm message ={message as string } SenderEmail= {SenderEmail as string} />
    });
     
  return  { message:"your email is Successfully sent "}
}

catch(err:unknown){

  return getErrorMessage(err)
}


 
}

