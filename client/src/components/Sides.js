import React from 'react'
import {useEffect,useState} from 'react'

function Sides({cartHandler}) {
     const [sides,setSides] = useState(null)

     useEffect(()=> {
          fetch("/categories/4").then((r)=> r.json()).then((sides)=> setSides(sides));
     },[]);

     function sidesCardGenerator(sides) {
          const SidesCards = sides.map((side)=> {
               return <div key={side.id} className="bg-blue-200 border border-black w-96 mx-3 my-3">
                    <img src={side.image} alt="Sides item" />
                    <h3>{side.name}</h3>
                    <p>{side.description}</p>
                    <p>{side.price}</p>
                    <button onClick={()=> cartHandler(side)} className="bg-gray-400 border rounded-lg px-2">Add to Cart</button>
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
