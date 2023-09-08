import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import LandingPage from './component/landingPage';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box fontFamily={"'Raleway', sans-serif;"}>
        <LandingPage />
      </Box>
    </ChakraProvider>
  );
}

export default App;
