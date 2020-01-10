const siteMetadata = {
    title: `MDX Starter Blog`,
      description: `This is a simple blog.`,
  };

module.exports = {
    siteMetadata: {
        title: `MDX Starter Blog`,
        description: `This is a simple blog.`,
      },
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/posts`,
          name: `posts`,
        },
      },
    ],
  };