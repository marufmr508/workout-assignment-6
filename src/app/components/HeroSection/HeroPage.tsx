 import Image from "next/image";
 import logo from "@/assets/banner.png"
import Link from "next/link";

export default function WorkoutHero() {
  return (
    <section className="m-auto mt-10 container relative w-full overflow-hidden rounded-2xl border border-zinc-800 bg-[#15171c] px-8 py-10 md:px-12 md:py-12">
      
      
      <div className="relative z-10 max-w-2xl">
         
        <p className="mb-5 text-[11px] font-bold tracking-[0.15em] text-lime-400 uppercase">
          Workout Library
        </p>

        
        <h1 className="max-w-2xl text-3xl leading-[0.95] font-black tracking-tight text-white uppercase sm:text-5xl md:text-5xl">
          Train With Intent.Log <br /> Every Set.
        </h1>

         
        <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-400 md:text-base">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
          into today&apos;s plan, and watch the week&apos;s work add up.
        </p>

        
         <Link
  href="#library"
  className="mt-7 inline-block rounded-md bg-lime-400 px-6 py-3 text-xs font-extrabold tracking-wide text-black uppercase transition hover:bg-lime-300"
>
  Browse Workouts
</Link>
      </div>

       
      <div className="pointer-events-none absolute right-4 bottom-0 hidden h-[90%] w-[38%] md:block lg:right-12 lg:w-[34%]">
        <Image
          src= {logo}
          alt="Workout illustration"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>
    </section>
  );
}