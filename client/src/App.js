import './App.css';
import {useState,useEffect} from 'react'
import Login from './components/Login.js'
import Menu from './components/Menu'
import Location from './components/Location'
import {
  useHistory,
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
import Signup from './components/Signup'
import Account from './components/Account'

function App() {
  const [user, setUser] = useState(null)
  const [order,setOrder] = useState({})
  const history = useHistory()

  useEffect(() => {
    fetch("/sessions").then((r)=> r.json()).then((data)=> {
      if(data.id) {
        setUser(data)
      }
    })
  }, []);

  function cartHandler(item) {
    if (order[item.name]) {
         setOrder({...order, [item.name]: order[item.name]+= 1})
    } else {
         setOrder({...order, [item.name]: order[item.name]= 1})
    }
    fetch("orders",{
      method: 'POST',
      headers:{
        "Content-Type": 'application/json'},
      body: JSON.stringify({
        "order_hash": order,
      user_id: user.id})
    }).then((r) => r.json()).then((data)=> console.log(data))
}

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
        history.push("/home")
        window.alert("Logged in successfully!")
      } else {
        window.alert("Failed to login! Please try again.");
      }
    })
    }

  return (
    <div className="main-container">
      <Navbar user={user} setUser={setUser} order={order}/>
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
            <Appetizer cartHandler={cartHandler}/>
          </Route>
          <Route path="/burgers">
            <Burger cartHandler={cartHandler}/>
          </Route>
          <Route path="/chicken">
            <Chicken cartHandler={cartHandler}/>
          </Route>
          <Route path="/sides">
            <Sides cartHandler={cartHandler}/>
          </Route>
          <Route path="/drinks">
            <Drinks cartHandler={cartHandler}/>
          </Route>
          <Route path="/desserts">
            <Dessert cartHandler={cartHandler}/>
          </Route>
          <Route path="/cart">
            <Cart user={user}/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/account">
            {user ? <Account user={user}/> : <Login login={login}/>}
          
            {/* {user ? <Account user={user}/>:  <Login login={login}/>} */}
          </Route>
          <Route path="/">
            <Home user={user}/>
          </Route>
        </Switch>
      {/* {user? <h2>Welcome, {user.username}</h2> : <Login login={login}/>} */}
    </div>
  );
}

export default App;
