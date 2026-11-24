import type { ReactNode } from "react";

import Footer from "./Footer";
import FloatingActions from "./FloatingActions";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <div className="w-full max-w-screen-2xl mx-auto">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>
      <FloatingActions />
    </>
  );
}