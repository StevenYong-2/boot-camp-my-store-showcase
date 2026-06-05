"use client";

import { use } from "react";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const { slug } = use(params);

  const [product, setProduct] = useState(null);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${slug}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [slug]);

  if (!product) return <p className="container">Loading...</p>;

  return (
    <div className="container">
      <div className="product-detail">
        <h1>{product.title}</h1>

        <img src={product.image} alt={product.title} />

        <p>{product.description}</p>

        <h2>${product.price}</h2>

        <button onClick={() => setFavorite(!favorite)}>
          {favorite ? "❤️ Favorited" : "🤍 Add to Favorite"}
        </button>
      </div>
    </div>
  );
}