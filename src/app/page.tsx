import Navbar from "@/components/Navbar";
import Homme from "@/components/Home";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <section className="bg-red-600 clip h-screen">
        <Navbar />
        <Homme />
      </section>
      <Services />
    </main>
  );
}
