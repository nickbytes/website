import styled from 'styled-components'

export const Headline = styled.h1`
  font-size: 18px;
  line-height: 23px;
  font-weight: normal;
  margin: 0;
  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
`

export const Sub = styled.h2`
  font-size: 15px;
  line-height: 23px;
  font-weight: normal;
  margin: 0 0 22px;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 34px;
    margin: 0 0 40px;
  }
`

export const Wrapper = styled.div`
  padding: 60px 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 768px) {
    padding: 100px 40px 60px;
  }

  @media (min-width: 1000px) {
    padding: 100px 20px 60px;
  }

  ${Sub} {
    color: white;
  }

  a {
    color: #01a7d0;
    text-shadow: #ef596e 1px 0 10px;
  }
`

export const Container = styled.div`
  width: 100%;
  max-width: 912px;
  margin: 0 auto;
`
