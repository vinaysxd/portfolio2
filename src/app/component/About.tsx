import { Linkedin, Mail, MapPin  } from 'lucide-react';
import React from 'react';

const About = () => {
    return(
        <div className="max-w-4xl mx-auto ">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6  border-b border-gray-700 pb-2 text-center">About Me</h2>

        {/* About Me Text */}
        <p className="text-lg leading-relaxed text-gray-300 mb-12">
          I&apos;m Vinay Sounderraj, a dedicated Frontend Developer with a strong passion for creating interactive,
          fast, and accessible web applications using React.js, React Native, and Next.js. I bring user experiences
          to life with modern technologies and pixel-perfect implementation.
        </p>

        {/* Contact Info Horizontally */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center align-items-center ">
          {/* Phone */}
          {/* <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 text-blue-500 mb-2" />
            <span className="text-sm text-gray-300">+91 98765 43210</span>
          </div> */}

          {/* Email */}
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 text-blue-500 mb-2" />
            <span className="text-sm text-gray-300">contactme@vinays.dev</span>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center">
            <MapPin className="w-8 h-8 text-blue-500 mb-2" />
            <span className="text-sm text-gray-300">Sydney, Australia</span>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <Linkedin className="w-8 h-8 text-blue-500 mb-2" />
            <a
              href="https://www.linkedin.com/in/vinay-s-3a8807129/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-300 hover:text-white hover:underline"
            >
              Vinay S
            </a>
          </div>
        </div>
      </div>
    )
}

export default About;   
