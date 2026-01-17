import { Outlet } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar";
import TopNavbar from "./dashboard/TopNavbar";

export default function AILayout() {
  return (
    <div className="h-screen flex bg-[#020617]">
      {/* Sidebar */}
      <Sidebar />

      {/* Right Section */}
      <div className="flex flex-col flex-1">
        {/* Top Navbar (FIXED HEIGHT) */}
        <TopNavbar />

        {/* Scrollable Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
