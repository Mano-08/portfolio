import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
