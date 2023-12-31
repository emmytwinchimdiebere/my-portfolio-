// ./nextjs-app/app/[slug]/page.tsx
import { SanityDocument } from "@sanity/client";
import Post from "@/Components/BlogComponents/postBySlug";
import {  postPathsQuery, postQuery} from  "../../../../lib/query";
import { sanityFetch, token } from "../../../../lib/client";
import { client } from "../../../../lib/sanity-client";

import type { Metadata, ResolvingMetadata } from 'next'
 

// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
  
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
 
export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const slug = params.slug
 
     
       // fetch data
  
  

    // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  return {
 
    keywords:"Internet of Things (IoT),Front-End Development,coding, How-To,  css, backend, frontend,  nextJs, Laravel, php,  javascript,  Back-End Development,Full-Stack Development, Web Design Principles,User Interface (UI),User Experience (UX), DevOps Practices, Agile DevelopmentCloud Computing, Cybersecurity, Artificial Intelligence,Machine Learning,Data Science, Mobile App Development, Technology Trends, Web Development Tools, Programming Languages, Programming Languages, Coding Tutorials, Software Development ",
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
 
}
 
export default async function Page({ params, searchParams }: Props) {

  const {slug }= params

  
 
 
  return <Post slug =  {slug}/>;
  
}



