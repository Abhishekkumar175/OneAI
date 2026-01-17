import { Heart } from "lucide-react";

export default function CommunityImageCard({ image, onLike }) {
  return (
    <div className="bg-[#020617] rounded-xl shadow-sm hover:shadow-lg transition overflow-hidden group">
      {/* Image */}
      <div className="relative">
        <img
          src={image.imageUrl}
          alt={image.prompt}
          className="w-full h-56 object-cover"
        />

        {/* Like Button */}
        <button
          onClick={() => onLike(image.id)}
          className="absolute top-3 right-3 bg-white/90 p-2 rounded-full shadow"
        >
          <Heart
            size={20}
            className={
              image.liked
                ? "fill-red-500 text-red-500"
                : "text-gray-600"
            }
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <p className="text-sm text-gray-700 line-clamp-2">
          {image.prompt}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>By {image.createdBy}</span>
          <span>{image.likes} ❤️</span>
        </div>
      </div>
    </div>
  );
}
