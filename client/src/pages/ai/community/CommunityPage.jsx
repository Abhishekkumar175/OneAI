import { useState } from "react";
import CommunityImageCard from "./CommunityImageCard";

export default function CommunityPage() {
  const [images, setImages] = useState([
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1549692520-acc6669e2f0c",
      prompt: "A futuristic city at night",
      createdBy: "Abhishek",
      likes: 12,
      liked: false,
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      prompt: "Cyberpunk character portrait",
      createdBy: "Rohit",
      likes: 28,
      liked: true,
    },
  ]);

  const toggleLike = (id) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id === id
          ? {
              ...img,
              liked: !img.liked,
              likes: img.liked ? img.likes - 1 : img.likes + 1,
            }
          : img
      )
    );
  };

  return (
    <div className="p-6 bg-[#020617] min-h-screen">
      <h1 className="text-2xl font-semibold mb-6">Community Creations</h1>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((img) => (
          <CommunityImageCard
            key={img.id}
            image={img}
            onLike={toggleLike}
          />
        ))}
      </div>
    </div>
  );
}
