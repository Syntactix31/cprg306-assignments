import ItemList from './item-list';

export default function Page() {
  return <div>
    <main>
    <h1 className='text-shadows'>Shopping List</h1>
    <ItemList />
    
    </main>
      <footer>
        <p className='p-4 mx-auto mt-10 text-center'>&copy; 2025 Levi Moreau</p>
      </footer>    
  </div>
};



