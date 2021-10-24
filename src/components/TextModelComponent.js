import * as React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "styled-components"

const StyledImg = styled.img`
max-width: 400px;
height: auto;
float: left;
padding: 1em;
`

const StyledContentContainer = styled.div`
width: 80%;
margin: auto;
margin: auto;
max-width: 800px;
background-color: white;
`

const StyledParagraph = styled.p`
margin: 0;
padding: 1em;
`

const TextModelComponent = ({rawContentfulContent, image}) => {
    const options = {
        renderMark: {
          [MARKS.BOLD]: text => <b>{text}</b>,
          [MARKS.ITALIC]: text => <i>{text}</i>,
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <StyledParagraph>{children}</StyledParagraph>,
            [BLOCKS.DOCUMENT]: (node, children) => <>{children}</>
        },
      }

    return (
        <StyledContentContainer>
            {<StyledImg src={image.file.url}/>}
            {renderRichText(rawContentfulContent, options)}
        </StyledContentContainer>
    )
}

export default TextModelComponent;