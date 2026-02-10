import { motion } from "framer-motion";
import { TelegramIcon } from "./TelegramIcon";
import { XIcon } from "./XIcon";

export const Footer = () => {
  return (
    <footer className="relative py-6 sm:py-8">
      <motion.nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ul className="flex flex-col items-center space-y-4 sm:space-y-6">
          <li className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href="https://t.me/+fCgwViQAehY0NTEy"
              target="_blank"
              className="inline-flex items-center text-[#E8E8E8]/70 hover:text-[#00E0B0] transition-colors duration-200 p-2"
            >
              <TelegramIcon className="h-6 w-6 sm:h-7 sm:w-7" />
            </a>
            <a
              href="https://x.com/zeroledgerxyz"
              target="_blank"
              className="inline-flex items-center text-[#E8E8E8]/70 hover:text-[#00E0B0] transition-colors duration-200 p-2"
            >
              <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </li>
          <li className="text-[#E8E8E8]/60 text-xs sm:text-sm text-center px-4">
            &copy; {new Date().getFullYear()} Zeroledger. All rights reserved.
          </li>
        </ul>
      </motion.nav>
    </footer>
  );
};
