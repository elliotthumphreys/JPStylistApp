import React, { useContext, useState, createContext, useEffect, useRef } from 'react';
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
    SiteHeading,
    StyledSocialLink,
    CategoryImage,
    CategoryImageContainer,
    CategoryListContainer,
    ScrollContent,
    StyledCategoryHeadingContainer,
    StyledCategoryHeading
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

export const FullScreenMenu = ({ navbar: { logo, title, links }, categories: { category } }) => {
    const { open } = useContext(FullScreenNavMenuContext);
    const [ showContent, setShowContent ] = useState(open);
    const scrollContentRef = useRef(null)

    useEffect(() => {
        let animation = setTimeout(() => {
            if(open !== showContent)
                setShowContent(open);
        }, 300);

        return () => clearTimeout(animation);
    }, [open])
    
    useEffect(() => {
        let wheelEventHandler = event => {
            event.preventDefault();
            scrollContentRef.current.scrollLeft += event.deltaX;
        };

        scrollContentRef.current.addEventListener('wheel', wheelEventHandler);

        return () => scrollContentRef.current?.removeEventListener('wheel', wheelEventHandler);
    }, [scrollContentRef])

    return (
        <FullScreenNavDiv open={open}>
            <GridContiner showContent={showContent}>
                <GridItem1>
                    <StyledHeading>{title}</StyledHeading>
                </GridItem1>
                <GridItem2>
                    <StyledImage src={logo.file.url} />
                </GridItem2>
                <GridItem3>
                    {links.map(link =>
                        <StyledSocialLink href={link.link}>{link.displayName}</StyledSocialLink>
                    )}
                </GridItem3>
                <GridItem4>
                    {/* TODO:: remove duplication of categories */}
                    <ScrollContent ref={scrollContentRef}>
                        <CategoryListContainer>
                            {category.concat(category).concat(category).map(cat =>
                                <CategoryImageContainer to={cat.link.slug}>
                                    <StyledCategoryHeadingContainer>
                                        <StyledCategoryHeading>{cat.link.displayName}</StyledCategoryHeading>
                                    </StyledCategoryHeadingContainer>
                                    <CategoryImage src={cat.portraitImage.file.url}/>
                                </CategoryImageContainer>
                            )}
                        </CategoryListContainer>
                    </ScrollContent>
                </GridItem4>
            </GridContiner>
        </FullScreenNavDiv>
    )
}

export const FullScreenNavMenuContext = createContext(false)
export const FullScreenNavMenuProvider = ({ children, pageContext : { navbar, categories } }) => {
    const [open, setOpen] = useState(false)
    const toggleOpen = () => setOpen(!open)

    return (
        <FullScreenNavMenuContext.Provider value={{ open, toggleOpen }}>
            <SiteHeadingContainer>
                <SiteHeading>{navbar.sideTitle}</SiteHeading>
            </SiteHeadingContainer>
            <FullScreenMenuButton />
            <FullScreenMenu navbar={navbar} categories={categories} />
            {children}
        </FullScreenNavMenuContext.Provider>
    )
}