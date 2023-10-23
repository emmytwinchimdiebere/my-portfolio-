
import GetAllPostByTag from "@/Components/BlogComponents/PostByTag"
import React from "react";
import type { Metadata, ResolvingMetadata } from 'next'
import { tagQuery } from "../../../../lib/query"
import { client } from "../../../../lib/sanity-client";


type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }
   
  export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const id = params.slug
    const [slug] = id
  
         // fetch data
    const post:any = await client.fetch(tagQuery, {slug});
    const seo = post?.map((seo:any)=>seo.tag)
    const descrip =  post?.map((describe:any)=> describe.description)
    const [tag] = seo
    const [description] = descrip;
  
    console.log(post);
    
  
      // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []
    return {
      title: tag,
      description: description,
      keywords:"Internet of Things (IoT),Front-End Development,coding, How-To,  css, backend, frontend,  nextJs, Laravel, php,  javascript,  Back-End Development,Full-Stack Development, Web Design Principles,User Interface (UI),User Experience (UX), DevOps Practices, Agile DevelopmentCloud Computing, Cybersecurity, Artificial Intelligence,Machine Learning,Data Science, Mobile App Development, Technology Trends, Web Development Tools, Programming Languages, Programming Languages, Coding Tutorials, Software Development ",
      openGraph: {
        images: ['/some-specific-page-image.jpg', ...previousImages],
      },
    }
   
  }

  export default async function Page({ params, searchParams }: Props) {

    const {slug }= params
return <GetAllPostByTag id = {slug} />  
 
}
