import React from "react";
import { iphone16pro, iphone11, macbook, watchseries7 } from "../assets";

function BagItems () {
const items = 
  [ {
    image: iphone16pro,
    phone: "Apple iphone 16 pro",
    color: "pearl white",
    description: "128GB great camera",
    stars: "5stars",  //will check image for actual stars
    price: "R50000"
  },
   {
    image: macbook,
    phone: "Macbook pro",
    color: "all colors",
    description: "256GB great camera",
    stars: "4stars",  //will check image for actual stars
    price: "R390000"
  },
  {
    image: watchseries7,
    phone: "apple watch series 7",
    color: "pearl white",
    description: "128GB great camera",
    stars: "5stars",  //will check image for actual stars
    price: "R10000"
  },
   {
    image: iphone11,
    phone: "Apple iphone 11",
    color: "all colors",
    description: "256GB great camera",
    stars: "4stars",  //will check image for actual stars
    price: "R39000"
  }, 
]
return(
<div className="container mx-auto px-4 py-8 " >
 <div className="text-4xl margin-6">
 <p>Check your Bag Items</p>
 </div>
 {items.map((items, index) => (
<div key={index} className="flex items-start gap-6 border-b border-gray-300 py-6 rounded-shadow">
  <img src={items.image} alt="iphone16 pro" className="w-60"></img>
  <div className="space-y-2">
            <h3 className="text-xl font-semibold">{items.phone}</h3>
            <p className="text-gray-600">{items.color}</p>
            <p className="text-gray-700">{items.description}</p>
            <p className="text-yellow-500">{items.stars}</p>
            <p className="text-green-600 font-bold">{items.price}</p>
          </div>
          <button className="bg-black-600 text-white">Add to cart</button>
          </div>
 ))}
 </div>
);
}


export default BagItems;