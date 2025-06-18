'use client';

import Link from 'next/link';

type Project = {
  title: string;
  status: 'completed' | 'in progress';
  description: string;
  href: string;
};

type Props = {
  category: string;
  projects: Project[];
};

export default function ProjectList({  projects }: Props) {
  return (
    <section className="w-full bg-gray-100 px-6 py-8 mt-0">
      <div className="max-w-5xl mx-auto space-y-6">
        {projects.length > 0 ? (
          projects.map((proj, i) => (
            <div
              key={i}
              className="bg-white rounded-md shadow-sm border p-6 relative transition hover:shadow-md"
            >
              {proj.status === 'in progress' && (
                <div className="absolute top-2 right-2 text-xs bg-red-600 text-white px-2 py-1 rounded font-gothic">
                  🛠 In Progress
                </div>
              )}
              <h3 className="text-2xl font-bold font-mono">{proj.title}</h3>
              <p className="text-gray-700 mt-2 text-lg">{proj.description}</p>
              <Link
                href={proj.href}
                className="inline-block mt-4 px-4 py-2 bg-black text-white text-sm font-mono rounded hover:bg-gray-800 transition"
              >
                → View Project
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 font-mono">No projects available yet.</p>
        )}
      </div>
    </section>
  );
}
