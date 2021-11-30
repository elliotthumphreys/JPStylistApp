import React, { useContext } from "react"
import TextModelComponent from "../components/TextModelComponent"
import NavigationMenu from "../components/NavigationMenu"
import Gallery from "../components/Gallery"
import { FullScreenNavMenuContext } from "../components/FullScreenMenu"
import { Helmet } from "react-helmet"

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: '100vh',
  backgroundColor: 'black'
}

const pageHiddenStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  height: '100vh',
  backgroundColor: 'black',
  overflow: 'hidden'
}

const ContainerStyles = {
  position: 'relative',
  height: '100%',
  minHeight: '100vh',
  width: '100%',
  overflowX: 'hidden',
  display: 'flex'
}

const ContentfulPageTemplate = ({ pageContext }) => {
  const { open } = useContext(FullScreenNavMenuContext);

  const {
    slug,
    pageTitle,
    navbar: { links },
    textContent,
    categories,
    gallery,
    homeContent
  } = pageContext;

  let showGallery = !!gallery;
  let showTextContent = !!textContent;
  let showHomeContent = !!homeContent && !!categories;

  return (
      <main style={open ? pageHiddenStyles : pageStyles}>
        <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
          <title>{pageTitle}</title>
        </Helmet>
        <div style={ContainerStyles}>
          { showTextContent ?
            <TextModelComponent rawContentfulContent={textContent.content} image={textContent.image} /> 
            : undefined }
        
          {
            showHomeContent ?
            <NavigationMenu categories={categories.category} {...homeContent} />
            : undefined }

          {
            showGallery ?
            <Gallery images={gallery.images} title={pageTitle} />
            : undefined }
        </div>
      </main>
  )
}

export default ContentfulPageTemplate;