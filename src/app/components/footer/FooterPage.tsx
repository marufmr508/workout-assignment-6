 
import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#0d0f13]">
      <div className="mx-auto flex min-h-[56px] max-w-[1400px] flex-col items-center justify-center gap-3 px-4 py-5 sm:px-6 md:flex-row md:justify-between">

       
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="FitLog logo"
            width={32}
            height={32}
            className="h-8 w-8 object-contain"
          />

          <span className="text-xs font-extrabold tracking-[0.12em] text-white">
            FITLOG
          </span>
        </div>

         
        <p className="text-center text-[10px] leading-relaxed text-gray-500 sm:text-[11px] md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;

