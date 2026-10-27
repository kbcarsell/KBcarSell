import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KBcarSell | Buy & Sell Cars Across the UK",
  description: "A simpler way to buy and sell cars across the UK. List your car with a 7-day free trial, then £4.99 for 30 days.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
