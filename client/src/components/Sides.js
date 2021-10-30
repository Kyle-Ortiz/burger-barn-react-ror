import React from 'react'
import {useEffect,useState} from 'react'

function Sides() {
     const [sides,setSides] = useState(null)

     useEffect(()=> {
          fetch("/categories/4").then((r)=> r.json()).then((sides)=> setSides(sides));
     },[]);

     function sidesCardGenerator(sides) {
          const SidesCards = sides.map((side)=> {
               return <div key={side.id} className="bg-blue-200">
                    <img src={side.image} alt="Sides item" />
                    <h3>{side.name}</h3>
                    <p>{side.description}</p>
                    <p>{side.price}</p>
                    <button>Add to Cart</button>
               </div>
          })
          return SidesCards
     }
     return (
          <div>
               {sides ? sidesCardGenerator(sides): "Loading our Sides for you.."}
          </div>
     )
}

export default Sides
