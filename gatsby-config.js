module.exports = {
  pathPrefix: '/website',
  siteMetadata: {
    title: 'Bitcoin Cash',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-jsx',
    '@jacobmischka/gatsby-plugin-react-svg',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-images',
        ],
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato`]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    }
  ],
}
