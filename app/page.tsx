"use client";
import List from '../components/List'
import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'

function page() {
  const [posts,setPosts] = useState<any>([])
  const fetchPost = async() => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}posts`)
    setPosts(response.data);
  }

  useEffect(() => {
    fetchPost();
  }, [])
  
  return (
    <div>
      {
        posts.map((post: any) => 
          <List post={post} fetchPost={fetchPost} key={post.id}/>
        )
      }
    </div>
  )
}

export default page 