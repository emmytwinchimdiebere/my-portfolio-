"use client"
import React, { FormEvent, useState }  from  "react";
import {useUser} from  "@clerk/nextjs"
import { useFormik } from "formik";
import  Image from  "next/image"
import AvaterImage from  "../../../public/png-transparent.png";
import { TextField } from "@mui/material";
import * as Yup from "yup";
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { storage } from "@/firebase/storage";
import { LoaderIcon } from "lucide-react";
import { Upload } from 'lucide-react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useRouter}  from  "next/navigation"
import { ColorRing } from 'react-loader-spinner'



interface userDataProps {
 user:{
    email :  string[] | undefined
 }
  btnTitle : string
}



export default  function AccountProfile({user,  btnTitle}:userDataProps){
   
    const [formSubmitLoader, setFormSubmitLoader] =  useState<boolean>(false);
    const router = useRouter();
    const delay = (ms:number) => new Promise((resolve)=>setTimeout(resolve, ms))
    const mail = Array.isArray(user?.email) ? user?.email[0] : user?.email
   

    const  insertUserData = async  (values:any) =>{
        const {bio, roles, }  = values

        setFormSubmitLoader(!formSubmitLoader)
        
        await fetch("http://localhost:3000/api/UpdateUser", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
      
                roles:roles,
                bio: bio,
                email:mail


            })
        }).then((response)=>{
            if(!response.ok){
                throw new Error("Request failed")
            }
            return response.json()
        }).then((data)=>{
            if(data?.status === 200){
                setFormSubmitLoader(false),
                formik.setSubmitting(false)

                toast(data?.Message, {type:"success",  position:"bottom-right"});

                delay(5000)
                router.push("/Welcome")
            }
        }).catch((err)=>{
            console.log(err)
            setFormSubmitLoader(false),
            formik.setSubmitting(false)

            throw new Error(err)
        })
    }

   const  formik =  useFormik({
    
       initialValues:{
        roles:[5,6], 
        bio:""
       },

    validationSchema:Yup.object({
        bio:Yup.string().max(255,"you can only write 255 words")
    }),

    onSubmit:  async (values)=>insertUserData(values)
});


    return(
        <div className="bg-white w-full h-full relative flex flex-col">
            <div className="flex flex-col gap-4 font-semibold mx-[20px]  text-black ">
                <span className="font-bold text-black ">Onboarding...</span>

                <span className=" font-light text-[1rem] ">Please complete your account setup  to continue using  rockycodes !thanks</span>
            </div>

               <div className="mx-auto  mt-[60px] text-black  flex flex-col flex-wrap w-full lg:w-[650px]    bg-white shadow-2xl h-auto px-[30px] py-[30px] relative">
                    <form onSubmit={formik.handleSubmit}>
                            <div className="w-full relative pb-[20px] pt-[20px] ">
                          
                            <TextareaAutosize  className="w-full border-2 focus:outline-0 focus-visible:bg-gray-100 focus:border-blue-500"   {...formik.getFieldProps("bio")} aria-label="textarea" placeholder="Enter a Short bio" />
                            </div>
                     <div className="flex justify-center items-center w-full py[10px] font-bold gap-5 ">
                            <button disabled={!(formik.isValid && formik.dirty)} className="mx-auto w-full py-[20px] rounded-[14px]  disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-black bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  text-white" type="submit">{formSubmitLoader ?
                        <div className =  "mx-auto relative left-[50%]">
                        <ColorRing
                        
                          visible={true}
                          height="50"
                          width="50"
                          ariaLabel="blocks-loading"
                          wrapperStyle={{}}
                          wrapperClass="blocks-wrapper"
                          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                        />
                                    </div>
                            
                            : btnTitle } </button>
                     </div>
                    </form>
               </div>
            
                 <ToastContainer />           
        </div>
    )
}