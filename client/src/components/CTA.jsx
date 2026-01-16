import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden">
        
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-1/2 w-125 h-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[120px]" />
      </div>
    
      <div className="max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-sm text-gray-300">
            Ready to get started?
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-semibold tracking-tight mb-6"
        >
          Build Faster with
          <span className="block bg-linear-to-r from-violet-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Powerful AI Tools
          </span>
        </motion.h2>

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="max-w-2xl mx-auto text-gray-400 mb-12"
        >
          Join thousands of developers and teams using AI to automate work,
          generate content, and build products faster than ever.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 hover:scale-105 transition shadow-xl">
            Get Started Free
          </button>

          <button className="px-8 py-4 rounded-full border border-white/20 hover:border-violet-400 transition">
            Book a Demo
          </button>
        </motion.div>
      </div>
    </section>
  );
}
