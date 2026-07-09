import { Header } from "@/components/Header";
import { ScrollRail } from "@/components/ScrollRail";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stack } from "@/components/Stack";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Portfolio } from "@/components/Portfolio";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollRail />
      <main>
        <Hero />
        <About />
        <Stack />
        <Services />
        <Process />
        <Portfolio />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
