export default function Item({name, quantity, category}) {
  return <li className="p-4 m-4 bg-white rounded-2xl">
    {name}<br/> 
    {quantity}<br/>
    {category}
    </li>            // Test using a <span> element to each list content for styling

};



