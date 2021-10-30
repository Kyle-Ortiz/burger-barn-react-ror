import React from 'react'
import {useEffect,useState} from 'react'

function Burger() {
     const [burgers,setBurgers] = useState(null)

     useEffect(()=> {
          fetch("/categories/2").then((r)=> r.json()).then((burgers)=> setBurgers(burgers));
     },[]);

     function burgerCardGenerator(burgers) {
          const BurgerCards = burgers.map((burger)=> {
               return <div key={burger.id} className="bg-blue-200">
                    <img src="#" alt="burger item" />
                    <h3>{burger.name}</h3>
                    <p>{burger.description}</p>
                    <button>Add to Cart</button>
               </div>
          })
          return BurgerCards
     }
     return (
          <div>
               {burgers ? burgerCardGenerator(burgers): "Loading our burgers for you.."}
          </div>
     )
}

export default Burger
