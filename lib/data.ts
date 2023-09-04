import React from 'react'
import corpcommentImg from "../public/corpcomment.png"
import rmtdevImg from "../public/rmtdev.png"
import wordanalyticsImg from  "../public/age.jpg"

interface Routes  {

    name: string,
    path:string,

}

export const links =  [
        {
            name:"Home",
            path:"#home"
        },

        {
            name:"About",
            path:"#about"
        },

        {
            name:"Projects",
            path:"#projects"
        },

        {
            name:"Contact",
            path:"#contact"
        },
        {
            name:"Skills",
            path:"#skills"
        },
        {
            name:"experience",
            path: "#experience"
        }
] as const


export const projectsData = [
    {
      title: "CorpComment",
      description:
        "I worked on this full stack appplication, . Users can give public feedback to companies.",
      tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
      imageUrl: corpcommentImg,
    },
    {
      title: "rmtDev",
      description:
        "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
      tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
      imageUrl: rmtdevImg,
    },
    {
      title: "Blog Application",
      description:
        "developed a blog applications for content creation & management",
      tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
      imageUrl: wordanalyticsImg,
    },
  ] as const