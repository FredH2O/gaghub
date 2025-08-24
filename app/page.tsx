import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <div className="container mx-auto">
          <About />
        </div>
      </div>
    </div>
  );
}
