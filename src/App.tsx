import { Hero } from "./Hero";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { FAQ } from "./FAQ";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-950 via-gray-950 to-gray-950 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] before:from-blue-950/30 before:via-transparent before:to-transparent before:pointer-events-none text-white">
      <Hero />
      <Features />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
