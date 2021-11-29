exports.createPages = async function ({ actions, graphql }) {
    const { createRedirect } = actions
    createRedirect({
      fromPath: `/`,
      toPath: `/home`, // redirecting to a contentful generated page
      redirectInBrowser: true,
      isPermanent: true,
    })

    const { data } = await graphql(graphqlQuery);

    data.allContentfulPageModel.edges.forEach(edge => {

      actions.createPage({
        path: '/404',
        component: require.resolve(`./src/templates/404.js`),
        context: edge.node,
      })

      actions.createPage({
        path: edge.node.slug,
        component: require.resolve(`./src/templates/contentful-page-template.js`),
        context: edge.node,
      })
    })
  }

const graphqlQuery = `
{
  allContentfulPageModel {
    edges {
      node {
        slug
        pageTitle
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
        categories {
          category {
            link {
              displayName
              slug
            }
            image {
              file {
                url
              }
            }
            portraitImage {
              file {
                url
              }
            }
          }
        }
        navbar {
          title
          sideTitle
          links {
            link
            displayName
          }
          logo {
            file {
              url
            }
          }
        }
        gallery {
          images {
            file {
              url
              fileName
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
        }
        homeContent {
          portraitImage {
            file {
              url
            }
          }
          landscapeImage {
            file {
              url
            }
          }
          portraitImageColour
          portraitImagePosition
          landscapeImageColour
          landscapeImagePosition
        }
      }
    }
  }
}
`;