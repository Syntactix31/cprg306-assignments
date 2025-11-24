export default function Item({name, quantity, category, onSelect}) {

  return <li className="p-4 m-4 bg-white rounded-2xl hover:bg-yellow-50 hover:scale-101 hover:cursor-pointer active:scale-100" onClick={() => {onSelect()}}>
    {name}<br/> 
    {quantity}<br/>
    {category}
    </li>            // Test using a <span> element to each list content for styling

};





