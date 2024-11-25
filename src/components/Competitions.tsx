import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const achievements = [
  {
    title: '1st Prize in Ideathon',
    organization: 'Gobi Arts and Science College',
    description: 'Won first place for innovative solution in college-wide ideathon.',
  },
  {
    title: '2nd Place in Hack4Impact',
    organization: 'Inter-college competition',
    description: 'Developed sustainable solution for community challenge.',
  },
  {
    title: 'KIT Hackathon for Women',
    organization: 'KIT',
    description: 'Participated and showcased technical skills in women-focused hackathon.',
  },
  {
    title: 'Drone Manufacturing Course',
    organization: 'PMKVY, NSDC',
    description: 'Completed comprehensive course in drone assembly and manufacturing.',
  },
  {
    title: '3rd Place in Coding Contest',
    organization: 'College Technical Festival',
    description: 'Demonstrated problem-solving skills in competitive programming.',
  },
  {
    title: 'National Level Innovators Contest',
    organization: 'Virtual Hackathon',
    description: 'Participated in nationwide innovation challenge.',
  },
];

export function Competitions() {
  return (
    <section id="achievements" className="min-h-screen flex items-center justify-center py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <Trophy className="w-8 h-8" />
            Competitions & Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-purple-300 mb-2">{achievement.organization}</p>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}