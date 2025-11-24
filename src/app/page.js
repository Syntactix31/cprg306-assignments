import Link from 'next/link';
import Image from 'next/image';

// Additional Colours and UI
// three-d-text bg-amber-300 py-6 px-6 text-center text-4xl"
export default function Page() {
  return (
    <div>
      <main>

        <h1 className="text-shadows min-width-text">CPRG 306: Web Development 2 - Assignments</h1>
          

        <div className="mt-20">
          <Link href="/week-2" className="active:scale-90 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-2 &#10140;</Link>
        </div>
        
        <div className="my-20">
          <Link href="/week-3"className="active:scale-90 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-3 &#10140;</Link>
        </div>

        <div className="my-20">
          <Link href="/week-4"className="active:scale-90 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-4 &#10140;</Link>
        </div>
        
        <div className="my-20">
          <Link href="/week-5"className="active:scale-90 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-5 &#10140;</Link>
        </div>

        <div className="my-20">
          <Link href="/week-6"className="active:scale-90 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-6 &#10140;</Link>
        </div>

        <div className="my-20">
          <Link href="/week-7"className="active:scale-90 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-7 &#10140;</Link>
        </div>

        <div className="my-20">
          <Link href="/week-8"className="active:scale-90 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-8 &#10140;</Link>
        </div>
        
        <div className="my-20">
          <Link href="/week-9"className="active:scale-90 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-9 &#10140;</Link>
        </div>

        <div className="my-20">
          <Link href="/week-10"className="active:scale-90 mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-10 &#10140;</Link>
        </div>



        {/* <Image src='/bonk.gif' alt='Dog Bonk Gif' width={100} height={100} className='' />
        <Image src='/bonk.gif' alt='Dog Bonk Gif' width={100} height={100} className='' /> */}







      
        <div className="my-20">
          <Link href="/xtreme-bonk"className="active:scale-115 mx-auto flex max-w-sm font-bold items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-blue-200 min-width-week justify-center">EXTREME BONK!!!</Link>
        </div>
        
      </main>
      <footer>
        <p className='p-4 mx-auto mt-10 text-center'>&copy; 2025 Levi Moreau</p>
      </footer>
    </div>
  );
}






