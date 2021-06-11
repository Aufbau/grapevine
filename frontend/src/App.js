import React, { useEffect, useState } from "react"
import networkService from "./services/networkService"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import Home from "./components/Home"
import PostPage from "./components/PostPage"

const App = () => {
  const [displayPosts, setDisplayPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await networkService.get("/users")
      const fetchedPosts = await networkService.get("/posts")
      const fetchedComments = await networkService.get("/comments")

      const data = []
      fetchedPosts.map(post => {
        data.push({
          ...post,
          user: fetchedUsers.find(user => user.id === post.userId),
          comments: fetchedComments.filter(comment => comment.postId === post.id)
        })
      })

      data.map(post => {
        post.comments = post.comments.map(comment => ({
          ...comment,
          user: fetchedUsers.find(user => user.id === comment.userId)
        }))
      })
      console.log(data)
      setDisplayPosts(data)
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <Router>
        {/* {nav bar stuff goes here} */}

        <Switch>
          <Route path="/" exact>
            <Home posts={displayPosts} /> 
          </Route>
          <Route path="/post/:id">
            <PostPage posts={displayPosts} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App