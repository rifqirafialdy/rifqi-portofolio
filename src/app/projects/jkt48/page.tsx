import Link from 'next/link';

export default function JKT48Page() {
  return (
    <main className="min-h-screen px-6 py-20 max-w-4xl mx-auto text-black font-mono">
      <h1 className="text-4xl sm:text-5xl font-bold uppercase mb-6 border-b border-black pb-2">
        Why I Chose JKT48 (and What It Taught Me About Emotional Product Design)
      </h1>

      <p className="text-base mb-6 leading-relaxed">
        This is a personal case study where I explore the fan economy and emotional product design through the lens of JKT48. As part of my
        Product Management portfolio, I analyzed how JKT48 builds loyalty through structure, rituals, and scarcity-based systems.
      </p>

      <p className="text-base mb-6 leading-relaxed">
        I reflected on their business model and created a fictional PRD applying JKT48 emotional and operational design strategies
        into a tech context — focusing on engagement, retention, and narrative design. This project is not just about idols,
        but about crafting meaningful experiences that users emotionally invest in.
      </p>

      <h2 className="text-xl font-semibold mt-10 mb-4 uppercase">🔍 What&apos;s Inside the Case:</h2>
      <ul className="list-disc list-inside text-sm space-y-2">
        <li>Exploration of Emotional ROI and loyalty systems in digital products</li>
        <li>Comparative analysis of idol-fan mechanics and tech user engagement</li>
        <li>Breakdown of scarcity, rituals, narrative arcs, and community as product levers</li>
        <li>A full fictional Product Requirement Document (PRD) based on this insight</li>
        <li>Blending storytelling with business outcomes in product design</li>
      </ul>

      <div className="mt-10">
        <Link
          href="/Why I Chose JKT48 (and What It Taught Me About Emotional Product Design) (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-black px-6 py-2 font-semibold text-sm hover:bg-black hover:text-white transition"
        >
          📄 View Full Case Study + PRD (PDF)
        </Link>
      </div>

      <p className="text-xs mt-10 text-gray-500">
        * This case study is an original personal project built as part of my Product Management bootcamp portfolio.
      </p>
    </main>
  );
}
