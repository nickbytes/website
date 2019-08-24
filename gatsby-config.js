module.exports = {
  siteMetadata: {
    title: 'nickbytes',
    author: 'nickbytes',
    description: '',
    siteUrl: 'https://www.nickbytes.com',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },

    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto Mono'],
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `nickbytes`,
        short_name: `nickbytes`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#fff`,
        display: `minimal-ui`,
        icon: `src/assets/gatsby-icon.png`,
      },
    },

    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
