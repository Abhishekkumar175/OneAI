"use client";

import { useState } from "react";
import { FileText } from "lucide-react";

export default function ResumeUploadCard({ setResult, loading, setLoading }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    if (!file) return;

    setLoading(true);
    setResult(null);

    // 🔴 TEMP MOCK API (replace with backend / API)
    setTimeout(() => {
      setResult("✅ Resume reviewed successfully.");
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="bg-[#020617] rounded-xl min-h-full border border-white/10 p-6">
      <h2 className="flex items-center gap-2 text-lg font-semibold">
        ✨ Resume Review
      </h2>

      <div className="mt-4">
        <label className="text-sm font-medium">Upload Resume</label>
        <input
          type="file"
          accept="application/pdf"
          className="mt-2 w-full border rounded-md p-2"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <p className="text-xs text-gray-500 mt-1">
          Supports PDF resume only.
        </p>
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-6 w-full flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-green-400 to-teal-500 px-4 py-3 text-white font-medium disabled:opacity-60"
      >
        <FileText size={18} />
        {loading ? "Reviewing..." : "Review Resume"}
      </button>
    </div>
  );
}
