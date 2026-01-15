import { motion } from "framer-motion";
import { useMousePosition } from "../hooks/useMousePosition";
import {
  GraduationCap,
  Briefcase,
  Laptop,
  PenTool,
  Rocket,
} from "lucide-react";

const audiences = [
  { title: "Students", desc: "Research & assignments", icon: GraduationCap },
  { title: "Job Seekers", desc: "Resume optimization", icon: Briefcase },
  { title: "Developers", desc: "Docs & code assistance", icon: Laptop },
  { title: "Creators", desc: "Social media & blogs", icon: PenTool },
  { title: "Startups", desc: "Marketing & growth", icon: Rocket },
];

export default function PerfectForEveryone() {
  return (
    <section className="py-20 bg-black/10 overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Designed for <span className="text-purple-400">Everyone</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            One AI platform, many use-cases
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-5">
          {audiences.map((item, i) => (
            <AudienceCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AudienceCard({ item }) {
  const { pos, update } = useMousePosition();

  return (
    
    <motion.div
      onMouseMove={update}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="relative group rounded-xl"
    >
      {/* Cursor Light */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300"
        style={{
          background: `radial-gradient(
            220px circle at ${pos.x}% ${pos.y}%,
            rgba(139,92,246,0.45),
            transparent 60%
          )`,
        }}
      />

      {/* Card */}
      <div className="relative h-full rounded-xl border border-white/10
        bg-white/2 px-5 py-7 text-center backdrop-blur-md">
        
        <item.icon className="mx-auto w-6 h-6 text-white/80 mb-4" />

        <h3 className="text-sm font-medium">
          {item.title}
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}
