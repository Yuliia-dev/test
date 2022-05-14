import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

export const Title = styled.h1`
  margin: 0;
  padding: 10px;
  font-style: normal;
  font-weight: 900;
  font-size: 36px;
  line-height: 1.62;
  letter-spacing: 0.06em;
  color: #cd0067;
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
  color: #00ccff;
`;
