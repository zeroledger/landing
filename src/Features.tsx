import { motion } from "framer-motion";
import {
  LockClosedIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  Cog6ToothIcon,
  BoltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: CheckCircleIcon,
    title: "Traceable but private",
    description:
      "No KYC needed. Addresses visible for traceability, decoys hide value flows.",
  },
  {
    icon: LockClosedIcon,
    title: "Secured with ZK",
    description:
      "Zero-knowledge proofs keep transaction amounts private and prevent double-spending.",
  },
  {
    icon: BoltIcon,
    title: "Instant & affordable",
    description:
      "Settle in 2-3 seconds for a fraction of a penny. Earn yield on your balance.",
  },
  {
    icon: DocumentTextIcon,
    title: "Auditable",
    description:
      "Share particular transaction details when needed without revealing anything else.",
  },
  {
    icon: Cog6ToothIcon,
    title: "Programmable",
    description:
      "Works with any EVM wallet including multisigs. Build with hash time locks and escrows.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Future-proof",
    description:
      "Quantum-resistant encryption protects your payments long-term.",
  },
];

export const Features = () => {
  return (
    <section className="relative pt-6 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#E8E8E8] mb-3">
            Why ZeroLedger
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="relative p-6 rounded-lg border border-[#4E535F] bg-[#1A1C22]/50 backdrop-blur-sm hover:border-[#00E0B0]/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon className="h-6 w-6 text-[#00E0B0]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#E8E8E8] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#E8E8E8]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
