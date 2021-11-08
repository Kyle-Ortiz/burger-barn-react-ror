import React from 'react'
import {useHistory} from 'react-router-dom'

function Home({user}) {
     const history = useHistory()

     return (
          <div style={{
               backgroundImage: `url(https://media.timeout.com/images/102600575/image.jpg)`,
               height: '100vh',
               objectPosition: 'contain',
          }} className=" flex flex-col justify-center items-center bg-no-repeat bg-center">
               {user ? <h1 className="text-white text-4xl">Welcome, {user.username}!</h1>: null}
               <h1 className="text-white text-8xl ">Burger Barn</h1>
               <h3 className="text-white bold text-4xl">All-American Resturant</h3>
               {user ? <button onClick={()=> history.push("/menu")} className="border-black bg-blue-600 mt-6 px-3 py-1 rounded-lg text-xl text-white">Start Order</button> : 
               <button onClick={()=> history.push("/signup")} className="border-black bg-blue-600 mt-6 px-3 py-1 rounded-lg text-xl text-white"> Sign up here or Login to place an order!</button>}
          </div>
     )
}

export default Home
