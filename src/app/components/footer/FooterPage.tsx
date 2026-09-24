import logo from "@/assets/logo.png"
import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full border-t border-white/[0.06] bg-[#0d0f13]">
      <div className="mx-auto flex min-h-[56px] max-w-[1400px] items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg text-lime-400">
            <Image 
            src={logo} alt="hello"
            /> 
          </span>

          <span className="text-xs font-extrabold tracking-[0.12em] text-white">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-right text-[11px] text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;