import * as React from "react"
import TextModelComponent from "../components/TextModelComponent"

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: '100vh',
  backgroundColor: '#1f2022'
}
const ContainerStyles = {
  position: 'relative',
  height: '100vh',
  width: '100%',
  overflow: 'hidden',
  display: 'flex'
}

const ContentfulPageTemplate = ({ pageContext }) => {
  const {
    slug,
    pageTitle,
    navbar: { links },
    textContent
  } = pageContext;

  return (
      <main style={pageStyles}>
        <title>{pageTitle}</title>
        <div style={ContainerStyles}>
          { textContent !== null ?
            <TextModelComponent rawContentfulContent={textContent.content} image={textContent.image} /> 
            : undefined }
        
        </div>
      </main>
  )
}

export default ContentfulPageTemplate;