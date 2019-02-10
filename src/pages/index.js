import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Header from '../components/Header'
import Head from '../components/Head'

import {
  Wrapper,
  EachWrapper,
  ProjectTxt,
  ProjectImg,
  InnerContainer,
} from '../components/Projects/styles'
import { Sub } from '../components/Header/styles'
import SectionGradient from '../components/SectionGradient'
import Mailer from '../components/Mailer'
import Separator from '../components/Separator'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    console.log(posts)

    return (
      <div style={{ paddingBottom: '80px' }}>
        <Head title={siteTitle} />
        <SectionGradient>
          <Header />
        </SectionGradient>

        <Wrapper>
          <EachWrapper>
            <InnerContainer>
              {/* <Sub>Selected Work:</Sub> */}
              <Separator />
              <Sub>
                I've been a Senior Software Engineer at{' '}
                <a href="https://postlight.com/">Postlight</a> since 2016.
              </Sub>
              <ul>
                <li>
                  <p>
                    We worked on a trading platform for Goldman Sachs. It's{' '}
                    <a href="https://www.businessinsider.com/goldman-sachs-marquee-2018-11">
                      gotten
                    </a>{' '}
                    <a href="https://www.wsj.com/articles/goldman-sachs-to-give-out-secret-sauce-on-trading-1439371800">
                      some
                    </a>{' '}
                    <a href="https://www.businessinsider.com/goldman-sachs-wants-to-become-the-google-of-wall-street-2017-4">
                      publicity
                    </a>
                    .{' '}
                    <i>
                      React, Typescript, Mobx, OpenFin (~Electron), and
                      css-modules.
                    </i>
                  </p>
                </li>

                <li>
                  <p>
                    I helped Barnes & Noble build{' '}
                    <a href="http://bartleby.com">Bartleby.com</a>, a textbook
                    solutions hub.{' '}
                    <i>Next.js, Typescript, Redux, styled-components</i>.
                  </p>
                </li>
                <li>
                  <p>
                    <a href="https://mercury.postlight.com/reader/">
                      Mercury Reader
                    </a>{' '}
                    is a Chrome extension that removes ads and distractions,
                    leaving only text and images for a beautiful reading view on
                    any site. +1.1m users. <i>React, Aphrodite, Tachyons-Js</i>.
                  </p>
                </li>
                <li>
                  {' '}
                  <p>
                    A{' '}
                    <a href="https://postlight.com/work/the-players-tribune">
                      custom CRM system
                    </a>{' '}
                    for managing athlete/agent relationships and tracking brand
                    equity for The Players' Tribune.{' '}
                    <i>
                      React, GraphQL, Apollo, Apollo Link State,
                      styled-components
                    </i>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    A website and style guide for{' '}
                    <a href="https://www.villagevoice.com/">
                      The Village Voice
                    </a>
                    . RIP. <i>Wordpress, React</i>.
                  </p>
                </li>
                <li>
                  {' '}
                  <p>
                    An{' '}
                    <a href="https://postlight.com/work/bloomberg">
                      iOS feature and Chrome extension
                    </a>{' '}
                    for Bloomberg that adds a new layer of financial insight to
                    any news article, from any website. <i>React, D3</i>.
                  </p>
                </li>
              </ul>
            </InnerContainer>
          </EachWrapper>
        </Wrapper>

        <Wrapper>
          <EachWrapper>
            <InnerContainer>
              <Separator />
              <Sub>
                I experimented with the{' '}
                <a href="https://datproject.org/">Dat Protocol</a> and building
                peer-to-peer applications for a few months in 2018.
              </Sub>
              <ul>
                <li>
                  {' '}
                  <p>
                    I started by building{' '}
                    <a href="https://linkstream.hashbase.io/">Linkstream</a>, a
                    place to share links from a particular event, talk, or
                    subject.
                  </p>
                </li>
                <li>
                  <p>
                    James Ayres and I built decentralized Tumblr clone, called{' '}
                    <code>Dead</code>. You can read James's write-up on{' '}
                    <a href="https://medium.com/@james.ayres/introducing-dead-lite-c23e921bb5b5">
                      Medium
                    </a>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    I built{' '}
                    <a href="https://pixel-gallery.hashbase.io/info">
                      Pixel Gallery
                    </a>
                    . It is a peer-to-peer pixel art gallery built for the
                    browser. You can create your own works of art or curate your
                    own gallery.
                  </p>
                </li>
              </ul>
            </InnerContainer>
          </EachWrapper>
        </Wrapper>

        <Wrapper>
          <EachWrapper>
            <InnerContainer>
              <Separator />
              <Sub>
                I built a text adventure game called{' '}
                <a href="https://www.slashington.com/">Slashington</a>. It's a
                semi-fictional interactive whirlwind. You can play it in the
                browser. It's got nearly 1,000 plays and takes about 20-30
                minutes to complete. <i>React, refunk, styled-components.</i>
              </Sub>
            </InnerContainer>
          </EachWrapper>
        </Wrapper>

        <Wrapper>
          <EachWrapper>
            <InnerContainer>
              <Separator />
              <Sub>
                <a href="https://twitter.com/davedawson">Dave Dawson</a>,{' '}
                <a href="">Kunal Tandon</a>, and I built{' '}
                <a href="https://www.moneyoverpeople.org/">Money Over People</a>{' '}
                to track NRA donations to members of Congress.{' '}
                <i>Gatsby, styled-components</i>.
              </Sub>
            </InnerContainer>
          </EachWrapper>
        </Wrapper>

        <Wrapper>
          <EachWrapper>
            <InnerContainer>
              <Separator />
              <Sub>
                With <a href="http://www.hyperakt.com/">Hyperakt</a>, I built{' '}
                <a href="https://onthegrid.city/">On The Grid</a>. It's a
                collection of 530 neighborhood guides curated by local creatives
                in 107 cities around the world.
              </Sub>
            </InnerContainer>
          </EachWrapper>
        </Wrapper>
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            icon
            title
            stack
            description
            renderPage
            linkText
            linkUrl
            img {
              childImageSharp {
                original {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
