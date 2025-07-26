import React from "react";
import "./globals.css"; 
import ScrollToTopButton from "./component/scrollToTop"; 
import { Analytics } from '@vercel/analytics/next';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
     style={{
        backgroundColor: '#02030e', // Dark background color 
      }}    
        
      > 
      
        {children}
        <ScrollToTopButton />
         <Analytics />
      </body>
    </html>
  );
}
