"use client"
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    
    if (setQuantity <= 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    
    if (setQuantity >= 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <div>
      <div className="font-bold text-4xl text-red-300 p-4 m-6 bg-white flex justify-center border-4 border-red-200">
        <p>Quantity: {quantity}</p>
      </div>
      <div className="flex justify-center gap-10">
      
        <button onClick={decrement} className="bg-black py-4 px-12 my-4 rounded-lg text-white hover:bg-blue-900 cursor-pointer">Decrement</button>
        <button onClick={increment} className="bg-red-700 py-4 px-12 my-4 rounded-lg text-white hover:bg-red-500 cursor-pointer">Increment</button>
      </div>
    </div>
  );
}



