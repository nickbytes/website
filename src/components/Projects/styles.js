import styled from "styled-components";

export const Wrapper = styled.ul`
  margin: 0;
  padding: 40px 10px;
  list-style: circle;

  h3 {
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 1em;
  }

  p {
    margin-top: 0;
    line-height: 1.4em;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  @media (min-width: 768px) {
    padding: 30px 20px;
  }
`;

export const EachWrapper = styled.li`
  padding: 0 0px 30px;
  margin: 0 auto 60px;
  max-width: 38em;

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (min-width: 600px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  @media (min-width: 768px) {
    padding: 0 0 30px;
  }
`;

export const ProjectTxt = styled.div`
  max-width: 30em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 600px) {
    padding-left: 30px;
  }
`;

export const ProjectImg = styled.img`
  max-width: 125px;

  @media (min-width: 768px) {
    max-width: 200px;
  }
`;
