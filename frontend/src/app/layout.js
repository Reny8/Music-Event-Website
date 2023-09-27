import Header from "@/components/Header";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.css";
export const metadata = {
  title: "Music Events",
  description: "Find the latest DJ and other musical events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
        </body>
    </html>
  );
}
