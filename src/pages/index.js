import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Header from '../components/Header'
import Head from '../components/Head'

import {
  Wrapper,
  EachWrapper,
  InnerContainer,
} from '../components/Projects/styles'
import { Sub } from '../components/Header/styles'
import SectionGradient from '../components/SectionGradient'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div
        style={{
          paddingBottom: '80px',
          backgroundColor: '#000',
          color: 'white',
        }}
      >
        <Head title={siteTitle} />
        <SectionGradient>
          <Header />
        </SectionGradient>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
