import React, { useEffect, useState, useRef, memo } from 'react'
import { Link } from "gatsby"
import styled from 'styled-components';


export const CategoryContainer = styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr; 
    gap: 30px 30px; 
    grid-template-areas: 
    ". . ."
    ". . .";
    width: 100%;
    padding: 90px;
    
    overflow: hidden;

    @media (orientation: portrait) {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 30px 30px; 
        grid-template-areas: 
        ". . "
        ". . "
        ". . "; 
        padding: 60px;
        padding-top: 90px;
    }

    @media screen and (max-width: 991px)
    {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 30px 30px; 
        grid-template-areas: 
        ". . "
        ". . "
        ". . "; 
        padding: 60px;
        padding-top: 90px;
    }

    @media screen and (max-width: 767px)
    {
        grid-template-columns: 1fr 1fr; 
        grid-template-rows: 1fr 1fr 1fr; 
        gap: 30px 30px; 
        grid-template-areas: 
        ". . "
        ". . "
        ". . "; 
        padding: 60px;
        padding-top: 90px;
    }

    @media screen and (max-width: 479px) 
    {
        display: flex;
        flex-direction: column;
        padding: 0px;
        overflow: scroll;
        padding: 80px 60px 30px;
        margin-bottom: 60px;
    }
`
export const Category = styled(Link)`
    position: relative;
    overflow: hidden;
    background: url(${props => props.url}) center no-repeat;
    background-size: cover;

    @media screen and (max-width: 479px)
    {
        height: 100%;
        min-height: 250px;
    }
`
export const CategoryContentsContainer = styled.div`
    width: 100%;
    height: 100%;
    transition: opacity 200ms ease;
    opacity: 0;
    &:hover{
        opacity: 1;
        background-color: rgba(0,0,0,0.5)
    }

    @media screen and (max-width: 479px) 
    {
        opacity: 1;
        background-color: rgba(0,0,0,0.1)
    }
`
export const StyledCategoryHeading = styled.span`
    color: white;
    font-weight: 700;
    font-size: 28px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: 'August', sans-serif;

    position: absolute;
    top: 50%;
    text-align: center;
    width: 100%;
    transform: translateY(-50%);

`

const NavigationMenu = memo(({ categories }) => {
    const [width, setWidth] = useState(250)
    const [height, setHeight] = useState(250)
    const imageContainerRef = useRef(null)
    const [screenWidth, setScreenWidth] = useState(1920)

    useEffect(() => {
        let reportWindowSize = event => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', reportWindowSize);

        if (!!imageContainerRef.current
            && !!imageContainerRef.current.offsetWidth
            && imageContainerRef.current.offsetWidth * 1.5 > width
            && !!imageContainerRef.current.offsetHeight
            && imageContainerRef.current.offsetHeight * 1.5 > height) {
            setWidth(Math.round(imageContainerRef.current.offsetWidth * 1.5))
            setHeight(Math.round(imageContainerRef.current.offsetHeight * 1.5))
        }

        return () => window.removeEventListener('resize', reportWindowSize);
    }, [imageContainerRef, screenWidth])

    return <CategoryContainer>
        {
            categories.map((cat, index) => (
                <Category key={cat.link.slug}
                    ref={index === 0 ? imageContainerRef : undefined}
                    url={`${cat.image.file.url}?fm=jpg&fl=progressive&w=${width}&h=${height}&fit=fill&f=face`}
                    to={cat.link.slug}>
                    <CategoryContentsContainer>
                        <StyledCategoryHeading>{cat.link.displayName}</StyledCategoryHeading>
                    </CategoryContentsContainer>
                </Category>
            ))
        }
    </CategoryContainer>
})

const StyledShitImageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url(${props => props.imageurl});
    background-repeat: no-repeat;
    background-position: ${props => props.position};
    background-color: ${props => props.colour};
    background-size: fit;

    @media screen and (max-width: 479px) 
    {
        background-image: url(${props => props.imageurlMobile});
        background-position: ${props => props.positionMobile};
        background-color: ${props => props.colourMobile};
        background-size: contain;
    }
`;
const LandingPage = memo(({
    portraitImage,
    landscapeImage,
    portraitImageColour,
    portraitImagePosition,
    landscapeImageColour,
    landscapeImagePosition
}) => {
    const [width, setWidth] = useState(0)

    const setSizes = () => {
        setWidth(Math.round(window.innerWidth * 1.2));
    }

    useEffect(() => {
        setSizes();

        window.addEventListener('resize', setSizes);

        return () => window.removeEventListener('resize', setSizes);
    }, [])

    return <>
        <StyledShitImageContainer
            imageurl={`${landscapeImage.file.url}?fm=jpg&fl=progressive&w=${width}`}
            imageurlMobile={`${portraitImage.file.url}?fm=jpg&fl=progressive`}
            colour={landscapeImageColour}
            colourMobile={portraitImageColour}
            position={landscapeImagePosition}
            positionMobile={portraitImagePosition}>

        </StyledShitImageContainer>
    </>
})
export default LandingPage;