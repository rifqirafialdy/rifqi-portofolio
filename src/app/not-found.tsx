'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 6000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-black bg-white font-mono text-center">
      <motion.h1
        className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        404
        <span className="absolute left-1 top-1 text-pink-500 -z-10 select-none">404</span>
        <span className="absolute left-2 top-2 text-blue-500 -z-20 select-none">404</span>
      </motion.h1>

      <p className="mt-4 text-xl font-bold uppercase">You broke it.</p>

      <p className="mt-6 text-sm md:text-base text-gray-800">
        This page is still under construction.<br />
        Or maybe it ran away. Either way, you're being dragged back home.
      </p>

      <div className="mt-10 text-xs uppercase tracking-widest text-gray-500">
        Redirecting in 4...
      </div>

      <Link
        href="/"
        className="mt-6 px-6 py-2 border border-black hover:bg-black hover:text-white transition font-bold text-sm"
      >
        No patience? Click here.
      </Link>
    </main>
  );
}
