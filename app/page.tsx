"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CostEstimator from "@/components/CostEstimator";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [customEstimate, setCustomEstimate] = useState<{ summary: string; budget: string } | null>(null);

  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const handleApplyEstimate = (summary: string, budget: string) => {
    setCustomEstimate({ summary, budget });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="min-h-screen text-slate-100 bg-vignette-grid">
        <Navbar />
        <Hero />
        <Projects />
        <Services />
        <CostEstimator onApplyEstimate={handleApplyEstimate} />
        <Process />
        <Testimonials />
        <Contact prefilledData={customEstimate} />
      </main>
    </>
  );
}