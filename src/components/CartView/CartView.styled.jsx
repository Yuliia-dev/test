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

export const Button = styled.button`
  border-color: #ffcc00;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    background-color: #ffcc00;
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
  color: #cd0067;
  font-size: calc(1em + 20px);
  font-weight: 900;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: white;
  --stroke-color: lightblue;
`;
