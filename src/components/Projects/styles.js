import styled from 'styled-components'

export const Wrapper = styled.div`
  margin: 0;
  padding: 0px 20px;
  list-style: circle;

  a {
    color: #01a7d0;
    text-shadow: #ef596e 1px 0 10px;
  }

  hr {
    width: 100px;

    margin-top: 40px;
    margin-bottom: 40px;
    position: relative;

    @media (min-width: 768px) {
      margin-top: 80px;
      margin-bottom: 80px;
    }
  }

  h3 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1em;
    line-height: 1em;

    span {
      font-size: 1em;
      line-height: 1em;
      margin-right: 10px;
      vertical-align: middle;
    }
  }

  p {
    font-size: 15px;
    line-height: 23px;
    margin: 0 0 14px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 34px;
      margin: 0 0 22px;
    }
  }

  ul {
    padding-left: 22px;
    margin-bottom: 40px;
  }

  li {
    margin-bottom: 1.3em;
  }

  @media (min-width: 768px) {
    padding: 30px 40px;
  }
`

export const EachWrapper = styled.div`
  padding: 0 0px 30px;
  margin-bottom: 60px;

  @media (min-width: 768px) {
    padding: 0 0 30px;
  }
`

export const InnerContainer = styled.div`
  margin: 0 auto 30px;
  max-width: 912px;

  @media (min-width: 768px) {
    margin: 0 auto 60px;
  }
`

export const ProjectTxt = styled.div`
  max-width: 30em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ProjectImg = styled.img`
  max-width: 125px;
  background-color: #44a4e3;

  @media (min-width: 768px) {
    max-width: 200px;
  }
`
