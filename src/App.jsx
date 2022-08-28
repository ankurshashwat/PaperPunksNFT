import { useState } from 'react';
import './App.css';
import MainMint from './MainMint';
import NavBar from './NavBar';

const App = () => {
  const [accounts, setAccounts] = useState([]);

  return (
    <div>
      <div className="App">
        <NavBar accounts={accounts} setAccounts={setAccounts} />
        <MainMint accounts={accounts} setAccounts={setAccounts} />
      </div>
      <div className="live-background"></div>
    </div>
  )
}

export default App;