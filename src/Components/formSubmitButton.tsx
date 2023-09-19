import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'


export function FormSubmitButton() {
    const {pending} = useFormStatus();
  return (
   <React.Fragment>
     <button className=" btn active:scale-105 foucus:scale-110 hover:bg-gray-900 text-white items-center justify-center group gap-[8px]  flex lg:gap-4 bg-black p-[15px] w-[25%] rounded-xl md:w-[15%] h-[48px]  lg:rounded-2xl absolute left-0  bottom-0 top-[100%] mt-5 disabled:opacity-50 disabled:scale-100" disabled ={pending} type='submit'>
        
        {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-white border-solid border-b-4 border-t-4'>
        
        
        </div>) : (
        
        <>
        
        Submit {" "}<FaPaperPlane className='group-hover:translate-x-1 group-hover:translate-y-1 opacity-70 transition-all text-xs ' /> {""}
        
        </> 
        
)}
        
        </button>
   </React.Fragment>
  )
}

export default FormSubmitButton