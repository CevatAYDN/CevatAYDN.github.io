import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  type: 'degree' | 'course';
}

const educations: EducationItem[] = [
  {
    school: 'Anadolu Üniversitesi',
    degree: 'Yönetim Bilgi Sistemleri',
    period: '2018 – 2022',
    type: 'degree',
  },
  {
    school: 'Afyon Kocatepe Üniversitesi',
    degree: 'Malzeme Bilimi ve Mühendisliği',
    period: '2011 – 2015',
    type: 'degree',
  },
  {
    school: 'İstanbul Ayvansaray Üniversitesi',
    degree: 'Bilgisayar Yazılımı Mühendisliği (Kurs)',
    period: '2017',
    type: 'course',
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-accent-cyan" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Eğitim</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl p-6 hover:border-accent-cyan/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                  {edu.type === 'degree' ? (
                    <GraduationCap className="w-5 h-5 text-accent-cyan" />
                  ) : (
                    <BookOpen className="w-5 h-5 text-accent-cyan" />
                  )}
                </div>
                <span className="text-xs text-text-muted bg-bg-secondary px-2 py-1 rounded-full">
                  {edu.period}
                </span>
              </div>

              <h3 className="font-semibold text-text-primary mb-1">{edu.school}</h3>
              <p className="text-sm text-text-secondary">{edu.degree}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
