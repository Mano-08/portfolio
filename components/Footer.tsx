import Link from "next/link";

function Footer() {
  return (
    <footer className="relative z-[5] flex flex-row items-center text-sm opacity-50 justify-between md:mx-10 md:px-1 px-0 md:pb-10 md:pt-3 border-t-[0.1rem] border-slate-500 mx-2">
      <span className="text-[0.675rem]">© Mano 2023</span>
      <div className="flex flex-row gap-3">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
      </div>
    </footer>
  );
}

export default Footer;
