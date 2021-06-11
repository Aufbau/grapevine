import React from "react"
import styled from "styled-components"

import {
  Link
} from "react-router-dom"

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  transition: border-width 0.25s;

   & :hover {
    border-width: 0.25rem;
  }
`

const Container = styled.div`
  border: 0.1rem groove grey;
  margin-top: 1rem;
  margin-bottom: 1rem;
  transition: border-width 0.25s;


`

const Home = ({posts}) => {

  // const [expanded, setExpanded] = useState(Array(5).fill(false))

  // const expand = index => {
  //   console.log(index)
  //   setExpanded(
  //     expanded.map((v, i) => i === index ? !v : v)
  //   )
  // }

  return (
    <>
      {posts.map(post =>
        <StyledLink
          to={`/post/${post.id}`}
          key={post.id}>
          <Container>
            <h4>
              {post.title} - <em>{post.user.name}</em>
            </h4>
          </Container>
        </StyledLink>
      )}
    </>
  )
}

export default Home