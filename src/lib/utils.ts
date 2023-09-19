import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 export const validateString = (value:unknown, maxLength:number)=>{
  if(!value || typeof value !== "string" || value.length > maxLength){
 return  false
}
 return true
}

 export const getErrorMessage = (err:unknown): string =>{
 let message:string
 
  if(err instanceof Error){
    return message = err.message
  }

  else if(err && typeof err === "object" && "message" in err){
    return message = String(err.message)
  }
 
  else {
    return   "something went wrong"
  }
}