import { motion } from 'framer-motion';
import { Smartphone, ExternalLink, Box } from 'lucide-react';
import { apps } from '../data/apps';

export default function Apps() {
  return (
    <section id="apps" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
            <Smartphone className="w-5 h-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Uygulamalarım</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {apps.map((app, index) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col h-full hover:border-accent-blue/30 transition-all group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="relative">
                  <div className="absolute -inset-2 bg-accent-blue/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img
                    src={app.icon}
                    alt={app.title}
                    className="relative w-16 h-16 rounded-2xl object-cover shadow-2xl"
                    onError={(e) => {
                       (e.target as HTMLImageElement).src = 'https://via.placeholder.com/64';
                    }}
                  />
                </div>
                <div className="flex gap-2">
                  <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-bg-secondary text-accent-blue border border-accent-blue/20">
                    {app.category.toUpperCase()}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors">
                {app.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-6 flex-grow">
                {app.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {app.technologies.map((tech) => (
                  <span key={tech} className="text-[10px] text-text-muted px-2 py-1 rounded-md bg-bg-primary border border-border">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-border">
                {app.links.playStore && (
                  <a
                    href={app.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-medium text-text-primary hover:text-accent-blue transition-colors"
                  >
                    <Box className="w-4 h-4" />
                    Play Store
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
