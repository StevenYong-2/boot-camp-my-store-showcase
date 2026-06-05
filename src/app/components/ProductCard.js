import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="card">
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
  );
}