import Hero from "@/components/Hero";
import About from "@/components/About";
import Books from "@/components/Books";
import Media from "@/components/Media";
import Connect from "@/components/Connect";
import Walk from "@/components/Walk";
import Farewell from "@/components/Farewell";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Connect />
      <Books />
      <Media />
      <Walk />
      <Farewell />
      <Footer />
    </main>
  );
}
