import Background from "./components/Background";
import Contact from "./components/Contact";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import Promise from "./components/Promise";
import ScrollSnapContainer from "./components/ScrollSnapContainer";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import WhoWeAre from "./components/WhoWeAre";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-(--color-ink)">
      <Background />

      <ScrollSnapContainer>
        <header id="home" className="snap-section">
          <Navbar />
          <Hero />
        </header>

        <main>
          <WhoWeAre />
          <Mission />
          <Services />
          <Promise />
          <Team />
          <Testimonials />
          <Faqs />
          <Contact />
        </main>

        <Footer />
      </ScrollSnapContainer>
    </div>
  );
}
