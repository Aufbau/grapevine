import React, { useEffect, useState } from "react"
import networkService from "./services/networkService"

const App = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await networkService.get("/posts")
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