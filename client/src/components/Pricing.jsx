import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useMousePosition } from "../hooks/useMousePosition";

const plans = [
  {
    name: "Free",
    price: "₹0",
    desc: "For individuals getting started",
    features: [
      "Basic AI access",
      "Limited requests",
      "Community support",
    ],
  },
  {
    name: "Pro",
    price: "₹499",
    desc: "For professionals & developers",
    popular: true,
    features: [
      "Unlimited AI usage",
      "Faster responses",
      "Priority support",
      "Advanced tools",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="relative py-32">
      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Flexible <span className="text-violet-400">Pricing</span>
          </h2>
          <p className="text-gray-400 mt-4 text-base">
            Simple plans that grow with your workflow
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan, index }) {
  const { pos, update } = useMousePosition();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, duration: 0.6 }}
      onMouseMove={update}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Gradient Border (Pro only) */}
      {plan.popular && (
        <div className="absolute -inset-1px rounded-2xl bg-linear-to-r from-violet-500 via-indigo-500 to-cyan-400 opacity-70 blur-sm" />
      )}

      {/* Cursor-follow glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(
            280px circle at ${pos.x}% ${pos.y}%,
            rgba(139,92,246,0.45),
            transparent 60%
          )`,
        }}
      />

      {/* Card */}
      <div
        className={`relative h-full rounded-2xl p-8 backdrop-blur-xl border
        ${
          plan.popular
            ? "bg-white/8 border-white/20"
            : "bg-white/5 border-white/10"
        }`}
      >
        {plan.popular && (
          <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-violet-500/10 text-violet-300">
            Most Popular
          </span>
        )}

        <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
        <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

        {/* Price */}
        <div className="flex items-end gap-1 mb-8">
          <span className="text-4xl font-bold">{plan.price}</span>
          <span className="text-gray-400 text-sm mb-1">/month</span>
        </div>

        {/* Features */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="space-y-3 mb-10"
        >
          {plan.features.map((feature, i) => (
            <motion.li
              key={i}
              variants={{
                hidden: { opacity: 0, x: -10 },
                show: { opacity: 1, x: 0 },
              }}
              className="flex items-center gap-3 text-sm text-gray-300"
            >
              <Check className="w-4 h-4 text-violet-400" />
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA */}
        <button
          className={`w-full py-3 rounded-xl text-sm font-medium transition-all
          ${
            plan.popular
              ? "bg-linear-to-r from-violet-500 to-indigo-500 hover:opacity-90 shadow-lg"
              : "border border-white/20 hover:bg-white/10"
          }`}
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
}
