'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

// A reusable component for animated sections
export const Section = ({ children }: { children: React.ReactNode }) => (
  <motion.section 
    className="py-10 border-b-2 border-text"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);

// CORRECTED: Reusable brutalist-style link button with the shadow effect
export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-3xl font-bold font-display mt-12 mb-6 border-b-2 border-text pb-2">
    {children}
  </h2>
);

// Reusable brutalist-style link button
export const BrutalistLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-6 px-4 py-2 border-2 border-text bg-background font-mono text-sm font-bold shadow-[4px_4px_0px_#1a1a1a] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
  >
    {children}
  </Link>)