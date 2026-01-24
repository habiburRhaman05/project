"use server"

import { revalidatePath, revalidateTag } from "next/cache";

export const demo = async() =>{
    let data = process.env.API_URL
    console.log("calling...",data);
    
}
export const reValidateData = async() =>{
 
    //  revalidateTag("blog","max")
    revalidatePath("/dashboard/posts")
    
}

