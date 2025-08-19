import About from "./components/About";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return(
    <>
    <Navbar />
    <Hero />
    <About />
    <Gallery />
    <ContactUs />
    </>
  )
}