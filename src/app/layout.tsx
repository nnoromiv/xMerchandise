import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { CartProvider } from "../../components/CartProvider";

const poppins = Poppins({subsets : ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]})

export const metadata: Metadata = {
  title: "X-Merchandise | E-commerce",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <CartProvider>
        <body className={poppins.className}>{children}</body>
      </CartProvider>
    </html>
  );
}
