import './App.css';
import {useState,useEffect} from 'react'
import Login from './components/Login.js'
import Menu from './components/Menu'
import Location from './components/Location'
import Logout from './components/Logout'
import {
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/Home'

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
    <div className="app">
      <Navbar user={user} setUser={setUser}/>
      <Switch>
          <Route path="/Menu">
            <Menu />
          </Route>
          <Route path="/Location">
            <Location />
          </Route>
          <Route path="/Login">
            <Login login={login}/>
          </Route>
          <Route path="/Menu/Appetizers">
            <Menu />
          </Route>
          <Route path="/Menu/Burgers">
            <Menu />
          </Route>
          <Route path="/Menu/Chicken">
            <Menu />
          </Route>
          <Route path="/Menu/Sides">
            <Menu />
          </Route>
          <Route path="/Menu/Drinks">
            <Menu />
          </Route>
          <Route path="/Menu/Dessert">
            <Menu />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      {/* {user? <h2>Welcome, {user.username}</h2> : <Login login={login}/>} */}
    </div>
  );
}

export default App;
