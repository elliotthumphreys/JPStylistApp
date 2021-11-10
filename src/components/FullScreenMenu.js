import React, { useContext, useState, createContext, useEffect } from 'react';
import styled from 'styled-components';
import '../fonts/fonts.css'

const PositioningContainer = styled.div`
    top: 0;
    right: 0;
    position: absolute;
    display: block;
    padding: 18px;
    z-index: 101;
`
const StyledButtonContainer = styled.button`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
    cursor: pointer;
    background-color: rgba(0,0,0,0);
    border: none;
`
const StyledButtonContainerChildOne = styled.div`
width: 44px;
height: 2px;
margin-top: 7px;
margin-bottom: 7px;
background-color: #fff;
transform: translate3d(0px, ${props => props.translateY}, 0px)
           scale3d(1, 1, 1)
           rotateX(0deg)
           rotateY(0deg)
           rotateZ(${props => props.rotateZ})
           skew(0deg, 0deg);
transform-style: preserve-3d;
`;
const StyledButtonContainerChildTwo = styled(StyledButtonContainerChildOne)`
width: ${props => props.width};
transform: translate3d(0px, 0px, 0px)
           scale3d(1, 1, 1)
           rotateX(0deg)
           rotateY(0deg)
           rotateZ(${props => props.rotateZ})
           skew(0deg, 0deg);
height: 2px;
`;
export const FullScreenMenuButton = () => {
    const { open, toggleOpen } = useContext(FullScreenNavMenuContext);
    const [ animationAmount, setAnimationAmount ] = useState(open ? 1 : 0)
    const [ target, setTarget ] = useState(open ? 1 : 0)

    const handleButtonOnClick = () => toggleOpen()

    useEffect(() => {
        let animation = setTimeout(() => {
            if(animationAmount < target && target === 1)
                setAnimationAmount(animationAmount + .075 > target ? target : animationAmount + .075)
            if(animationAmount > target && target === 0)
                setAnimationAmount(animationAmount - .075 < target ? target : animationAmount - .075)
        }, 3);

        return () => clearTimeout(animation);
    }, [target, animationAmount])

    useEffect(() => {
        setTarget(open ? 1 : 0)
    }, [open])

    return (
        <PositioningContainer>
            <StyledButtonContainer onClick={handleButtonOnClick}>
                    <StyledButtonContainerChildOne rotateZ={`${0 + (45 * animationAmount)}deg`} translateY={`${0 + (16 * animationAmount)}px`}/>
                    <StyledButtonContainerChildTwo width={`${56 + (44 * animationAmount)}%`} rotateZ={`-${0 + (45 * animationAmount)}deg`}/>
            </StyledButtonContainer>
        </PositioningContainer>
    )
}

const FullScreenNavDiv = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 100;
    display: block;
    position: absolute;
    background: black;
    transform: translateY(${
            props => props.open ? '0' : '-105vh'
        }) translateX(0px);
    transition: transform 300ms ease 0s;
`
const GridContiner = styled.div`
    position: fixed;
    left: 0%;
    top: 0%;
    right: 0%;
    bottom: 0%;
    z-index: 9999;
    display: -ms-grid;
    display: grid;
    width: 100%;
    height: 100%;
    grid-auto-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    -ms-grid-columns: 515px 1fr minmax(490px, 546px);
    grid-template-columns: 515px 1fr minmax(490px, 546px);
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    -webkit-transform: translate(0px, 0px);
    -ms-transform: translate(0px, 0px);
    transform: translate(0px, 0px);
    overflow: hidden;
    opacity: ${props => props.showContent ? 1 : 0};
    transition: opacity 500ms ease 0s;

    @media screen and (max-width: 991px){
        grid-auto-rows: auto;
        -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
        -ms-grid-rows: auto minmax(auto, 33vh) auto;
        grid-template-rows: auto minmax(auto, 33vh) auto;
        text-align: center;
    }
`
const GridItem1 = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-right: 1px solid #333;
    border-bottom: 1px solid #333;
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
    -ms-grid-column: span 2;
    grid-column-start: span 2;
    -ms-grid-column-span: 2;
    grid-column-end: span 2;

    @media screen and (max-width: 991px){
        border-right: none;
    }
`
const GridItem2 = styled.div`
    overflow: hidden;
    padding-top: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #333;
    display: flex;

    @media screen and (max-width: 991px){
        display: none;
        padding-top: 15px;
        padding-bottom: 15px;
        border-right: none;
    }
`
const GridItem3 = styled.div`
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: hidden;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-right: 1px solid #333;
    text-align: center;

    @media screen and (max-width: 991px) {
        -ms-grid-column-span: 2;
        grid-column-end: 3;
        -ms-grid-column: 1;
        grid-column-start: 1;
        -ms-grid-row-span: 1;
        grid-row-end: 4;
        -ms-grid-row: 3;
        grid-row-start: 3;
        border-right: none;
    }
`
const GridItem4 = styled.div`
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -ms-grid-row: span 1;
    grid-row-start: span 1;
    -ms-grid-row-span: 1;
    grid-row-end: span 1;
    -ms-grid-column: span 2;
    grid-column-start: span 2;
    -ms-grid-column-span: 2;
    grid-column-end: span 2;

    @media screen and (max-width: 991px){
        padding-top: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid #333;
        border-right-style: none;
        border-right: none;
    }
`
const StyledHeading = styled.h2`
    color: white;
    margin: 0px;
    margin-right: 10%;
    margin-left: 5%;
    font-weight: 700;
    font-size: min(111px, 7.7vw);
    text-transform: uppercase;
    font-family: 'August', sans-serif;

    @media screen and (max-width: 991px)
    {
        font-size: 90px;
        line-height: 121%;
        text-align: left;
    }

    @media screen and (max-width: 767px)
    {
        max-width: 70%;
        margin-right: 0%;
        font-size: 60px;
    }

    @media screen and (max-width: 479px)
    {
        max-width: 250px;
        font-size: 42px;
        letter-spacing: 1px;
    }
`
const StyledImage = styled.img`
    height: 260px;
    margin: auto;
    display: block;
`
export const FullScreenMenu = () => {
    const { open } = useContext(FullScreenNavMenuContext);
    const [ showContent, setShowContent ] = useState(open);

    useEffect(() => {
        let animation = setTimeout(() => {
            if(open !== showContent)
                setShowContent(open);
        }, 300);

        return () => clearTimeout(animation);
    }, [open])

    return (
        <FullScreenNavDiv open={open}>
            {/* TODO:: add all the nav menu contents */}
            <GridContiner showContent={showContent}>
                <GridItem1>
                    <StyledHeading>john proctor stylist</StyledHeading>
                </GridItem1>
                <GridItem2>
                    <StyledImage src="https://images.ctfassets.net/dp3dhjthjc5k/5dsyQNbMaHZiPYooxNXSGY/87bd33296ffda3e511b6e236d8ba8a6f/logoWhite-43911d75e3e207f3b3b2dbfae29fe6fc.svg" />
                </GridItem2>
                <GridItem3>

                </GridItem3>
                <GridItem4>

                </GridItem4>
            </GridContiner>
        </FullScreenNavDiv>
    )
}

export const FullScreenNavMenuContext = createContext(false)
export const FullScreenNavMenuProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)

    return (
        <FullScreenNavMenuContext.Provider value={{ open, toggleOpen }}>
            <FullScreenMenuButton />
            <FullScreenMenu />
            {children}
        </FullScreenNavMenuContext.Provider>
    )
}