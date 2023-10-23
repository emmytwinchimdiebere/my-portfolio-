"use client"
import React, {Fragment, useState, useRef, SyntheticEvent} from  "react"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {z} from "zod";
import { FaPaperPlane } from "react-icons/fa";
import { client } from "../../../sanity/lib/client";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch } from "@mui/material";



interface props {
    path : [],
    message:string
}


const CommentForm  =  ({id}: {id:string})=>{
  const [comment, setComment] = useState("")
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [check, setCheck] = useState<boolean>(false);
       
  const [errors, setErros] = useState<Array<props>>()



const entries =  z.object({
    email : z.string().max(30).min(1).email({message:"Must be a valid email"}),
    name: z.string().min(2, {message: "Name field is required"}).max(20),
    text: z.string().min(1,{message:"please leave a Valid comment"})
})

const schema = z.object({
    text: z.string().min(1,{message:"please leave a Valid comment"})
})
  
    const userEmail =  localStorage.getItem("email");
    const userName = localStorage.getItem("name");


  

    const sendComment = async (text:string, name:any,  email:any)  =>{
        await client.config({
            token: process.env.NEXT_PUBLIC_SANITY_READ_TOKEN
        }).create({
            _type: "comment",
            text:text,
            name:name,
            email: email,
            post:{
                _type: "reference",
                 _ref: id   
            }
         }).then((success)=>{
            
            if(success){
                setEmail("")
                 setName("")
                 setComment("")
                toast("Comment added", {type:"success", position:"bottom-left"});
            }
            if(check === true){
                localStorage.setItem("email", email);
                 localStorage.setItem("name", name);  
             }
        }).catch((err)=>{
            if(err){
                toast("something went wrong could not add your comment.", {type:"error", position:"bottom-left"});
            }
        })
    
    }
        
     const zodErrorParse  = (e:SyntheticEvent)=>{
        e.preventDefault()
        try{
        
         if(userEmail || userName){
           const parseComment  =  schema.parse({
                text:comment
               }); 

               if(parseComment){
                sendComment(comment,userName,userEmail)
                setComment(""),
                setErros([])
               }
         } 
         else{
         const commentCheck  = entries.parse({
            text:comment,
            email:email,
            name:name,
           
         })

         if(commentCheck){
            sendComment(comment,name,email);
            setComment(""),
            setErros([]),
            setName("")
            setEmail("")
            
         }
         } 
        
       }catch(err:any){
            if(err){
             setErros(err.issues)
             console.log(err.issues)
            }
       }

       
       
       
     }
  

    const modul = {
        toolbar: [
            ['bold', 'italic', 'underline','strike'],
            ['blockquote', 'code-block', "image"],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script:'sub' }, { script:'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ direction: 'rtl' }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ color: [] }, { background: [] }],
            [{ font: [] }],
            [{ align: [] }],
            ['clean']
        ]
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
            setCheck(event.target.checked);
    }

    const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target.value);
    }

    const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setName(event.target.value);
    }

        return(
         
            <div className = "relative w-full mt-6">
                
                <form className=" bg-black/10 relative rounded-md flex flex-col px-5 pb-[45px] " onSubmit={(e)=>zodErrorParse(e)} >
                    
                    <div className = "form_wraper w-full relative">

                            {!userEmail && (

                    <div className="pb-[20px] pt-[10px] w-full relative">
                        <label className="px-[20px] py-[10px] flex flex-row font-bold capitalize" htmlFor= "email"> Email<span className="text-red-800">*</span></label>

                        <input value = {email} onChange= {handleEmailChange} className="w-full border-2 border-gray-900 focus:border-2 focus:border-gray-800 focus:shadow-lg focus:bg-white focus:outline-none  h-[50px] placeholder:text-gray placeholder:px-[20px]" type="email" name = "email" placeholder="enter a valid email" required />
                        {errors && (
                            <div className = " ">
                                {errors && errors?.map((err, index)=>(
                                    <Fragment key = {index}>
                                       {err.path.map((path, id)=>(
                                            <div key = {id} className = "text-red-900 font-bold mt-2 px-4 ">
                                               <span className = "flex flex-row gap-2"> {path === "email" ? err.message : ""}</span>
                                            </div>
                                       ))}
                                    </Fragment>
                                ))}
                            </div>
                        )}
                       <div className="flex flex-row px-4 py-4 gap-5">
                       <span className=" text-blue-800">
                        {<span>{<Switch className = "mt-0" color= "success"  inputProps={{ 'aria-label': 'controlled' }} checked = {check} onChange= {handleChange}/>} </span> }
                        </span>
                       {<span className=" text-blue-800 mt-2 ">Remember email when next time you comment?</span>}
                      
                       </div>
                    </div>
                            )}

                        {!userEmail && (
                            <div className="">
                            <label className="px-[20px] py-[10px] flex flex-row font-bold capitalize" htmlFor= "name"> Name<span className="text-red-800">*</span></label>
                               <input value = {name} onChange = {handleNameChange} className="w-full border-2 border-gray-900 focus:border-2 focus:border-gray-800 focus:shadow-lg focus:bg-white focus:outline-none  h-[50px] placeholder:text-gray placeholder:px-[20px]" type="text" name="name" placeholder="your name Please" />
    
                               {errors && (
                                    <div className = " ">
                                        {errors && errors?.map((err, index)=>(
                                            <Fragment key = {index}>
                                               {err.path.map((path, id)=>(
                                                    <div key = {id} className = "">
                                                       <span className = "font-bold text-red-800 px-4 capitalize tracking-wide mt-1"> {path === "name" ? err.message : ""}</span>
                                                    </div>
                                               ))}
                                            </Fragment>
                                        ))}
                                    </div>
                                )}
                            </div> 
                        )}

                    
                        <div className="py-[20px] w-full relative">
                        <label className="px-[10px] py-[10px] flex flex-row font-bold capitalize" htmlFor= "comment">Comment<span className="text-red-800">*</span></label>
                        {errors && (
                                <div className = " ">
                                    {errors && errors?.map((err, index)=>(
                                        <Fragment key = {index}>
                                           {err.path.map((path, id)=>(
                                                <div key = {id} className = "">
                                                   <span  className = "px-4 font-bold text-red-800 tracking-wide capitalize"> {path === "text" ? err.message : ""}</span>
                                                </div>
                                           ))}
                                        </Fragment>
                                    ))}
                                </div>
                            )}
                        <ReactQuill style={{paddingBottom: "40px"}} value = {comment} modules={modul} 
                       
                       
                         theme="snow" placeholder="pls enter your comment" className="pb-[20px]  border-gray-900 focus:shadow-lg " onChange={setComment}  />

                        </div>

                    </div>

                    <div className="shadow-lg pt-3 active:scale-105 bottom-2   transition group border-2 cursor-pointer border-gray-600 hover:bg-black/20  bg-black/10 flex gap-5 absolute left-5 px-5  text-white pb-5 rounded-full ">
                  <button className="capitalize font-bold " type = "submit" > Comment</button>
                  <FaPaperPlane className="text-white group-hover:translate-x-1 transition group-hover:text-gray-700  active" />
                  </div>
                  
                </form>
               {<ToastContainer/>}
            </div>
          
        )
}


export default CommentForm