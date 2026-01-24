import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
   Latest posts 

      <h1>
        <Link href={"/admin/dashboard/manage-posts"}>View all</Link>
      </h1>
    </div>
  )
}

export default page