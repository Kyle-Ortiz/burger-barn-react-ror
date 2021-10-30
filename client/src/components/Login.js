import React from 'react';
import {useState} from 'react';

function Login({login}) {
     const [username,setUsername] = useState("")
     const [password,setPassword] = useState("")

     function changeHandler(e) {
          if (e.target.name === "username") {
               setUsername(e.target.value)
          } else {
               setPassword(e.target.value)
          }
     }


     return (
          <div className="bg-gray-300 flex items-center">
               <form action="submit" onSubmit={(e)=> {
                    e.preventDefault();
                    login({username,password})}}>
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
