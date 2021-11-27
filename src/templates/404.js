import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "white",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#1f2022",
  height: "100vh",
  width: "100%",
  textAlign: "center"
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  margin: "auto",
  maxWidth: 320,
  width: "100%",
}

const paragraphStyles = {
  marginBottom: 48,
}

// markup
const NotFoundPage = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/" style={paragraphStyles}>Go to the home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
