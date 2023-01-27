"use client";

import FAQ from "@/components/faq";
import Features from "@/components/features";
import Header from "@/components/header";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <div>
      <Header />
      <Pricing />
      <Features />
      <FAQ />
    </div>
  )
}
