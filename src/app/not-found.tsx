import Link from "next/link";

export default function NotFound() {
return ( <main className="flex min-h-[70vh] items-center justify-center bg-[#0d0f13] px-4"> <div className="text-center"> <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
404 </p>

```
    <h1 className="mt-3 text-3xl font-black uppercase text-white sm:text-5xl">
      Page Not Found
    </h1>

    <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400">
      The page you are looking for does not exist.
    </p>

    <Link
      href="/"
      className="mt-6 inline-flex rounded-lg bg-lime-400 px-6 py-3 text-sm font-bold text-black transition hover:bg-lime-300"
    >
      Back to Workouts
    </Link>
  </div>
</main>


);
}
