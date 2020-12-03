import React from 'react'
import { Headline, Wrapper, Sub, Container } from './styles'

const Header = () => (
  <Wrapper>
    <Container>
      <div>
        <Headline>Nick Beattie</Headline>
        <Sub>Software Engineer</Sub>
        <Sub>
          <a href="https://github.com/nickbytes">github</a>·
          <a href="http://twitter.com/nicktweattie">twitter</a>·
          <a href="https://www.linkedin.com/in/nbeattie/">linkedin</a>·
          <a href="mailto:nick@nickbytes.com">email</a>
        </Sub>
      </div>
      <div>
        <Sub>
          Currently: building <a href="https://www.truework.com/">Truework</a>.
        </Sub>
      </div>
    </Container>
  </Wrapper>
)

export default Header
