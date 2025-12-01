import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Jobs from "./components/Jobs";
import Resources from "./components/Resources";
import FAQs from "./components/FAQs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Jobs />
        <Resources />
        <FAQs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
