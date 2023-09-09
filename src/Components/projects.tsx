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

<motion.section initial = {{opacity:0, scale:0}} animate = {{opacity:1,  scale:1}} className="scroll-mt-[7rem]" id ="projects" ref={ref}>
<SectionPage>My Projects</SectionPage>
{projectsData?.map((project, index)=>(
    <React.Fragment key={index}>
    <RenderProject {...project}/>
    </React.Fragment>
))}

</motion.section>
         
            
        
    )
}

export default ProjectComponent
