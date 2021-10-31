import React from 'react'
import {useEffect,useState} from 'react'

function Dessert({cartHandler}) {
     const [desserts,setDesserts] = useState(null)

     useEffect(()=> {
          fetch("/categories/6").then((r)=> r.json()).then((desserts)=> setDesserts(desserts));
     },[]);

     function dessertCardGenerator(desserts) {
          const dessertCards = desserts.map((dessert)=> {
               return <div key={dessert.id} className="bg-blue-200">
                    <img src={dessert.image} alt="Dessert item" />
                    <h3>{dessert.name}</h3>
                    <p>{dessert.description}</p>
                    <p>{dessert.price}</p>
                    <button onClick={()=> cartHandler(dessert)} className="bg-gray-400 border rounded-lg px-2">Add to Cart</button>
               </div>
          })
          return dessertCards
     }
     return (
          <div>
               {desserts ? dessertCardGenerator(desserts): "Loading our Desserts for you.."}
          </div>
     )
}

export default Dessert
