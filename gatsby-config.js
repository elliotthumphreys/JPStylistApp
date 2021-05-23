module.exports = {
  siteMetadata: {
    title: "JohnProctorStylist",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-HMWCQHNKFD",
      },
    },
    {
      resolve: `gatsby-plugin-global-styles`,
      options: {
        pathToConfigModule: `src/styles/GlobalStyleComponent`,
        props: {
          theme: `src/styles/theme`,
          other: {
            light: true
          }
        }
      },
    },
  ],
};
