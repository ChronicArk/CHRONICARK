"use client";
import { useRouter } from "next/navigation";


import { useCart } from "../context/CartContext";

type BuyButtonProps = {
  itemName: string;
  price: string;
};

export default function BuyButton({ itemName, price }: BuyButtonProps) {
  const { addToCart } = useCart();

  const handleClick = () => {
    const numericPrice = Number(price.replace(/[^0-9.]/g, ""));
    addToCart({ name: itemName, price: numericPrice });
    alert(`${itemName} added to cart`);
  };

  return (
    <button
      onClick={handleClick}
      className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition duration-300"
    >
      Add to Cart
    </button>
  );
}
