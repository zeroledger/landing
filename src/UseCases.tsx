import { motion } from "framer-motion";
import {
  UserGroupIcon,
  DocumentDuplicateIcon,
  ArrowsRightLeftIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const useCases = [
  {
    icon: UserGroupIcon,
    title: "P2P Payments",
    description: "Send money privately to anyone, instantly.",
    available: true,
  },
  {
    icon: DocumentDuplicateIcon,
    title: "Invoicing",
    description: "Get paid without revealing your wallet balance.",
    available: true,
  },
  {
    icon: CurrencyDollarIcon,
    title: "Cash In/Out",
    description: "Connect to traditional payments privately.",
    available: false,
  },
  {
    icon: ArrowsRightLeftIcon,
    title: "Complex Payments",
    description: "Enable escrows, conditional transfers, and atomic swaps.",
    available: false,
  },
];

export const UseCases = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8E8E8] mb-3">
            What You Can Do
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              className="relative p-6 rounded-lg border border-[#4E535F] bg-[#1A1C22]/50 backdrop-blur-sm hover:bg-[#4E535F]/20 hover:border-[#00E0B0]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-[#00E0B0]/10 mb-4">
                  <useCase.icon className="h-6 w-6 text-[#00E0B0]" />
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-[#E8E8E8]">
                    {useCase.title}
                  </h3>
                  {!useCase.available && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[#4E535F] text-[#00E0B0]">
                      Soon
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#E8E8E8]/70 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
