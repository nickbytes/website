import React from 'react'
import styled from 'styled-components'

const Dot = styled.span`
  width: 10px;
  height: 10px;
  margin-bottom: 5px;
  margin-right: 5px;
  border: 2px solid rgba(0, 0, 0, 1);
  border-radius: 100%;
`

const Container = styled.div`
  display: flex;
  width: 50px;
  flex-wrap: wrap;
  align-items: space-between;
  margin-bottom: 30px;
`

const Separator = () => (
  <Container>
    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(x => (
      <Dot key={x} />
    ))}
  </Container>
)

export default Separator
