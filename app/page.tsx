import ContactPage from "@/components/layout/contact";
import Hero from "@/components/layout/hero";
import Portfolio from "@/components/layout/portfolio";
import Service from "@/components/layout/service";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Service />
      <Portfolio />
      <ContactPage />
    </div>
  );
}
