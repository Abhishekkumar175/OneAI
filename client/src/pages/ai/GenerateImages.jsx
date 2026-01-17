import { useState } from "react";
import { Image as ImageIcon, Sparkles } from "lucide-react";

const STYLES = [
  "Realistic",
  "Ghibli style",
  "Anime style",
  "Cartoon style",
  "Fantasy style",
  "3D style",
  "Portrait style",
];

export default function GenerateImages() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState("Realistic");
  const [isPublic, setIsPublic] = useState(false);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleGenerate = async () => {
    if (!prompt) return;

    setLoading(true);
    setImageUrl("");

    // 🔴 TEMP MOCK (replace with API later)
    setTimeout(() => {
      setImageUrl(
        "https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
      );
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="p-6 bg-[#020617] min-h-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* LEFT CARD */}
        <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6">
          {/* Header */}
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="text-emerald-400" size={20} />
            <h2 className="text-lg font-semibold text-white">
              AI Image Generator
            </h2>
          </div>

          {/* Prompt */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">
              Describe your image
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              rows={4}
              placeholder="Describe what you want to see in the image..."
              className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-600 resize-none"
            />
          </div>

          {/* Styles */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-3">
              Style
            </label>
            <div className="flex flex-wrap gap-3">
              {STYLES.map((item) => (
                <button
                  key={item}
                  onClick={() => setStyle(item)}
                  className={`px-4 py-2 rounded-full text-sm border transition
                    ${
                      style === item
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "border-white/10 text-gray-400 hover:bg-white/5"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Public Toggle */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-sm text-gray-400">
              Make this image public
            </span>

            <button
              onClick={() => setIsPublic(!isPublic)}
              className={`w-11 h-6 rounded-full relative transition
                ${isPublic ? "bg-emerald-600" : "bg-gray-600"}
              `}
            >
              <span
                className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition
                  ${isPublic ? "translate-x-5" : ""}
                `}
              />
            </button>
          </div>

          {/* CTA */}
          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg
              bg-linear-to-r from-emerald-600 to-green-500
              text-white font-medium hover:opacity-90 transition disabled:opacity-50"
          >
            <ImageIcon size={18} />
            {loading ? "Generating..." : "Generate Image"}
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          {loading ? (
            <>
              <div className="w-12 h-12 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin mb-4" />
              <p className="text-sm text-gray-400">
                Generating your image...
              </p>
            </>
          ) : imageUrl ? (
            <>
              <img
                src={imageUrl}
                alt="Generated"
                className="rounded-lg max-h-105 object-cover mb-4"
              />
              <p className="text-sm text-gray-400">
                Style:{" "}
                <span className="text-emerald-400 font-medium">
                  {style}
                </span>
              </p>
            </>
          ) : (
            <>
              <ImageIcon size={42} className="text-gray-500 mb-4" />
              <h3 className="text-white font-medium mb-1">
                Generated Image
              </h3>
              <p className="text-sm text-gray-400 max-w-sm">
                Enter a description and click{" "}
                <span className="text-emerald-400 font-medium">
                  “Generate Image”
                </span>{" "}
                to get started
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  );
}
