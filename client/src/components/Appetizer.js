import React from 'react'
import {useEffect,useState} from 'react'

function Appetizer({setOrder}) {
     const [Appetizers,setAppetizers] = useState(null)
     const [quantity, setQuantity] = useState(1)

     useEffect(()=> {
          fetch("/categories/1").then((r)=> r.json()).then((Appetizers)=> setAppetizers(Appetizers));
     },[]);

     function AppetizerCardGenerator(Appetizers) {
          const AppetizerCards = Appetizers.map((Appetizer)=> {
               return <div key={Appetizer.id} className="bg-blue-200">
                    <img src={Appetizer.image} alt="Appetizer item" />
                    <h3>{Appetizer.name}</h3>
                    <p>{Appetizer.description}</p>
                    <p>{Appetizer.price}</p>
                    <label htmlFor="Quantity">Quantity: </label>
                    <input name="Quantity" type="text" value={quantity} onChange={(e)=> setQuantity(e.target.value)}/>
                    <button onClick={(e)=> setQuantity(e.target.value)}className="bg-gray-400">Add to Cart</button>
               </div>
          })
          return AppetizerCards
     }
     return (
          <div>
               {Appetizers ? AppetizerCardGenerator(Appetizers): "Loading our Appetizers for you.."}
          </div>
     )
}

export default Appetizer
