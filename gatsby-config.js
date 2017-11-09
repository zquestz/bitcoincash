module.exports = {
  siteMetadata: {
    title: 'Bitcoin Cash',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-styled-jsx',
    '@jacobmischka/gatsby-plugin-react-svg',
    'gatsby-plugin-catch-links',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lato`, `Lato\:700`]
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
