import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
import { doc, deleteDoc } from "firebase/firestore";

export async function getItems(userId) {
  const q = query(
    collection(db, "users", userId, "items")
  );
  const querySnapshot = await getDocs(q);

  const items = [];

  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data()

    });
  });

  return items;
}


export async function addItem(userId, item) {
  const itemRef = await addDoc(collection(db, "users", userId, "items"), item);

  return itemRef.id;
}


export async function deleteItem(userId, item) {
  const itemRef = doc(db, "users", userId, "items", item.id);
  await deleteDoc(itemRef);
}




