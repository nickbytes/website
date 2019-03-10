import React from 'react'
import Helmet from 'react-helmet'

const Head = ({ title }) => (
  <Helmet title={title}>
    <style type="text/css">{`

html { box-sizing: border-box; background-color: #000; }
*, *:before, *:after { box-sizing: inherit; }
body { margin: 0; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Helvetica,sans-serif;
  line-height: 1.5;}
a:visited { color: #01a7d0;
  text-shadow: #ef596e 1px 0 10px;}
`}</style>
  </Helmet>
)

export default Head
