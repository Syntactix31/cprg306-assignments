"use client"

import ItemList from './item-list';
import NewItem from './new-item.js';
import itemsdata from './item.json';
import MealIdeas from './meal-ideas';

// Testing to see if this client-side Authentication works
import { useUserAuth } from "../../contexts/AuthContext.js";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


import { useState } from "react";

export default function Page() {

  // Stuff for authentication
  const { user } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.replace("/");
    }

  }, [user, router]);
  if(!user) {
    return null;

  }

  const [items, setItems] = useState(itemsdata);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleItemSelect = (item) => {
    const itemName = item.name;

    if(itemName.includes(',')) {
      const formattedName = itemName.split(',');
      setSelectedItemName(formattedName[0].trim());

    } else {
      const formattedName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
      setSelectedItemName(formattedName);
    }
  }


  return (
    <div>
      <h1 className='text-shadows'>Shopping List</h1>
      <main className='flex gap-8'>
        
        <div className='flex-1'> {/* *****TODO: convert to flex and gap-10 to align all the page elements side by side for readability***** */}
          
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        
        <div className='flex-1'>
          <MealIdeas ingredient={selectedItemName} />
        </div>
        
        
      
      </main>
      <footer>
        <p className='p-4 mx-auto mt-10 text-center'>&copy; 2025 Levi Moreau</p>
      </footer>
    </div>
  );
};


