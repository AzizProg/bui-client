import type { Metadata } from "next";
import { Inter } from "next/font/google";
import  "/src/styles/globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BuiCorporation",
  description: "Interface for wallet management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className={inter.className}>
      <Toaster/>
        <Suspense fallback={<Loading/>}>

            {children}
        </Suspense>
      
        
        </body>
     
    </html>
  );
}
