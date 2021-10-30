import React from 'react'
import {useHistory} from 'react-router-dom'

function Home({user}) {
     const history = useHistory()

     return (
          <div style={{
               backgroundImage: `url(https://media.timeout.com/images/102600575/image.jpg)`,
               height: '700px',
               objectPosition: 'contain',
          }} className="flex flex-col justify-center items-center">
               <h1 className="text-white bold">Burger Barn</h1>
               <h3 className="text-white bold">All-American Resturant</h3>
               {user ? <button onClick={()=> history.push("/menu")} className="border bg-blue-600">Start Order</button> : <button onClick={()=> history.push("/signup")} className="border bg-blue-600"> Sign up here or Login to place an order!</button>}
          </div>
     )
}

export default Home
