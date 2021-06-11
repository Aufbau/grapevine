import React, { useEffect, useState } from "react"
import postsService from "./services/postsService"

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await postsService.getAll()
      setPosts(fetchedPosts)
    }
    fetchData()
  }, [])

  return (
    <div>
      {posts.map(post =>
        <p key={post.title}>
          {post.title}
        </p>
      )}
    </div>
  )
}

export default App