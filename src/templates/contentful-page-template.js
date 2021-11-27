import * as React from "react"
import TextModelComponent from "../components/TextModelComponent"
import NavigationMenu from "../components/NavigationMenu"

const pageStyles = {
  color: "#232129",
  padding: 0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: '100vh',
  backgroundColor: 'black'
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
    textContent,
    categories
  } = pageContext;

  let showTextContent = !!textContent;
  let showCategories = !textContent && !!categories;

  return (
      <main style={pageStyles}>
        <title>{pageTitle}</title>
        <div style={ContainerStyles}>
          { showTextContent ?
            <TextModelComponent rawContentfulContent={textContent.content} image={textContent.image} /> 
            : undefined }
        
          {
            showCategories ?
            <NavigationMenu categories={categories.category} />
            : undefined }
        </div>
      </main>
  )
}

export default ContentfulPageTemplate;