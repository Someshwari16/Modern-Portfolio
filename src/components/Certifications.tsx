import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  {
    title: 'Fundamentals of Web Development',
    issuer: 'Great Learning',
    date: '2023',
  },
  {
    title: 'PMKVY Certificate',
    issuer: 'NSDC',
    date: '2023',
  },
  {
    title: 'Python Basics',
    issuer: 'Digilabs',
    date: '2022',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <Award className="w-8 h-8" />
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-purple-300 mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm">{cert.date}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}