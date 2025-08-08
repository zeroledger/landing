import { motion } from "framer-motion";
import faqData from "./faq.data.json";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

export const FAQ = () => {
  return (
    <motion.section
      id="faq"
      className="py-12 relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative transition-all duration-500 ease-in-out h-auto">
        <header className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Learn more about ZeroLedger's privacy-focused payment system and how
            it works.
          </p>
        </header>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Disclosure>
                {({ open }) => (
                  <div>
                    <DisclosureButton className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200 rounded-2xl group">
                      <h3 className="text-lg font-semibold text-white pr-4">
                        {faq.question}
                      </h3>
                      <ChevronDownIcon
                        className={clsx(
                          "h-5 w-5 text-gray-400 flex-shrink-0 transition-transform ease-in-out duration-200",
                          open ? "rotate-180 text-blue-500" : "",
                        )}
                      />
                    </DisclosureButton>
                    <div
                      className={clsx(
                        "transition-all duration-500 ease-in-out overflow-hidden",
                        open ? "max-h-120 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <div
                        className={clsx(
                          "px-6 py-4 text-gray-300 leading-relaxed grid grid-cols-1",
                        )}
                      >
                        {faq.answer.map((ph, index) => (
                          <p className={clsx("col-span-1")} key={index}>
                            {ph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Disclosure>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.section>
  );
};
