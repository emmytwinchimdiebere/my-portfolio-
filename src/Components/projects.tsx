"use client"
import React from "react"
import SectionPage from "./sectionPage"
import { projectsData } from "../../lib/data"
import RenderProject from "@/Components/renderProjects"
import { useSectionInview } from "@/hooks/hooks"
import {motion} from "framer-motion"




const  ProjectComponent = () =>{
    const {ref} = useSectionInview("Projects", 0.5);
   
    return(

<motion.section variants={{hidden:{opacity:0,  scale:0}, visibility:{opacity:1, scale:1,}}} animate = {{type:"tween", transition:{delay:0.05}}} initial = "hidden" whileInView="visibility" viewport = {{once:true}}  className="scroll-mt-[7rem]" id ="projects" ref={ref}>
<SectionPage className="text-3xl font-bold capitalize lg:mt-[12rem] mt-[10rem]  justify-center items-center flex ">My Projects</SectionPage>
{projectsData?.map((project, index)=>(
    <React.Fragment key={index}>
    <RenderProject {...project}/>
    </React.Fragment>
))}

</motion.section>
         
            
        
    )
}

export default ProjectComponent
