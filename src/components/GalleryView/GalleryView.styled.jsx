import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  width: 100%;
  min-height: 70px;
`;

export const Item = styled.li`
  padding: 5px;
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
  padding: 5px;
  margin: 10px 0 0 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0.05em;
  color: ${props => props.theme.colors.blue};
`;

export const Button = styled.button`
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  max-width: 60px;
  cursor: pointer;
  border-color: ${props => props.theme.colors.yellow};
  &:hover {
    background-color: ${props => props.theme.colors.yellow};
  }
`;
