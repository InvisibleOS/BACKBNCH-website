import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import SpeakersSection from "@/components/sections/SpeakersSection";
import PlaybookSection from "@/components/sections/PlaybookSection";
import MetricsSection from "@/components/sections/MetricsSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050505]">
      <NavBar />

      <main className="relative z-0">
        <Hero />

        {/* Relevant podcast content sections */}
        <SpeakersSection />
        <PlaybookSection />
        <MetricsSection />
      </main>

      <Footer />
    </div>
  );
}
