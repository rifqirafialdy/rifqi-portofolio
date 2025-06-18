'use client';

import Link from 'next/link';

export default function AdirakuProjectPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20 text-black bg-white font-sans space-y-16">
      {/* Title */}
      <section className="space-y-2">
        <h1 className="text-4xl font-bold">Adiraku Help Center Revamp</h1>
        <p className="text-sm text-gray-500 uppercase font-mono">Product Management / UX Strategy</p>
      </section>

      {/* Overview */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-4">Overview</h2>
        <p className="text-base leading-relaxed">
          This project is a <strong>mock assignment</strong> for the Dibimbing Product Management Bootcamp.
          The goal was to understand the end-to-end process of identifying problems, validating them, and designing a
          solution. I approached this case by conducting structured analysis and producing a full PRD at the end.
        </p>
        <Link
          href="/1743279100016-Adiraku-Assignment.pdf"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 border border-black font-mono text-sm hover:bg-black hover:text-white transition"
        >
          → View The Case Study Breakdown
        </Link>
      </section>

      {/* Problem Discovery */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-4">Problem Discovery</h2>
        <p className="mb-2">
          The business team reported a significant decline in user transactions. I built an{' '}
          <strong>issue tree</strong> to map out the root causes, dividing them into <strong>internal</strong> and{' '}
          <strong>external</strong> factors.
        </p>
        <p className="mb-2">
          Internal issues were further divided into <strong>Product</strong>, <strong>Marketing</strong>, and{' '}
          <strong>Customer Support</strong>—each owned by different departments, allowing for targeted analysis and
          resource allocation.
        </p>
        <Link
          href="https://miro.com/app/board/uXjVIGBcv8o=/"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 border border-black font-mono text-sm hover:bg-black hover:text-white transition"
        >
          → View Issue Tree on Miro
        </Link>
      </section>

      {/* Qualitative Validation */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-4">Qualitative Validation</h2>
        <p className="mb-2">
          Through qualitative problem solving, I discovered that users were frustrated with the in-app support. Many
          felt abandoned and experienced long delays when reaching out to customer support. The volume of incoming
          issues was overwhelming, making it difficult for the team to respond promptly.
        </p>
        <Link
          href="/1745651782837-Adiraku-Qulitative-Problem-Solving.pdf"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 border border-black font-mono text-sm hover:bg-black hover:text-white transition"
        >
          → View Qualitative Research PDF
        </Link>
      </section>

      {/* Solution Approach */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-4">Solution Approach</h2>
        <p className="mb-2">
          As a PM, I focused on reducing the customer support load by empowering users to self-serve. I proposed a full{' '}
          <strong>Help Center Revamp</strong>—with improved UX, search functionality, clearer categorization, and
          top-issue navigation.
        </p>
        <div className="space-x-4 mt-4">
          <Link
            href="https://app.visily.ai/projects/01adf1fe-177a-49f7-bd73-772aee0e7b6e/boards/1854499"
            target="_blank"
            className="inline-block px-4 py-2 border border-black font-mono text-sm hover:bg-black hover:text-white transition"
          >
            → View Wireframe on Visily
          </Link>
          <Link
            href="/1747685521160-Assigment-PRD-Batch-14-Adiraku.pdf"
            target="_blank"
            className="inline-block px-4 py-2 border border-black font-mono text-sm hover:bg-black hover:text-white transition"
          >
            → View MVP and Experiment
          </Link>
        </div>
      </section>

      {/* PRD Result */}
      <section>
        <h2 className="text-2xl font-bold font-mono mb-4">Final Outcome: Full PRD</h2>
        <p className="mb-2">
          The final deliverable is a complete PRD detailing user stories, metrics, scope, and solution strategy for the
          Help Center Revamp.
        </p>
        <Link
          href="/Adiraku Help Center Enhancement.pdf"
          target="_blank"
          className="inline-block mt-4 px-4 py-2 border border-black font-mono text-sm hover:bg-black hover:text-white transition"
        >
          → Download PRD Document (PDF)
        </Link>
      </section>
<section>
  <h2 className="text-2xl font-bold font-mono mb-4">Closing Reflection</h2>
  <p className="mb-2">
    Working on the Adiraku case taught me the importance of validating assumptions with qualitative insights before jumping into solutions. It was a foundational exercise that challenged me to balance empathy, structure, and clarity.
  </p>
  <p className="mb-2">
    If I could improve one thing, it would be integrating more quantitative user behavior data to back up the qualitative findings—something I explored further in my next project.
  </p>
  <Link
    href="/projects/amazon-analysis"
    target="_blank"
    className="inline-block mt-4 px-4 py-2 border border-black font-mono text-sm hover:bg-black hover:text-white transition"
  >
    → View Related Bootcamp Project: Amazon Sales Data Analyst Case
  </Link>
</section>
  <section id="contact" className="mt-32 px-6 py-24 border-t border-black w-full bg-white">
  <div className="max-w-4xl mx-auto text-center space-y-10">
    <h2 className="text-5xl font-bold uppercase font-mono tracking-widest">
      Get In Touch
    </h2>

    <p className="text-xl font-sans text-gray-700 max-w-2xl mx-auto">
      Whether you&apos;re interested in collaborating, hiring, or just saying hello — I&apos;m always open to a great conversation.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 font-mono text-lg justify-items-center">
      <a href="mailto:rifqirafialdy@gmail.com" className="flex items-center gap-4 hover:underline">
        <span className="text-2xl">📧</span>
        <span>rifqirafialdy@gmail.com</span>
      </a>

      <a href="https://wa.me/6285121085055" target="_blank" className="flex items-center gap-4 hover:underline">
        <span className="text-2xl">💬</span>
        <span>+62 851-2108-5055</span>
      </a>

      <a href="https://www.linkedin.com/in/rifqirafialdy/" target="_blank" className="flex items-center gap-4 hover:underline">
        <span className="text-2xl">🔗</span>
        <span>linkedin.com/in/rifqirafialdy</span>
      </a>

      <a href="https://github.com/rifqirafialdy" target="_blank" className="flex items-center gap-4 hover:underline">
        <span className="text-2xl">💻</span>
        <span>github.com/rifqirafialdy</span>
      </a>
    </div>

    <p className="text-sm text-gray-500 mt-10 font-mono">
      Made with ☕ and curiosity — 2025
    </p>
  </div>
</section>
    
    </main>
  );
}
