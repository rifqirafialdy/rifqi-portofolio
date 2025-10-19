'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactLink = ({ href, title, detail }: { href: string, title: string, detail: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="block group"
  >
    <div className="border-t-2 border-text py-6 transition-colors duration-300 group-hover:bg-gray-200">
      <p className="font-mono text-sm uppercase text-gray-500">{title}</p>
      <p className="font-display text-2xl md:text-3xl font-bold text-text mt-1 group-hover:text-accent transition-colors duration-300">
        {detail}
      </p>
    </div>
  </a>
);

const Contact = () => {
  return (
    <section id="contact" className="bg-background text-text">
      <div className="container mx-auto px-6 w-full h-full flex flex-col justify-center">
        
        <motion.h2 
          className="font-display text-5xl md:text-7xl font-bold mb-8"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Get In Touch
        </motion.h2>

        <motion.p 
          className="text-lg md:text-xl text-gray-700 max-w-2xl mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team.
        </motion.p>

        <motion.div 
          className="w-full max-w-3xl border-b-2 border-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactLink 
            href="mailto:rifqirafialdy@gmail.com"
            title="Email"
            detail="rifqirafialdy@gmail.com"
          />
          <ContactLink 
            href="https://www.linkedin.com/in/rifqi-rafialdy-dwijaya/"
            title="LinkedIn"
            detail="linkedin.com/in/rifqirafialdy"
          />
          <ContactLink 
            href="https://wa.me/6285121085055"
            title="Phone"
            detail="+62 851 2108 5055"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;