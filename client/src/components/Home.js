import React from 'react'

function Home() {
     return (
          <div style={{
               backgroundImage: `url(https://media.timeout.com/images/102600575/image.jpg)`,
               height: '700px',
               objectPosition: 'contain',
          }} className="flex flex-col justify-center items-center">
               <h1 className="text-white bold">Burger Barn</h1>
               <h3 className="text-white bold">All-American Resturant</h3>
          </div>
     )
}

export default Home
