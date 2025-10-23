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


  return <main>
    <h1 className='text-shadows'>Shopping List</h1>
    <NewItem onAddItem={handleAddItem} />
    <ItemList ItemList={items} />
    
  </main>
};



