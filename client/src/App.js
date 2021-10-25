import './App.css';
import {useState,useEffect} from 'react'
import Login from './components/Login.js'
function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/sessions").then((r)=> r.json()).then((data)=> {
      if(data.id) {
        setUser(data)
      }
    })
  }, []);

  function login({username,password}) {
    fetch("/sessions", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({username,password}),
    }).then((r)=> r.json()).then((data)=> {
      if (data.id) {
        setUser(data)
      } else {
        console.log(data)
      }
    })
    }

  return (
    <div className="App">
      {user? <h2>Welcome, {user.username}</h2> : <Login login={login}/>}
    </div>
  );
}

export default App;
