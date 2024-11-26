import { motion } from 'framer-motion';
import { Rocket, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Smart Moringa Cultivation',
    description: 'IoT-based intelligent system for moringa cultivation with real-time monitoring and automated care instructions.',
    image: '/images/Smart-Moringa.png',  // Image in the public/images folder
    link: 'https://docs.google.com/presentation/d/1DgHDI9mfbn8b59vSlAWx49EqAjr-tIH4/edit?usp=sharing&ouid=116780384250069847335&rtpof=true&sd=true',
  },
  {
    title: 'Planexplore',
    description: 'Digital platform connecting tourists with local guides, enhancing travel experiences through personalized itineraries.',
    image: '/images/planexplore.png',  // Image in the public/images folder
    link: 'https://docs.google.com/presentation/d/1PoQNLbEvLrbFo7Am4SxLhtSieCn8vbAn/edit?usp=sharing&ouid=116780384250069847335&rtpof=true&sd=truez',
  },
  {
    title: 'Autonomous Drone',
    description: 'Development of an autonomous drone system for emergency and rescue operations with AI-powered navigation.',
    image: '/images/autonomous-drone.png',  // Image in the public/images folder
    link: 'https://docs.google.com/document/d/10cvw-u-LMHUtQbGLA4w_AhZvqCoidCzk/edit?usp=sharing&ouid=116780384250069847335&rtpof=true&sd=true',
  },
  {
    title: 'Post to Amazon Listings',
    description: 'Application that converts social media content into optimized Amazon product listings using AI and automation.',
    image: '/images/amazon-listing.png',  // Image in the public/images folder
    link: 'https://github.com/Someshwari16/New_Listing',
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center gap-4">
            <Rocket className="w-8 h-8" />
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img  
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.title}
                    </a>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
