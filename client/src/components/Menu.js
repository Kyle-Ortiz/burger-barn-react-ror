import React from 'react'
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

function Menu() {
     const[categories,setCategories]= useState(null)

     useEffect(() => {
          fetch("/categories").then((r)=> r.json()).then((data)=> {
               setCategories(data)
          })
     },[]);

     function cardsGenerator(categories) {
          const categoryCards = categories.map((category)=> {
               return <div key={category.id} className="flex flex-col justify-center w-1/3 pt-40 ">
                    <img src="data:image/jpeg;base64,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" alt="food" />
                    <Link to={`/${category.name}s`}className="bg-blue-400">{category.name}
                    </Link>
               </div>
               })
          return categoryCards;
     }


     return (
          <div className="flex flex-wrap">
               {categories ? cardsGenerator(categories) :  "Please wait while we load the menu for you..."}
           </div>
     )
}

export default Menu
