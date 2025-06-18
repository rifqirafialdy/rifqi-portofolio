'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import ProjectList from './components/ProjectSection';

type Category =
  | 'Product Management'
  | 'Data Analyst'
  | 'Software Engineering'
  | 'Prompt Engineering';

const skills = [
  { label: 'Product Management', color: 'bg-red-600' },
  { label: 'Software Engineering', color: 'bg-blue-700' },
  { label: 'Prompt Engineering', color: 'bg-purple-700' },
  { label: 'Data Analysis', color: 'bg-green-700' },
];

const categories: Category[] = [
  'Product Management',
  'Data Analyst',
  'Software Engineering',
  'Prompt Engineering',
];

const projects: Record<
  Category,
  {
    title: string;
    status: 'completed' | 'in progress';
    description: string;
    href: string;
  }[]
> = {
  'Product Management': [
    {
      title: 'Adiraku Case Study',
      status: 'completed',
      description:
        'A UX improvement case for Adiraku (Adira Finance) focused on making the Help Center more accessible and intuitive, aiming to increase task completion and user trust.',
      href: '/projects/adiraku',
    },
    {
      title: 'JKT48 Study Case',
      status: 'in progress',
      description:
        'A deep analysis of idol group business models, emotional ROI, and fan engagement mechanics — framed as a creative PM challenge.',
      href: '/projects/jkt48',
    },
    {
      title: 'Travel App Healing Feature',
      status: 'in progress',
      description:
        'A mood-based journey planner that enhances user emotional connection with travel discovery, designed to boost engagement and retention.',
      href: '/projects/travel-healing',
    },
  ],
  'Data Analyst': [
    {
      title: 'Amazon Sales Case Study',
      status: 'completed',
      description:
        'Cleaned and analyzed Amazon sales data using Python and visualized key insights with Google Looker Studio to identify revenue patterns and optimize decisions.',
      href: '/projects/amazon-analysis',
    },
  ],
  'Software Engineering': [
    {
      title: 'Portfolio Website',
      status: 'completed',
      description:
        'A personal static website built with Next.js and Tailwind CSS to showcase my projects and journey.',
      href: '/projects/portfolio',
    },
    {
      title: 'Travel Static Site',
      status: 'completed',
      description:
        'A static travel guide website powered by JSON content, featuring destinations and curated tips.',
      href: '/projects/travel-static',
    },
    {
      title: 'Event App (Fullstack)',
      status: 'completed',
      description:
        'A fullstack web app for event ticketing with user authentication, referral system, and organizer dashboard built with Spring Boot and Next.js.',
      href: '/projects/event-app',
    },
  ],
  'Prompt Engineering': [],
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<Category>('Product Management');

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen w-full bg-white text-black font-header py-20 flex flex-col justify-center">
      {/* Hero Section */}
      <div className="flex flex-col min-h-screen w-full lg:flex-row justify-between px-6 gap-12">
        <div className="flex flex-col gap-2 max-w-xl">
          <h1 className="text-7xl md:text-8xl font-black leading-[1] tracking-tight uppercase">
            RIFQI RAFIALDY
            <br />
            <span className="text-6xl md:text-7xl">DWIJAYA</span>
          </h1>
          <h2 className="text-sm tracking-widest uppercase font-gothic text-gray-500 font-extrabold mt-1">
            VOLUME.01 / TWENTY25
          </h2>
          <p className="text-xl md:text-2xl mt-12 italic font-bold leading-[1.2]">
            <span className="font-sans bg-yellow-300 px-2 py-1 uppercase">not a portfolio.</span>{' '}
            it&apos;s a declaration.
          </p>
          <p className="text-base font-mono mt-2 uppercase tracking-wide text-gray-700">
            stories. structure. emotion. systems. energy.
          </p>
        </div>

        <div className="max-w-md text-base font-sans leading-relaxed mt-10 lg:mt-0">
          <p className="text-xl font-bold uppercase mb-4">Hi, I&apos;m Rifqi.</p>
          <p className="mb-4">
            Im a law graduate and tech enthusiast who aspires to become a product manager — someone who builds with
            empathy, structure, and impact in mind.
          </p>
          <p className="mb-4">
            Outside of work, I&apos;m an adventurer at heart who finds clarity through nature, movement, and curiosity.
          </p>
          <p className="mb-2 font-semibold">Things I&apos;m learning now:</p>

          <div className="h-12 mt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={skills[index].label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className={`inline-block ${skills[index].color} text-white px-4 py-2 rounded text-2xl font-gothic tracking-wide`}
              >
                {skills[index].label}
              </motion.div>
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className="inline-block mt-6 px-6 py-3 bg-white text-black font-mono text-sm rounded hover:bg-gray-200 transition border-2 font-gothic"
          >
            → Learn More About Me
          </Link>
        </div>
      </div>
 
      <section className="w-full  px-6 py-2 mb-0 flex gap-2 overflow-x-auto">
        {categories.map((label) => (
          <button
            key={label}
            onClick={() => setActiveCategory(label)}
            className={`rounded-t-md px-6 py-2 font-gothic text-lg cursor-pointer transition ${
              activeCategory === label ? 'bg-yellow-400 text-black' : 'bg-blue-800 text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </section>
     

      {/* Project List */}
      <ProjectList category={activeCategory} projects={projects[activeCategory]} />
      {/* Contact Section */}
  <section id="contact" className="mt-32 px-6 py-24 border-t border-black w-full bg-white">
  <div className="max-w-4xl mx-auto text-center space-y-10">
    <h2 className="text-5xl font-bold uppercase font-mono tracking-widest">
      Get In Touch
    </h2>

    <p className="text-xl font-sans text-gray-700 max-w-2xl mx-auto">
      Whether you&apos;re interested in collaborating, hiring, or just saying hello — I&apos;m always open to a great conversation.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-lg justify-items-center">
      <a href="mailto:rifqirafialdy@gmail.com" className="flex items-center gap-4 hover:underline">
        <span className="text-2xl">📧</span>
        <span>rifqirafialdy@gmail.com</span>
      </a>

      <a href="https://wa.me/6285121085055" target="_blank" className="flex items-center gap-4 hover:underline">
        <span className="text-2xl">💬</span>
        <span>+62 851-2108-5055</span>
      </a>

      <a href="https://www.linkedin.com/in/rifqirafialdy/" target="_blank" className="flex items-center gap-4 hover:underline">
        <span className="text-2xl">🔗</span>
        <span>linkedin.com/in/rifqirafialdy</span>
      </a>

      <a href="https://github.com/rifqirafialdy" target="_blank" className="flex items-center gap-4 hover:underline">
        <span className="text-2xl">💻</span>
        <span>github.com/rifqirafialdy</span>
      </a>
    </div>

    <p className="text-sm text-gray-500 mt-10 font-mono">
      Made with ☕ and curiosity — 2025
    </p>
  </div>
</section>


    </main>

    
  );
}
