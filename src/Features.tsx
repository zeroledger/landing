import { motion } from "framer-motion";
import {
  ShieldCheckIcon,
  BoltIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

export const Features = () => {
  return (
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
              Transaction amounts privacy powered by zk-SNARKs.
            </p>
          </li>

          <li className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
            <BoltIcon className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Lightweight & Fast</h3>
            <p className="text-gray-300 leading-relaxed">
              Simple use-case specific zk-proofs generated on client side within
              1-2 seconds.
            </p>
          </li>

          <li className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
            <ArrowsRightLeftIcon className="h-10 w-10 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Programmable</h3>
            <p className="text-gray-300 leading-relaxed">
              Native meta-transactions enable complex use cases like escrows,
              batch operations, and custom payment flows.
            </p>
          </li>
        </ul>
      </main>
    </motion.section>
  );
};
