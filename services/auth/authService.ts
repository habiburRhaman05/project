import { cookies, headers } from "next/headers";

async function getUserSession() {
  try {
  
    const cookie = (await cookies()).toString()// কুকিটি আলাদাভাবে নিন

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/get-session`, {
      method: "GET",
      headers: {
        "Cookie": cookie || "", // সার্ভার টু সার্ভার কুকি পাসিং
        "Accept": "application/json",
      },
      cache: "no-store",
    });
console.log("response",response);

    if (!response.ok) {
      console.log("not ok");
      
      return null
    }
    const data = await response.json();
    console.log(data);
    
    return data
  } catch (error) {
    console.error("Session Fetch Error:", error);
    return null;
  }
}


export const authServices = {getUserSession}

