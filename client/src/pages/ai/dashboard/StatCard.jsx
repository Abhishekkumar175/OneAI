export default function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-[#121826] border border-white/10 rounded-xl p-6 flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-2xl font-semibold text-white mt-1">
          {value}
        </p>
      </div>
      <div
        className={`h-12 w-12 rounded-lg flex items-center justify-center ${color}`}
      >
        {icon}
      </div>
    </div>
  );
}
