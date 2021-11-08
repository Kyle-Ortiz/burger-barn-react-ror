import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom'

function Login({login,user}) {
     const [username,setUsername] = useState("")
     const [password,setPassword] = useState("")
     const history = useHistory()
     function changeHandler(e) {
          if (e.target.name === "username") {
               setUsername(e.target.value)
          } else {
               setPassword(e.target.value)
          }
     }


     return (
          <div className="login-signup">
               <form action="submit" onSubmit={(e)=> {
                    e.preventDefault();
                    login({username,password})
                    }}>
                    <div className="form-group">
                         <label htmlFor="username">Username: </label>
                         <input name="username" value={username} onChange={(e)=> changeHandler(e)}type="text" />  
                    </div>
                    <div className="form-group-2">
                         <label htmlFor="password">Password:  </label>
                         <input name="password" value={password} onChange={(e)=> changeHandler(e)} type="password" />
                    </div>
                    <input id="log-btn"type="submit" value="Login"/>
               </form>
          </div>
     )
}

export default Login
