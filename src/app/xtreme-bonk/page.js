"use client"

import { useState } from 'react';
import Image from 'next/image';
import myGif from '../assets/bonk-maxxnew.gif';

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <main className="relative">
      <h1 className='text-shadows'>EXTREME BONK!!!</h1>
      <Image
        src={myGif}
        alt="Bonk doge"
        priority
        className='scale-200 mx-auto mt-45 bigdog-gif cursor-pointer transition-transform duration-300'
        onClick={openModal}
      />

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <Image
            src={myGif}
            alt="Bonk doge enlarged"
            priority
            className="scale-230"
            onClick={e => e.stopPropagation()} // Prevent closing when clicking on image
          />
        </div>
      )}
    </main>
  );
}




