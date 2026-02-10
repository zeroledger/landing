import { Hero } from "./Hero";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { UseCases } from "./UseCases";
import { Comparison } from "./Comparison";
import { CTA } from "./CTA";
import { Footer } from "./Footer";

function App() {
  return (
    <div className="relative flex flex-col min-h-svh bg-[#1A1C22] text-[#E8E8E8] overflow-x-hidden">
      {/* Subtle accent gradient overlay */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(0,224,176,0.08)_0%,_transparent_50%)] pointer-events-none z-0" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(0,224,176,0.05)_0%,_transparent_50%)] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col min-h-svh">
        <header className="flex-shrink-0 pt-8 sm:pt-12">
          <Hero />
        </header>

        <main className="flex-grow">
          <Features />
          <HowItWorks />
          <UseCases />
          <Comparison />
          <CTA />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
