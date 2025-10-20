'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    number: "01",
    title: "BankOne Case Study",
    category: "Product Management",
    description: "Pivoted a failing AI Advisor feature into a successful 'Smart Daily Financial Assistant'. Used data analysis to diagnose an activation failure and redefine the product strategy.",
    tags: ["Data Analysis", "Product Pivot", "User Research", "OKRs"],
    link: "/projects/bankone" 
  },
  {
    number: "02",
    title: "Adiraku Help Center Revamp",
    category: "Product Management",
    description: "A UX case study focused on identifying user frustrations in a financial app's help center and designing a full PRD for a user-centric solution.",
    tags: ["UX Research", "Problem Validation", "PRD", "Case Study"],
    link: "/projects/adiraku"
  },
  {
    number: "03",
    title: "Rasa Nusa [PRMN Intern]",
    category: "Product Management",
    description: "Transformed a high-level concept for a cultural food festival into a viable product, conducting market research and leading the 'build vs. buy' analysis.",
    tags: ["Product Strategy", "Market Research", "Roadmapping"],
    link: "/projects/rasa-nusa"
  },
  {
    number: "04",
    title: "Amazon Sales Data Analysis",
    category: "Software Development",
    description: "Cleaned and normalized raw sales data using Python (Pandas) and built an ERD. Collaborated on creating dashboards in Looker Studio to uncover key business insights.",
    tags: ["Data Analysis", "Python", "Looker Studio", "ETL"],
    link: "/projects/amazon-analysis"
  },
  {
    number: "05",
    title: "GroceReach E-commerce",
    category: "Software Development",
    description: "A full-stack, location-aware grocery platform. My role focused on developing the homepage, user authentication, and address management features.",
    tags: ["Next.js", "TypeScript", "Spring Boot", "Auth"],
    link: "/projects/groce-reach"
  },
  {
    number: "06",
    title: "Invoice Management System",
    category: "Software Development",
    description: "A full-stack invoicing application for freelancers, featuring client management, recurring invoices, and a secure public payment portal.",
    tags: ["Full-Stack", "Java", "Spring Boot", "Next.js"],
    link: "/projects/invoice-management"
  },
  {
    number: "07",
    title: "JKT48 & Emotional Product Design",
    category: "Product Management",
    description: "A personal case study analyzing the fan economy and emotional product design through the lens of JKT48, focusing on loyalty, rituals, and narrative design.",
    tags: ["Product Design", "User Psychology", "Case Study"],
    link: "/projects/jkt48"
  }
];
const filters = ["All", "Product Management", "Software Development"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="bg-background text-text relative overflow-hidden">
      <div className="container mx-auto px-6 w-full h-full flex flex-col justify-center">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8">
          <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 md:mb-0">
            Featured Work
          </h2>
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-semibold py-2 px-4 border-2 border-text transition-colors duration-300
                  ${activeFilter === filter 
                    ? 'bg-text text-background' 
                    : 'bg-background text-text hover:bg-gray-200'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="flex gap-8 overflow-x-auto pb-8 scrollbar-hide"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.number}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="flex-shrink-0 w-[90vw] md:w-[450px] bg-background border-2 border-text p-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="font-display text-6xl text-gray-300">{project.number}</span>
                </div>
                <h3 className="font-display text-4xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-700 mb-6 h-24">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 text-text text-sm font-semibold px-3 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="group font-bold text-accent inline-flex items-center">
                  View Works
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;