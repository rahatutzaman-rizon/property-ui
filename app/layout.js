import { Inter } from "next/font/google";
import "./globals.css";
import MotherLayout from "./MotherLayout";
import Spinner from "../app/Reusable/Spinner"; // Import the Spinner component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JMC Asset Management",
  description: "JMC Asset Management",
};

export default function RootLayout({ children, isLoading }) { // Accept isLoading prop
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <MotherLayout>
          <main className="flex-grow mt-[header-height] bg-white">
            {isLoading ? <Spinner /> : children} {/* Display Spinner or children based on isLoading */}
          </main>
        </MotherLayout>
      </body>
    </html>
  );
}
