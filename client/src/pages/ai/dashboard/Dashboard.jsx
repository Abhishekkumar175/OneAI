import StatCard from "./StatCard";
import RecentCreations from "./RecentCreations";
import { Sparkles, Gem } from "lucide-react";
import { Protect } from "@clerk/clerk-react";

export default function Dashboard() {
  return (
    <div className="h-full w-full bg-[#020617] text-white flex flex-col">
      

      <div className="flex flex-1 overflow-hidden">
        

        {/* MAIN CONTENT */}
        <main className="flex-1 p-8 overflow-y-auto bg-[#0E1324]">
          
          {/* STATS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            <StatCard
              title="Total Creations"
              value="0"
              icon={<Sparkles className="text-white" />}
              color="bg-blue-600"
            />
            <StatCard
              title="Active Plan"
              value={<Protect plan="premium" fallback="Free">Premium </Protect>}
              icon={<Gem className="text-white" />}
              color="bg-pink-600"
            />
          </div>

          <RecentCreations />
        </main>
      </div>
    </div>
  );
}
