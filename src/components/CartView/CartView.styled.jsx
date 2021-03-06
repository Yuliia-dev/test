import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 70px;
`;
export const DreamList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  margin: 0;
  padding: 20px 0;
`;

export const Item = styled.li`
  padding: 10px;
  max-width: 300px;
  max-height: 400px;
  list-style: none;
  background: ${props => props.theme.colors.white};
  margin: 0 15px 20px 0;
`;

export const ItemImg = styled.img`
  min-width: 250px;
  height: 300px;
`;

export const ItemName = styled.p`
  padding: 10px;
  margin: 10px 0 0 0;
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  letter-spacing: 0.06em;
  color: ${props => props.theme.colors.blue};
`;

export const Button = styled.button`
  border-color: ${props => props.theme.colors.yellow};
  border-radius: 5px;
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.colors.yellow};
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 0 auto;
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
`;
