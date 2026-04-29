import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Wrench, Zap, Monitor, FlaskConical, Layers, HardDrive } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  { name: 'Unity (Aktif Kullanım)', level: 95, icon: <Zap className="w-4 h-4" />, color: 'bg-accent-purple' },
  { name: 'Oyun Geliştirme', level: 90, icon: <Monitor className="w-4 h-4" />, color: 'bg-accent-blue' },
  { name: 'Yazılım Geliştirme', level: 85, icon: <Wrench className="w-4 h-4" />, color: 'bg-accent-cyan' },
  { name: 'Ar-Ge', level: 80, icon: <FlaskConical className="w-4 h-4" />, color: 'bg-purple-400' },
  { name: 'Bilgisayar Donanımı', level: 75, icon: <HardDrive className="w-4 h-4" />, color: 'bg-blue-400' },
  { name: 'Kompozit Malzemeler', level: 60, icon: <Layers className="w-4 h-4" />, color: 'bg-cyan-400' },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-10 h-10 rounded-lg bg-accent-purple/20 flex items-center justify-center">
            <Wrench className="w-5 h-5 text-accent-purple" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Teknolojiler & Yetenekler</h2>
        </motion.div>

        <div className="grid gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="glass-card rounded-xl p-5"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-bg-secondary flex items-center justify-center text-accent-purple">
                    {skill.icon}
                  </div>
                  <span className="font-medium text-text-primary">{skill.name}</span>
                </div>
                <span className="text-sm text-text-muted font-mono">{skill.level}%</span>
              </div>

              <div className="h-2 bg-bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.08, ease: 'easeOut' }}
                  className={`h-full rounded-full ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
