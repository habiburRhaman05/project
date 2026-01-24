import React from 'react'

const PostsSkelectionLoader = ({skelectionCount}:

  {
    skelectionCount:number
  }
) => {
  return (
    <div className='min-w-full grid lg:grid-cols-4 md:grid-cols-3 sm:-cols-2 grid-cols-1 gap-4'>
  {
    Array(skelectionCount).fill("").map((_,index)=>{
      return <PostCardSkelection key={index} />
    })
  }
    </div>
  )
}

export default PostsSkelectionLoader



export const PostCardSkelection = () =>{
  return <div className='w-full'>
    post card skelection
  </div>
}