import * as React from 'react'
import ProgressiveImage from "react-progressive-image"

import backgroundImage1 from "../images/landscapeBg.jpg"
import backgroundImage1Tiny from "../images/landscapeBgTiny.jpg"
import backgroundImage2 from "../images/portraitBg.jpg"

const slideImages = [
    {
        key: 'image1',
        src: backgroundImage1,
        placeholderSrc: backgroundImage1Tiny
    },
    {
        key: 'image2',
        src: backgroundImage2,
        placeholderSrc: backgroundImage2
    }
];

// styles
const backgroundImageStyles = {
    height: '100%',
    width: '100%',
    objectFit: 'contain'
}
const backgroundImageStyles2 = {
    ...backgroundImageStyles,
    display: 'none'
}
const imageIndicatorContainer = {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
}
const imageIndicatorItemActive = {
    width: '10px',
    height: '10px',
    backgroundColor: 'white',
    borderRadius: '50%',
    margin: '0.5em 0.1em'
}
const imageIndicatorItem = {
    ...imageIndicatorItemActive,
    backgroundColor: '#bccad0',
    opacity: '0.5'
}
const ImageSliderContainerStyles = {
    position: 'relative',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgb(209, 143, 113)'
}

// markup
const LandingPageSlideShow = () => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    const nextSlideFunction = () => {
        const newIndex = 1 + activeIndex
        setActiveIndex(newIndex >= slideImages.length ? 0 : newIndex)
    }

    React.useEffect(() => {
        const interval = window.setTimeout(nextSlideFunction, 4000)

        return () => window.clearTimeout(interval)
    }, [activeIndex]);

    return (
        <div style={ImageSliderContainerStyles}>
            {slideImages.map((image, index) => (
                <ProgressiveImage
                    key={image.key}
                    delay={3000}
                    src={image.src}
                    placeholder={image.placeholderSrc}
                >
                    {src => <img
                        src={src}
                        alt="the landscape background"
                        style={activeIndex === index ? backgroundImageStyles : backgroundImageStyles2}
                    />}
                </ProgressiveImage>
            ))}
            <div style={imageIndicatorContainer}>
                {slideImages.map((image, index) => (
                    <div style={activeIndex === index ? imageIndicatorItemActive : imageIndicatorItem}></div>
                ))}
            </div>
        </div>
    )
}

export default LandingPageSlideShow;