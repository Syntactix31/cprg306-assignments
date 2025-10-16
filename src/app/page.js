import Link from 'next/link';

// Additional Colours and UI
// three-d-text bg-amber-300 py-6 px-6 text-center text-4xl"
export default function Page() {
  return (
    <main>

      <h1 className="text-shadows min-width-text">CPRG 306: Web Development 2 - Assignments</h1>
        

      <div className="mt-20">
        <Link href="/week-2" className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-2 &#10140;</Link>
      </div>
      
      <div className="my-20">
        <Link href="/week-3"className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-3 &#10140;</Link>
      </div>

      <div className="my-20">
        <Link href="/week-4"className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-4 &#10140;</Link>
      </div>
      
      <div className="my-20">
        <Link href="/week-5"className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-5 &#10140;</Link>
      </div>

      <div className="my-20">
        <Link href="/week-6"className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 hover:bg-red-200 min-width-week">Week-6 &#10140;</Link>
      </div>
      
    </main>
  );
}






