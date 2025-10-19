'use client';

// Reusing the components from our template
import { SectionTitle, BrutalistLink } from '../components';

export default function RasaNusaPage() {
  return (
    // Main container with vertical padding
    <div className="max-w-3xl mx-auto py-32 px-4">

      {/* --- HEADER --- */}
      <header className="mb-16">
        <p className="font-mono text-sm uppercase text-gray-600 mb-2">Product Management / Event Strategy</p>
        <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">Rasa Nusa - Launching a Cultural Food Festival</h1>
      </header>

      {/* --- CONTENT ARTICLE --- */}
      <article className="text-lg leading-relaxed text-gray-800 space-y-4">
        
        <SectionTitle>Overview</SectionTitle>
        <p>
          As a Product Manager Intern at Pikiran Rakyat Media Network, I was tasked with transforming a high-level concept for a new cultural food festival, "Rasa Nusa," into a viable and de-risked product launch. This case study details the process of applying a structured product management framework to turn a broad business goal into an actionable plan.
        </p>

        <SectionTitle>Problem</SectionTitle>
        <p>
          The company had a grand vision to enter the "Experience Economy" but lacked a defined execution strategy. My primary challenge was to de-risk the project by validating the market, defining the user, and creating a clear product roadmap where none existed.
        </p>
        
        <SectionTitle>Action</SectionTitle>
        <ul className="list-disc pl-5 space-y-3">
            <li>
                <strong>Market & User Research:</strong> I conducted competitor analysis and ran a survey which revealed key user frustrations with existing events: overcrowding, long queues, and a lack of credible information.
            </li>
            <li>
                <strong>Strategic Solution:</strong> Based on the data, I defined the core solution as a "Freemium" event model centered around a microsite. This digital hub would build trust, manage registrations to solve the queueing problem, and serve as the main monetization engine.
            </li>
            <li>
                <strong>Product Documentation:</strong> I authored a comprehensive Product Requirements Document (PRD) for the microsite and used the MoSCoW framework to prioritize features for the MVP.
            </li>
            <li>
                <strong>Build vs. Buy Analysis:</strong> I made the strategic recommendation to use a third-party ticketing platform instead of building an in-house system, justifying the decision with ERDs and a cost-benefit analysis to minimize risk and cost.
            </li>
        </ul>

        <SectionTitle>Result</SectionTitle>
        <p>
          My 360-degree analysis and strategic documentation transformed an ambitious idea into a data-informed, actionable product plan. This structured approach provided the company with a clear, de-risked path to successfully launch its flagship event and enter the experience economy.
        </p>

        <BrutalistLink href="/rasa nusa story (1).pdf">
          → View Full Case Study Deck (PDF)
        </BrutalistLink>
        
      </article>
    </div>
  );
}