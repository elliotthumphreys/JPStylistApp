exports.createPages = async function ({ actions, graphql }) {
    const { createRedirect } = actions
    createRedirect({
      fromPath: `/`,
      toPath: `/home`, // redirecting to a contentful generated page
      redirectInBrowser: true,
      isPermanent: true,
    })

    const { data } = await graphql(`
    {
      allContentfulPageModel {
        edges {
          node {
            slug
            pageTitle
            gallery {
              file {
                url
                fileName
                contentType
                details {
                  image {
                    height
                    width
                  }
                }
              }
              description
              title
            }
            navbar {
              links {
                ... on ContentfulLogoModel {
                  blackLogo {
                    file {
                      url
                    }
                  }
                  whiteLogo {
                    file {
                      url
                    }
                  }
                }
                ... on ContentfulSlugModel {
                  displayName
                  slug
                }
              }
              displayName
            }
            socials {
              displayName
              links {
                displayName
                link
              }
            }
            textContent {
              image {
                title
                description
                file {
                  url
                  fileName
                  contentType
                }
              }
              content {
                raw
              }
            }
          }
        }
      }
    }
        
    `)
    data.allContentfulPageModel.edges.forEach(edge => {
      const slug = edge.node.slug
      actions.createPage({
        path: slug,
        component: require.resolve(`./src/templates/contentful-page-template.js`),
        context: edge.node,
      })
    })
  }