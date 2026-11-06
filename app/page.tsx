"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import CostEstimator from "@/components/CostEstimator";
import Contact from "@/components/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [estimateData, setEstimateData] = useState<{
    summary: string;
    budget: string;
  } | null>(null);

  const handleApplyEstimate = (summary: string, budgetRange: string) => {
    setEstimateData({
      summary,
      budget: budgetRange,
    });
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="min-h-screen bg-[#03060c] text-white selection:bg-[#ff2a4b] selection:text-white">
        <Navbar />
        <Hero />
        <Projects />
        <Services />
        <Process />
        <CostEstimator onApplyEstimate={handleApplyEstimate} />
        <Testimonials />
        <Contact prefilledData={estimateData} />
      </main>
    </>
  );
}