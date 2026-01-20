import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      My Posts widget

      <h1>
        <Link href={"/dashboard/posts"}>View all</Link>
      </h1>
    </div>
  )
}

export default page