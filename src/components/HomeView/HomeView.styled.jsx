import styled from 'styled-components';

export const Container = styled.main`
  height: 80vh;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2020/04/23/16/31/watermelon-5083173_960_720.jpg');
  background-color: #ffcc00;
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
  background-color: #d9e0e2b5;
  color: #000000;
  font-size: calc(1em + 26px);
  font-weight: 600;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: white;
  --stroke-color: lightblue;
`;
export const Button = styled.button`
  margin-top: 20px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: black;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: calc(1em + 30px);
  font-weight: 900;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: white;
  --stroke-color: lightblue;
  background-color: #00ccff;
  &:hover {
    background-color: #ffcc00;
  }
`;
