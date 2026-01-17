import { useState } from "react";
import { Sparkles, Hash } from "lucide-react";

const categories = [
  "General",
  "Technology",
  "Business",
  "Health",
  "Lifestyle",
  "Education",
  "Travel",
  "Food",
];

export default function BlogTitles() {
  const [keyword, setKeyword] = useState("");
  const [activeCategory, setActiveCategory] = useState("General");
  const [titles, setTitles] = useState([]);

  const handleGenerate = () => {
    if (!keyword.trim()) return;

    // TEMP mock titles (later API se replace kar dena)
    setTitles([
      `${keyword}: A Complete Guide`,
      `Top 10 Things to Know About ${keyword}`,
      `Why ${keyword} Matters in ${activeCategory}`,
      `The Future of ${keyword}`,
      `${keyword} Explained for Beginners`,
    ]);
  };

  return (
    <div className="p-6 bg-[#020617]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-violet-400" size={20} />
            <h2 className="text-lg font-semibold text-white">
              AI Blog Title Generator
            </h2>
          </div>

          {/* Keyword */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">
              Keyword
            </label>
            <input
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="The future of artificial intelligence..."
              className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600"
            />
          </div>

          {/* Category */}
          <div className="mb-8">
            <label className="block text-sm text-gray-400 mb-3">
              Category
            </label>

            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm border transition
                    ${
                      activeCategory === cat
                        ? "bg-violet-600 text-white border-violet-600"
                        : "border-white/10 text-gray-400 hover:bg-white/5"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <button
            onClick={handleGenerate}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg
              bg-linear-to-r from-violet-600 to-indigo-600
              text-white font-medium hover:opacity-90 transition"
          >
            <Hash size={18} />
            Generate title
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Hash className="text-violet-400" size={18} />
            <h3 className="text-white font-medium">Generated titles</h3>
          </div>

          {titles.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center text-gray-400">
              <Hash size={40} className="mb-3 opacity-40" />
              <p className="text-sm">
                Enter a topic and click{" "}
                <span className="text-violet-400 font-medium">
                  “Generate title”
                </span>{" "}
                to get started
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {titles.map((title, i) => (
                <li
                  key={i}
                  className="p-3 rounded-lg bg-[#020617] border border-white/10 text-sm text-white hover:border-violet-500 transition cursor-pointer"
                >
                  {title}
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}
