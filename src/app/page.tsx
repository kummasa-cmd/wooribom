import Hero from "@/components/Hero";
import About from "@/components/About";
import Books from "@/components/Books";
import Media from "@/components/Media";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Books />
      <Media />
      <Connect />
      <Footer />
    </main>
  );
}
