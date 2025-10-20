'use client';

// Reusing the components from our template
import { SectionTitle, BrutalistLink } from '../components';

export default function BankOnePage() {
  return (
    <div className="max-w-3xl mx-auto py-32 px-4">
      <header className="mb-16">
        <p className="font-mono text-sm uppercase text-gray-600 mb-2">Product Management / Data Analysis / UX Strategy</p>
        <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">BankOne - Revitalizing a Failed AI Financial Advisor</h1>
      </header>

      <article className="text-lg leading-relaxed text-gray-800 space-y-4">
        <SectionTitle>Problem</SectionTitle>
        <p>
          The bank faced a high percentage of dormant accounts and low engagement. The flagship &quot;AI Advisor&quot; feature was a significant point of failure, with an <strong>80% user drop-off</strong> and a mere <strong>0.3% conversion rate</strong>, leading to high churn.
        </p>

        <SectionTitle>Action</SectionTitle>
        <p>
          I led a data-driven initiative to pivot the product strategy. My approach involved several key steps:
        </p>
        <ul className="list-disc pl-5 space-y-3 mt-4">
          <li>
            <strong>In-depth Analysis:</strong> Conducted a thorough analysis of user behavior to identify the root causes of the app&apos;s instability and key user pain points.
          </li>          <li>
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