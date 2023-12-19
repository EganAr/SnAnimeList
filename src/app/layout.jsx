import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SnAnimeList",
  description: "Website for SnAnimeList",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-black via-neutral-800 to-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
