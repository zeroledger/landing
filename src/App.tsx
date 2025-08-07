import { motion } from "framer-motion";
import {
  DocumentTextIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  BoltIcon,
  ArrowsRightLeftIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-indigo-950 via-gray-950 to-gray-950 before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] before:from-blue-950/30 before:via-transparent before:to-transparent before:pointer-events-none text-white">
      {/* Hero Section */}
      <motion.section
        className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden md:mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <header className="max-w-7xl mx-auto relative text-center">
          <h1 className="mb-4">
            <span className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Pryx
            </span>
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
              Next-Generation Payment System
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Experience fast, non-custodial transfers across chains with strong
            confidentiality and flexible compliance.
          </p>
          <nav className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-[320px] md:max-w-md mx-auto">
            <a
              href="https://www.notion.so/Whitepaper-1f2fc244eb5b806ea1f7ed5be677c8b9?pvs=4"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-lg text-white hover:bg-gray-800/50 transition-all duration-200"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              Whitepaper
            </a>
            <a
              href="https://app.pryx.cash"
              target="_blank"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-lg text-white hover:bg-gray-800/50 transition-all duration-200"
            >
              <CodeBracketIcon className="h-5 w-5 mr-2" />
              Try Demo
            </a>
          </nav>
        </header>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="about"
        className="py-12 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <header className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Key Features
            </h2>
          </header>

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <ShieldCheckIcon className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Strong Confidentiality
              </h3>
              <p className="text-gray-300 leading-relaxed">
                UTXO-like model with masked Notes and Merkle-based structures
                for enhanced privacy and security.
              </p>
            </li>

            <li className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
              <BoltIcon className="h-10 w-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Low On-Chain Overhead
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Efficient off-chain transfers with minimal blockchain footprint
                for optimal performance.
              </p>
            </li>

            <li className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
              <ArrowsRightLeftIcon className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-3">
                Cross-Chain Operability
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Seamless cross-chain transactions with hashlock logic and
                fraud-proof mechanisms.
              </p>
            </li>
          </ul>
        </main>
      </motion.section>

      {/* Footer */}
      <footer className="relative py-4">
        <motion.nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ul className="flex flex-col items-center space-y-4">
            <li className="flex flex-wrap justify-center gap-6">
              <a
                href="https://forms.gle/NVTSV9WF6YGjrqFt9"
                target="_blank"
                className="inline-flex items-center text-gray-300 hover:text-white transition-colors duration-200"
              >
                <EnvelopeIcon className="h-5 w-5 mr-2" />
                Contact Us
              </a>
            </li>

            <li className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pryx. All rights reserved.
            </li>
          </ul>
        </motion.nav>
      </footer>
    </div>
  );
}

export default App;
