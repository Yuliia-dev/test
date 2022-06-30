import styled from 'styled-components';

export const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  padding: 15px;
  clear: both;
  position: relative;
  max-height: 30px;
  margin-top: -30px;
  background-color: ${props => props.theme.colors.light};
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: calc(1em + 5px);
  font-weight: 400;
  --x-offset: -0.04em;
  --y-offset: 0.04em;
  --stroke: 0.02em;
  --background-color: ${props => props.theme.colors.white};
  --stroke-color: ${props => props.theme.colors.lightBlue};
`;

export const FooterLink = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: calc(1em + 5px);
  font-weight: 400;

  --x-offset: -0.04em;
  --y-offset: 0.04em;
  --stroke: 0.02em;
  --background-color: ${props => props.theme.colors.white};
  --stroke-color: ${props => props.theme.colors.lightBlue};
  color: black;
  &:hover {
    color: ${props => props.theme.colors.red};
  }
`;
