"use client"

import ItemList from './item-list';
import NewItem from './new-item.js';
import itemsdata from './item.json';

import { useState } from "react";

export default function Page() {

  const [items, setItems] = useState(itemsdata);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem])

  };


  return <div>
    <main>
    <h1 className='text-shadows'>Shopping List</h1>
    <NewItem onAddItem={handleAddItem} />
    <ItemList items={items} />
    
    </main>
      <footer>
        <p className='p-4 mx-auto mt-10 text-center'>&copy; 2025 Levi Moreau</p>
      </footer>
  </div>
};




