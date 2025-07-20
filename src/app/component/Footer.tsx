import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-10 px-6 border-t border-gray-800 mt-16">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-6">

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/vinay-s-3a8807129/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>

          <a
            href="https://github.com/vinaysxd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-100 transition"
          >
            <Github className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center">
          © {2025} — Developed by <span className="font-medium">Vinay Sounderraj</span>
        </div>

        {/* Creative Line */}
        <div className="text-xs text-gray-500 italic text-center">
          Powered by passion, pixels, and just enough caffeine ☕.
        </div>
      </div>
    </footer>
  );
}
