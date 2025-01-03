// const path = require('path')


exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    createTypes(`
      type Mdx implements Node {
        frontmatter: Frontmatter
      }
      type Frontmatter {
        title: String
        slug: String
        image: File @fileByRelativePath
        date: Date @dateformat
        author: String
        category: String
        readTime: Int
      }
    `);
  };
// // create pages dynamically
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//     {
//       allMdx {
//         nodes {
//           frontmatter {
//             slug
//           }
//         }
//       }
      
//     }
//   `)

//   result.data.allMdx.nodes.forEach(({ frontmatter: { slug } }) => {
//     createPage({
//       path: `/posts/${slug}`,
//       component: path.resolve(`src/templates/post-template.js`),
//       context: {
//         slug,
//       },
//     })
//   })

  
// }
