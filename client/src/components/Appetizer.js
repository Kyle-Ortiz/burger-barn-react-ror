import React from 'react'
import {useEffect,useState} from 'react'

function Appetizer({cartHandler}) {
     const [Appetizers,setAppetizers] = useState(null)
     // const [totalQuantity, setTotalQuantity] = useState({
     //      "Southwest Eggrolls" : 0,
     //      "Chips and Queso" : 0,
     //      "Fried Pickles" : 0,
     //      "Boneless Buffalo Wings" : 0,
     // })

     useEffect(()=> {
          fetch("/categories/1").then((r)=> r.json()).then((Appetizers)=> setAppetizers(Appetizers));
     },[]);

     function AppetizerCardGenerator(Appetizers) {
          const appetizerCards = Appetizers.map((appetizer)=> {
               return <div key={appetizer.id} className="bg-blue-200 border border-black w-96 mx-3 my-3">
                    <img className="w-auto h-72"src={appetizer.image} alt="Appetizer item" />
                    <h3>{appetizer.name}</h3>
                    <p>{appetizer.description}</p>
                    <p>{appetizer.price}</p>
                    <button onClick={()=> cartHandler(appetizer)} className="bg-gray-400 border rounded-lg px-2">Add to Cart</button>
               </div>
          })
          return appetizerCards
     }
     return (
          <div className="">
               <h1 className="">Appetizers</h1>
               <div className="flex flex-wrap">
               {Appetizers ? AppetizerCardGenerator(Appetizers): "Loading our Appetizers for you.."}
               </div>
          </div>
     )
}

export default Appetizer
