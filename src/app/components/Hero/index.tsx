'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const tools = [
  { name: "Java", src: "/logos/java.webp" },
  { name: "Spring Boot", src: "/logos/spring.png" },
  { name: "Next.js", src: "/logos/next.png" },
  { name: "PostgreSQL", src: "/logos/postgress.jpg" },
  { name: "Python", src: "/logos/python.jpg" },
  { name: "Tailwind CSS", src: "/logos/tailwind-css.png" },
  { name: "Figma", src: "/logos/figma.jpg" },
  { name: "Jira", src: "/logos/jira.jpg" },
  { name: "Looker Studio", src: "/logos/looker-studio.png" },
  { name: "Miro", src: "/logos/miro.jpg" },
  { name: "Redis", src: "/logos/redis.png" },
  { name: "Visily", src: "/logos/visily.jpeg" },
];


const Hero = () => {
  return (
    <section id="home" className="bg-background relative h-screen overflow-hidden">
      
      <div className="container mx-auto px-6 h-full flex flex-col justify-center text-left relative">
        
        {/* Main Heading with Animation */}
        <motion.h1 
          className="font-display text-8xl md:text-9xl lg:text-[10rem] font-bold text-text leading-none z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Rifqi Rafialdy
        </motion.h1>

        {/* New Boxed Sub-heading with Animation */}
        <motion.div 
          className="mt-6 border-y-2 border-text py-4 self-start"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="font-display text-2xl md:text-3xl font-bold text-text tracking-widest uppercase">
            Product Manager & Full Stack Developer
          </p>
        </motion.div>
        
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
            <a href="#experience" className="flex flex-col items-center">
                <span className="text-sm font-medium tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-text mt-2"></div>
            </a>
        </div>
      </div>

      {/* INFINITELY SCROLLING BANNER */}
      <div className="absolute bottom-0 left-0 w-full bg-background border-t-2 border-b-2 border-text py-4 overflow-hidden">
          <motion.div
              className="flex items-center whitespace-nowrap"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                  ease: 'linear',
                  duration: 40,
                  repeat: Infinity,
              }}
          >
              {[...tools, ...tools].map((tool, index) => (
                <div key={`${tool.name}-${index}`} className="mx-8 flex-shrink-0">
                    <Image
                        src={tool.src}
                        alt={`${tool.name} logo`}
                        width={100}
                        height={40}
                        className="h-10 w-auto object-contain"
                        unoptimized
                    />
                </div>
              ))}
          </motion.div>
      </div>

    </section>
  );
};

export default Hero;