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
  {
    name: "Team",
    price: "₹1,499",
    desc: "For startups & teams",
    features: [
      "Team collaboration",
      "Shared workspaces",
      "Admin controls",
      "Dedicated support",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-28 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Simple pricing
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Choose a plan that scales with you
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <PricingCard key={i} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingCard({ plan }) {
  const { pos, update } = useMousePosition();

  return (
    <motion.div
      onMouseMove={update}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`relative group rounded-xl ${
        plan.popular ? "md:scale-[1.02]" : ""
      }`}
    >
      {/* Cursor Light */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(
            260px circle at ${pos.x}% ${pos.y}%,
            rgba(255,255,255,0.08),
            transparent 60%
          )`,
        }}
      />

      {/* Card */}
      <div
        className={`relative h-full rounded-xl border px-7 py-9 backdrop-blur-md
        ${
          plan.popular
            ? "border-white/20 bg-white/4"
            : "border-white/10 bg-white/2"
        }`}
      >
        {plan.popular && (
          <span className="absolute top-4 right-4 text-xs text-white/70">
            Recommended
          </span>
        )}

        <h3 className="text-lg font-medium mb-1">{plan.name}</h3>
        <p className="text-sm text-gray-400 mb-6">{plan.desc}</p>

        <div className="mb-6">
          <span className="text-3xl font-semibold">{plan.price}</span>
          <span className="text-gray-400 text-sm"> / month</span>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-gray-300"
            >
              <Check className="w-4 h-4 text-white/70" />
              {feature}
            </li>
          ))}
        </ul>

        <button
          className={`w-full py-2.5 rounded-lg text-sm transition
          ${
            plan.popular
              ? "bg-white text-black hover:bg-gray-200"
              : "border border-white/20 hover:bg-white/10"
          }`}
        >
          Get started
        </button>
      </div>
    </motion.div>
  );
}
