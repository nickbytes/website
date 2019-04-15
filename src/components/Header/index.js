import React from 'react'
import { Headline, Wrapper, Sub, Container } from './styles'
import Mailer from '../Mailer'

const Header = () => (
  <Wrapper>
    <Container>
      <div>
        <Headline>Nick Beattie</Headline>
        <Sub>Software Engineer – available for hire</Sub>
        <Sub>
          <a href="https://github.com/nickbytes">github</a>·
          <a href="http://twitter.com/nicktweattie">twitter</a>·
          <a href="mailto:nick@nickbytes.com">email</a>
        </Sub>
      </div>
      <div>
        <Sub>
          I'm currently interested in: developer tools, video streaming,
          decentralized applications, writing, infrastructure tooling, security,
          games, blockchain, React,{' '}
          <a href="https://www.are.na/nick-beattie/learning-go-tdzciuurvsk">
            learning Go
          </a>
          , microservices, Reason, Elm, WebAssembly, and bicycles.
        </Sub>
      </div>
    </Container>
  </Wrapper>
)

export default Header
