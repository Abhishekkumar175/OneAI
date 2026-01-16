import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import ToolsSection from "../components/ToolsSection";
import AudienceSection from "../components/AudienceSection";
import Pricing from "../components/Pricing";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Landing() {
  const { isSignedIn, isLoaded } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate("/ai", { replace: true });
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) return null;

  return (
    <>
      <Navbar />
      <Hero />
      <ToolsSection />
      <AudienceSection />
      <Pricing />
      <CTA />
      <Footer />
    </>
  );
}
