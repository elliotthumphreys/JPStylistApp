import React, { useContext, useState, createContext, useEffect } from 'react';
import styled from 'styled-components';

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
    background: grey;
    transform: translateY(${
            props => props.open ? '0' : '-105vh'
        }) translateX(0px);
    transition: transform 300ms ease 0s;
`
export const FullScreenMenu = () => {
    const { open } = useContext(FullScreenNavMenuContext);
    
    return (
        <FullScreenNavDiv open={open}>
            {/* TODO:: add all the nav menu contents */}
        </FullScreenNavDiv>
    )
}

export const FullScreenNavMenuContext = createContext(false)
export const FullScreenNavMenuProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)

    return (
        <FullScreenNavMenuContext.Provider value={{ open, toggleOpen }}>
            <FullScreenMenu />
            {children}
        </FullScreenNavMenuContext.Provider>
    )
}