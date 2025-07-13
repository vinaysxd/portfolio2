// components/Header.tsx
'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center absolute top-0 z-3 w-full justify-between px-6 py-4 bg-transparent shadow-md">
      {/* Logo / Name */}
      <h1 className="text-xl font-bold text-white">Vinay Sounderraj</h1>

      {/* Navigation Links */}
      <nav className="space-x-6 text-white font-bold">
        <Link href="/home" className="hover:text-blue-600 transition">Home</Link>
        <Link href="/about" className="hover:text-blue-600 transition">About</Link>
        <Link href="/skills" className="hover:text-blue-600 transition">Skills</Link>
        <Link href="/projects" className="hover:text-blue-600 transition">Projects</Link>
        <Link href="/contact" className="hover:text-blue-600 transition">Contact Me</Link>
        <a
        href="/resume.pdf"
        download
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Download Resume
      </a>
      </nav>
      
      {/* CTA Button */}
      
    </header>
  );
}
