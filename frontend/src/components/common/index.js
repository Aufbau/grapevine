import styled from "styled-components"

const FONT_NAME = "Lato"
const FONT_FORM = "sans-serif"

export const RootDiv = styled.div`
  font: 1rem ${FONT_NAME}, ${FONT_FORM};
`

export const Text = styled.span`
  font: 1rem ${FONT_NAME}, ${FONT_FORM};
  color: rgb(25, 5, 46);
`

export const Strong = styled.strong`
  font: bold 1rem ${FONT_NAME}, ${FONT_FORM};
  color: rgb(25, 5, 46)
`

export const Em = styled.span`
  font: italic 1rem ${FONT_NAME}, ${FONT_FORM};
  color: rgb(25, 5, 46);
`

export const SubEm = styled.em`
  font: italic 1rem ${FONT_NAME}, ${FONT_FORM};
  color: rgb(105, 93, 117);
`

export const Divider = styled.div`
  height: 0.1rem;
  border-radius: 2px;
  width: 100%;
  background-color: rgb(82, 59, 97);
`