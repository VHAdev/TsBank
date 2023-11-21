import React from 'react';
import { LoginSection } from './components/Login/login';
import { ChakraProvider } from '@chakra-ui/react';
import { Header } from './components/Header/Header';


function App() {
  return (
    <ChakraProvider>
      <Header />
      <LoginSection />
    </ChakraProvider>
  );
}

export default App;
