import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <BookOpen className="w-8 h-8" />
            Education
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-semibold mb-4">Jansons Institute of Technology</h3>
            <p className="text-purple-300 mb-4">2022 - 2026</p>
            <p className="text-gray-300">
              Specialization: Electronics and Communication Engineering
            </p>
            <h3 className="text-2xl font-semibold mb-4">Narayana Junior College</h3>
            <p className="text-purple-300 mb-4">2020 - 2022</p>
            <p className="text-gray-300">
              Stream: MPC (Mathematics, Physics, Chemistry)
            </p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Academic Excellence with 91% in my 12th standard.</li>

              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}