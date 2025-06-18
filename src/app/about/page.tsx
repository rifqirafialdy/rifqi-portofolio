'use client';

import Link from 'next/link';
import ToolLogos from '../components/Tools';

export default function AboutMePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-black bg-white font-mono space-y-12">
      {/* Header */}
      <section>
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <p className="text-sm text-gray-500 uppercase">Who I am and what I believe in</p>
      </section>

      {/* Intro */}
      <section className="space-y-4">
        <p>
          Hello, Im <strong>Rifqi Rafialdy Dwijaya</strong>, a former law graduate from Parahyangan Catholic University
          (Class of 2022) who made the bold leap into the world of tech. My passion for building systems that create
          impact led me into the realm of <strong>product and project management</strong>, and Ive been diving deep
          ever since.
        </p>

        <p>
          Im currently honing my skills through two immersive bootcamps:
          <br />
          <ul className="list-disc list-inside ml-4">
            <li>🔹 Product & Project Management : Dibimbing Bootcamp (since March 2025)</li>
            <li>🔹 Software Engineering : Purwadhika Digital School (since January 2025)</li>
          </ul>
        </p>

        <p>
          My professional background spans across hospitality, logistics, and legal work—each of which has sharpened my
          eye for operations, structure, and human-centered problem solving. Ive worked in diverse environments from
          luxury resorts in Australia to notary offices in Subang.
        </p>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-2xl font-bold mb-4">What I Believe</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Empathy is a superpower.</li>
          <li>Structure enables creativity.</li>
          <li>Energy matters as much as strategy.</li>
          <li>Being multidisciplinary is not a flaw—its a weapon.</li>
        </ul>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Tools & Skills</h2>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>🧠 Product: Jira (basic), Notion, Agile mindset, SCRUM (basic)</li>
          <li>🧑‍💻 Tech: Java, Spring Boot, PostgreSQL, JavaScript, Next.js, Tailwind,Python</li>
          <li>🎨 Design & Collab: Figma, Slack, Microsoft Office, Google Workspace</li>
          <li>🗣️ Languages: English (C2), Bahasa Indonesia (Native)</li>
        </ul>
      </section>

      {/* Resume Download */}
      <section>
        <Link
          href="/Resume-Rifqi%20Rafialdy%20Dwijaya-%202025.pdf"
          target="_blank"
          className="inline-block px-6 py-2 border border-black text-black rounded hover:bg-gray-100 transition text-sm"
        >
          📄 Download My Resume (PDF)
        </Link>
      </section>

      {/* Back to Home */}
      <section>
        <ToolLogos/>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
        >
          ← Back to Homepage
        </Link>
      </section>
    </main>
  );
}
