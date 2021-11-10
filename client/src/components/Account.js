import React from 'react'
import {useState} from 'react'

function Account({user, setUser}) {
     const [passwordSwap, setPasswordSwap] = useState(false)
     const [newPassword, setNewPassword] = useState("")
     const [success, setSuccess] = useState(false)
     //changing password 
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
               setSuccess(true)
          })
     }

     function removeAccount(e) {
          e.preventDefault();
          fetch(`/users/${user.id}`, {
               method: 'DELETE',
               headers: {'Content-Type': 'application/json'}
          }).then((r)=> r.json()).then((deletedUser) => {
               setUser(null)
               console.log(deletedUser)
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
                    <button onClick={(e)=> removeAccount(e)}>Delete Account</button>
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
               {success ? <h1>Password Changed Successfully, try logging back in!</h1> : null}
          </div>
     )
}

export default Account
