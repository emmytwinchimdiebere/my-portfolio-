// ./nextjs-app/app/[slug]/page.tsx
import { SanityDocument } from "@sanity/client";
import Post from "@/Components/BlogComponents/postBySlug";
import { postPathsQuery, postQuery} from  "../../../../lib/query";
import { sanityFetch, token } from "../../../../lib/client";
import { client } from "../../../../lib/sanity-client";
import PreviewProvider from "../../../../lib/PreviewProvider";
import PreviewPost from "@/Components/BlogComponents/PreviewPost";
import { draftMode } from "next/headers";


// Prepare Next.js to know which routes already exist
export async function generateStaticParams() {
  // Important, use the plain Sanity Client here
  const posts = await client.fetch(postPathsQuery);

  return posts;
  
}

export default async function Page({ params }: { params: { slug: string } }) {
  const {slug }= params
  const post = await sanityFetch<SanityDocument>({query:postQuery, params:{slug:`${slug}`}})
  
 
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }
  return <Post post = {post} slug =  {slug}/>;
}