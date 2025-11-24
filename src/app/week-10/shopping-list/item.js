import Image from 'next/image';
// Downloaded image lesser quality than original
// import TrashImg from '../../assets/trash.png';
import { useState } from "react";


export default function Item({name, quantity, category, onSelect, onDelete}) {

  const [ isDeleteHovered, setIsDeleteHovered ] = useState(false);

  return <li 
        className={`p-4 m-4  rounded-2xl hover:scale-101 hover:cursor-pointer active:scale-100 ${
        isDeleteHovered ? "bg-yellow-100" : "hover:bg-yellow-50 bg-white"
      }`}
      onClick={() => {
        onSelect();
      }}
    >
    <div className=" flex align-center justify-between">
      <div>
        {name}<br/> 
        {quantity}<br/>
        {category}        
      </div>

      <div onClick={(e) => {e.stopPropagation(); onDelete(); }} onMouseEnter={() => setIsDeleteHovered(true)} onMouseLeave={() => setIsDeleteHovered(false)}>
        {/* <Image src={TrashImg} alt="Trash Icon" className='w-5 h-5'/> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"
            />
          </svg>
      </div>
    </div>

  </li>            // Test using a <span> element to each list content for styling

};






