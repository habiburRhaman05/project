"use client"
import { Select, SelectItem, SelectTrigger } from '@/components/ui/select'
import { postsConstants } from '@/constants/post'
import { useRefetchQueries } from '@/lib/react-query'
import { useParams, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const SelectPostsStatus = () => {

  const {refetchQueries} = useRefetchQueries()
  
  const searchParams = useSearchParams()
  const urlParams = new URLSearchParams(searchParams)
const router = useRouter()

  const handleSelectChange = (value:string) =>{
 console.log(value);
 urlParams.set("status",value.toLowerCase())
 router.push(`/dashboard/posts?${urlParams.toString()}`)
   refetchQueries("fetch-posts-data")
  }


  

  return (
    <div>
     
         <select className='bg-background'
         defaultValue={searchParams.get("status")?.toUpperCase() || "PUBLISHED "}
         onChange={(e)=> handleSelectChange(e.target.value)}
         >
           {
             postsConstants.postsStatus.map((status,index)=>{
               return <option   key={index} value={status.value}>{status.title}</option>
            })
           }
         </select>
    </div>
  )
}

export default SelectPostsStatus