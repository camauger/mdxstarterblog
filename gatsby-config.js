const siteMetadata = {
  title: `MDX Starter Blog`,
  description: `This is a simple blog.`,
  image: `/default-site-image.jpg`,
  siteUrl: `https://thelocalhost.blog`,
  siteLanguage: `en`,
  siteLocale: `en`,
  twitterUsername: `@camauger`,
  authorName: `Christian Amauger`
};

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/posts`, name: `posts` }
    }
  ]
};
