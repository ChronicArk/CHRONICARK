"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();


const handleCheckout = async () => {
  if (cart.length === 0) return;

  const res = await fetch("/api/checkout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ cart }),
  });

  const data = await res.json();

  if (data.url) {
    window.location.href = data.url;
  } else {
    alert("Checkout failed");
  }
};
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center mb-4 border-b pb-2"
            >
              <div>
                {item.name} - ${item.price}
              </div>
             <button
  onClick={handleCheckout}
  className="bg-green-600 text-white px-4 py-2 mt-4"
>
  Checkout
</button>
              <button
                onClick={() => removeFromCart(index)}
                className="bg-red-600 px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}

          <button
            onClick={clearCart}
            className="mt-6 bg-gray-700 px-4 py-2 rounded"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}
