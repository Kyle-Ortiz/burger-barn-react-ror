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
                    <img src={category.images} alt="food" />
                    <Link to={category.name}className="bg-blue-400">{category.name}
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
