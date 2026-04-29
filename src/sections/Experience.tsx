import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, ChevronDown } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  details?: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Gameflex',
    role: 'Game Developer',
    period: 'Ağustos 2022 – Günümüz',
    details: [
      'Unity ile oyun geliştirme süreçlerinde aktif rol alma',
      'Oyun mekanikleri geliştirme ve iyileştirme',
      'Performans optimizasyonu',
    ],
  },
  {
    company: 'Gameguru',
    role: 'Game Developer',
    period: 'Ocak 2021 – Temmuz 2022',
    location: 'İstanbul',
    details: [
      'Unity tabanlı projelerde geliştirme',
      'Oyun içi sistemler ve mekanikler oluşturma',
    ],
  },
  {
    company: 'Gameflex',
    role: 'Game Developer',
    period: 'Eylül 2019 – Ocak 2021',
    location: 'İstanbul',
  },
  {
    company: 'YCP Bilgi Teknolojileri',
    role: 'Game Developer',
    period: 'Ocak 2018 – Eylül 2019',
    location: 'İstanbul',
  },
  {
    company: 'Softreme',
    role: 'Yazılım Uzmanı',
    period: 'Ocak 2018 – Eylül 2019',
  },
  {
    company: 'ABO Valve',
    role: 'Sales Manager',
    period: 'Şubat 2017 – Mayıs 2017',
  },
  {
    company: 'Emek Döküm',
    role: 'Stajyer',
    period: 'Temmuz 2014 – Ağustos 2014',
    details: ['Proses planlama', 'Kalite kontrol'],
  },
];

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  const [expanded, setExpanded] = useState(index === 0);
  const hasDetails = item.details && item.details.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12 pb-8 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-bg-primary border-2 border-accent-purple z-10" />

      <div
        className={`glass-card rounded-xl p-5 md:p-6 transition-all duration-300 ${
          hasDetails ? 'cursor-pointer hover:border-accent-purple/40' : ''
        }`}
        onClick={() => hasDetails && setExpanded(!expanded)}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{item.company}</h3>
            <p className="text-accent-purple font-medium">{item.role}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-text-muted bg-bg-secondary px-3 py-1 rounded-full">
              {item.period}
            </span>
            {hasDetails && (
              <motion.div
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-text-muted" />
              </motion.div>
            )}
          </div>
        </div>

        {item.location && (
          <p className="text-sm text-text-muted mb-2">{item.location}</p>
        )}

        {hasDetails && (
          <motion.div
            initial={false}
            animate={{
              height: expanded ? 'auto' : 0,
              opacity: expanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <ul className="mt-3 space-y-2">
              {item.details!.map((detail, i) => (
                <li key={i} className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 flex-shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-accent-blue" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Deneyim</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-0 w-0.5 timeline-line rounded-full" />

          {experiences.map((item, index) => (
            <ExperienceCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
