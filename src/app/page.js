import Link from "next/link";

export default async function HomePage() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await res.json();

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="product-grid">
        {products.slice(0, 5).map((p) => (
          <div className="card" key={p.id}>
            <img
              src={p.image}
              alt={p.title}
              className="product-image"
            />

            <h3>{p.title}</h3>

            <p className="price">${p.price}</p>

            <Link href={`/products/${p.id}`}>
              <button className="detail-btn">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}