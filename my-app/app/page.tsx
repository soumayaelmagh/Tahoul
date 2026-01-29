import Background from "./components/Background";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Promise from "./components/Promise";
import Services from "./components/Services";
import Team from "./components/Team";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-[color:var(--color-ink)]">
      <Background />

      <header id="home" className="relative z-10">
        <Navbar />
        <Hero />
      </header>

      <main className="relative z-10">
        <Mission />
        <Services />
        <Promise />
        <Team />
        <Faqs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
