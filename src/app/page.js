"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const data = await res.json();

        setProducts(data.slice(0, 5));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading) {
    return <h2 style={{ padding: "20px" }}>Loading products...</h2>;
  }

  if (error) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>Error loading products</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />

          <h3>{product.title}</h3>

          <p className="price">${product.price}</p>

          <Link href={`/products/${product.id}`}>
            <button className="detail-btn">
              View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}