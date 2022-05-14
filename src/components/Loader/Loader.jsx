import { Oval } from 'react-loader-spinner';
import styled from 'styled-components';

const WrapperLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 15px 20px;
`;

export default function Loader() {
  return (
    <WrapperLoader>
      <Oval
        arialLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="blue"
        secondaryColor="yellow"
        textAlign="center"
      />
    </WrapperLoader>
  );
}
