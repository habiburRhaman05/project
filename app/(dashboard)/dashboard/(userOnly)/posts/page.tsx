import PostsList from '@/components/pages/user-dashboard/PostsList'
import PostsSkelectionLoader from '@/components/pages/user-dashboard/PostsSkelection'
import SelectPostsStatus from '@/components/pages/user-dashboard/SelectPostsStatus'
import TestButton from '@/components/pages/user-dashboard/TestButton'
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
  <PostsList/>
</Suspense>
</div>

    </div>
  )
}


  // <div>
  //     <b>PostsLists</b>
  //     <ol>
  //       <li>my posts - uploaded posts</li>
  //       <li>Draft posts </li>
  //       <li>Reject posts </li>
  //       <li>schedule posts </li>
  //     </ol>
  //   </div>
export default PostsLists