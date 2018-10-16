import React from 'react'
import Link from 'gatsby-link'
import { Headline, Wrapper, Sub, Container } from './styles'

const Header = () => (
  <Wrapper>
    <Container>
      <Headline>Nick Beattie</Headline>
      <Sub>Senior Software Engineer @ Postlight.</Sub>

      <Sub>
        Building apps, platforms, websites with a focus on performant,
        maintainable, user-focused interfaces.
      </Sub>

      <Sub>
        Here's a couple of the projects I've been involved with over the last
        few years. I've written some small summaries of them, but feel free to
        reach out over <a href="mailto:nick@nickbytes.com">email</a> or{' '}
        <a href="http://twitter.com/nicktweattie">twitter</a> if you'd like to
        chat more.
      </Sub>

      <Sub>
        More code can be viewed on{' '}
        <a href="https://github.com/nickbytes">github</a>.
      </Sub>
    </Container>
  </Wrapper>
)

export default Header
