import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { RootDiv } from "./common"

const Container = styled.div`
`

const Content = styled(RootDiv)`
  border: 0.1rem solid grey;
  border-radius: 0.25rem;
  margin: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`

const Main = styled(Content)`

`
const Comments = styled(Content)`
`

const PostPage = ({posts}) => {
  const [post, setPost] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const postId = Number(id)
    const currentPost = posts.find(post => post.id === postId)
    setPost(currentPost)  
  }, [id, posts])

  return (
    <>
      {post &&
        <Container>
          <Main>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </Main>
          <Comments>
            <h3>Comments</h3>
            <div>
              {post.comments.map(comment =>
                <Content key={comment.id}>
                  <h4>{comment.user.name}</h4>
                  <p>{comment.content}</p>
                </Content>
              )}
            </div>
          </Comments>
        </Container>
      }
    </>
  )
}

export default PostPage