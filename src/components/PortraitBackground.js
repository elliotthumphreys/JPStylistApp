import * as React from "react"
import backgroundImage from "../images/portraitBg.jpg"

// styles
const backgroundImageStyles = {
    height: '100%'
}

// markup
const PortraitBackground = ({ parentRef }) => {
    const [isPortrait, setIsPortrait] = React.useState(false);

    const listenerFunction = React.useCallback((event) => {
        setIsPortrait(parentRef.current?.offsetWidth < parentRef.current?.offsetHeight);
    }, [parentRef])

    React.useEffect(() => {
        if(document.readyState === 'complete'){
            listenerFunction();
        }

        window.addEventListener('resize', listenerFunction);
        return () => {
            window.removeEventListener('resize', listenerFunction);
        }
    }, [listenerFunction])

    if (!isPortrait) {
        return null
    }

    return (
        <img
            src={backgroundImage}
            alt="the portrait background"
            style={backgroundImageStyles}
        />
    )
}

export default PortraitBackground
