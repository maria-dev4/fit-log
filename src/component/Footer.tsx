import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-[#123B70] bg-[#020B1C] px-5 py-8 text-white sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-center gap-3">
          <Image
            src="/logo_blue.png"
            alt="FitLog logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="text-lg font-black tracking-[0.18em]">FITLOG</span>
        </div>

        <p className="text-center text-xs text-gray-400 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
