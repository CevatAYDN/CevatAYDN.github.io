import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe } from 'lucide-react';

interface Language {
  name: string;
  level: string;
  proficiency: number;
}

const languages: Language[] = [
  { name: 'Türkçe', level: 'Ana Dil', proficiency: 100 },
  { name: 'İngilizce', level: 'Orta Seviye', proficiency: 60 },
];

export default function Languages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="languages" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
            <Globe className="w-5 h-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Diller</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-text-primary">{lang.name}</h3>
                <span className="text-sm text-text-muted bg-bg-secondary px-3 py-1 rounded-full">
                  {lang.level}
                </span>
              </div>

              <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-accent-purple to-accent-blue"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
