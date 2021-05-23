import * as React from "react"
import backgroundImage from "../images/landscapeBg.jpg"
import backgroundImageTiny from "../images/landscapeBgTiny.jpg"
import ProgressiveImage from "react-progressive-image"

// styles
const backgroundImageStyles = {
    height: '100%'
}
// markup
const LandscapeBackground = ({ parentRef }) => {
    const [isLandscape, setIsLandscape] = React.useState(false);

    const listenerFunction = React.useCallback((event) => {
        setIsLandscape(parentRef.current?.offsetWidth >= parentRef.current?.offsetHeight);
    }, [parentRef])

    React.useEffect(() => {
        if (document.readyState === 'complete') {
            listenerFunction();
        }

        window.addEventListener('resize', listenerFunction);
        return () => {
            window.removeEventListener('resize', listenerFunction);
        }
    }, [listenerFunction])

    if (!isLandscape) {
        return null
    }

    return (
        <ProgressiveImage
            delay={3000}
            src={backgroundImage}
            placeholder={backgroundImageTiny}
        >
            {src => <img src={src} alt="the landscape background" style={backgroundImageStyles} />}
        </ProgressiveImage>
    )
}

export default LandscapeBackground
