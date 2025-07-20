'use client';

import axios from 'axios';
import dynamic from 'next/dynamic';
import {  useEffect, useState } from 'react';

const Mail = dynamic(() => import('lucide-react').then(mod => mod.Mail), { ssr: false });
const Linkedin = dynamic(() => import('lucide-react').then(mod => mod.Linkedin), { ssr: false });
const MapPin = dynamic(() => import('lucide-react').then(mod => mod.MapPin), { ssr: false });
const Send = dynamic(() => import('lucide-react').then(mod => mod.Send), { ssr: false });

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [mounted, setMounted] = useState(false); 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await axios.post('/api/send-email', {
      name: form.name,
      email: form.email,
      message: form.message,
    });

    if (response.status === 200) {
      alert('Email sent successfully!');
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send email.');
    }
  } 
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  catch (error: any) {
    console.error('Error sending email:', error.response?.data || error.message);
    alert('Something went wrong while sending your message.');
  }
};
  useEffect(() => {
    // This effect can be used for any side effects related to the contact form    
    if(!mounted) {
      setMounted(true);
    }
    }, [mounted]);
  return (
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold mb-10 border-b border-gray-700 pb-2 text-center">Contact Me</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left - Info */}
        <div className="space-y-6 text-gray-300">
          <p className="text-lg">
            Feel free to reach out for collaborations, freelance work, or just to say hi!
          </p>

          <div className="flex items-center gap-4">
            <a href="mailto:contactme@vinays.dev"  className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-blue-500" />
            <span>contactme@vinays.dev</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Linkedin className="w-6 h-6 text-blue-500" />
            <a
              href="https://www.linkedin.com/in/vinay-s-3a8807129/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white hover:underline"
            >
              Vinay S
            </a>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-blue-500" />
            <span>Sydney, Australia</span>
          </div>
        </div>

        {/* Right - Form */}
        {mounted && (
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
            className="flex cursor-pointer items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <Send className="w-5 h-5" />
            Send Message
          </button>
        </form>
        )}
      </div>
    </div>
  );
}
