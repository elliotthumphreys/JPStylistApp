import React, { useContext, useState, createContext, useEffect, useRef, useCallback, memo} from 'react';
import { useLocation } from "@reach/router";
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
    StyledCategoryHeading,
    PaddedDiv
} from './StyledComponents'
import '../../fonts/fonts.css'

export const FullScreenMenuButton = memo(() => {
    const { open, toggleOpen } = useContext(FullScreenNavMenuContext);
    const [animationAmount, setAnimationAmount] = useState(open ? 1 : 0)
    const [target, setTarget] = useState(open ? 1 : 0)

    useEffect(() => {
        let animation = setTimeout(() => {
            if (animationAmount < target && target === 1)
                setAnimationAmount(animationAmount + .075 > target ? target : animationAmount + .075)
            if (animationAmount > target && target === 0)
                setAnimationAmount(animationAmount - .075 < target ? target : animationAmount - .075)
        }, 3);

        return () => clearTimeout(animation);
    }, [target, animationAmount])

    useEffect(() => {
        setTarget(open ? 1 : 0)
    }, [open])

    return (
        <PositioningContainer>
            <StyledButtonContainer onClick={toggleOpen}>
                <StyledButtonContainerChildOne rotateZ={`${0 + (45 * animationAmount)}deg`} translateY={`${0 + (16 * animationAmount)}px`} />
                <StyledButtonContainerChildTwo width={`${56 + (44 * animationAmount)}%`} rotateZ={`-${0 + (45 * animationAmount)}deg`} />
            </StyledButtonContainer>
        </PositioningContainer>
    )
})

export const FullScreenMenu = memo(({ navbar: { logo, title, links }, categories: { category } }) => {
    const { open } = useContext(FullScreenNavMenuContext);
    const [showContent, setShowContent] = useState(open);
    var animationCallback = useCallback(() => {
        if (open !== showContent)
            setShowContent(open);
    }, [open, showContent]);
    useEffect(() => {
        let animation = setTimeout(animationCallback, 300);

        return () => clearTimeout(animation);
    }, [open, showContent])

    const scrollContentRef = useRef(null);
    var wheelEventHandlerCallback = useCallback(event => {
        event?.preventDefault();
        scrollContentRef.current.scrollLeft += Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    }, []);
    useEffect(() => {
        scrollContentRef.current.addEventListener('wheel', wheelEventHandlerCallback);

        return () => scrollContentRef.current.removeEventListener('wheel', wheelEventHandlerCallback);
    }, [scrollContentRef])

    const containerRef = useRef(null)
    const [containerHeight, setContainerHeight] = useState(0)
    var setContainerHeightCallback = useCallback(event => {
        event?.preventDefault();
        setContainerHeight(containerRef.current.clientHeight)
    }, []);
    useEffect(() => {
        setContainerHeightCallback();

        window.addEventListener('resize', setContainerHeightCallback);

        return () => window.removeEventListener('resize', setContainerHeightCallback);
    }, [])

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
                        <StyledSocialLink
                            href={link.link}
                            key={link.link}>{link.displayName}</StyledSocialLink>
                    )}
                </GridItem3>
                <GridItem4>
                    {/* TODO:: remove duplication of categories */}
                    <ScrollContent ref={scrollContentRef}>
                        <CategoryListContainer ref={containerRef}>
                            {!!containerHeight ? category.map((cat, index) => {
                                let width = Math.abs((containerHeight / cat.portraitImage.file.details.image.height) * cat.portraitImage.file.details.image.width);
                                
                                return <CategoryImageContainer
                                            to={cat.link.slug}
                                            key={cat.link.slug}
                                            width={width}>
                                        <CategoryImage 
                                            src={cat.portraitImage.file.url}
                                            width={width}/>
                                        <StyledCategoryHeading>{cat.link.displayName}</StyledCategoryHeading>
                                 </CategoryImageContainer>
                            }) : undefined}
                            <PaddedDiv key='padded-spacer'/>
                        </CategoryListContainer>
                    </ScrollContent>
                </GridItem4>
            </GridContiner>
        </FullScreenNavDiv>
    )
})

const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

export const FullScreenNavMenuContext = createContext(true)
export const FullScreenNavMenuProvider = ({ children, pageContext: { navbar, categories } }) => {
    const [open, setOpen] = useState(true)
    const toggleOpen = () => setOpen(!open)
    const location = useLocation(); 
    const prevLocation = usePrevious(location);

    useEffect(() => {
        if (location !== prevLocation && open) {
            setOpen(true);
        }
    }, [location, prevLocation, setOpen]);

    return (
        <FullScreenNavMenuContext.Provider value={{ open, toggleOpen }}>
            <SiteHeadingContainer>
                <SiteHeading to='/home'>{navbar.sideTitle}</SiteHeading>
            </SiteHeadingContainer>
            <FullScreenMenuButton />
            <FullScreenMenu navbar={navbar} categories={categories} />
            {children}
        </FullScreenNavMenuContext.Provider>
    )
}