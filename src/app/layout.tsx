import React from "react";
import "./globals.css"; 
import ScrollToTopButton from "./component/scrollToTop"; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
     style={{
        backgroundColor: '#02030e', // Dark background color 
      }}    
        
      > 
      
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
