'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const sections = ['home', 'about', 'projects', 'contact'];

const SideNav = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } 
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50">
      <ul className="space-y-4">
        {sections.map((id) => (
          <li key={id}>
            <Link
              href={`#${id}`}
              className="group flex items-center"
              aria-label={`Go to ${id} section`}
            >
              <span className="absolute right-6 text-sm text-gray-800 bg-white bg-opacity-80 px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none capitalize">
                {id}
              </span>
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === id ? 'bg-blue-600 scale-125' : 'bg-gray-400'
                }`}
              ></div>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNav;