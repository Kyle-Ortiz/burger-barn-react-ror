import React from 'react'
import {useEffect,useState} from 'react'

function Burger({cartHandler}) {
     const [burgers,setBurgers] = useState(null)

     useEffect(()=> {
          fetch("/categories/2").then((r)=> r.json()).then((burgers)=> setBurgers(burgers));
     },[]);

     function burgerCardGenerator(burgers) {
          const BurgerCards = burgers.map((burger)=> {
               return <div key={burger.id} className="bg-blue-200 border border-black w-96 mx-3 my-3">
                    <img src={burger.image} alt="burger item" />
                    <h3>{burger.name}</h3>
                    <p>{burger.description}</p>
                    <button onClick={()=> cartHandler(burger)} className="bg-gray-400 border rounded-lg px-2">Add to Cart</button>
               </div>
          })
          return BurgerCards
     }
     return (
          <div className="flex flex-wrap">
               {burgers ? burgerCardGenerator(burgers): "Loading our burgers for you.."}
          </div>
     )
}

export default Burger
