import React from 'react'
import corpcommentImg from "../public/corpcomment.png"
import rmtdevImg from "../public/rmtdev.png"
import wordanalyticsImg from  "../public/age.jpg"
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

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
        }, 

        {
          name:"Blog",
          path:"#blog"
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

  export const skills = [
    "React", 
    "Laravel",
    "Mysql",
    "mongoDb",
    "Next js",
    "postgres",
    "Nodejs",
    "Prisma",
    "html",
    "css",
    "javascript",
    "tailwindCss",
    "Docker", 
    "Kubernates",
    "Typescript",
    "Redux Toolkit", 
    "Framer motion"
  ] as const


  export const experiencesData = [
    {
      title: "Graduated from IT School",
      location: "Lagos, Nigeria",
      description:
        "I graduated after 6 months of studying. I Started working on Personal Projects & frelancing.",
      icon: React.createElement(LuGraduationCap),
      date: "2020",
    },
    {
      title: "Front-End Developer",
      location: "Lagos, Nigeria",
      description:
        "I worked as a front-end developer for one year in a startup. this gave me the chance to become a full stack developer",
      icon: React.createElement(CgWorkAlt),
      date: "2020 - 2021",
    },
    {
      title: "Full-Stack Developer",
      location: "Lagos , Nigeria",
      description:
        "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and Mysql. I'm open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2022 - present",
    },
  ] as const;