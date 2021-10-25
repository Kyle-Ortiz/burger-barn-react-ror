import React from 'react';
import {useState, useEffect} from 'react';

function Login() {
     const [username,setUsername] = useState("")
     const [password,setPassword] = useState("")

     function changeHandler(e) {
          if (e.name == "username") {
               setUsername(e.target.value)
          } else {
               setPassword(e.target.value)
          }
     }
     return (
          <div>
               <form action="submit">
                    <div>
                         <label htmlFor="username">Username: </label>
                         <input name="username" value={username} onChange={(e)=> changeHandler(e)}type="text" />  
                    </div>
                    <div>
                         <label htmlFor="password">Password: </label>
                         <input name="password" value={password} onChange={(e)=> changeHandler(e)} type="password" />
                    </div>
                    <input type="submit" value="Login"/>
               </form>
          </div>
     )
}

export default Login
