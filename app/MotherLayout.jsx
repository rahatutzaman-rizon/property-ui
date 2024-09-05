"use client";
import React from "react";
import Header from "./Shared/header";
import Footer from "./Shared/footer";
import { usePathname } from "next/navigation";

const MotherLayout = ({ children }) => {
  const pathname = usePathname();
  console.log(!pathname.includes("dashboard"));
  return (
    <>
      {!pathname.includes("dashboard") && (
        <Header className="fixed mt-[header-height] top-0 left-0 right-0 z-50" />
      )}
      {children}
      {!pathname.includes("dashboard") && <Footer />}
    </>
  );
};

export default MotherLayout;
