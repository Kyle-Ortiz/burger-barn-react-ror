import React from 'react'
import {useEffect,useState} from 'react'
function Cart({user}) {
     const [cart,setCart] = useState(null)
     const [orderId, setOrderId] = useState(null)
     useEffect(() => {
          fetch(`/orders/${user.id}`).then((r)=> r.json()).then((order)=> {
               console.log(order)
               setCart(order[0].order_hash)
               setOrderId(order[0].id)
          })
     },[])
     
     function orderPlacer() {
          fetch(`/orders/${orderId}`, {
               method: "PATCH", 
               headers: {
                    "content-type": "application/json"
               },
               body: JSON.stringify(true)
          }).then((r) => {r.json()}).then((response) => window.alert("Order is placed! Thanks for your order!"))
     }
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
               <div>{cart ? itemGenerator(cart) : "Loading..."}</div>
              <button onClick={()=> orderPlacer()}> Place Order!</button>
          </div>
     )
}

export default Cart
