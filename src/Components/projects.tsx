import React from "react"
import SectionPage from "./sectionPage"
import { projectsData } from "../../lib/data"
import { StaticImageData } from "next/image"
import RenderProject from "@/Components/renderProjects"




const  ProjectComponent = () =>{
    return(

<section id ="projects">
        <SectionPage>My Projects</SectionPage>
{projectsData?.map((project, index)=>(
    <React.Fragment key={index}>
    <RenderProject {...project}/>
    </React.Fragment>
))}

</section>
         
            
        
    )
}

export default ProjectComponent
