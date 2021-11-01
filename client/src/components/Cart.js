import React from 'react'
import {useEffect,useState} from 'react'
function Cart({user}) {
     const [cart,setCart] = useState(null)
     useEffect(() => {
          fetch(`/orders/${user.id}`).then((r)=> r.json()).then((order)=> {
               console.log(order)
               setCart(order)
          })
     },[])


     return (
          <div>
               <h2>Your Order</h2>
              
          </div>
     )
}

export default Cart
