import styled from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #f2f2f2;
  padding: 22px 18px 28px;
  position: relative;
  @media (min-width: 768px) {
    padding: 20px 20px 30px;
  }

  @media (min-width: 1000px) {
    margin-top: 0;
    max-width: 600px;
  }
`

export const Form = styled.form`
  display: flex;
  align-items: flex-end;
  padding-top: 10px;

  @media (min-width: 768px) {
    padding-top: 20px;
  }
`

export const Input = styled.input`
  height: 35px;
  flex-basis: calc(80% - 50px);
  font-size: 15px;
  line-height: 18px;
  padding-left: 5px;
  margin-top: 10px;
  border: 1px solid #000;
  outline: none;

  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 30px;
    height: 45px;
    padding-left: 10px;
  }
`

export const Button = styled.button`
  flex-basis: 50px;
  height: 35px;
  border: 1px solid #000;
  border-left: none;
  outline: none;

  @media (min-width: 768px) {
    height: 45px;
  }
`

export const FormMessage = styled.p`
  font-size: 11px;
  line-height: 13px;
  position: absolute;
  bottom: 0px;
`
