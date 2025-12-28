import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import HomeStart from "../components/HomeStart";


export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#071b34] via-[#0b2c52] to-[#0e3a66] text-white">
      <Hero />
      <HowItWorks />
      <HomeStart />
      <Footer />

    </main>
  );
}