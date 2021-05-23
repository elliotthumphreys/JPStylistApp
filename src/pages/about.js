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
const AboutPage = () => {
  return (
    <main style={pageStyles}>
      <title>About Page</title>
      <h1 style={headingStyles}>
        Congratulations
        <span style={headingAccentStyles}> — this is your future about page! </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
    </main>
  )
}

export default AboutPage
