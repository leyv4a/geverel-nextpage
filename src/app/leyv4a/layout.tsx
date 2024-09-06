import React from "react";
import '../globals.css'

export default function Leyv4aLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="bg-gray-100">{children}</div>
  );
}
