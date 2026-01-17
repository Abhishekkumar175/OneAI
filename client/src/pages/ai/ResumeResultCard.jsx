"use client";

import { FileText } from "lucide-react";

export default function ResumeResultCard({ result, loading }) {
  return (
    <div className="bg-[#020617]  rounded-xl border border-white/10 p-6 min-h-80">
      <h2 className="flex items-center gap-2 text-lg font-semibold">
        📄 Analysis Results
      </h2>

      <div className="mt-6 text-sm text-gray-700 whitespace-pre-wrap">
        {!result && !loading && (
          <div className="flex flex-col items-center justify-center text-gray-400 mt-20">
            <FileText size={40} />
            <p className="mt-2 text-center">
              Upload a resume and click <b>Review Resume</b> to get started
            </p>
          </div>
        )}

        {loading && <p>Analyzing resume...</p>}

        {result && (
          <div className="space-y-4">
            {result}
          </div>
        )}
      </div>
    </div>
  );
}
