import { useState } from "react";
import { Scissors, Upload, Image as ImageIcon } from "lucide-react";

export default function RemoveObject() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [objectName, setObjectName] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult("");
  };

  const handleRemoveObject = async () => {
    if (!file || !objectName) return;

    setLoading(true);

    // 🔴 MOCK API (replace with backend)
    setTimeout(() => {
      setResult(preview); // demo only
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
            <Scissors className="text-violet-400" size={20} />
            <h2 className="text-lg font-semibold text-white">
              Object Removal
            </h2>
          </div>

          {/* Upload */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">
              Upload image
            </label>

            <label className="flex items-center justify-between w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-2 cursor-pointer hover:bg-white/5 transition">
              <span className="text-sm text-gray-400 truncate">
                {file ? file.name : "Choose file"}
              </span>
              <Upload size={18} className="text-gray-400" />
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* Object name */}
          <div className="mb-6">
            <label className="block text-sm text-gray-400 mb-2">
              Describe object name to remove
            </label>
            <textarea
              value={objectName}
              onChange={(e) => setObjectName(e.target.value)}
              placeholder="e.g. watch or spoon (single object only)"
              rows={3}
              className="w-full rounded-lg bg-[#020617] border border-white/10 px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-violet-600 resize-none"
            />
          </div>

          {/* Preview */}
          {preview && (
            <div className="mb-6">
              <p className="text-sm text-gray-400 mb-2">Preview</p>
              <img
                src={preview}
                alt="preview"
                className="rounded-lg max-h-48 object-contain border border-white/10"
              />
            </div>
          )}

          {/* CTA */}
          <button
            onClick={handleRemoveObject}
            disabled={loading || !file || !objectName}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg
              bg-linear-to-r from-blue-500 to-violet-600
              text-white font-medium hover:opacity-90 transition
              disabled:opacity-50"
          >
            <Scissors size={18} />
            {loading ? "Processing..." : "Remove object"}
          </button>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#0F172A] border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          {loading ? (
            <>
              <div className="w-12 h-12 border-4 border-violet-400/30 border-t-violet-400 rounded-full animate-spin mb-4" />
              <p className="text-sm text-gray-400">
                Removing object...
              </p>
            </>
          ) : result ? (
            <>
              <img
                src={result}
                alt="Processed"
                className="rounded-lg max-h-105 object-contain mb-4"
              />
              <button
                className="px-4 py-2 text-sm rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition"
              >
                Download image
              </button>
            </>
          ) : (
            <>
              <ImageIcon size={42} className="text-gray-500 mb-4" />
              <h3 className="text-white font-medium mb-1">
                Processed Image
              </h3>
              <p className="text-sm text-gray-400 max-w-sm">
                Upload an image and click{" "}
                <span className="text-violet-400 font-medium">
                  “Remove object”
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
