import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";

export default function ToolCard({ tool }) {
  const { pos, update } = useMousePosition();

  return (
    <motion.div
      onMouseMove={update}
      whileHover={{ y: -10 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="group relative rounded-2xl p-px"
    >
      {/* 🔥 CURSOR FOLLOW GLOW */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(
            300px circle at ${pos.x}% ${pos.y}%,
            rgba(139,92,246,0.45),
            transparent 60%
          )`,
        }}
      />

      {/* CARD BODY */}
      <div className="relative rounded-2xl p-6 backdrop-blur-xl bg-white/5 border border-white/10 group-hover:border-transparent transition">
        <tool.icon className="w-8 h-8 text-purple-400 mb-4" />
        <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
        <p className="text-gray-400 text-sm">{tool.desc}</p>
      </div>
    </motion.div>
  );
}
