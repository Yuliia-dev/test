import styled from 'styled-components';

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
  background: #ffffff;
  margin-bottom: 20px;
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
  color: #00ccff;
`;
