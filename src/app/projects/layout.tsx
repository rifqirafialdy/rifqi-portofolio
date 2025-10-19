import Link from 'next/link';
import Cursor from '../components/Cursor';// Make sure this path is correct

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-text font-sans min-h-screen">
      <Cursor />
      <header className="fixed top-6 left-6 z-50">
        <Link 
          href="/#projects"
          className="font-mono text-sm font-bold border-2 border-text bg-background py-2 px-4 shadow-[4px_4px_0px_#1a1a1a] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          ← Back to All Projects
        </Link>
      </header>
      {/* The 'key' prop on main is a trick to force a re-render and reset scroll on navigation */}
      <main key={Date.now()} className="max-w-4xl mx-auto px-6 py-24">
        {children}
      </main>
    </div>
  );
}