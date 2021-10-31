import React from 'react'
import {useEffect,useState} from 'react'

function Chicken({cartHandler}) {
     const [chickens,setChickens] = useState(null)

     useEffect(()=> {
          fetch("/categories/3").then((r)=> r.json()).then((chickens)=> setChickens(chickens));
     },[]);

     function chickenCardGenerator(chickens) {
          const chickenCards = chickens.map((chicken)=> {
               return <div key={chicken.id} className="bg-blue-200">
                    <img src={chicken.image} alt="Chicken item" />
                    <h3>{chicken.name}</h3>
                    <p>{chicken.description}</p>
                    <p>{chicken.price}</p>
                    <button onClick={()=> cartHandler(chicken)} className="bg-gray-400 border rounded-lg px-2">Add to Cart</button>
               </div>
          })
          return chickenCards
     }
     return (
          <div>
               {chickens ? chickenCardGenerator(chickens): "Loading our chicken entrees for you.."}
          </div>
     )
}

export default Chicken