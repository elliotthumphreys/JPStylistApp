import * as React from "react"
import { Mobile, Tablet, Desktop } from "../constants/mediaQueries"

const useIsQuerySatisfied = (mediaQuery) => {
    const [isSatisfied, setIsSatisfied] = React.useState(false);

    const checkIfMediaQueryIsSatified = React.useCallback((event) => {
        setIsSatisfied(window.matchMedia(mediaQuery).matches);
    }, [mediaQuery])

    React.useEffect(() => {
        if (document.readyState === 'complete') {
            checkIfMediaQueryIsSatified();
        }

        window.addEventListener('resize', checkIfMediaQueryIsSatified);
        
        return () => {
            window.removeEventListener('resize', checkIfMediaQueryIsSatified);
        }
    }, [checkIfMediaQueryIsSatified])

    return isSatisfied
}

export const MobileOnly = ({ children }) => {
    const isSatisfied = useIsQuerySatisfied(Mobile)
    const isTabletSatisfied = useIsQuerySatisfied(Tablet)
    const isDesktopSatisfied = useIsQuerySatisfied(Desktop)

    if (isSatisfied && !isTabletSatisfied && !isDesktopSatisfied) {
        return children
    }

    return null
}

export const TabletOnly = ({ children }) => {
    const isSatisfied = useIsQuerySatisfied(Tablet)
    const isDesktopSatisfied = useIsQuerySatisfied(Desktop)

    if (isSatisfied && !isDesktopSatisfied) {
        return children
    }

    return null
}

export const DesktopOnly = ({ children }) => {
    const isSatisfied = useIsQuerySatisfied(Desktop)

    if (isSatisfied) {
        return children
    }

    return null
}

export const MobileOrTabletOnly = ({ children }) => {
    const isSatisfied = useIsQuerySatisfied(Mobile)
    const isTabletSatisfied = useIsQuerySatisfied(Tablet)
    const isDesktopSatisfied = useIsQuerySatisfied(Desktop)

    if ((isSatisfied || isTabletSatisfied) && !isDesktopSatisfied) {
        return children
    }

    return null
}