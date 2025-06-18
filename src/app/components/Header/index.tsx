'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-center px-6 py-4 border-b border-black text-sm uppercase tracking-wide font-mono">
  

      <nav className="flex gap-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </nav>
    </header>
  );
}
