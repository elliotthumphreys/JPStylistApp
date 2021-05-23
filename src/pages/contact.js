import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const ContactPage = () => {
  return (
    <main style={pageStyles}>
      <title>Contact Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <span style={headingAccentStyles}> — this is your future contact page! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
    </main>
  )
}

export default ContactPage
