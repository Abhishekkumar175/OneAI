import { motion } from "framer-motion";
import ToolCard from "./ToolCard";

import {
  MessageSquare,
  FileText,
  PenTool,
  Image,
  Scissors,
  Share2,
} from "lucide-react";

const tools = [
  {
    title: "AI Chat Assistant",
    desc: "ChatGPT-powered conversations for instant answers and creative ideas",
    icon: MessageSquare,
  },
  {
    title: "Resume Analyzer",
    desc: "Get ATS scores, skill analysis, and improvement suggestions",
    icon: FileText,
  },
  {
    title: "Blog & Content Writer",
    desc: "Generate professional blogs and articles in seconds",
    icon: PenTool,
  },
  {
    title: "Image Generator",
    desc: "Create stunning images from text descriptions",
    icon: Image,
  },
  {
    title: "Background Remover",
    desc: "Remove backgrounds from images instantly",
    icon: Scissors,
  },
  {
    title: "Content Creator",
    desc: "Generate engaging social media content",
    icon: Share2,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function ToolsSection() {
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-3">
            Powerful <span className="text-purple-400">AI Tools</span>
          </h2>
          <p className="text-gray-400">
            Everything you need to supercharge your workflow
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {tools.map((tool, i) => (
            <ToolCard key={i} tool={tool} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
