import styled from 'styled-components';

export const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
  padding-top: 5px;
  padding-bottom: 15px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #e9e6e6;
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: calc(1em + 5px);
  font-weight: 400;

  --x-offset: -0.04em;
  --y-offset: 0.04em;
  --stroke: 0.02em;
  --background-color: white;
  --stroke-color: lightblue;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: calc(1em + 5px);
  font-weight: 400;

  --x-offset: -0.04em;
  --y-offset: 0.04em;
  --stroke: 0.02em;
  --background-color: white;
  --stroke-color: lightblue;
  color: black;
  &:hover {
    color: #cd0067;
  }
`;
