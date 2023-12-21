"use client"
import { Loader, SquareDashedBottom } from "lucide-react";
import React, { useState, } from "react"
 import 'react-quill/dist/quill.snow.css';
 import dynamic from 'next/dynamic'
import Image from "next/image";
 import {useAuth, useUser} from  "@clerk/nextjs"
import { TextField , MenuItem, Select, OutlinedInput, InputLabel, Box, Chip} from "@mui/material";
import {useFormik, Field} from  "formik"
import * as Yup from "yup"
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"
import { storage } from "@/firebase/storage";
import {v4} from "uuid";
import PostLoader from  "./Loader";
import  {useRouter} from  "next/navigation"

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
 
 const ReactQuill = dynamic(()=>import("react-quill"),  {ssr:false} )

 interface propsTypes {
  category:any, 
  tag:any,
  email:string | undefined
 }



export default function CreatePage({category, tag, email}: propsTypes){
    const  [showBtn, setShowBtn] = useState<boolean>(false);
    const [imagePreview,  setImagePreview] = useState <string | undefined >("")
    const  [tags] = useState<number[]>([])
    const [fileImageLoader, setFileImageLoader] = useState<boolean>(false)
    const [imageMessage, setImageMessage] = useState("");
   
    const  [loader, setLoader]  = useState<boolean>(false);
    const  delay = (ms:number)=>new Promise((resolve)=>setTimeout(()=>resolve,ms));
    const router = useRouter();
   
 
 

   
    const generateSlug = (title:string ) => {
     const slug =  title.toLocaleLowerCase().replace(/\s+/g, "-");

      const cleanSlug  = slug.replace(/[^\w\-]+/g, '')

      return  cleanSlug
    }

 

    const validationSchema =  Yup.object({
      title:Yup.string().required("the title is required")
      .max(50, "the title cannot be more than 50 Characters").min(15,  "Title too short"),
      image: Yup.mixed().required('image required'),
      categoryId : Yup.number().required("the category field is required"),
      slug: Yup.string().required("the slug field is required").max(50),
      body: Yup.string().required("the content is required"),
      description: Yup.string(),
      tags:Yup.array().of(Yup.number().required("tags is required")).max(4,  "You can select only four Tags").min(1,  "atleast one tag is required "),
  

    })


   const formik  = useFormik({
      initialValues: {
        title: "",
        image : "", 
        categoryId: "",
        slug: "",
        description: " ",
        body: "",
        tags:tags,
        email:email
      
      
      },
      onSubmit: async (values) => createPost(values),

      validationSchema: validationSchema

   })

   const  generatingSlug = () =>{
   if(formik.values.title){
    const slug = generateSlug(formik.values.title);
    formik.setFieldValue("slug", slug);

   }
  }

  const  createPost = async (values:any)=>{
    const  {title, body,  description,  categoryId,  tags , slug,  image, email} = values;
    const controller = new AbortController()

    const abortRequest  =  setTimeout(()=>{
      controller.abort();
      toast("request timeout please try posting again...", {type:"error",  position:"top-left"})
      setLoader(false)
    }, 180000)

  
        
   try{
    setLoader(!loader)
    await fetch("http://localhost:3000/api/posts/createPost", {
      method:"POST",
      headers:{
         "Content-Type" : "application/json",
       

      },
      
      signal:controller.signal,
      
      
      body:JSON.stringify({
        title:title,
        body:body,
        email:email,
        description:description,
        categoryId:categoryId,
        tags:tags,
        slug:slug,
        image:image


      })

    })
    .then((response)=>{
      if(!response?.ok){
        throw new Error("Error creating Post")
      }
      else{
        clearTimeout(abortRequest);
        return  response.json();
      }
    })
    .then((data)=>{
      console.log(data)
        if(data?.status === 200){
          setLoader(false);
          toast(data?.message,  {type:"success",  position:"top-center"});
        
        }

       else if(data?.status === 500){
          setLoader(false);
          toast(data?.message,  {type:"error",  position:"top-center"});
        
        }


    })

   }
   catch(err:any){
    console.log(err)

    throw new Error(err)
   }
    
  }

  const handleSlugKeydown = (event:React.KeyboardEvent<HTMLInputElement>)=>{
    if(event.key === "Backspace"){
     
    }
  }
  
const modul = {
    toolbar: [
        ['bold', 'italic', 'underline','strike'],
        ['blockquote', 'code-block', "image", ],
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

    
const handleFileChange = async (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
      files: FileList;
    };
  
    if (!target.files) return false;

    const files  = target.files[0]
    
    
    const imageRef = ref(storage, `blogImages/${v4() + "-" + files.name}`)
   
     const supportedFormats = ['jpg', 'jpeg', 'png', 'gif', "webp"];
     const extension = files.name.split(".").pop() || "";

    if(files.size <= 3145728 && supportedFormats.includes(extension)){
      setFileImageLoader(!fileImageLoader);
    await  uploadBytes(imageRef, files).then((response)=>{
      if(response){
        setFileImageLoader(false)
        getDownloadURL(imageRef).then((response)=>{
          if(response){
            formik.setFieldValue("image",response);
            setImageMessage("");
            setImagePreview(response);
          }
        })
      
        
      }
   }).catch((err)=>{
    console.log(err)
    return "image upload failed server error"
   })
    
  }else{
    setImageMessage("file size or type not supported")
    
  }


    
};



    return(
      
          
        <div  className="relative lg:mx-auto w-full  flex ">
            <form onSubmit={formik.handleSubmit} className = "mt-10 pl-5 w-full h-full relative flex flex-col">
         
         <div className="pt-[20px] mt-[20px]  text-2xl font-bold ">
         <TextField   {...formik.getFieldProps("title")} label = "Title" variant="standard"
              className="focus:bg-transparent focus:outline-none w-full h-[50px] placeholder:text-gray-400 placeholder:text-[2rem] lg:placeholder:text-5xl outline-none border-none bg-transparent font-semibold  " type ="text" placeholder="Title" />
               
               {formik.touched.title && formik.errors.title ? (
                 <span className="text-[16px] font-bold text-red-600 px-[30px]">{formik.errors.title}</span>
               ) : null}
               </div>
               
              
               <div className="flex flex-row gap-5 mt-[20px]">
             
               { imagePreview && <Image className="w-[80px] h-[70px]" src={imagePreview} width={80} height={80} alt = {"images"}/>}

               
            
            
                   <div className =  "flex md:flex-row flex-col gap-3 relative ">
             
                 <input {...Field} onChange={(e)=>handleFileChange(e)} className="hidden" accept="image/*"  type="file" id="image"  />
           
                     <button type="button" className="flex flex-row gap-4 p-[20px] rounded-2xl bg-black  border-2 text-white active:bg-transparent  active:border-gray-500 active:text-black cursor-pointer hover:scale-100 transition">
                     
                     {fileImageLoader && (
                     <div className=" animate-spin text-sm  font-medium  ">{<Loader />}</div>
                     
                     )}
                       
                       <label htmlFor="image">
                       Add cover Image
                       </label>
                     
                     
                     </button>
                         <div className="flex flex-col md:flex-row gap-3">
                         {formik.touched.image && formik.errors.image ? (
                       <span className="text-[16px] font-bold text-red-600 px-[30px]">
                      
                         {formik.errors.image}
                         
                         </span>
                     ) : ""}
                 
                 {imageMessage && imageMessage}
                         </div>
                   </div>
               </div>
                       <div className = "relative pt-[40px]">
                       <TextField {...formik.getFieldProps("description")} helperText="please enter description" fullWidth label= "description" variant = "standard"  type="text" placeholder = "description"
                         /> 
                         {formik.touched.description && formik.errors.description ? (
                           <span className="text-[16px] font-bold text-red-600 absolute top-[5rem] left-[10rem] ">{formik.errors.description}</span>
                         ) : ""}
                       </div>
            
                       <div className = "relative">
                         <TextField onKeyDown={handleSlugKeydown} {...formik.getFieldProps("slug")} value={formik.values.slug} fullWidth label= "slug" variant = "standard"  type="text" placeholder = "Enter_post_slug"
                         /> 
                         {formik.touched.slug && formik.errors.slug ? (
                           <span className="text-[16px] font-bold text-red-600 absolute top-[5rem] left-[10rem] ">{formik.errors.slug}</span>
                         ) : ""}
                         <button type="button" className  = "relative top-5 active:scale-105 transition hover:cursor-pointer rounded-xl p-[15px] bg-black text-white" onClick={()=>generatingSlug()}>Generate slug</button>
                       </div>
                   
                   <div className="pt-[50px] relative">
                       <ReactQuill  modules={modul} {...Field} 
                        theme="snow" placeholder="write your story here...." 
                        onChange = {(body)=>formik.setFieldValue("body", body)}
                        value={formik.values.body}
                      
     
                       
                        
                        />
                        
                        {formik.touched.body && formik.errors.body ? (
                             <div className = "text-[16px] font-bold text-red-600 px-[30px]">
                               {formik.errors.body}
                             </div>
                        ) : null}
                   </div>
   
                   
                 <div className = "relative pt-5 overflow-x-hidden w-full">
             <TextField 
              select label = "Select Category" helperText = "please select a category" variant = "standard"
               fullWidth
               id = "selectCategory"
               {...formik.getFieldProps("categoryId")}
   
       >
           {category &&  category?.categories?.map((cat:any)=>{
               
               return(
                 <MenuItem value = {cat.id} key = {cat.id}>{cat.name}</MenuItem>
               )
           })}
       </TextField>
       {formik.touched.categoryId && formik.errors.categoryId ? (
         <div className="text-[16px] font-bold text-red-600 px-[30px]">
           {formik.errors.categoryId}
         </div>
       ) :
        " "}
         </div>

         <div className="pt-[30px] pb-[30px]">
           <InputLabel>Tags</InputLabel>
           <Select 
           multiple 
           {...formik.getFieldProps("tags")}
           value  = {formik.values.tags}
           fullWidth
           label= "select a tag for the post"
           input={<OutlinedInput id= "chipOutline"  label="Tags" />}
           renderValue={(selected)=>{
             
             return(
           <div className="flex flex-wrap gap-5 ">
           
               {selected.map((id:number)=>{
                 const selectedItem  = tag?.tags?.find((item:any)=>item?.id === id)
                 return(
                   <Chip key= {id} label = {selectedItem ? selectedItem?.name : null} />
                 )
               })}
        
           </div>
             )}
            
           }

          
           
           >
             {tag && tag?.tags?.map((tag:any)=>(
               <MenuItem value = {tag.id} key={tag.id}>
                 {tag.name}
               </MenuItem>
             ))}
           </Select>

           {formik.touched.tags && formik.errors.tags ? (
                 <div className="text-[16px] font-bold text-red-600 px-[30px]">
                 {formik.errors.tags}
               </div>
           ) : null }
         </div>
            
       <button type="submit" disabled={!(formik.isValid && formik.dirty)}  className=" disabled:bg-gray-400  disabled:cursor-not-allowed  absolute group hover:scale-105 transition flex flex-row gap-5 hover:bg-transparent border-2 hover:border-black hover:text-black text-[1.2rem] font-bold  top-4 right-4 bg-green-600 text-white rounded-lg p-3 -mt-[3rem]"> Publish <SquareDashedBottom className="group-hover:translate-x-3 transition group-hover:cursor-pointer"/></button>
                   
             {loader ? <PostLoader loader = {loader} />  : ''}  
           </form>

           <ToastContainer />
        </div>
             
     
    )
}