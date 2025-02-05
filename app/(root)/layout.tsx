import React from "react";
import Navbar from "../../components/Navbar";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="font-work-sans">
      {/* Render a navbar right here */}
      <Navbar />

      {children}
    </main>
  );
};

export default layout;
