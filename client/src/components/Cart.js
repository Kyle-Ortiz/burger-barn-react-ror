import React from 'react'
import {useEffect,useState} from 'react'
function Cart({user,setOrder}) {
     const [cart,setCart] = useState(null)
     const [orderId, setOrderId] = useState(null)
     //if user is logged in it well fetch for latest order they were working on 
     useEffect(() => {
          if (user) {
          fetch(`/orders/${user.id}`).then((r)=> r.json()).then((order)=> {
               console.log(order)
               if (order.order_hash) {
               setCart(order.order_hash)
               setOrderId(order.id)
               }
          })}
     },[user])
     // sends order to backend and marks it completed
     function orderPlacer() {
          fetch(`/orders/${orderId}`, {
               method: "PATCH", 
               headers: {
                    "content-type": "application/json"
               },
               body: JSON.stringify(true)
          }).then((r) => {r.json()}).then((response) => {
               console.log(response)
               window.alert("Order is placed! Thanks for your order!")
          })
          setCart(null)
          setOrder({})
     }
     //this function maps over order state and displays something for each item
     function itemGenerator(cart) {
          const cartOrder = Object.keys(cart);
          const cartQuantity = Object.values(cart);
          const items = cartOrder.map((item,index) => {
               return <div key={index} className="text-white">
                    <h2>{item}</h2>
                    <p>Quantity: {cartQuantity[index]}</p>
               </div>
          })
          return items
     }

     return (
          <div className="flex flex-col bg-gray-400">
               <h2 className="pb-4">Your Order</h2>
               <div>{cart ? itemGenerator(cart) : "Loading... Check to see if you are logged in or have an active order!"}</div>
              <button onClick={()=> orderPlacer()}> Place Order!</button>
          </div>
     )
}

export default Cart
