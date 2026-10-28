import { motion } from 'framer-motion';
import { Smartphone, ExternalLink, Box, Gamepad2 } from 'lucide-react';
import { apps, developerPage } from '../data/apps';

const groups = [
  { category: 'Game', label: 'Oyunlar', stack: 'Unity', Icon: Gamepad2 },
  { category: 'App', label: 'Uygulamalar', stack: 'Flutter', Icon: Smartphone },
] as const;

const legalLabels = {
  privacy: 'Gizlilik Politikası',
  terms: 'Kullanım Koşulları',
  notices: 'Lisanslar',
  deleteAccount: 'Hesap Silme',
} as const;

export default function Apps() {
  return (
    <section id="apps" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
              <Smartphone className="w-5 h-5 text-accent-blue" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Oyunlar & Uygulamalar</h2>
          </div>
          <p className="text-text-secondary">
            Google Play'de{' '}
            <a
              href={developerPage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:underline"
            >
              Fifty Three Studio
            </a>{' '}
            adıyla yayınladığım projeler.
          </p>
        </motion.div>

        {groups.map(({ category, label, stack, Icon }) => (
          <div key={category} className="mb-12 last:mb-0">
            <h3 className="flex items-center gap-2 text-lg font-semibold mb-6">
              <Icon className="w-5 h-5 text-accent-purple" />
              {label}
              <span className="text-sm font-normal text-text-muted">· {stack}</span>
            </h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {apps.filter((app) => app.category === category).map((app, index) => (
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
                      />
                    </div>
                    <span className="text-[10px] font-bold px-2 py-1 rounded-md bg-bg-secondary text-accent-blue border border-accent-blue/20">
                      {app.genre.toLocaleUpperCase('tr')}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold mb-2 group-hover:text-accent-blue transition-colors">
                    {app.title}
                  </h4>

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

                  <div className="mt-auto pt-4 border-t border-border space-y-3">
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
                    <div className="flex flex-wrap gap-x-4 gap-y-1">
                      {(Object.keys(legalLabels) as (keyof typeof legalLabels)[]).map((key) =>
                        app.links[key] && (
                          <a
                            key={key}
                            href={app.links[key]}
                            className="text-xs text-text-muted hover:text-text-primary underline-offset-2 hover:underline transition-colors"
                          >
                            {legalLabels[key]}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
