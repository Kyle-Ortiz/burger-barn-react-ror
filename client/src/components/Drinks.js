import React from 'react'
import {useEffect,useState} from 'react'

function Drinks() {
     const [drinks,setDrinks] = useState(null)

     useEffect(()=> {
          fetch("/categories/5").then((r)=> r.json()).then((drinks)=> setDrinks(drinks));
     },[]);

     function drinksCardGenerator(drinks) {
          const drinksCards = drinks.map((drink)=> {
               return <div key={drink.id} className="bg-blue-200">
                    <img src={drink.image} alt="Drink item" />
                    <h3>{drink.name}</h3>
                    <p>{drink.description}</p>
                    <p>{drink.price}</p>
                    <button>Add to Cart</button>
               </div>
          })
          return drinksCards
     }
     return (
          <div>
               {drinks ? drinksCardGenerator(drinks): "Loading our drinks for you.."}
          </div>
     )
}

export default Drinks
