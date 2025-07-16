'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-gray-950/70 backdrop-blur-md shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold">Vinay Sounderraj</h1>

        {/* Hamburger for mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Nav Links */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto md:flex items-center bg-gray-950 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:space-x-6 p-4 md:p-0 text-center font-semibold">
            <Link href="/home" className="hover:text-blue-500 py-2">Home</Link>
            <Link href="/about" className="hover:text-blue-500 py-2">About</Link>
            <Link href="/skills" className="hover:text-blue-500 py-2">Skills</Link>
            <Link href="/projects" className="hover:text-blue-500 py-2">Projects</Link>
            <Link href="/contact" className="hover:text-blue-500 py-2">Contact Me</Link>
            <a
              href="/resume.pdf"
              download
              className="mt-2 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
