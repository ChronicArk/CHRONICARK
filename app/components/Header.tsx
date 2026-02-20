"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { cart } = useCart();

  return (
    <header className="flex justify-between items-center p-6 bg-black text-white">
      <div className="text-2xl font-bold">My Store</div>

      <nav className="flex gap-6 items-center">
        <Link href="/">Home</Link>
        <Link href="/store">Store</Link>
        <Link href="/buy-coins">Buy Coins</Link>

        <Link
          href="/cart"
          className="relative bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition"
        >
          Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-white text-black text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
