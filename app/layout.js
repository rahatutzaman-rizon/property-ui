import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./Shared/header";
import Footer from "./Shared/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JMC Asset Management ",
  description: "JMC Asset Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Header className="fixed top-0 left-0 right-0 z-50" />
        <main className="flex-grow mt-[header-height] overflow-y-auto bg-white ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}