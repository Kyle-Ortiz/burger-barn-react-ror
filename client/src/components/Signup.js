import React from 'react'
import {useState} from 'react'
function Signup() {

     const [username,setUsername] = useState("")
     const [password,setPassword] = useState("")

     function submissionHandler(e) {
          e.preventDefault()
          const newUser = {
               "username": username,
               "password": password
          }
          setUsername("");
          setPassword("");
          fetch("/users", {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify(newUser),
             }).then((res) => res.json()).then((response)=> {
                  console.log(response)
                    if (response.status === 422 ) {
                       const errors = response.exception
                         window.alert(errors)
                    }  else if (response.username) {
                         console.log(response)
                         window.alert('User Created! Proceed to login')
                    } else if(response.status) {
                       window.alert("Something has gone wrong, please try again later")
                    }
               })
     }
     return (
          <div>
               <div className="flex flex-col items-center">
                    <form action="submit" onSubmit={(e)=> submissionHandler(e)}>
                         <div><input type="text" placeholder="Username"value={username} onChange={(e)=> setUsername(e.target.value)}/></div>
                         <div><input type="password" placeholder="Password"value={password} onChange={(e)=>setPassword(e.target.value)}/></div>
                         <div><input type="submit" /></div>
                    </form>
               </div>
          </div>
     )
}

export default Signup
