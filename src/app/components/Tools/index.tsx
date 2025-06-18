'use client';

import { motion } from 'framer-motion';

const tools = [
  { name: 'Python', src: '/logos/python.jpg' },
  { name: 'Java', src: '/logos/java.webp' },
  { name: 'Next.js', src: '/logos/next.png' },
  { name: 'Tailwind CSS', src: '/logos/tailwind-css.png' },
  { name: 'PostgreSQL', src: '/logos/postgress.jpg' },
  { name: 'Looker Studio', src: '/logos/looker-studio.png' },
  { name: 'Jira', src: '/logos/jira.jpg' },
  { name: 'Miro', src: '/logos/miro.jpg' },
  { name: 'Figma', src: '/logos/figma.jpg' },
];

export default function ToolLogos() {
  return (
    <div className="overflow-hidden w-full py-10 bg-white border-t border-b border-gray-200">
      <motion.div
        className="flex gap-16 items-center"
        animate={{ x: ['100%', '-100%'] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
      >
        {[...tools, ...tools].map((tool, index) => (
          <div key={`${tool.name}-${index}`} className="flex-shrink-0">
            <img
              src={tool.src}
              alt={tool.name}
              title={tool.name}
              className="h-16 w-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
