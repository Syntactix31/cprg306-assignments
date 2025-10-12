"use client"
import { Quando } from "next/font/google";
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


  // Name Field
  const [name, setName] = useState("");

  // Category Field
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

      const item = {

        Name: {name},
        Quantity: {quantity},
        Category: {category},

      };

      console.log(item);

    alert(`An item was submitted:
      Name: ${name}
      Quantity: ${quantity}
      Category: ${category}`);


  };

  const handleChange = (event) => {
    setName(event.target.value);
    setCategory(event.target.value);
  };


  return (

    <section>
      <form onSubmit={handleSubmit} className="mt-10 bg-blue-300 mx-auto h-170 w-140 rounded-2xl p-2">
        <label >
          <input type="text" placeholder="Enter Product name" value={name} onChange={handleChange} className="flex items-center justify-center font-bold text-4xl text-red-300 bg-white border-4 border-red-200 rounded-lg w-120 h-20 mx-auto my-10 text-center"/>
        </label>
        <label>
          <div className="flex items-center justify-center font-bold text-4xl text-red-300 bg-white border-4 border-red-200 rounded-lg w-64 h-20 mx-auto my-4">
            Quantity: {quantity}
          </div>

          <div className="flex justify-center gap-10">
          
            <button disabled={quantity == 1} onClick={decrement} className={`bg-blue-500 py-4 px-12 my-4 rounded-lg text-white hover:bg-blue-700 cursor-pointer ${
                quantity === 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}>Decrement</button>
              
              {/* hover:font-bold hover:border-red-300 hover:py-2 for clear change button hover:bg-white hover:border-4 hover:text-red-600*/}
            <button disabled={quantity == 20} onClick={increment} className={`bg-red-500 py-4 px-12 my-4 rounded-lg text-white hover:bg-red-700  cursor-pointer ${
                quantity === 20 ? "opacity-50 cursor-not-allowed" : ""
              }`}>Increment</button>
          </div>          
        </label>
        <label className="flex items-center justify-center font-bold text-4xl text-red-300 bg-white border-4 border-red-200 rounded-lg w-80 h-20 mx-auto my-10">
          Category Type
          <select placeholder="Category" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" className="my-18 flex items-center justify-center font-bold text-4xl text-red-300 bg-white border-4 border-red-200 rounded-4xl w-50 h-20 mx-auto my-10 hover:text-white hover:bg-red-500 hover:border-none"/>

        {/* Fix CSS border outline to offset (for submit button with white):

            hover:outline-black hover:outline-offset--9px\
            hover:border-white

          HOW TO GET INNER BORDER
        */}

      </form>
    </section>
  );
}







