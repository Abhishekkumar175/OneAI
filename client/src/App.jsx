import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import ToolsSection from "./components/ToolsSection";
import AudienceSection from "./components/AudienceSection";
import Pricing from "./components/Pricing";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ToolsSection />
      <AudienceSection />
      <Pricing />
    </>
  );
}
