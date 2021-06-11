import React, { useEffect, useState } from "react"
import networkService from "./services/networkService"

const App = () => {
  const[displayPosts, setDisplayPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await networkService.get("/users")
      const fetchedPosts = await networkService.get("/posts")

      const data = []
      fetchedPosts.map(post => {
        data.push({
          ...post,
          user: fetchedUsers.find(user => user.id === post.userId)
        })
      })
      setDisplayPosts(data)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      {displayPosts.map(post =>
        <p key={post.id}>
          {post.title} - <em>{post.user.name}</em>
        </p>
      )}
    </div>
  )
}

export default App