
import { SanityDocument } from "next-sanity";
import Posts from "@/Components/BlogComponents/Posts";
import { postsQuery } from "../../../lib/query";
import { sanityFetch, token } from "../../../lib/client";
import PreviewProvider from "../../../lib/PreviewProvider";
import PreviewPosts from "@/Components/BlogComponents/PreviewPosts";
import { draftMode } from "next/headers";

export default async function Home(){
  const posts = await sanityFetch<SanityDocument[]>({ query: postsQuery });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts    posts={posts} />
      </PreviewProvider>
    );
  }
  
  return (
 <div>
   <Posts posts={posts} />;
 </div>
  )
}