import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";

export const metadata = {
  title: "My Next.js Store",
};
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
