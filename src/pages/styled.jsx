import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  min-height: calc(100vh - 15vh);
`;

export const Title = styled.h1`
  margin: 0;
  padding: 10px;
  font-style: normal;
  line-height: 1.62;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.red};
  font-size: calc(1em + 20px);
  font-weight: 900;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: ${props => props.theme.colors.white};
  --stroke-color: ${props => props.theme.colors.lightBlue};
  &.active {
    color: ${props => props.theme.colors.red};
  }
`;

export const DreamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  padding: 20px 0;
`;
export const ContainerError = styled.p`
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0;
  padding: 20px;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.62;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.blue};
`;
