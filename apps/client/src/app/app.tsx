import styled from '@emotion/styled';
import NxWelcome from './nx-welcome';
import { useEffect } from 'react';
import Api from '@generators/api';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  useEffect(() => {
    const test = new Api();
    test.AppControllerGetData().subscribe((res) => console.log(res));
  }, []);

  return (
    <StyledApp>
      <NxWelcome title="client" />
    </StyledApp>
  );
}

export default App;
