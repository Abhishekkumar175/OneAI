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
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-xl bg-black/40 border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer text-xl font-bold tracking-wide"
        >
          <span className="bg-linear-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            OneAI
          </span>
        </div>

        {/* NAV LINKS (ONLY WHEN LOGGED OUT) */}
        {!user && (
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {["Home", "Features", "Pricing"].map((item) => (
              <a
                key={item}
                href="#"
                className="relative group hover:text-white transition"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-purple-400 to-indigo-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>
        )}

        {/* AUTH ACTION */}
        <div className="hidden md:flex items-center gap-4">
          {!isLoaded ? null : user ? (
            /* LOGGED IN → ONLY AVATAR */
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9",
                },
              }}
            />
          ) : (
            /* LOGGED OUT → SIGN IN */
            <button
              onClick={() =>
                openSignIn({
                  afterSignInUrl: "/ai",
                  afterSignUpUrl: "/ai",
                })
              }
              className="px-5 py-2 rounded-full bg-linear-to-r from-purple-600 to-indigo-600 hover:scale-105 transition shadow-md"
            >
              Sign In
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        <MobileMenu />
      </div>
    </motion.nav>
  );
}
