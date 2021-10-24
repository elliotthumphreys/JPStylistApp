import * as React from "react"

const ContentfulPageTemplate = ({ pageContext }) => {
  const { slug } = pageContext
  
  return (
    <div>
        <h1>contentful - page {slug}</h1>
    </div>
  )
}

export default ContentfulPageTemplate;