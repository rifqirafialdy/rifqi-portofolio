'use client';

// Reusing the components from our template
import { SectionTitle, BrutalistLink } from '../components';

export default function InvoiceManagementPage() {
  return (
    // Main container with vertical padding
    <div className="max-w-3xl mx-auto py-32 px-4">

      {/* --- HEADER --- */}
      <header className="mb-16">
        <p className="font-mono text-sm uppercase text-gray-600 mb-2">Full-Stack Development</p>
        <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">Invoice Management System</h1>
      </header>

      {/* --- CONTENT ARTICLE --- */}
      <article className="text-lg leading-relaxed text-gray-800 space-y-4">
        
        <SectionTitle>Overview</SectionTitle>
        <p>
          This is a full-stack web application I built to streamline the invoicing process for small businesses and freelancers. The platform provides a user-friendly interface for managing clients, products, and invoices, with a strong focus on ease of use and automation.
        </p>

        <SectionTitle>Key Features</SectionTitle>
        <ul className="list-disc pl-5 space-y-3">
            <li>
                <strong>Authentication and Security:</strong> A robust system with user registration, login, JWT-based session management, and secure cookie handling.
            </li>
            <li>
                <strong>Comprehensive Dashboard:</strong> An at-a-glance overview of total revenue, pending payments, and recent activity.
            </li>
            <li>
                <strong>Client & Product Management:</strong> Full CRUD functionality for managing clients and services.
            </li>
            <li>
                <strong>Recurring Invoices:</strong> An automated system to generate invoices at user-defined intervals (weekly, monthly, etc.).
            </li>
            <li>
                <strong>Public Invoice Pages:</strong> Secure, shareable links for clients to view invoices, confirm payments, or request cancellations.
            </li>
        </ul>

        <SectionTitle>Technical Stack</SectionTitle>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          <div>
            <h3 className="font-bold text-xl font-display mb-3">Backend</h3>
            <ul className="list-disc pl-5 text-base space-y-2">
              <li><strong>Framework:</strong> Spring Boot</li>
              <li><strong>Language:</strong> Java</li>
              <li><strong>Database:</strong> PostgreSQL</li>
              <li><strong>Caching:</strong> Redis</li>
              <li><strong>Security:</strong> Spring Security with JWT</li>
              <li><strong>Deployment:</strong> Docker & Docker Compose</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl font-display mb-3">Frontend</h3>
            <ul className="list-disc pl-5 text-base space-y-2">
              <li><strong>Framework:</strong> Next.js</li>
              <li><strong>Language:</strong> TypeScript</li>
              <li><strong>State Management:</strong> Zustand</li>
              <li><strong>Styling:</strong> Tailwind CSS</li>
              <li><strong>UI Components:</strong> shadcn/ui</li>
            </ul>
          </div>
        </div>
        
        <SectionTitle>Source Code</SectionTitle>
        <div className="flex flex-wrap gap-4">
            <BrutalistLink href="https://github.com/rifqirafialdy/invoice-app-fe">
            → View Frontend on GitHub
            </BrutalistLink>
            <BrutalistLink href="https://github.com/rifqirafialdy/invoice-app-be">
            → View Backend on GitHub
            </BrutalistLink>
        </div>
        
      </article>
    </div>
  );
}