import { motion } from "framer-motion";
import { WalletIcon, DocumentIcon } from "@heroicons/react/24/outline";

export const CTA = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative p-8 sm:p-12 rounded-2xl border border-[#4E535F] bg-gradient-to-br from-[#4E535F]/20 to-[#1A1C22]/50 backdrop-blur-sm overflow-hidden">
          {/* Accent glow effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,224,176,0.1)_0%,_transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8E8E8] mb-4">
              Ready to try it?
            </h2>
            <p className="text-base sm:text-lg text-[#E8E8E8]/70 max-w-2xl mx-auto mb-8">
              Private payments in seconds with minimal fees.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://app.zeroledger.wtf"
                target="_blank"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-[#00E0B0] text-[#1A1C22] text-base font-semibold rounded-lg hover:bg-[#00F0C0] transform hover:scale-105 transition-all duration-200 shadow-lg shadow-[#00E0B0]/30"
              >
                <WalletIcon className="h-5 w-5 mr-2" />
                Launch App
              </a>
              <a
                href="https://docs.zeroledger.wtf"
                target="_blank"
                className="flex items-center justify-center w-full sm:w-auto px-8 py-4 border-2 border-[#4E535F] text-base font-medium rounded-lg text-[#E8E8E8] hover:bg-[#4E535F]/40 hover:border-[#00E0B0]/50 transition-all duration-200"
              >
                <DocumentIcon className="h-5 w-5 mr-2" />
                View Documentation
              </a>
            </div>

            <p className="mt-6 text-sm text-[#E8E8E8]/50">
              Currently available on Base Sepolia testnet
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
