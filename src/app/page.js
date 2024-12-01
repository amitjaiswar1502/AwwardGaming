import Image from "next/image";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Hero />
      {/* <About /> */}
      <section className="min-h-screen"></section>
    </main>
  );
}
