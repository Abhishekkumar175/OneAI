import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    desc: "Create your free account",
  },
  {
    number: "02",
    title: "Choose Tool",
    desc: "Select the AI tool you need",
  },
  {
    number: "03",
    title: "Generate",
    desc: "Get instant results",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-20 bg-black/10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto  px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold mb-3">How It Works</h2>
          <p className="text-gray-400">
            Get started in three simple steps
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12 items-center"
        >
          {steps.map((step, i) => (
            <div key={i} className="relative flex items-center justify-center">
              <motion.div
                variants={item}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="group text-center"
              >
                {/* Step Circle */}
                <div className="relative mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-indigo-500 text-white font-bold mb-6">
                  {step.number}

                  {/* Pulse */}
                  <div className="absolute inset-0 rounded-full bg-purple-500 opacity-40 blur-xl animate-pulse" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </motion.div>

              {/* Arrow */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="hidden md:block absolute -right-8 text-purple-400"
                >
                  <ChevronRight size={28} />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
