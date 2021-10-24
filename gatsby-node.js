exports.createPages = async function ({ actions, graphql }) {
    const { createRedirect } = actions
    createRedirect({
      fromPath: `/`,
      toPath: `/home`, // redirecting to a contentful generated page
      redirectInBrowser: true,
      isPermanent: true,
    })

    const { data } = await graphql(`
    query {
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
                  slug
                  displayName
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