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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
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

    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://nickbytes.us7.list-manage.com/subscribe/post?u=51c42291ee90c0ec6ea19bccf&amp;id=891ef17db3',
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
