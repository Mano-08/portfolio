import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <div id="container">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
