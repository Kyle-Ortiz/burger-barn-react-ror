import React from 'react'
import {useEffect,useState} from 'react'

function Appetizer() {
     const [Appetizers,setAppetizers] = useState(null)

     useEffect(()=> {
          fetch("/categories/1").then((r)=> r.json()).then((Appetizers)=> setAppetizers(Appetizers));
     },[]);

     function AppetizerCardGenerator(Appetizers) {
          const AppetizerCards = Appetizers.map((Appetizer)=> {
               return <div key={Appetizer.id} className="bg-blue-200">
                    <img src="#" alt="Appetizer item" />
                    <h3>{Appetizer.name}</h3>
                    <p>{Appetizer.description}</p>
                    <button>Add to Cart</button>
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
