'use client';

// Reusing the components from our template
import { SectionTitle, BrutalistLink } from '../components';

export default function GroceReachPage() {
  return (
    // Main container with vertical padding
    <div className="max-w-3xl mx-auto py-32 px-4">

      {/* --- HEADER --- */}
      <header className="mb-16">
        <p className="font-mono text-sm uppercase text-gray-600 mb-2">Full-Stack Development / Product Management</p>
        <h1 className="text-5xl md:text-6xl font-bold font-display leading-tight">GroceReach E-commerce App</h1>
      </header>

      {/* --- CONTENT ARTICLE --- */}
      <article className="text-lg leading-relaxed text-gray-800 space-y-4">
        
        <SectionTitle>Overview</SectionTitle>
        <p>
          GroceReach is a full-stack, location-aware e-commerce application for grocery shopping. The app's core feature is its ability to connect users to the nearest physical store, displaying relevant products and promotions to provide a personalized shopping experience. This was a group project where I was responsible for several key modules.
        </p>

        <SectionTitle>My Key Contributions</SectionTitle>
        <ul className="list-disc pl-5 space-y-3">
            <li>
                <strong>Homepage & Location-Based Experience:</strong> Developed the landing page and the logic to request and utilize user location to fetch data from the nearest store.
            </li>
            <li>
                <strong>User Authentication:</strong> Built the complete auth system, including registration, login (email & social), email verification, and password reset flows.
            </li>
            <li>
                <strong>Address & Shipping Management:</strong> Implemented features for users to manage multiple addresses and integrated an external API (RajaOngkir) to calculate shipping costs.
            </li>
            <li>
                <strong>Store Management (Admin):</strong> Created the backend and UI for Super Admins to manage store locations and assign store-specific managers.
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
              <li><strong>Security:</strong> Spring Security (JWT)</li>
              <li><strong>Deployment:</strong> Docker</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl font-display mb-3">Frontend</h3>
            <ul className="list-disc pl-5 text-base space-y-2">
              <li><strong>Framework:</strong> Next.js</li>
              <li><strong>Language:</strong> TypeScript</li>
              <li><strong>State Management:</strong> Zustand</li>
              <li><strong>Styling:</strong> Tailwind CSS</li>
            </ul>
          </div>
        </div>
        
        <SectionTitle>Source Code</SectionTitle>
        <div className="flex flex-wrap gap-4">
            <BrutalistLink href="https://github.com/rifqirafialdy/grocery-pwdk-fe">
            → View Frontend on GitHub
            </BrutalistLink>
            <BrutalistLink href="https://github.com/rifqirafialdy/grocery-pwdk-be">
            → View Backend on GitHub
            </BrutalistLink>
        </div>
        
      </article>
    </div>
  );
}