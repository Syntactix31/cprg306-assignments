"use client"
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  return (
    <section>
      <div className="flex items-center justify-center font-bold text-4xl text-red-300 bg-white border-4 border-red-200 rounded-lg w-64 h-20 mx-auto my-10">
        Quantity: {quantity}
      </div>

      <div className="flex justify-center gap-10">
      
        <button disabled={quantity == 1} onClick={decrement} className={`bg-blue-500 py-4 px-12 my-4 rounded-lg text-white hover:bg-blue-900 cursor-pointer ${
            quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}>Decrement</button>
          
          {/* hover:font-bold hover:border-red-300 hover:py-2 for clear change button hover:bg-white hover:border-4 hover:text-red-600*/}
        <button disabled={quantity == 20} onClick={increment} className={`bg-red-500 py-4 px-12 my-4 rounded-lg text-white hover:bg-red-700  cursor-pointer ${
            quantity === 20 ? "opacity-50 cursor-not-allowed" : ""
          }`}>Increment</button>
      </div>
    </section>
  );
}



