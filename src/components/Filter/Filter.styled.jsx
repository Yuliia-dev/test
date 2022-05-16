import styled from 'styled-components';

export const Title = styled.legend`
  font-size: calc(1em + 5px);
  font-weight: 400;

  --x-offset: -0.04em;
  --y-offset: 0.04em;
  --stroke: 0.02em;
  --background-color: ${props => props.theme.colors.white};
  --stroke-color: ${props => props.theme.colors.lightblue};
`;

export const Label = styled.label`
  margin-left: 10px;
  font-size: calc(1em + 2px);
  font-weight: 400;

  --x-offset: -0.02em;
  --y-offset: 0.02em;
  --stroke: 0.01em;
  --background-color: ${props => props.theme.colors.white};
  --stroke-color: ${props => props.theme.colors.lightblue};
`;
