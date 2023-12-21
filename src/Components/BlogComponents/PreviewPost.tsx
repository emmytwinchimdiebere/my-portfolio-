// ./nextjs-app/app/_components/PreviewPosts.tsx

"use client";

import type { SanityDocument } from "@sanity/client";
import { useLiveQuery } from "@sanity/preview-kit";
import Post from "@/Components/BlogComponents/postBySlug";
import { postQuery } from "../../../lib/query";
import { useParams } from "next/navigation";

export default function PreviewPost({post}: {post: SanityDocument;}) {
  const [data] = useLiveQuery(post, postQuery);
  
  const params = useParams()
   
    if(!params){
        return false
    }
 

  return <Post slug="" />;
}