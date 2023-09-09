"use client"
import React, {useEffect} from "react"
import { useActiveSectionProvider } from "@/context/setActiveLinkContext";
import {useInView}  from  "react-intersection-observer"
import { SectionNamesProps } from "@/types/types";

export const useSectionInview = (SectionName:SectionNamesProps, threshold = 0.75)=>{

const {setActiveLink,lastTimeLinkClicked} = useActiveSectionProvider()
    const {ref, inView} = useInView({ threshold })
   
   
   useEffect(()=>{
    if(inView && Date.now() - lastTimeLinkClicked > 1000 ){
        setActiveLink(SectionName);
    }
   }, [inView, setActiveLink, SectionName, lastTimeLinkClicked])

   return {
    ref:ref,
   }
}