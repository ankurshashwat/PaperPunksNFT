import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  const [accounts, setAccounts] = useState([]);
  return (
    <div>
      <ChakraProvider>
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="live-background"></div>
      </ChakraProvider>
    </div>
  )
}

export default App;