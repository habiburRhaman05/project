
import PostsSkelectionLoader from '@/components/pages/user-dashboard/PostsSkelection'
import SelectPostsStatus from '@/components/pages/user-dashboard/SelectPostsStatus'
import { Suspense } from 'react'

const PostsLists = () => {
  return (
    <div className='min-w-full max-w-7xl mx-auto '>
      <div>
         <div>
          <h1>
             Manage your posts
          </h1>
         </div>
        <SelectPostsStatus/>
      </div>

<div className='w-full '>

  <Suspense fallback={<PostsSkelectionLoader
skelectionCount={4}
/>}>
  {/* <PostsList/> */}
</Suspense>
</div>

    </div>
  )
}

export default PostsLists