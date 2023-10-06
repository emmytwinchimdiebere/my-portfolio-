"use client"

import React from 'react'
import { experiencesData } from '../../lib/data'
import SectionPage from './sectionPage'
import { useSectionInview } from '@/hooks/hooks'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css';
type Props = {}

function Experience({}: Props) {
  const {ref} = useSectionInview("experience")
  return (
    <section className=' dark:text-white' id="experience" ref = {ref}>
      <SectionPage className="text-4xl lg:text-4xl font-extrabold capitalize lg:mt-[12rem] mt-[10rem] mb-[15px]  justify-center items-center flex ">Experience</SectionPage>
        <VerticalTimeline lineColor = "">
            {experiencesData?.map((item, index)=>(
               <React.Fragment key={index}>
                 <VerticalTimelineElement 
                  
                 contentStyle = {{
                  background:"#fff",
                  color:"#000",
                  textAlign:"left",
                  border:"1px solid rgba(0,0,0,0.05)"
                }}
                 contentArrowStyle = {{
                  borderRight:"0.4rem solid #9ca3af"
                 }}

                 contentDateStyle = {{color:"yellow"}}

                 date = {item.date}
                 icon = {item.icon}
                 >
                  <h1 className ="font-extrabold capitalize mt-[10px]">{item.title}</h1>
                  <p className="text-gray-700 ">{item.description}</p>
                  <p className = "text-gray-500 border-t-2 border-black/10">{item.location}</p>
                </VerticalTimelineElement>
               </React.Fragment>
            ))}
        </VerticalTimeline>
    </section>
  )
}

export default Experience