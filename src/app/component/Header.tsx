'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Lucide icons
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    {label:"Experience", href: "#experience"},
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950/70 backdrop-blur-md shadow-md text-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold">Vinay Sounderraj</h1>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-full left-0 w-full md:w-auto md:flex items-center bg-gray-950 md:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:space-x-6 p-4 md:p-0 text-center font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-blue-500 py-2"
                onClick={() => setIsOpen(false)} // auto-close on mobile
              >
                {link.label}
              </a>
            ))}

            <a
              download
              href="/resume.pdf"
              className="mt-2 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={() => setIsOpen(false)}
            >
              Download Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
