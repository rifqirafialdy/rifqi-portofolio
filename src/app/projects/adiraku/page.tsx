'use client';

import Link from 'next/link';

// Reusable component for section headings
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold font-display mt-16 mb-6 border-b-2 border-text pb-3">
    {children}
  </h2>
);

// Reusable brutalist-style link button
const BrutalistLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-6 px-4 py-2 border-2 border-text bg-background font-mono text-sm font-bold shadow-[4px_4px_0px_#1a1a1a] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
  >
    {children}
  </Link>
);

export default function AdirakuProjectPage() {
  return (
    // Main container with vertical padding for a comfortable reading experience
    <div className="max-w-3xl mx-auto py-32 px-4">

      {/* --- HEADER --- */}
      <header className="mb-16">
        <p className="font-mono text-sm uppercase text-gray-600 mb-2">Product Management / UX Strategy</p>
        <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">Adiraku Help Center Revamp</h1>
      </header>

      {/* --- CONTENT ARTICLE --- */}
      <article className="text-lg leading-relaxed text-gray-800 space-y-4">
        
        <SectionTitle>Overview</SectionTitle>
        <p>
          This project was a <strong>mock assignment</strong> for the Dibimbing Product Management Bootcamp.
          The goal was to understand the end-to-end process of identifying problems, validating them, and designing a
          solution. I approached this case by conducting structured analysis and producing a full PRD at the end.
        </p>
        <BrutalistLink href="/1743279100016-Adiraku-Assignment.pdf">
          → View The Case Study Breakdown
        </BrutalistLink>

        <SectionTitle>Problem Discovery</SectionTitle>
        <p>
          The business team reported a significant decline in user transactions. I built an{' '}
          <strong>issue tree</strong> to map out the root causes, dividing them into internal and external factors. This allowed for targeted analysis and resource allocation across different departments.
        </p>
        <BrutalistLink href="https://miro.com/app/board/uXjVIGBcv8o=/">
          → View Issue Tree on Miro
        </BrutalistLink>

        <SectionTitle>Solution Approach</SectionTitle>
        <p>
          As a PM, I focused on reducing the customer support load by empowering users to self-serve. I proposed a full{' '}
          <strong>Help Center Revamp</strong> with improved UX, search functionality, and clearer categorization. The final deliverable was a complete PRD.
        </p>
        <div className="flex flex-wrap gap-4">
          <BrutalistLink href="https://app.visily.ai/projects/01adf1fe-177a-49f7-bd73-772aee0e7b6e/boards/1854499">
            → View Wireframe
          </BrutalistLink>
          <BrutalistLink href="/Adiraku Help Center Enhancement.pdf">
            → Download PRD (PDF)
          </BrutalistLink>
        </div>
        
        <SectionTitle>Closing Reflection</SectionTitle>
        <p>
          This case taught me the importance of validating assumptions with qualitative insights. If I could improve one thing, it would be integrating more quantitative data to back up the qualitative findings—something I explored further in my next project.
        </p>
        <BrutalistLink href="/projects/amazon-analysis">
          → View Amazon Data Analyst Case
        </BrutalistLink>
      </article>
    </div>
  );
}