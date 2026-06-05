import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">My Store Showcase</div>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}