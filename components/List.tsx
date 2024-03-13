import React from 'react'
import Button from "@mui/material/Button";
import axios from 'axios';
import { useRouter } from "next/navigation";

const List = ({post, fetchPost}:{post: any, fetchPost: any}) => {
    const router = useRouter();
    const deletePost = async(id: any) => {
     await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}posts/${id}`)
     fetchPost();
    }
  return (
   <div className='m-12'>
        <div>
        <span className='mx-10'>id</span>
        <span>{post.id}</span>

        </div>
        <div>
            <span className='mx-10'>title</span>
        <span>{post.title}</span>

        </div>
        <div>
        <span className='mx-10'>description</span>
        <span>{post.description}</span>
        </div>
        <div className='mx-10'>

        <Button  onClick={()=> router.push(`/${post.id}`)}>Edit {post.id}</Button>
        </div>
        <div className='mx-10'>

         <Button onClick={()=> deletePost(post.id)}>Delete {post.id}</Button>
        </div>
   </div>
  )
}

export default List