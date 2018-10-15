import styled from "styled-components";

export const Headline = styled.h1`
  font-size: 15px;
  line-height: 18px;
  font-weight: normal;
  margin: 0;
`;

export const Sub = styled.h2`
  font-size: 15px;
  line-height: 18px;
  font-weight: normal;
  margin: 0 0 22px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Wrapper = styled.div`
  padding: 40px 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (min-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Container = styled.div`
  max-width: 38em;
  margin: 0 auto;
`;
