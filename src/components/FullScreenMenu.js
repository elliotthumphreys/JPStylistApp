import * as React from 'react'
import styled from 'styled-components'
import NavMenuList from "../components/NavMenuList"
import { DesktopOnly, MobileOrTabletOnly } from "../components/MediaQueryWrapper"

// styles
const StyledFullScreenMenuContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: Calc(100vw - 58px);
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const StyledFullScreenMenuDesktopContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: Calc(100vw - 358px);
`

// markup
const FullScreenMenu = () => {
    const { open } = React.useContext(FullScreenNavMenuContext);

    if (!open) {
        return null
    }

    return (
        <>
            <MobileOrTabletOnly>
                <StyledFullScreenMenuContainer>
                    <NavMenuList useLightLogo={true} />
                </StyledFullScreenMenuContainer>
            </MobileOrTabletOnly>
            <DesktopOnly>
                <StyledFullScreenMenuDesktopContainer>
                    <NavMenuList useLightLogo={true} />
                </StyledFullScreenMenuDesktopContainer>
            </DesktopOnly>
        </>
    )
}

export default FullScreenMenu

export const FullScreenNavMenuContext = React.createContext(false)

export const FullScreenNavMenuProvider = ({ children }) => {
    const [open, setOpen] = React.useState(false)
    const toggleOpen = () => setOpen(!open)

    return (
        <FullScreenNavMenuContext.Provider value={{ open, toggleOpen }}>
            <FullScreenMenu />
            {children}
        </FullScreenNavMenuContext.Provider>
    )
}