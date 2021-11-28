import React, { memo } from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styled from "styled-components"
import '../fonts/fonts.css'

const StyledImg = styled.img`
    height: auto;
    float: left;
    padding: 20px;
    width: 50%;
    
    @media screen and (max-width: 767px)
    {
        width: 100%;
    }

    @media screen and (max-width: 479px)
    {
        width: 100%;
    }
`

const StyledContentContainer = styled.div`
    width: 80%;
    margin: auto;

    @media screen and (max-width: 479px), screen and (max-width: 767px)
    {
        margin: 0px;
        width: 100%;
        padding-top: 60px;
        padding-left: 45px;
    }
`

const StyledTextContentContainer = styled.div`
    margin: auto;
`

const StyledParagraph = styled.p`
    margin: 0;
    padding: 20px 20px 0px 20px;
    color: white;
    font-size: 18px;

    &:last-of-type{
        padding: 20px;
    }
`

const Heading1 = styled.h1`
    margin: 0px;
    padding: 20px 3em 0em 20px;
    color: white;
    text-transform: uppercase;
    font-family: 'August', sans-serif;
    font-weight: 700;
    line-height: 121%;
    font-size: 60px;
`


const TextModelComponent = memo(({ rawContentfulContent, image }) => {
    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <b>{text}</b>,
            [MARKS.ITALIC]: text => <i>{text}</i>,
        },
        renderNode: {
            [BLOCKS.HEADING_1]: (node, children) => <Heading1>{children}</Heading1>,
            [BLOCKS.PARAGRAPH]: (node, children) => <StyledParagraph>{children}</StyledParagraph>,
            [BLOCKS.DOCUMENT]: (node, children) => <>{children}</>
        },
    }

    return (
        <StyledContentContainer>
            {<StyledImg src={image.file.url} />}
            <StyledTextContentContainer>
                {renderRichText(rawContentfulContent, options)}
            </StyledTextContentContainer>
        </StyledContentContainer>
    )
})

export default TextModelComponent;