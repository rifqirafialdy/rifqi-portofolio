'use client';

// Reusing the components from our template
import { SectionTitle, BrutalistLink } from '../components';

export default function BankOnePage() {
  return (
    // Main container with vertical padding for a comfortable reading experience
    <div className="max-w-3xl mx-auto py-32 px-4">

      {/* --- HEADER --- */}
      <header className="mb-16">
        <p className="font-mono text-sm uppercase text-gray-600 mb-2">Product Management / Data Analysis / UX Strategy</p>
        <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">BankOne - Revitalizing a Failed AI Financial Advisor</h1>
      </header>

      {/* --- CONTENT ARTICLE --- */}
      <article className="text-lg leading-relaxed text-gray-800 space-y-4">
        
        <SectionTitle>Problem</SectionTitle>
        <p>
          The bank was facing a high percentage of dormant accounts and low engagement with its digital products. The flagship "AI Advisor" feature was a significant point of failure, with an **80% user drop-off** and a mere **0.3% conversion rate**, leading to high churn among new users and customer dissatisfaction.
        </p>

        <SectionTitle>Action</SectionTitle>
        <p>
          I led a data-driven initiative to uncover the root cause and pivot the product strategy. My approach involved several key steps:
        </p>
        <ul className="list-disc pl-5 space-y-3 mt-4">
          <li>
            <strong>In-depth Analysis:</strong> Conducted a thorough analysis of user behavior and technical performance to identify the root causes of the app's instability and key user pain points.
          </li>
          <li>
            <strong>Customer-Centric Strategy:</strong> Redefined the product strategy to focus on a customer-centric model with personalized services, mapping out data requirements and proposing architectural changes to better leverage customer data.
          </li>
          <li>
            <strong>Prioritized Roadmap:</strong> Developed and prioritized a clear product roadmap with key initiatives focused on improving application stability, simplifying the user interface, and enhancing security measures to rebuild user trust.
          </li>
        </ul>

        <SectionTitle>Result</SectionTitle>
        <p>
          The strategic initiatives laid the groundwork for a more stable and user-friendly mobile banking application. By shifting focus to a customer-centric approach, the project successfully established a foundation for increasing customer retention and competing more effectively in the modern financial landscape.
        </p>

        <BrutalistLink href="/BankOne CASE STUDY (1).pdf">
          → View Full Case Study Deck (PDF)
        </BrutalistLink>
        
      </article>
    </div>
  );
}