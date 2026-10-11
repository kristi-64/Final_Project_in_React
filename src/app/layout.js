import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import navbar from "@/components/navbar/Navbar";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
