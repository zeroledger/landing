import { motion } from "framer-motion";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

const comparisons = [
  {
    aspect: "Your funds",
    mixer: { status: false, text: "Mixed with others" },
    zeroledger: { status: true, text: "Always yours" },
  },
  {
    aspect: "Traceability",
    mixer: { status: false, text: "Hard to trace" },
    zeroledger: { status: true, text: "Fully auditable" },
  },
  {
    aspect: "Wallet support",
    mixer: { status: false, text: "No multisigs" },
    zeroledger: { status: true, text: "Any EVM wallet + multisigs" },
  },
  {
    aspect: "Flexibility",
    mixer: { status: false, text: "Fixed amounts" },
    zeroledger: { status: true, text: "Any amount" },
  },
  {
    aspect: "Speed",
    mixer: { status: false, text: "Delays required" },
    zeroledger: { status: true, text: "Instant" },
  },
];

export const Comparison = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#4E535F]/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8E8E8] mb-4">
            Not a Mixer
          </h2>
          <p className="text-base sm:text-lg text-[#E8E8E8]/70 max-w-2xl mx-auto">
            We hide amounts, not funds. Your money stays yours.
          </p>
        </motion.div>

        <div className="overflow-x-auto">
          <motion.div
            className="min-w-[640px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 mb-4 px-4">
              <div className="text-left">
                <h3 className="text-lg font-semibold text-[#E8E8E8]">Aspect</h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#E8E8E8]">
                  Traditional Mixers
                </h3>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#00E0B0]">
                  ZeroLedger
                </h3>
              </div>
            </div>

            {/* Comparison rows */}
            <div className="space-y-3">
              {comparisons.map((comparison, index) => (
                <motion.div
                  key={comparison.aspect}
                  className="grid grid-cols-3 gap-4 p-4 rounded-lg border border-[#4E535F]/50 bg-[#1A1C22]/70 backdrop-blur-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-[#E8E8E8]">
                      {comparison.aspect}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {comparison.mixer.status ? (
                      <CheckCircleIcon className="h-5 w-5 text-[#00E0B0] flex-shrink-0" />
                    ) : (
                      <XCircleIcon className="h-5 w-5 text-[#E8E8E8]/40 flex-shrink-0" />
                    )}
                    <span className="text-sm text-[#E8E8E8]/70">
                      {comparison.mixer.text}
                    </span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    {comparison.zeroledger.status ? (
                      <CheckCircleIcon className="h-5 w-5 text-[#00E0B0] flex-shrink-0" />
                    ) : (
                      <XCircleIcon className="h-5 w-5 text-[#E8E8E8]/40 flex-shrink-0" />
                    )}
                    <span className="text-sm text-[#E8E8E8]/70">
                      {comparison.zeroledger.text}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-sm text-[#E8E8E8]/60 max-w-3xl mx-auto">
            Privacy without the risks of mixing.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
