import Link from "next/link";

export default async function Home() {
  try {
    const res = await fetch(
      "https://fakestoreapi.com/products",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await res.json();

    return (
      <div className="product-grid">
        {products.slice(0, 5).map((product) => (
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
  } catch (error) {
    return (
      <div>
        <h1>Error loading products</h1>
        <p>{error.message}</p>
      </div>
    );
  }
}