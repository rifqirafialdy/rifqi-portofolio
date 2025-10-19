'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Import the Link component

// Reusable brutalist-style link button
const BrutalistLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block mt-6 px-4 py-2 border-2 border-text bg-background font-mono text-sm font-bold shadow-[4px_4px_0px_#1a1a1a] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
  >
    {children}
  </Link>
);


const skills = [
  "Product Strategy", "Full-Stack Development", "Operations Planning", 
  "Agile/Scrum", "Leadership", "Stakeholder Communication", 
  "Java & Spring Boot", "Next.js & TypeScript",
];

const bioText = "My journey began in Law, honing structured thinking and complex problem-solving. This led me to diverse roles in operations and logistics, where I mastered precision and leading cross-functional teams. Driven by a passion for building solutions, I pivoted into technology, completing intensive bootcamps in both Full-Stack Engineering and Product Management. Today, I blend this unique background to manage digital products from concept to launch.";

const About = () => {
  return (
    <section id="about" className="bg-background text-text relative">
      <div className="container mx-auto px-6 w-full h-full flex flex-col justify-center">
        
        {/* Top Brutalist Border */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-4 bg-text"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* Left Column: Image with Reveal Animation */}
          <motion.div 
            className="relative w-full h-80 md:h-96 overflow-hidden shadow-[8px_8px_0px_#1a1a1a] border-2 border-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="absolute inset-0 bg-accent z-10"
              initial={{ scaleY: 1 }}
              whileInView={{ scaleY: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1, ease: [0.87, 0, 0.13, 1], delay: 0.4 }}
              style={{ transformOrigin: 'top' }}
            />
            <Image
              src="/profile.jpg.png"
              alt="Rifqi Rafialdy"
              layout="fill"
              objectFit="cover"
              className="grayscale"
            />
          </motion.div>

          {/* Right Column: Text and Skills */}
          <div className="flex flex-col justify-center">
            <h2 className="font-display text-6xl md:text-7xl font-bold mb-6">
              ABOUT
            </h2>
            <motion.p 
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ staggerChildren: 0.02, delayChildren: 0.5 }}
            >
              {bioText.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.02 }}
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  className="bg-background border-2 border-text py-2 px-4 font-semibold shadow-[4px_4px_0px_#1a1a1a] transition-all hover:shadow-none hover:translate-x-1 hover:translate-y-1"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
            {/* --- ADD THIS BUTTON --- */}
            <div className="mt-8">
                <BrutalistLink href="/Rifqi-Rafialdy-Dwijaya_Resume.docx (1).pdf">
                    → Download Full Resume
                </BrutalistLink>
            </div>
          </div>
        </div>

        {/* Bottom Brutalist Border */}
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-4 bg-text"
          initial={{ width: 0 }}
          whileInView={{ width: '100%' }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
    </section>
  );
};

export default About;