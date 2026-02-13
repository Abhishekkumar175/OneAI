import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-linear-to-b from-black/60 to-black/40 py-24 px-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-violet-500/60 to-transparent z-10" />
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl p-16">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">

            {/* Brand */}
            <div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">
                Promptix<span className="text-violet-400">.ai</span>
              </h3>

              <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                An all-in-one AI platform designed to help creators,
                developers, and professionals generate smarter content,
                automate workflows, and move faster.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm tracking-widest text-gray-400 mb-6">
                NAVIGATION
              </h4>

              <ul className="space-y-4 text-gray-300 text-sm">
                <li>
                  <motion.button
                    onClick={() => handleScroll("hero")}
                    whileHover={{ x: 6 }}
                    className="hover:text-white transition"
                  >
                    Home
                  </motion.button>
                </li>

                <li>
                  <motion.button
                    onClick={() => handleScroll("tools")}
                    whileHover={{ x: 6 }}
                    className="hover:text-white transition"
                  >
                    AI Tools
                  </motion.button>
                </li>

                <li>
                  <motion.button
                    onClick={() => handleScroll("pricing")}
                    whileHover={{ x: 6 }}
                    className="hover:text-white transition"
                  >
                    Pricing
                  </motion.button>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-sm tracking-widest text-gray-400 mb-6">
                LET'S CONNECT
              </h4>

              <div className="flex items-center gap-6">
                <SocialIcon icon={Github} />
                <SocialIcon icon={Mail} />
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Promptix.ai. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------- Social Button -------- */

function SocialIcon({ icon: Icon }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="p-4 rounded-xl border border-white/10 bg-white/2 hover:border-violet-400/50 hover:bg-white/5 transition"
    >
      <Icon className="w-5 h-5 text-gray-300" />
    </motion.a>
  );
}
