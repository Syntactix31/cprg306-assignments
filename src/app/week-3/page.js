import Link from 'next/link';

export default function Page() {
  return <main>
    <h1 className='text-4xl p-4'>Shopping List</h1>
    <ul>
      <Link href="/item-list"></Link>


    </ul>
  </main>
};



