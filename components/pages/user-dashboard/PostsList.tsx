
import React from 'react'
import TestButton from './TestButton';
import PostsClient from './PostsClient';
import { postServices } from '@/services/posts/postsServices';


const PostsList = async () => {
   const posts = await postServices.getAllPosts();
 
  return <PostsClient
  initnalData={posts}/>



}

export default PostsList