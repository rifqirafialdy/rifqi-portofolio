'use client';

// We can reuse the components from the template we created
import { SectionTitle,BrutalistLink } from "../components";

export default function JKT48Page() {
  return (
    // Main container with vertical padding for a comfortable reading experience
    <div className="max-w-3xl mx-auto py-32 px-4">

      {/* --- HEADER --- */}
      <header className="mb-16">
        <p className="font-mono text-sm uppercase text-gray-600 mb-2">Product Management / User Psychology</p>
        <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">
          Why I Chose JKT48 (and What It Taught Me About Emotional Product Design)
        </h1>
      </header>

      {/* --- CONTENT ARTICLE --- */}
      <article className="text-lg leading-relaxed text-gray-800 space-y-4">
        
        <SectionTitle>Case Overview</SectionTitle>
        <p>
          This is a personal case study where I explore the fan economy and emotional product design through the lens of JKT48. As part of my Product Management portfolio, I analyzed how JKT48 builds loyalty through structure, rituals, and scarcity-based systems.
        </p>
        <p>
          I reflected on their business model and created a fictional PRD applying JKT48's emotional and operational design strategies into a tech context — focusing on engagement, retention, and narrative design. This project is not just about idols, but about crafting meaningful experiences that users emotionally invest in.
        </p>
        
        <SectionTitle>What&apos;s Inside the Case:</SectionTitle>
        <ul className="list-disc pl-5 space-y-2">
            <li>Exploration of Emotional ROI and loyalty systems in digital products</li>
            <li>Comparative analysis of idol-fan mechanics and tech user engagement</li>
            <li>Breakdown of scarcity, rituals, and community as product levers</li>
            <li>A full fictional Product Requirement Document (PRD) based on this insight</li>
            <li>Blending storytelling with business outcomes in product design</li>
        </ul>

        <BrutalistLink href="/Why I Chose JKT48 (and What It Taught Me About Emotional Product Design) (2).pdf">
          📄 View Full Case Study + PRD (PDF)
        </BrutalistLink>

      </article>

      <p className="text-xs mt-16 text-gray-500 font-mono">
        * This case study is an original personal project built as part of my Product Management bootcamp portfolio.
      </p>

    </div>
  );
}