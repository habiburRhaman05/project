"use client"

import { useApiQuery } from '@/hooks/useApiQuery'

import EmptyState from './EmptyPostsState'
import PostsSkelectionLoader from './PostsSkelection'
import PostCard from './PostCard'

const PostsClient = ({initnalData}:{initnalData:any}) => {

    const {data:posts,isFetching,refetch} = useApiQuery(["fetch-posts-data"],"/api/testing",{
        initialData:initnalData,
        // refetchOnMount:"always",
        staleTime:60
    })

  

    if(isFetching){
      return <PostsSkelectionLoader
      skelectionCount={4}
      />
    }
    if(posts?.data.length <= 0){
      return <EmptyState
      />
    }
  return (
    <div className='w-full grid lg:grid-cols-4 md:grid-cols-3 sm:-cols-2 grid-cols-1 gap-4'>
         {
    posts?.data.map((post:any,index:number) =>{
        return <PostCard 
        key={index}
        post={post}
        index={index}
        />
    })
  }     

    </div>
  )
}

export default PostsClient