"use client"
import NewItem from './new-item';

export default function Page() {
  return <div>
    <main>
    <h1 className='text-shadows'>Item Counter</h1>
    <NewItem />
    </main>
      <footer>
        <p className='p-4 mx-auto mt-10 text-center'>&copy; 2025 Levi Moreau</p>
      </footer>    
  </div>

}

