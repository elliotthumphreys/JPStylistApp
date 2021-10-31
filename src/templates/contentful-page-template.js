import * as React from "react"
import styled from "styled-components"

const StyledParagraph = styled.p`
margin: 0;
padding: 1em;
color: white;
font-size: 3em;
`

const StyledContainer = styled.main`
display: flex;
align-items: center;
justify-content: center;
padding: 0;
font-family: -apple-system, Roboto, sans-serif, serif;
min-height: 100vh;
background-color: rgb(0, 0, 0)
`

const ContentfulPageTemplate = ({ pageContext }) => {
  const {
    slug,
    pageTitle,
    navbar: { links },
    textContent
  } = pageContext;

  return (
    <StyledContainer>
      <title>John Proctor Stylist - Home</title>
      <StyledParagraph><em><b>Coming soon</b></em></StyledParagraph>
    </StyledContainer>
  )
}

export default ContentfulPageTemplate;