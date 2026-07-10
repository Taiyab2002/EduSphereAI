import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Statistics from "@/components/home/Statistics";
import Features from "@/components/home/Features";
import Courses from "@/components/home/Courses";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <Courses />
      <CTA />
      <Footer />
    </>
  );
}