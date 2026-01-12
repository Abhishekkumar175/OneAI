import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setOpen(true)}>
        <div className="space-y-1">
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
          <span className="block w-6 h-0.5 bg-white" />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-lg"
          >
            <motion.div
              initial={{ y: -50 }}
              animate={{ y: 0 }}
              exit={{ y: -50 }}
              transition={{ duration: 0.3 }}
              className="p-6 space-y-6"
            >
              <button onClick={() => setOpen(false)} className="text-white">
                ✕
              </button>

              {["Features", "Tools", "Pricing", "Docs"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-xl text-gray-300 hover:text-white transition"
                >
                  {item}
                </a>
              ))}

              <button className="w-full py-3 rounded-full bg-linear-to-r from-purple-600 to-indigo-600">
                Sign In
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
