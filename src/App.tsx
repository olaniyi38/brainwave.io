import "./App.css";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import CTA from "./components/CTA";
import FAQs from "./components/FAQs";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Content1 />
      <Stats />
      <Content2 />
      <Testimonials />
      <Pricing />
      <FAQs />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
