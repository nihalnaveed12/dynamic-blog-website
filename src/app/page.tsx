import Contact from "@/components/contact";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/latest-articles";
import PopularArticles from "@/components/popular-articles";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar bgColor="bg-transparent" color="text-white"/>
    <main>
      <Hero />
      <PopularArticles />
      <LatestArticles />
      <Contact />
    </main>
    </>
  );
}
