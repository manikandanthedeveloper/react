import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/componets/Header";

export const metadata: Metadata = {
  title: "Foodies App",
  description: "Discover, order, and enjoy delicious food anytime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
