import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const TextFilter = styled.p`
  width: 200px;
  margin: 0 10px 0 0;
  /* font-weight: 400; */
  /* font-size: 18px; */
  line-height: 1.14;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px;

  font-size: calc(1em + 10px);
  font-weight: 900;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: white;
  --stroke-color: lightblue;
  &.active {
    color: #cd0067;
  }
`;

export const InputFilter = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
  border: 3px solid #cd0067;
  border-radius: 4px;
  /* background-color: #00ccff; */
`;
