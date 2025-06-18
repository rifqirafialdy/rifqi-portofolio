'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/');
    }, 6000); // 4-second delay before redirect

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-black bg-white font-mono text-center">
      <h1 className="text-6xl font-black uppercase tracking-tighter leading-none">
        404
        <br />
        <span className="text-2xl mt-2 block">You broke it.</span>
      </h1>

      <p className="mt-6 text-base">
        This page does not exist. Or maybe it ran away.<br />
        Either way, you're being dragged back home.
      </p>

      <div className="mt-10 text-xs uppercase tracking-widest text-gray-600">
        Redirecting in 4...
      </div>

      <a
        href="/"
        className="mt-6 px-6 py-2 border border-black hover:bg-black hover:text-white transition font-bold"
      >
        No patience? Click here.
      </a>
    </main>
  );
}
