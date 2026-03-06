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
          <span className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#00E0B0] via-[#00F0C0] to-[#00E0B0] bg-clip-text text-transparent bg-size-200 animate-gradient">
            ZeroLedger
          </span>
        </h1>
        <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-[#E8E8E8]">
          Your everyday digital cash
        </h2>
        {/* <p className="text-base sm:text-lg text-[#E8E8E8]/80 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          Stablecoin payments with privacy and traceability.
        </p> */}
        <nav className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md mx-auto">
          <a
            href="https://app.zeroledger.wtf"
            target="_blank"
            className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#00E0B0] text-[#1A1C22] text-sm sm:text-base font-semibold rounded-md hover:bg-[#00F0C0] transform hover:scale-105 transition-all duration-200 shadow-lg shadow-[#00E0B0]/20"
          >
            <WalletIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Launch App
          </a>
          <a
            href="https://docs.zeroledger.wtf"
            target="_blank"
            className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 border border-[#4E535F] text-sm sm:text-base font-medium rounded-md text-[#E8E8E8] hover:bg-[#4E535F]/60 hover:border-[#00E0B0]/50 transition-all duration-200"
          >
            <DocumentIcon className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
            Read Docs
          </a>
        </nav>
      </header>
    </motion.section>
  );
};
