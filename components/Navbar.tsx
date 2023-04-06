function Navbar() {
  return (
    <nav className="fixed w-screen">
      <div className="float-right flex flex-col justify-evenly h-8 md:h-10 w-10 items-center rounded-full backdrop-blur bg-slate-200 mx-3 md:mx-10 my-2 md:my-3">
        <div className="h-[0.1rem] w-6 bg-black" />
        <div className="h-[0.1rem] w-6 bg-black" />
      </div>
    </nav>
  );
}

export default Navbar;
