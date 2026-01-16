import { motion } from "framer-motion";
import { PricingTable } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";

export default function Pricing() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* 🌌 Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-violet-500/10 via-transparent to-transparent" />
        <div className="absolute left-1/2 top-1/2 w-130 h-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/20 blur-[140px]" />
      </div>

      {/* Top Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple &{" "}
            <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Transparent Pricing
            </span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Start free, upgrade anytime. Billing is handled securely by Clerk.
          </p>
        </motion.div>

        {/* 💳 Clerk Pricing Table */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-6 md:p-10"
        >
          <PricingTable
            appearance={{
              baseTheme: dark,
              variables: {
                colorPrimary: "#8b5cf6", // violet-500
                colorBackground: "transparent",
                colorText: "#e5e7eb",
                colorTextSecondary: "#9ca3af",
                borderRadius: "14px",
              },
              elements: {
                rootBox: "bg-transparent",
                planCard:
                  "bg-white/5 border border-white/10 backdrop-blur-xl hover:border-violet-500/40 transition",
                planTitle: "text-lg font-semibold",
                planPrice: "text-4xl font-bold",
                planInterval: "text-gray-400",
                planFeature: "text-gray-300",
                planButton:
                  "bg-linear-to-r from-purple-600 to-indigo-600  text-white rounded-xl hover:opacity-90 transition",
                switch: "bg-white/10",
              },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
