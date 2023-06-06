import Link from "next/link";

function Footer() {
  return (
    <footer className="relative z-[5] flex flex-row items-center text-sm opacity-50 justify-between border-t-[0.1px] text-slate-200 border-slate-500">
      <span className="text-[0.675rem]">&copy; Mano 2023</span>
      <div className="flex flex-row gap-3">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
      </div>
    </footer>
  );
}

export default Footer;
