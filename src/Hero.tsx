import { motion } from "framer-motion";
import { WalletIcon, DocumentIcon } from "@heroicons/react/24/outline";

export const Hero = () => {
  return (
    <motion.section
      className="relative py-8 sm:py-12 px-4 sm:px-6 lg:px-8 overflow-hidden mt-8 sm:mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <header className="mx-auto relative text-center">
        <h1 className="mb-3 sm:mb-4">
          <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
            ZeroLedger
          </span>
        </h1>
        <h2 className="text-lg xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-clip-text text-transparent bg-size-200 animate-gradient">
            Private everyday crypto payments
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2">
          Instant, affordable, and compliant by design
        </p>
        <nav className="flex flex-row justify-center space-x-2 sm:space-x-3 md:space-x-4 w-full max-w-[240px] sm:max-w-[280px] md:max-w-sm mx-auto">
          <a
            href="https://docs.zeroledger.wtf"
            target="_blank"
            className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 text-xs sm:text-sm font-medium rounded-md text-white hover:bg-gray-800/50 transition-all duration-200"
          >
            <DocumentIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5" />
            Documentation
          </a>
          <a
            href="https://app.zeroledger.wtf"
            target="_blank"
            className="flex items-center justify-center w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-600 text-xs sm:text-sm font-medium rounded-md text-white hover:bg-gray-800/50 transition-all duration-200"
          >
            <WalletIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1.5" />
            Web App
          </a>
        </nav>
      </header>
    </motion.section>
  );
};
