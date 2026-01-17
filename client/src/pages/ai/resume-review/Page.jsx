"use client";

import { useState } from "react";
import ResumeUploadCard from "../ResumeUploadCard";
import ResumeResultCard from "../ResumeResultCard";

export default function ResumeReviewPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-6 gap-6">
      <ResumeUploadCard
        setResult={setResult}
        loading={loading}
        setLoading={setLoading}
      />

      <ResumeResultCard
        result={result}
        loading={loading}
      />
    </div>
  );
}
