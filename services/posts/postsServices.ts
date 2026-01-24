
import { httpRequest } from "@/config/axios/axios";
import { Post } from "@/types/feed";
import axios from "axios";

const getAllPosts = async ():Promise<Post [] | any> =>{
  try {
     const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/post/all?search=next.js`,{
      next:{
        tags:["blog"],
        revalidate:30
      }
     })
   
     const data = await result.json();
    //  console.log(data);
     
    return data 
  } catch (error) {
    console.log(error);
  }
  return []
}

const getSearchResult = async (query:string):Promise<Post [] | any> =>{
  await new Promise((reslove)=> setTimeout(reslove,1000));
  try {
     const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/post/all?search=${query}`,{
      next:{
        tags:["blog"]
      } 
     })
   
     const data = await result.json();
    //  console.log(data);
     
    return data 
  } catch (error) {
    console.log(error);
    
  }
  return []
}

const getFeedDetailsBySlug = async (slug:string):Promise<Post | any> =>{
  try {
     const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/post/${slug}`,{
     
     })
   
     const data = await result.json();
    //  console.log(data);
     
    return data 
  } catch (error) {
    console.log(error);
    
  }
  return null
}






export const postServices = {getAllPosts,getFeedDetailsBySlug,getSearchResult}