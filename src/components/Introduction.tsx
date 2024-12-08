import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Atom, Database, FileCode, Braces, Globe, Laptop } from 'lucide-react';


import p0Image from './images/p0.png';

const techIcons = [
  { name: 'React', Icon: Atom, color: '#61DAFB', rotate: 0 },
  { name: 'Node.js', Icon: Braces, color: '#339933', rotate: 60 },
  { name: 'JavaScript', Icon: FileCode, color: '#F7DF1E', rotate: 120 },
  { name: 'TypeScript', Icon: Globe, color: '#3178C6', rotate: 180 },
  { name: 'MongoDB', Icon: Database, color: '#47A248', rotate: 240 },
  { name: 'Python', Icon: Laptop, color: '#3776AB', rotate: 300 },
];

export function Introduction() {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-slate-900">
      {/* Background stars */}
      <div className="absolute inset-0 stars"></div>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Tech stack circle with profile image */}
        <div className="relative mb-32"> {/* Increased margin bottom */}
          {/* Tech icons */}
          <div className="absolute left-1/2 top-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2">
            {techIcons.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0, rotate: tech.rotate }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  rotate: [tech.rotate, tech.rotate + 360]
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "linear",
                  rotate: {
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                className="absolute left-1/2 top-1/2"
                style={{
                  transformOrigin: '0 180px'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="w-16 h-16 rounded-xl flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ backgroundColor: tech.color }}
                >
                  <tech.Icon className="w-8 h-8 text-white" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          
          <motion.div
            initial={{ scale: 0, y: 0 }}
            animate={{ scale: 1, y: 40 }} 
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative z-20 w-48 h-48 rounded-full overflow-hidden ring-4 ring-purple-500 ring-offset-4 ring-offset-purple-900 shadow-2xl"
          >
            <img
              src={p0Image} 
              alt="R.Someshwari"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center relative z-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent"
          >
            R.Someshwari
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="text-3xl md:text-4xl text-purple-300 mb-8"
          >
            Frontend Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
            className="max-w-2xl mx-auto text-xl text-gray-300 leading-relaxed"
          >
            Crafting beautiful and performant web experiences with modern JavaScript.
            Specializing in React and cutting-edge frontend technologies.
          </motion.p>
        </motion.div>

      
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-purple-300" />
        </motion.div>
      </div>
    </section>
  );
}
