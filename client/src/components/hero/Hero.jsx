import { motion } from "framer-motion";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">

      {/* Background Effects */}
      <Particles />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#7c3aed_0%,transparent_60%)] opacity-20" />
     

      {/* Content */}
      <div className="relative z-30 text-center px-6 max-w-4xl">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold"
        >
          <span className="bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            All Your AI Tools
          </span>
          <br />
          One Powerful Platform.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-400 text-lg"
        >
          Chat, create content, analyze resumes, generate images,
          and more — powered by AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 hover:scale-105 transition shadow-lg">
            Get Started Free
          </button>
          <button className="px-8 py-4 rounded-full border border-white/20 hover:border-purple-400 transition">
            Explore Features
          </button>
        </motion.div>

      </div>
    </section>
  );
}
