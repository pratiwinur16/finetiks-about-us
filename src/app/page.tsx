import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VisionMission from "@/components/VisionMission";
import ImpactValues from "@/components/ImpactValues";
import Leadership from "@/components/Leadership";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex w-full flex-col">
        <Hero />
        <VisionMission />
        <ImpactValues />
        <Leadership />
        <Banner />
      </main>
      <Footer />
    </>
  );
}
