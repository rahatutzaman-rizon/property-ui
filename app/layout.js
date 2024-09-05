import { Inter } from "next/font/google";
import "./globals.css";
import MotherLayout from "./MotherLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JMC Asset Management ",
  description: "JMC Asset Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col`}>
        <MotherLayout>
          <main className="flex-grow mt-[header-height]  bg-white  ">
            {children}
          </main>
        </MotherLayout>
      </body>
    </html>
  );
}
