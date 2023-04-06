import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}
