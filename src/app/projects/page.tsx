'use client';

import Link from 'next/link';

const projects = [
  {
    category: 'Product Management',
    items: [
      {
        title: 'Adiraku Case Study',
        description:
          'Help Center Revamp project from Dibimbing Bootcamp. Includes structured problem discovery, qualitative validation, and full PRD.',
        href: '/projects/adiraku',
        available: true,
      },
      {
        title: 'JKT48 Study Case',
        description: 'Coming soon — a creative PM challenge exploring idol business and emotional ROI.',
        href: '/projects/jkt48',
        available: false,
      },
    ],
  },
  {
    category: 'Data Analyst',
    items: [
      {
        title: 'Amazon Sales Case Study',
        description:
          'Group project focused on data cleaning, normalization, ERD, and Looker Studio visualization. Full score: 100/100.',
        href: '/projects/amazon-analysis',
        available: true,
      },
    ],
  },
  {
    category: 'Software Engineering',
    items: [
      {
        title: 'Event App (Fullstack)',
        description: 'Coming soon — Spring Boot & Next.js event platform with referral and wallet system.',
        href: '/projects/event-app',
        available: false,
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20 font-sans">
      <h1 className="text-4xl font-bold font-mono mb-12 text-black">Projects</h1>
      {projects.map((section) => (
        <section key={section.category} className="mb-12">
          <h2 className="text-2xl font-bold font-mono mb-4 text-gray-800">{section.category}</h2>
          <div className="space-y-4">
            {section.items.map((project) =>
              project.available ? (
                <Link
                  key={project.title}
                  href={project.href}
                  className="block border border-black p-4 rounded hover:bg-gray-100 transition"
                >
                  <h3 className="font-bold font-mono text-lg">{project.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{project.description}</p>
                </Link>
              ) : (
                <div
                  key={project.title}
                  className="block border border-dashed border-gray-400 p-4 rounded bg-gray-50 text-gray-500 cursor-not-allowed"
                >
                  <h3 className="font-bold font-mono text-lg">{project.title}</h3>
                  <p className="text-sm mt-1 italic">{project.description}</p>
                </div>
              )
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
