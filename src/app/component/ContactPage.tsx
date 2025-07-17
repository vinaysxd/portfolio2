'use client';

import { Mail,  MapPin, Send, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, you’d send the form data to an API or service like Formspree, EmailJS, etc.
    alert('Message sent!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b border-gray-700 pb-2 text-center">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 text-gray-300">
            <p className="text-lg">
              Feel free to reach out for collaborations, freelance work, or just to say hi!
            </p>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <span>contactme@vinays.dev</span>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="w-6 h-6 text-blue-500" />
              <a href="https://www.linkedin.com/in/vinay-s-3a8807129/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white hover:underline">Vinay S</a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <span>Sydney, Australia</span>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-1 text-sm">Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div> 
  );
}
