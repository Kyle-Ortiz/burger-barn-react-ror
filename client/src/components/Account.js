import React from 'react'
import {useState} from 'react'

function Account({user}) {
     const [passwordSwap, setPasswordSwap] = useState(true)
     const [newPassword, setNewPassword] = useState("")

     function stateHandler() {
          setPasswordSwap(!passwordSwap)
     }
     function newPassHandler(e) {
          e.preventDefault()
          const changeObject = {
               "user_id" : user.id,
               "new_password" : newPassword,
          }
          fetch(`/users/${user.id}`, {
               method: 'PATCH',
               headers: {'Content-Type': 'application/json'},
               body: JSON.stringify(changeObject),

          }).then((r)=> r.json()).then((response)=>{
               console.log(response)
          })
     }
     return (
          <div>
              <h2>Account info</h2>
              <div>
                   <p>Username: {user.username}</p>
                   <p>Date joined: {user.created_at}</p>
              </div>
              <div>
                   <button className="border rounded-lg bg-white" onClick={()=>stateHandler()}>Change Password</button>
              </div>
              {passwordSwap ? 
               <div>
                   <form onSubmit={newPassHandler}>
                        <label htmlFor="New">New Password:</label>
                        <input type="password" name="New" value={newPassword} onChange={(e)=> setNewPassword(e.target.value)}/>
                        <input type="submit" onSubmit={newPassHandler}/>
                   </form>
               </div>: null}
          </div>
     )
}

export default Account
