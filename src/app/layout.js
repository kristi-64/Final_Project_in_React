import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/navbar/Footer";
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "My Next.js Store",
};
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <StoreProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
