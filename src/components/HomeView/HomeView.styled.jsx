import styled from 'styled-components';

export const Container = styled.main`
  height: 80vh;
  width: 100%;
  background: ${props => props.theme.colors.lightRed};
  background: linear-gradient(
    72deg,
    rgba(235, 123, 179, 1) 0%,
    rgba(226, 230, 148, 0.8911939775910365) 78%
  );
`;
export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;

export const Title = styled.h1`
  padding: 20px;
  max-width: 800px;
  text-align: justify;
  background-color: ${props => props.theme.colors.grey};
  color: ${props => props.theme.colors.black};
  font-size: calc(1em + 26px);
  font-weight: 600;
  border-radius: 10px;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: ${props => props.theme.colors.white};
  --stroke-color: ${props => props.theme.colors.lightBlue};
`;
export const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: ${props => props.theme.colors.black};
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: calc(1em + 30px);
  font-weight: 900;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: ${props => props.theme.colors.white};
  --stroke-color: ${props => props.theme.colors.lightBlue};
  background-color: ${props => props.theme.colors.blue};
  &:hover {
    background-color: ${props => props.theme.colors.yellow};
  }
`;
