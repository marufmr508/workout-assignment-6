export default function Loading() {
return ( 
<main className="flex min-h-[70vh] items-center justify-center bg-[#0d0f13] px-4"> <div className="flex flex-col items-center justify-center"> <div className="relative h-14 w-14"> <div className="absolute inset-0 rounded-full border-4 border-zinc-700" />


      <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-lime-400" />
    </div>

    <p className="mt-5 text-sm font-semibold tracking-wide text-gray-400">
      Loading workouts...
    </p>
  </div>
</main>


);
}
