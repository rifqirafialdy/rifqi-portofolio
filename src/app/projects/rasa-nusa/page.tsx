'use client';

import { SectionTitle, BrutalistLink } from '../components';

export default function RasaNusaPage() {
  return (
    <div className="max-w-3xl mx-auto py-32 px-4">
      <header className="mb-16">
        <p className="font-mono text-sm uppercase text-gray-600 mb-2">Product Management / Event Strategy</p>
        <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">Rasa Nusa - Launching a Cultural Food Festival</h1>
      </header>
      <article className="text-lg leading-relaxed text-gray-800 space-y-4">
        <SectionTitle>Overview</SectionTitle>
        <p>
          As a Product Manager Intern at Pikiran Rakyat Media Network, I was tasked with transforming a high-level concept for a new cultural food festival, &quot;Rasa Nusa,&quot; into a viable and de-risked product launch.
        </p>
        <SectionTitle>Problem</SectionTitle>
        <p>
          The company had a grand vision to enter the &quot;Experience Economy&quot; but lacked a defined execution strategy. My primary challenge was to de-risk the project by validating the market and creating a clear product roadmap.
        </p>
        <SectionTitle>Action</SectionTitle>
        <ul className="list-disc pl-5 space-y-3">
            <li>
                <strong>Market & User Research:</strong> I conducted competitor analysis and ran a survey which revealed key user frustrations with existing events: overcrowding, long queues, and a lack of credible information.
            </li>
            <li>
                <strong>Strategic Solution:</strong> Based on the data, I defined the core solution as a &quot;Freemium&quot; event model centered around a microsite to build trust, manage registrations, and serve as the main monetization engine.
            </li>
            <li>
                <strong>Build vs. Buy Analysis:</strong> I made the strategic recommendation to use a third-party ticketing platform instead of building an in-house system, justifying the decision with a cost-benefit analysis to minimize risk.
            </li>
        </ul>
        <SectionTitle>Result</SectionTitle>
        <p>
          My analysis transformed an ambitious idea into a data-informed, actionable product plan, providing a clear path to launch the company&apos;s flagship event.
        </p>
        <BrutalistLink href="/rasa nusa story (1).pdf">
          → View Full Case Study Deck (PDF)
        </BrutalistLink>
      </article>
    </div>
  );
}