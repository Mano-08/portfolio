import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div id="container" className=" duration-500 ease-in-out">
        {children}
        <Footer />
      </div>
    </>
  );
}

export default Layout;
