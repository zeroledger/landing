import { motion } from "framer-motion";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export const Footer = () => {
  return (
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
            &copy; {new Date().getFullYear()} Zeroledger. All rights reserved.
          </li>
        </ul>
      </motion.nav>
    </footer>
  );
};
