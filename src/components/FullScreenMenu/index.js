import React, { useContext, useState, createContext, useEffect } from 'react';
import {
    PositioningContainer,
    StyledButtonContainer,
    StyledButtonContainerChildOne,
    StyledButtonContainerChildTwo,
    FullScreenNavDiv,
    GridContiner,
    GridItem1,
    GridItem2,
    GridItem3,
    GridItem4,
    StyledHeading,
    StyledImage,
    SiteHeadingContainer,
    SiteHeading
} from './StyledComponents'
import '../../fonts/fonts.css'

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
            <SiteHeadingContainer>
                <SiteHeading>jonhproctorstylist</SiteHeading>
            </SiteHeadingContainer>
            <FullScreenMenuButton />
            <FullScreenMenu />
            {children}
        </FullScreenNavMenuContext.Provider>
    )
}