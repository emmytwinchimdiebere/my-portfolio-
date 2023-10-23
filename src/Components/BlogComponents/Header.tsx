/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from 'next/image'
import Link from  "next/link"
import React, { useEffect, useState } from  "react"
import { client } from "../../../sanity/lib/client"
import { SanityDocument } from "next-sanity"
import { QueryByCatgory } from "../../../lib/query"
import { Button, Dropdown, Menu } from 'antd';
import type  {MenuProps,} from "antd"


function Header() {
  const [category, setCategory] = useState<SanityDocument[]>();
  const [loader, setLoader] = useState<boolean>()
  const [toggle, setToggle] = useState<boolean>(false);

 const items:MenuProps['items'] = [{
    key: '',
    label:(
        <Menu>
            {category && category?.map((link)=>(
                <Menu.Item key = {link._id}>
                    <Link className='text-black flex flex-col gap-2 hover:text-black/10'  href = {`/categories/${link._id}`}>{link.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    )
 }]
 

  const fetchCategories = async ()=>{
      setLoader(!loader) 
      const fetch = await client.fetch<SanityDocument[]>(QueryByCatgory);
      if(fetch){
          setLoader(false)
          setCategory(fetch);
      }
  }
  useEffect(()=>{
      fetchCategories()
  },[])
  

  return (
      <>

<div className=' flex flex-row flex-nowrap  relative w-full h-auto px-5 py-4 bg-gray-100 '>
            <div className='flex-start flex-row flex gap-[20px]  mt-[5px] text-[1.2rem] text-black'>
             <Link href={"/"} as={"/"}>

             <Image className='rounded-full w-[40px] h-[40px] ' alt='myImage' height={50} width={50} src={ "/me.png"} objectFit='center' priority = {true} quality={95}/>
             </Link>
             <Link as = {"/articles"} href={"/articles"}><h1 className='leading-[50px] font-bold'>rockycodes</h1></Link>
            
             <div className = "relative leading-[50px] sm:px-[40px] px-[20px]">
               
                         
            <Dropdown  menu = {{items}} placement="bottom" arrow>
             <Button>Categories</Button>
            </Dropdown>
                         
        
                            
                  
               </div>
            </div>
            <div className='flex flex-row text-black gap-[10px] relative '>
               

          
            </div>

          
    </div>
   
    <div className='flex flex-col md:flex-row md:justify-between relative  py-5 rounded-md mt-[10px]  '>
            <div className='flex flex-col mt-[15px]'>
            <span className='lg:text-4xl text-[1.5rem] w-screen font-extrabold leading-[5px] tracking-tight bg-gray-100 lg:p-10  py-10 px-5 '>
                RockyCodes's Daily Blog
             </span>
             <span className='text-bold lg:-mt-[42px] -mt-[35px] px-[10px] ml-5  lg:ml-8 relative'>deveosphere for every developer.</span>
            </div>

             
            </div>
      </>
  )
}

export default Header