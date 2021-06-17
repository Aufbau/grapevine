import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import { RootDiv, Divider, Strong, Text } from "./common"

const Container = styled(RootDiv)`
  border: 0.1rem groove grey;
  background-color: rgb(227, 196, 255);
  margin: 1rem;
  border-radius: 0.25rem;
  padding: 1rem;
  border-width: 0.1rem;
`

const Content = styled(RootDiv)`
  /* border: 0.1rem solid rgb(144, 128, 156); */
  border-radius: 0.25rem;
  margin: 0.5rem;
  padding: 0.5rem;
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
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Divider />
          <h3>Comments</h3>
          <div>
            {post.comments.map(comment =>
              <Content key={comment.id}>
                <Strong>{comment.user.name}</Strong>
                <Divider />
                <p>
                  <Text>{comment.content}</Text>
                </p>
              </Content>
            )}
          </div>
        </Container>
      }
    </>
  )
}

export default PostPage