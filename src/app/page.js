import Link from 'next/link';

// Additional Colours and UI
// three-d-text bg-amber-300 py-6 px-6 text-center text-4xl"
export default function Display() {
  return (
    <main>

      <h1 className="text-shadows">CPRG 306: Web Development 2 - Assignments</h1>
        

      <div className="my-20 mx-70">
        <Link href="/week-2" className="rounded-2xl bg-white border-black p-5 m-5">Week-2 &#10140;</Link>
      </div>
      
      <div className="my-20 mx-70">
        <Link href="/week-3"className="rounded-2xl bg-white border-black p-5 m-5">Week-3 &#10140;</Link>
      </div>
      
    </main>
  );
}






