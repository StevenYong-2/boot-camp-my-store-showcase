import ProductCard from "./components/ProductCard";

async function getProducts() {
  const res = await fetch(
    "https://fakestoreapi.com/products?limit=5",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Product Showcase
      </h1>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}