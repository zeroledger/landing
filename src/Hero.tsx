import { motion } from "framer-motion";
import { CodeBracketIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export const Hero = () => {
  return (
    <motion.section
      className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden md:mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <header className="max-w-7xl mx-auto relative text-center">
        <h1 className="mb-4">
          <span className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
            Zeroledger
          </span>
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold mb-4">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
            Next-Generation Payment System
          </span>
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Programmable, trustless zk-based transfers with strong confidentiality
          and flexible compliance.
        </p>
        <nav className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-[320px] md:max-w-md mx-auto">
          <button
            disabled
            className="w-full px-6 py-4 border border-gray-600 text-base font-medium rounded-lg text-white hover:bg-gray-800/50 transition-all duration-200"
          >
            <a
              href="https://www.notion.so/Whitepaper-1f2fc244eb5b806ea1f7ed5be677c8b9?pvs=4"
              target="_blank"
              className="flex items-center justify-center"
            >
              <DocumentTextIcon className="h-5 w-5 mr-2" />
              Whitepaper
            </a>
          </button>
          <button
            disabled
            className="w-full px-6 py-4 border border-gray-600 text-base font-medium rounded-lg text-white hover:bg-gray-800/50 transition-all duration-200"
          >
            <a
              href="https://app.pryx.cash"
              target="_blank"
              className="flex items-center justify-center"
            >
              <CodeBracketIcon className="h-5 w-5 mr-2" />
              Try Demo
            </a>
          </button>
        </nav>
      </header>
    </motion.section>
  );
};
