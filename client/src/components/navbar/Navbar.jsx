import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const { user, isLoaded } = useUser();
  const { openSignIn } = useClerk();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 w-full z-50 px-6"
    >
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-2 rounded-full transition-all duration-300
        ${
          scrolled
            ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            : "bg-white/3 backdrop-blur-md border border-white/5"
        }`}
      >
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl font-semibold tracking-tight"
        >
          <span className="bg-linear-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            Promptix.ai
          </span>
        </div>

        {/* CENTER NAV (Only when logged out) */}
        {!user && (
          <div className="hidden md:flex items-center gap-10 text-sm text-gray-300">
            {[
              { label: "Home", id: "hero" },
              { label: "AI Tools", id: "tools" },
              { label: "Pricing", id: "pricing" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() =>
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative group transition"
              >
                <span className="group-hover:text-white transition">
                  {item.label}
                </span>

                {/* Animated Underline */}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-linear-to-r from-violet-500 to-indigo-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>
        )}

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoaded ? null : user ? (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox:
                    "w-9 h-9 ring-2 ring-violet-500/40 hover:ring-violet-500 transition",
                },
              }}
            />
          ) : (
            <button
              onClick={() =>
                openSignIn({
                  afterSignInUrl: "/ai",
                  afterSignUpUrl: "/ai",
                })
              }
              className="px-6 py-2 rounded-full bg-linear-to-r from-violet-600 to-indigo-600 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
            >
              Sign In
            </button>
          )}
        </div>

        {/* MOBILE */}
        <MobileMenu />
      </div>
    </motion.nav>
  );
}
