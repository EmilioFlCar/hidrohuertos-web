"use client";
import Hero from "@/components/landing/Hero";
import Course from "@/components/landing/Course";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";
import Benefits from "@/components/landing/Benefits";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header variant="landing" />
      <Hero />
      <Course />
      <HowItWorks />
      <Benefits />
      <Footer />
    </>
  );
}
