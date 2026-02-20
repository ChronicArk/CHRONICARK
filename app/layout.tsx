import Header from "./components/Header";
import { CartProvider } from "./context/CartContext";
import "./globals.css";

export const metadata = {
  title: "ChronicArk",
  description: "ChronicArk Gaming Community",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CartProvider>
          <Header />
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
