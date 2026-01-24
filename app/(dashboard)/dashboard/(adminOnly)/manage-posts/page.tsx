import ManagePostsLists from '@/components/pages/admin-dashboard/manage-posts/manage-postsList'
import PostFilterModal from '@/components/pages/admin-dashboard/manage-posts/PostFilterModal'
import PostsClient from '@/components/pages/user-dashboard/PostsClient'
import { postServices } from '@/services/posts/postsServices'
import React from 'react'

const ManagePosts = async() => {
  const {data} = await postServices.getAllPosts();

  return (
    <div>
      <div className='flex w-full justify-between items-center p-4'>
        <h1>Manage All Posts</h1>
        <PostFilterModal/>
      </div>

      <ManagePostsLists initData={data}/>



    </div>
  )
}

export default ManagePosts