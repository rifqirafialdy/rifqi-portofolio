'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Product Manager Intern",
    company: "Pikiran Rakyat Media Network",
    date: "Aug 2025 - Present",
    description: "Supported event product development, coordinated with cross-functional teams to align roadmaps, and drafted PRDs, OKRs, and post-event reports to improve attendee experience."
  },
  {
    role: "Associate Producer",
    company: "Indie Game Project (Part-time)",
    date: "Aug 2025 - Present",
    description: "Managed project scope, task allocation, and sprint milestones for a JRPG-inspired game using an Agile-lite workflow."
  },
  {
    role: "International Work Experience",
    company: "Various Venues, Australia",
    date: "Nov 2023 - Feb 2025",
    description: "Developed adaptability and time management in high-pressure environments, including luxury resorts and cold-chain logistics."
  },
  {
    role: "Legal Staff",
    company: "Notary Dian Wardianto",
    date: "Sep 2022 - Sep 2023",
    description: "Processed over 300+ legal documents with 100% compliance, gaining solid skills in stakeholder communication and document management."
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

const Experience = () => {
  return (
    <section id="experience" className="bg-background text-text py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-16">
          
          {/* Left Column: Title */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-5xl md:text-6xl font-bold sticky top-24">
              Work Experience
            </h2>
          </motion.div>

          {/* Right Column: Timeline */}
          <motion.div
            className="md:col-span-2 relative pl-6 border-l-2 border-text"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="mb-10 relative"
                variants={itemVariants}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[1.65rem] top-1.5 w-6 h-6 bg-background border-2 border-text rounded-full"></div>

                <p className="font-sans text-xs text-gray-500 uppercase tracking-wider">{exp.date}</p>
                <h3 className="font-display text-2xl font-bold mt-1">{exp.role}</h3>
                <p className="text-lg text-accent font-semibold">{exp.company}</p>
                <p className="mt-2 text-gray-700 text-base max-w-prose">{exp.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;