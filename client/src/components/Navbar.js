import React from 'react'
import {Link,useHistory} from "react-router-dom";
import {GiShoppingBag} from "react-icons/gi"

function Navbar({user,setUser}) {

     const history = useHistory();

     function handleLogout() {
          fetch("/logout", {
            method: "DELETE",
          }).then(() => setUser(null));
        }

     return (
          <div className="flex w-screen justify-between bg-gray-300 px-10 py-5 items-center">
               <div className="cursor-pointer">
                    <img onClick={()=> history.push("/home")} width="75px" src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/79220/burger-clipart-md.png" alt="Burger" />
               </div>
               <div className="space-x-4 flex items-center">
                    <div className=''>
                         <Link to="/menu">
                              <h1 className="">Menu</h1>
                         </Link>
                    </div>
                         <Link to="/location">Location</Link>
                         {user ? <button onClick={()=> handleLogout()}>Log Out</button> : <Link to="/Login">Login</Link>}
               </div>
               <div onClick={()=> history.push("/cart")}className="">
                   <GiShoppingBag size={28}/>
               </div>
          </div>
     )
}

export default Navbar
