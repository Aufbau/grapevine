import React from "react"
import styled from "styled-components"

import {
  Link
} from "react-router-dom"
import { 
  RootDiv,
  Text,
  Strong
} from "./common"

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const Container = styled(RootDiv)`
  border: 0.1rem groove grey;
  background-color: rgb(227, 196, 255);
  box-shadow: 2px 2px 4px 5px rgb(189, 120, 255);
  margin: 1rem;
  border-radius: 5px;
  padding: 1rem;
  border-width: 0.1rem;
  transition: 
    box-shadow 0.25s, 
    transform 0.25s, 
    border-radius 0.25s,
    background-color 0.25s;

  ${StyledLink}:hover & {
    border-radius: 7px;
    transform: translate(0px, -5px);
    background-color: rgb(238, 219, 255);
    box-shadow: 6px 10px 4px 5px rgb(189, 120, 255);
  }
`

const Background = styled.div`
  align-self: stretch;
  align-content: stretch;
`

const Divider = styled.div`
  height: 0.1rem;
  border-radius: 2px;
  width: 100%;
  background-color: rgb(82, 59, 97);
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
    <Background>
      {posts && posts.map(post =>
        <StyledLink
          to={`/post/${post.id}`}
          key={post.id}>
          <Container>
            <Strong>{post.user.name}</Strong><Text>{" "} posted.</Text>
            <Divider />
            <h4><Strong>{post.title}</Strong></h4>
          </Container>
        </StyledLink>
      )}
    </Background>
  )
}

export default Home