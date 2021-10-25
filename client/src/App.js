import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
import Login from './components/Login.js'
function App() {
  const [user, setUser] = useState(null)
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
