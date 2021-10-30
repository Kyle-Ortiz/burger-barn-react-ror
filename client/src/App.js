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
import Burger from './components/Burger'
import Appetizer from './components/Appetizer'
import Chicken from './components/Chicken'
import Sides from './components/Sides'
import Drinks from './components/Drinks'
import Dessert from './components/Dessert'
import Cart from './components/Cart'

function App() {
  const [user, setUser] = useState(null)
  const [order,setOrder] = useState([])

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
          <Route path="/location">
            <Location />
          </Route>
          <Route path="/login">
            <Login login={login}/>
          </Route>
          <Route path="/appetizers">
            <Appetizer setOrder={setOrder}/>
          </Route>
          <Route path="/burgers">
            <Burger setOrder={setOrder}/>
          </Route>
          <Route path="/chickens">
            <Chicken setOrder={setOrder}/>
          </Route>
          <Route path="/sides">
            <Sides setOrder={setOrder}/>
          </Route>
          <Route path="/drinks">
            <Drinks setOrder={setOrder}/>
          </Route>
          <Route path="/desserts">
            <Dessert setOrder={setOrder}/>
          </Route>
          <Route path="/cart">
            <Cart setOrder={setOrder}/>
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
