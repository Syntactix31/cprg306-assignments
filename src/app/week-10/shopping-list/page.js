"use client"

import ItemList from './item-list';
import NewItem from './new-item.js';
import MealIdeas from './meal-ideas';

import { getItems, addItem, deleteItem } from '../_services/shopping-list-service';

// Testing to see if this client-side Authentication works
import { useUserAuth } from "../../contexts/AuthContext.js";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Page() {

  // Stuff for authentication
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');

  // Had a VERY annoying error just because my use hooks were after the return conditional
  useEffect(() => {
    if (user === null) {
      router.replace("/");
    }

  }, [user, router]);
  // if(user === undefined || user === null) {
  //   return null;
  // }

  // Added stuff for NoSQL database to load items from there
  useEffect(() => {
    loadItems();
  }, [user?.uid]);


  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    // I was doing the reassignment wrong so this fixes the issues I was having
    newItem.id = id;
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleDeleteItem = async (itemId) => {
    if (!user?.uid) return;
    await deleteItem(user.uid, itemId);
    setItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };




  const handleItemSelect = (item) => {
    const itemName = item.name;

    if(itemName.includes(',')) {
      const formattedName = itemName.split(',');
      setSelectedItemName(formattedName[0].trim());

    } else {
      // Had to search up UTF8 code ranges for emoji characters the initial range I had was too small
      //
      // Original Regex: /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g
      const formattedName = itemName.replace(/\p{Extended_Pictographic}/gu, '').trim();
      setSelectedItemName(formattedName);
    }
  }



  async function loadItems() {
    if (!user?.uid) return;
    const userItems = await getItems(user.uid);  
    setItems(userItems || []);
    
  }

  return (
    <div>
      <h1 className='text-shadows'>Shopping List</h1>
      <main className='flex gap-8'>
        
        <div className='flex-1'> {/* *****TODO: convert to flex and gap-10 to align all the page elements side by side for readability***** */}
          
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} onItemDelete={handleDeleteItem} />
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





/**   TODO Monday  ****
 * 
 * Fix left margin on window adjust for smaller viewport size
 * 
 */


