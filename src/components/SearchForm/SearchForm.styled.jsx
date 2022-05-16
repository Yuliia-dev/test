import styled from 'styled-components';

export const LabelFilter = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;
export const TextFilter = styled.p`
  width: 200px;
  margin: 0 10px 0 0;
  line-height: 1.14;
  letter-spacing: 0.06em;
  text-shadow: 1px 1px;

  font-size: calc(1em + 10px);
  font-weight: 900;

  --x-offset: -0.0625em;
  --y-offset: 0.0625em;
  --stroke: 0.025em;
  --background-color: ${props => props.theme.colors.white};
  --stroke-color: ${props => props.theme.colors.lightblue};
  &.active {
    color: ${props => props.theme.colors.red};
  }
`;

export const InputFilter = styled.input`
  width: 300px;
  padding: 10px;
  border: none;
  border: 3px solid ${props => props.theme.colors.red};
  border-radius: 4px;
`;
