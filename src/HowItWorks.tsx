import { motion } from "framer-motion";
import {
  ArrowDownTrayIcon,
  ArrowsRightLeftIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    icon: ArrowDownTrayIcon,
    title: "Deposit",
    description: "Convert public tokens into private ones.",
  },
  {
    icon: ArrowsRightLeftIcon,
    title: "Send",
    description: "Pay anyone privately with hidden amounts.",
  },
  {
    icon: ArrowUpTrayIcon,
    title: "Withdraw",
    description: "Convert back to public tokens anytime.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#4E535F]/10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8E8E8] mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-[#E8E8E8]/70 max-w-2xl mx-auto">
            Three simple steps to private payments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#00E0B0]/10 border border-[#00E0B0]/30 mb-4">
                  <step.icon className="h-8 w-8 text-[#00E0B0]" />
                </div>
                <div className="mb-2 text-sm font-semibold text-[#00E0B0]">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#E8E8E8] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[#E8E8E8]/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#00E0B0]/50 to-transparent -translate-x-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
