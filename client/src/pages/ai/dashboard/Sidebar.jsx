import { NavLink } from "react-router-dom";
import { usePlan } from "../../../hooks/usePlan";
import {
  LayoutDashboard,
  PenLine,
  Image,
  Scissors,
  Eraser,
  FileText,
  Users,
  Hash,
  MoreVertical,
  MessageCircle,
} from "lucide-react";
import { UserButton, useUser } from "@clerk/clerk-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/ai" },
  { name: "Chat", icon: MessageCircle, path: "/ai/chat" },
  { name: "Write Article", icon: PenLine, path: "/ai/article" },
  { name: "Blog Titles", icon: Hash, path: "/ai/blog" },
  { name: "Generate Images", icon: Image, path: "/ai/image" },
  { name: "Remove Background", icon: Eraser, path: "/ai/remove-bg" },
  { name: "Remove Object", icon: Scissors, path: "/ai/remove-object" },
  { name: "Review Resume", icon: FileText, path: "/ai/review" },
  { name: "Community", icon: Users, path: "/ai/community" },
];

export default function Sidebar() {
  const { user } = useUser();
  const { plan } = usePlan(); 
  

  return (
    <aside className="w-64 h-full bg-[#020617] border-r border-white/10 flex flex-col">

      {/* 🔝 TOP USER PROFILE */}
      <div className="flex flex-col items-center py-4 border-b border-white/10 shrink-0">
        <img
          src={user?.imageUrl}
          alt="profile"
          className="w-16 h-16 rounded-full mb-3"
        />
        <h3 className="text-sm font-semibold text-white text-center truncate px-4">
          {user?.fullName}
        </h3>
      </div>

      {/* 🧭 MENU */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menu.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/ai"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition
              ${
                isActive
                  ? "bg-linear-to-r from-violet-600 to-indigo-600 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            <item.icon size={18} />
            {item.name}
          </NavLink>
        ))}
      </nav>

      {/* 🔻 BOTTOM USER BAR */}
      <div className="px-4 py-3 border-t border-white/10 flex items-center gap-3 shrink-0">

        {/* Center Info */}
        <div className="flex-1 leading-tight min-w-0">
          <p className="text-sm text-white font-medium truncate">
            {user?.fullName}
          </p>
          <p
            className={`text-xs ${
              plan === "free_user"
                ? "text-violet-400"
                : plan === "premium"
                ? "text-emerald-400"
                : "text-gray-400"
            }`}
          >
            {plan === "free_user" ? "Free Plan" : "Premium Plan"}
          </p>
        </div>

        {/* Right Icon → Clerk Menu */}
        <UserButton afterSignOutUrl="/">
          <button className="p-2 rounded-md hover:bg-white/10 transition">
            <MoreVertical size={18} className="text-gray-300" />
          </button>
        </UserButton>
      </div>
    </aside>
  );
}
