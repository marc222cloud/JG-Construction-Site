import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Hero from "./components/Hero";
import Services from "./components/Services"
import About from "./components/About";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <Home />
      </main>
      <Footer />
    </div>
  );
}