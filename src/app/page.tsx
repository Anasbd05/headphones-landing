import Navbar from "@/components/Navbar";
import Homme from "@/components/Home";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <section className="bg-red-600 clip h-screen">
        <Navbar />
        <Homme />
      </section>
      <Services />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}
