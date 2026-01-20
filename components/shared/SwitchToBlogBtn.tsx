"use client"
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Eye } from 'lucide-react'

const SwitchToBlogBtn = () => {

    const path = usePathname();
    const showButton = path.includes("/blogs");


  return <>
  {!showButton ? <Button asChild className='bg-accent-foreground hover:bg-blue-700 hover:text-white'>
        <Link href={"/blogs"}>
       <Eye/> View Blogs</Link>
    </Button> : null}
  </>
}

export default SwitchToBlogBtn