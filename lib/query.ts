// ./nextjs-app/sanity/lib/queries.ts

import { groq } from "next-sanity";

// Get all posts
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
    ..., author->, categories[]->, tags[]->,
    
  }|order(_createdAt desc)`;



// Get a single post by its slug
export const postQuery = groq`*[_type == "post" &&  _id == $slug ]{ 
   ..., author->, categories[]->, tags[]->
    
  }` ;

// Get all post slugs
export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;


  //get a post by its Tag

  export const PostTag = groq`*[_type == "post" && references($id)]{
    ..., author->, categories[]->,tags[]->,
    title,
    "numberOfCharacters": length(pt::text(body)),
    // assumes 5 characters as mean word length
    // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
    "estimatedWordCount": round(length(pt::text(body)) / 5),
    // Words per minute: 180
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  } | order(createdAt)`

//get all tags 
export const AllPostTagsQuery = groq`*[_type == "tag" ]{
  tag, _id
}| order(createdAt)`

export const PostByCategory = groq `*[ _type == "post" && references($id)]{
  ...,author->,tags[]->,
  title,
  "numberOfCharacters": length(pt::text(body)),
  // assumes 5 characters as mean word length
  // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
  "estimatedWordCount": round(length(pt::text(body)) / 5),
  // Words per minute: 180
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
  
}`

export const QueryByCatgory = groq`*[_type == "category"]{
  title, _id
}| order(asc)`