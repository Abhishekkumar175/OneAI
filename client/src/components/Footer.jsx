import { motion } from "framer-motion";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-xl">
      {/* Glow Line */}
      <div className="absolute inset-x-0 -top-px h-px bg-linear-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Top */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold tracking-tight mb-3">
              AI Platform
            </h3>
            <p className="text-sm text-gray-400 max-w-md">
              Build faster with powerful AI tools. Chat, generate content,
              analyze data, and automate workflows — all in one dashboard.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-6">
              <SocialIcon icon={Github} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Linkedin} />
              <SocialIcon icon={Mail} />
            </div>
          </div>

          {/* Links */}
          <FooterColumn
            title="Product"
            links={["Features", "Pricing"]}
          />

          <FooterColumn
            title="Company"
            links={["About", "Careers", "Contact"]}
          />
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} AI Platform. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-400">
            <FooterLink label="Privacy Policy" />
            <FooterLink label="Terms of Service" />
            <FooterLink label="Security" />
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Sub Components ---------------- */

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="text-sm font-medium mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link}>
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
              className="group flex items-center gap-1 text-sm text-gray-400 hover:text-white"
            >
              {link}
              <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition" />
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLink({ label }) {
  return (
    <a
      href="#"
      className="hover:text-white transition"
    >
      {label}
    </a>
  );
}

function SocialIcon({ icon: Icon }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="p-2 rounded-full border border-white/10 hover:border-violet-400/50 hover:bg-white/5"
    >
      <Icon className="w-4 h-4 text-gray-300" />
    </motion.a>
  );
}
