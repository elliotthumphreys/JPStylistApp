import * as React from "react"
// import LandscapeBackground from "../components/LandscapeBackground"
// import PortraitBackground from "../components/PortraitBackground"
// import SocialBanner from "../components/SocialBanner"
import NavMenuList from "../components/NavMenuList"
// import LandingPageSlideShow from "../components/LandingPageSlideShow"
import { DesktopOnly, MobileOrTabletOnly } from "../components/MediaQueryWrapper"
import TextModelComponent from "../components/TextModelComponent"
import { FullScreenMenuButton, FullScreenNavMenuProvider } from "../components/FullScreenMenu"

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: '100vh',
  backgroundColor: 'rgb(0, 0, 0)'
}
const ContainerStyles = {
  position: 'relative',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
  display: 'flex'
}
const NavBarStyles = {
  minWidth: '250px',
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgb(209, 143, 113)'
}
const FocalImageStyles = {
  flexGrow: 1,
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'black'
}

const ContentfulPageTemplate = ({ pageContext }) => {
  const {
    slug,
    pageTitle,
    navbar: { links },
    textContent
  } = pageContext;

  return (
    <FullScreenNavMenuProvider>
      <main style={pageStyles}>
        <title>{pageTitle}</title>
        <div style={ContainerStyles}>
          <FullScreenMenuButton />
          {/* On desktop nav bar will be visible, and mobile and tablet this will be hidden */}
          <DesktopOnly>
            <div style={NavBarStyles}>
              <NavMenuList links={links} />
            </div>
          </DesktopOnly>

          {textContent !== null ? <TextModelComponent rawContentfulContent={textContent.content} image={textContent.image} /> : undefined}

          {/* This will have a button to open a full screen nav menu */}
          {/* <SocialBanner /> */}

          {/* On desktop this will be a standalone image*/}
          {/* <DesktopOnly>
          <div style={FocalImageStyles} ref={imageContainerRef}>
            <LandscapeBackground parentRef={imageContainerRef} />
            <PortraitBackground parentRef={imageContainerRef} />
          </div>
        </DesktopOnly> */}

          {/* Slideshow only shown on mobile and tablet devices */}
          {/* <MobileOrTabletOnly>
          <LandingPageSlideShow />
        </MobileOrTabletOnly> */}
        </div>
      </main>
    </FullScreenNavMenuProvider>
  )
}

export default ContentfulPageTemplate;