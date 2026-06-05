"use client";

import { useEffect, useState } from "react";

export default function FavoriteButton() {
  const [favorite, setFavorite] =
    useState(false);

  useEffect(() => {
    const saved =
      localStorage.getItem(
        "favorite"
      );

    if (saved === "true") {
      setFavorite(true);
    }
  }, []);

  const handleFavorite = () => {
    const newValue = !favorite;

    setFavorite(newValue);

    localStorage.setItem(
      "favorite",
      newValue
    );
  };

  return (
    <button
      className="favorite-btn"
      onClick={handleFavorite}
    >
      {favorite
        ? "❤️ Added to Favorite"
        : "🤍 Add to Favorite"}
    </button>
  );
}