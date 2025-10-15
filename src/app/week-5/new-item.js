"use client"
import { Quando } from "next/font/google";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  // Name Field
  const [name, setName] = useState("");

  // Category Field
  /****** NOTE: usestate("Produce") was replaced with usestate("") to allow a placeholder for the select form element 
   *            this still requires the user input a category ******/  
  const [category, setCategory] = useState("");

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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);

  };


  const handleSubmit = (event) => {
    event.preventDefault();

      const item = {

        Name: name,
        Quantity: quantity,
        Category: category,

      };

      console.log(item);

    alert(`An item was submitted:
      Name: ${name}
      Quantity: ${quantity}
      Category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("Produce");

  };

  const categories = [
    "Produce",
    "Bakery",
    "Dairy",
    "Canned Goods",
    "Dry Goods",
    "Household",
    "Meat",
    "Frozen Foods",
    "Beverages",
    "Snacks",
    "Other"
  ];


  return (

    <section>
      <form onSubmit={handleSubmit} className="mt-10 bg-blue-300 mx-auto h-175 w-140 rounded-2xl p-2 inner-border mb-10">
        <label >
          <input type="text" placeholder="Enter Product name" value={name} onChange={handleNameChange} className="flex items-center justify-center font-bold text-4xl text-red-300 bg-white border-4 border-red-200 rounded-lg w-120 h-20 mx-auto mt-10 mb-15 text-center" required/>
        </label>

        <div className="flex items-center justify-center font-bold text-4xl text-red-300 bg-white border-4 border-red-200 rounded-lg w-64 h-20 mx-auto my-4">
          Quantity: {quantity}
        </div>

        <div className="flex justify-center gap-10">
          
          <button type="button" disabled={quantity === 1} onClick={decrement} className={`bg-blue-500 py-4 px-12 my-4 rounded-lg text-white hover:bg-blue-700 cursor-pointer ${quantity === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
            Decrement</button>

          <button type="button" disabled={quantity === 20} onClick={increment} className={`bg-red-500 py-4 px-12 my-4 rounded-lg text-white hover:bg-red-700 cursor-pointer ${
              quantity === 20 ? "opacity-50 cursor-not-allowed" : ""
              }`}>Increment</button>
        </div>          


        <label className="flex items-center justify-center font-bold text-4xl text-red-300 bg-white border-4 border-red-200 rounded-lg w-80 h-20 mx-auto my-10">
          
          <select value={category} onChange={handleCategoryChange} required className="cursor-pointer">
            <option value="" disabled>
              Category Type
            </option>
            {
            categories.map((catType) => (
              <option key={catType} value={catType}>
                {catType}
              </option>))
            }
              
          </select>
        </label>
        <input type="submit" value="Submit" className="my-18 flex items-center justify-center font-bold text-4xl text-red-300 bg-white border-4 border-red-200 rounded-4xl w-50 h-20 mx-auto hover:text-white hover:bg-red-300 hover:border-none hover: cursor-pointer"/>

        {/* Fix CSS border outline to offset (for submit button with white):

            hover:outline-black hover:outline-offset--9px\
            hover:border-white

          Decided to not implement the inner border
        */}

        {/* hover:font-bold hover:border-red-300 hover:py-2 for clear change button hover:bg-white hover:border-4 hover:text-red-600 */}

      </form>
    </section>
  );
}


// TODO
/*
   Completed 
   Find out why the Decrement button is highlighting when the cursor is hovered over entire button div

  Fix color scheme n border composition

  IMPORTANT:

  Completed
  Find a way to get a placeholder for drop down category menu that changes when type is added (it should say "Category Type")


*/




